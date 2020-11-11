package gw.sbt.model.builder

uses java.util.Map

uses gw.sbt.config.TargetConfiguration
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.pca.analysis.EffectiveAvailabilityHelper
uses gw.sbt.pca.persistence.SBTUpdateCache
uses gw.sbt.util.ProductCodeToAbbreviationMapper

uses java.util.Set

class CurrentSBTUpdateBuilder {
  /**
   * Marking if we need to re-construct a SBTUpdate instance to represent the current configuration environment.
   * Currently a SBTUpdate instance is created from reading and parsing the current configuration ONCE per
   * "combined" metadata (using both new and latest adopted selections' dates and version). However, if PCA needs to
   * re-read a customer environment again due to file changes, just expose an external method on this class to mark true
   * for a SBTUpdateMetaData explicitly.
   */
  private static var _currentSbtUpdateReadRequired :  Map<SBTUpdateMetaData, Boolean> = {}

  static function buildClauses(publicIDs : Set<String>,
                               currentSbtUpdate : SBTUpdate,
                               adoptionDate: Date) {
    if(not readRequired(currentSbtUpdate)) {
      return
    }

    currentSbtUpdate.Clauses.clear()
    var currentConfigMetaData = currentSbtUpdate.MetaData
    var currentClauseBuilder = new CurrentClauseBuilder(
        currentConfigMetaData.Line.Code,
        ProductCodeToAbbreviationMapper.getProductAbbreviation(currentConfigMetaData.Line.Code), null, adoptionDate)
    publicIDs.each(\publicID -> currentSbtUpdate.Clauses.add(
        currentClauseBuilder.toClauseModel(currentConfigMetaData.Jurisdiction, publicID)))
    currentSbtUpdate.Clauses.removeWhere(\clause -> clause == null)

    EffectiveAvailabilityHelper.setEffectiveAvailabilityOnClause(currentSbtUpdate)
  }

  static function buildRateBook(newRatebook : RateBookContent, currentSBTUpdate: SBTUpdate, adoptionDate : Date) {
    if(not readRequired(currentSBTUpdate)) {
      return
    }

    var currentConfigMetaData = currentSBTUpdate.MetaData
    var currentRateBookBuilder = new CurrentRateBookBuilder(
        currentConfigMetaData.Line.Code,
        newRatebook.BookCode,
        currentConfigMetaData.Jurisdiction,
        adoptionDate)
    currentSBTUpdate.RateBook = currentRateBookBuilder.toRateBookModel()
  }

  static function buildPolicyForms(formNumbers : Set<String>,
                                   currentSbtUpdate : SBTUpdate,
                                   adoptionDate : Date) {
    if(not readRequired(currentSbtUpdate)) {
      return
    }

    currentSbtUpdate.Forms.clear()
    var currentConfigMetaData = currentSbtUpdate.MetaData
    var currentFormBuilder = new CurrentFormBuilder(currentConfigMetaData.Line.Code,
        ProductCodeToAbbreviationMapper.getProductAbbreviation(currentConfigMetaData.Line.Code),
        currentConfigMetaData.Jurisdiction, null, null, adoptionDate)
    formNumbers.each(\formNumber -> currentSbtUpdate.Forms.add(currentFormBuilder.toFormModel(formNumber)))
    currentSbtUpdate.Forms.removeWhere(\form -> form == null)

    EffectiveAvailabilityHelper.setEffectiveAvailabilityOnForm(currentSbtUpdate)
  }

  static function buildRisks(riskNames : Set<String>,
                             currentSbtUpdate : SBTUpdate,
                             adoptionDate : Date,
                             currentConfig : TargetConfiguration = null) {
    if(not readRequired(currentSbtUpdate)) {
      return
    }

    currentSbtUpdate.Risks.clear()
    var currentConfigMetaData = currentSbtUpdate.MetaData
    var currentRiskBuilder = new CurrentRiskBuilder(
        currentConfigMetaData.Line.Code,
        ProductCodeToAbbreviationMapper.getProductAbbreviation(currentConfigMetaData.Line.Code),
        currentConfig,
        currentConfigMetaData.Jurisdiction, adoptionDate)

    riskNames.each(\riskName -> {
      var risk = currentRiskBuilder.toRiskModel(riskName)
      if (risk != null) {
        currentSbtUpdate.Risks.add(risk)
      }
    })

    EffectiveAvailabilityHelper.setEffectiveVersionOnRiskAttribute(currentSbtUpdate)
  }

  static function buildBureauCodes(currentSbtUpdate : SBTUpdate, adoptionDate : Date, systemTablesToBeRead: Set<String>) {
    if(not readRequired(currentSbtUpdate)) {
      return
    }

    var currentConfigMetaData = currentSbtUpdate.MetaData
    currentSbtUpdate.SystemTables = new CurrentBureauCodesBuilder(
        currentConfigMetaData.Line.Code,
        ProductCodeToAbbreviationMapper.getProductAbbreviation(currentConfigMetaData.Line.Code),
        null,
        currentConfigMetaData.Jurisdiction,
        adoptionDate,
        systemTablesToBeRead).read()
  }

  static function finishBuild(currentSBTUpdate : SBTUpdate) {
    if(readRequired(currentSBTUpdate)) {
      SBTUpdateCache.persist(currentSBTUpdate.MetaData, currentSBTUpdate, null)
      _currentSbtUpdateReadRequired.put(currentSBTUpdate.MetaData, Boolean.valueOf(false))
    }
  }

  static function getSBTUpdateInBuilder(currentConfigMetaData : SBTUpdateMetaData) : SBTUpdate {
    var sbtUpdate = SBTUpdateCache.findSBTUpdate(currentConfigMetaData)

    if(sbtUpdate == null) {
      sbtUpdate = new SBTUpdate() {:MetaData = currentConfigMetaData}
      _currentSbtUpdateReadRequired.put(currentConfigMetaData, Boolean.valueOf(true))
    }

    return sbtUpdate
  }

  private static function readRequired(currentSBTUpdate : SBTUpdate) : boolean {
    var readRequired = _currentSbtUpdateReadRequired.get(currentSBTUpdate.MetaData)

    return readRequired != null and readRequired.booleanValue()
  }
}