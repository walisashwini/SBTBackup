package gw.sbt.pca.persistence

uses gw.pl.persistence.core.Bundle
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.util.Serializer
uses org.apache.commons.io.IOUtils
uses org.slf4j.LoggerFactory

class PersistenceManager {
  protected static function retrieveUpdate(sbtUpdateMetaData : SBTUpdateMetaData) : SBTUpdate {
    var storedUpdate = findUpdate(sbtUpdateMetaData)
    if (storedUpdate != null) {
      SBTUpdateCache.setStatus(sbtUpdateMetaData, storedUpdate.Status) // cache the status
      var sbtUpdate = Serializer.fromXML(new String(IOUtils.toByteArray(storedUpdate.Content.toInputStream()))) as SBTUpdate
      sbtUpdate.resetComparisonsByKey()
      return sbtUpdate
    }
    return null
  }

  protected static function getStatus(sbtUpdateMetaData: SBTUpdateMetaData): typekey.SBTUpdateStatus{
    var storedUpdate = findUpdate(sbtUpdateMetaData)
    if(storedUpdate != null){
      return storedUpdate.Status
    }
    return SBTUpdateStatus.TC_NOTSTARTED
  }


  protected static function saveUpdate(update: SBTUpdate, status : SBTUpdateStatus) {
    gw.transaction.Transaction.runWithNewBundle(\bundle -> {
      var impliedEligibleForRevert= (status== SBTUpdateStatus.TC_COMPLETE)

      if (impliedEligibleForRevert) {
        resetRevertableUpdates(bundle, update.MetaData.Line.Code)
      }

      var storedUpdate = findUpdate(update.MetaData)
      if(storedUpdate != null) {
        bundle.add(storedUpdate)
      } else {
        // create new entity
        storedUpdate = new AvailableUpdate()
        storedUpdate.Line = update.MetaData.Line.Code
        storedUpdate.Jurisdiction = typekey.Jurisdiction.get(update.MetaData.Jurisdiction)
        storedUpdate.EffectiveDate = update.MetaData.EffectiveDate
        storedUpdate.Version = update.MetaData.PackageVersion
        storedUpdate.Qualifier = update.MetaData.Qualifier
        storedUpdate.Adopted = update.MetaData.Adopted
      }

      storedUpdate.Status = status
      storedUpdate.EligibleForRevert = impliedEligibleForRevert

      // serialize the update structure
      update.resetComparisonsByKey()
      storedUpdate.Content = new Blob(Serializer.toXML(update).Bytes)
      bundle.commit()
    })
    SBTUpdateCache.setStatus(update.MetaData, status) // cache the status
  }

  static private function findUpdate(sbtUpdateMetaData: SBTUpdateMetaData) : AvailableUpdate {
    // find the entity
    var query = gw.api.database.Query.make(AvailableUpdate)
    // this query makes no comparision on EligibleForRevert
    query.compare(AvailableUpdate#Line, Equals, sbtUpdateMetaData.Line.Code)
        .compare(AvailableUpdate#Jurisdiction, Equals, typekey.Jurisdiction.get(sbtUpdateMetaData.Jurisdiction))
        .compare(AvailableUpdate#EffectiveDate, Equals, sbtUpdateMetaData.EffectiveDate)
        .compare(AvailableUpdate#Version, Equals, sbtUpdateMetaData.PackageVersion)
        .compare(AvailableUpdate#Qualifier, Equals, sbtUpdateMetaData.Qualifier)
        .compare(AvailableUpdate#Adopted, Equals, sbtUpdateMetaData.Adopted)
    return query.select().first()
  }

  static function findUpdates(lineCode : String, jurisdiction : String) : List<AvailableUpdate> {
    var query = gw.api.database.Query.make(AvailableUpdate)
    query.compare(AvailableUpdate#Line, Equals, lineCode)
        .compare(AvailableUpdate#Jurisdiction, Equals, typekey.Jurisdiction.get(jurisdiction))
    return query.select().toList()
  }

  static function findRevertableUpdate(lineCode : String, jurisdiction : String= null) : AvailableUpdate {
    var revertableUpdates= queryForRevertableUpdates(lineCode)

    if (revertableUpdates.Count> 1) {
      LoggerFactory.getLogger("PCA").error("Database has more than 1 revertable update records")
    }

    var revertableUpdate : AvailableUpdate = null
    if (jurisdiction!= null) {
      revertableUpdate= revertableUpdates.firstWhere(\ rupdate -> rupdate.Jurisdiction.Code== jurisdiction)
    } else {
      revertableUpdate= revertableUpdates.HasElements? revertableUpdates.first () : null
    }

    return revertableUpdate
  }

  static private function resetRevertableUpdates(bundle : Bundle, lineCode : String) {
    var revertableUpdates= queryForRevertableUpdates(lineCode)

    revertableUpdates.each (\ revertableUpdate -> {
      bundle.add(revertableUpdate)
      revertableUpdate.EligibleForRevert= false
    })
  }

  static private function queryForRevertableUpdates (lineCode : String) : List<AvailableUpdate> {
    var query = gw.api.database.Query.make(AvailableUpdate)
    query.compare(AvailableUpdate#Line, Equals, lineCode)
        .compare (AvailableUpdate#Status, Equals, SBTUpdateStatus.TC_COMPLETE)
        .compare (AvailableUpdate#EligibleForRevert, Equals, true)


    return query.select ().toList()
  }


  static function deleteUpdate(update: AvailableUpdate) {
    gw.transaction.Transaction.runWithNewBundle(\bundle -> {
      bundle.add(update).remove()
    })
  }

}