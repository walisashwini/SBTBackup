package gw.sbt.pca.persistence

uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.pca.repository.ContentRepository

uses java.util.Map

/**
 * This cache assumes the nature of the PCA user operations to be (almost) non-concurrent. Hence public operations here
 * are not atomic.
 */
class SBTUpdateCache {

  // This global cache (no multi-threading support) is needed to support singleton instances of SBTUpdate
  // required by the current architecture
  private static var _sbtMetaDataToUpdateMap :  Map<SBTUpdateMetaData, SBTUpdate> = {}

  // cache the status, sync with db read/write
  private static var _sbtMetaDataToUpdateStatusMap : Map<SBTUpdateMetaData, typekey.SBTUpdateStatus> = {}

  static function getStatus(sbtUpdateMetaData: SBTUpdateMetaData): typekey.SBTUpdateStatus {
    var status = _sbtMetaDataToUpdateStatusMap.get(sbtUpdateMetaData)
    if (status == null) {
      status = PersistenceManager.getStatus(sbtUpdateMetaData)
      setStatus(sbtUpdateMetaData, status)
    }
    return status
  }

  static function setStatus(sbtUpdateMetaData: SBTUpdateMetaData, status: typekey.SBTUpdateStatus) {
    _sbtMetaDataToUpdateStatusMap.put(sbtUpdateMetaData, status)
  }

  static function findOrCreateAndPersistSBTUpdate(sbtUpdateMetaData: SBTUpdateMetaData,
                                                  contentRepository: ContentRepository,
                                                  adoptionDate: Date) : SBTUpdate {
    var sbtUpdate = _sbtMetaDataToUpdateMap.get(sbtUpdateMetaData)

    if(sbtUpdate == null){
      sbtUpdate = PersistenceManager.retrieveUpdate(sbtUpdateMetaData)

      if(sbtUpdate == null){
        // Not in db, we get it from the repository, and use the adoption date to create the intent from the lookups
        sbtUpdate = contentRepository.getSBTUpdate(sbtUpdateMetaData, adoptionDate)
        PersistenceManager.saveUpdate(sbtUpdate, SBTUpdateStatus.TC_NOTSTARTED)
      }
      _sbtMetaDataToUpdateMap.put(sbtUpdateMetaData, sbtUpdate)
    }

    return sbtUpdate
  }

  static function persist(sbtUpdateMetaData : SBTUpdateMetaData, sbtUpdate : SBTUpdate, status : SBTUpdateStatus) {
    PersistenceManager.saveUpdate(sbtUpdate, status ?: SBTUpdateStatus.TC_NOTSTARTED)
    _sbtMetaDataToUpdateMap.put(sbtUpdateMetaData, sbtUpdate)
  }

  static function revertToStatus(sbtUpdateMetaData : SBTUpdateMetaData, status : SBTUpdateStatus) {
    var sbtUpdate= findSBTUpdate(sbtUpdateMetaData)

    if (sbtUpdate != null) {
      sbtUpdate.resetReports()
    }

    persist (sbtUpdateMetaData, sbtUpdate, status)
  }

  static function prepareCacheForEdit(sbtUpdateMetaData: SBTUpdateMetaData) {
    if(sbtUpdateMetaData != null) {
      evictSBTUpdateFromCache(sbtUpdateMetaData)
      promoteUnmodifiedSBTUpdate(sbtUpdateMetaData)
    }
  }

  static function findSBTUpdate(sbtUpdateMetaData : SBTUpdateMetaData) : SBTUpdate {
    var sbtUpdate = _sbtMetaDataToUpdateMap.get(sbtUpdateMetaData)

    if(sbtUpdate == null) {
      sbtUpdate = PersistenceManager.retrieveUpdate(sbtUpdateMetaData)
      if(sbtUpdate != null) {
        _sbtMetaDataToUpdateMap.put(sbtUpdateMetaData, sbtUpdate)
      }
    }

    return sbtUpdate
  }

  /**
   * The SBTUpdate instances in the cache should be evicted as soon as when each object is updated with user input.
   * However PCA only supports de-centralized fashion of updating decision and instructions currently, so the eviction
   * should be invoked whenever users are allowed to make changes - instead of when changes are actually happening.
   */
  static function evictSBTUpdateFromCache(sbtUpdateMetaData: SBTUpdateMetaData) {
    _sbtMetaDataToUpdateMap.remove(sbtUpdateMetaData)
    _sbtMetaDataToUpdateStatusMap.remove(sbtUpdateMetaData)
  }

  private static function promoteUnmodifiedSBTUpdate(sbtUpdateMetaData: SBTUpdateMetaData) {
    _sbtMetaDataToUpdateMap.put(sbtUpdateMetaData, PersistenceManager.retrieveUpdate(sbtUpdateMetaData))
  }
}