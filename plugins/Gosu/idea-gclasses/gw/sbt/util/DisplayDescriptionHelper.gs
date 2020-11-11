package gw.sbt.util

uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.UpdateDecision
uses java.util.List
uses gw.api.locale.DisplayKey

class DisplayDescriptionHelper {

  static function getUpdateDecisionDescription(updateDecision: UpdateDecision): String {
    switch (updateDecision) {
      case UpdateDecision.ACCEPT:
          return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.UpdateDecision.Accept")
      case UpdateDecision.REJECT:
          return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.UpdateDecision.Reject")
      case UpdateDecision.PARTIAL_ACCEPT:
          return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.UpdateDecision.AcceptPartial")
      case UpdateDecision.NOT_REQUIRED:
          return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.UpdateDecision.NoDecisionRequired")

      case null:
          return null
    }

    //throw "description not implemented for " + updateDecision
  }

  static property get UserSelectableDecisionDescriptions(): List<String> {
    return UpdateDecision.UserSelectableDecisions
        .map(\decision -> getUpdateDecisionDescription(decision))
  }

  static function getUpdateDecisionFromDescription(description: String): UpdateDecision {
    switch (description) {
      case DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.UpdateDecision.Accept"):
          return UpdateDecision.ACCEPT
      case DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.UpdateDecision.Reject"):
          return UpdateDecision.REJECT
      case DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.UpdateDecision.AcceptPartial"):
          return UpdateDecision.PARTIAL_ACCEPT
    }

    return null
  }

  static function getComparisonUpdateDecisionFromDescription(description: String): UpdateDecision {
    switch (description) {
      case DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.UpdateDecision.Accept"):
          return UpdateDecision.ACCEPT
      case DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.UpdateDecision.Reject"):
          return UpdateDecision.REJECT
      case DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.UpdateDecision.AcceptPartial"):
          return UpdateDecision.PARTIAL_ACCEPT
      case DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.UpdateDecision.NoDecisionRequired"):
          return UpdateDecision.NOT_REQUIRED
    }

    return null
  }

  static function getComparisonUpdateDecisionDescription(updateDecision: UpdateDecision): String {
    switch (updateDecision) {
      case UpdateDecision.ACCEPT:
          return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.UpdateDecision.Accept")
      case UpdateDecision.REJECT:
          return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.UpdateDecision.Reject")
      case UpdateDecision.PARTIAL_ACCEPT:
          return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.UpdateDecision.AcceptPartial")
      case UpdateDecision.NOT_REQUIRED:
          return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.UpdateDecision.NoDecisionRequired")
      case null:
          return null
    }

    //throw "description not implemented for " + updateDecision
  }

  static property get UserSelectableComparisonDecisionDescriptions(): List<String> {
    return UpdateDecision.UserSelectableDecisions
        .map(\decision -> getComparisonUpdateDecisionDescription(decision))
  }

  static function getMetaDataEdition(metaData: SBTUpdateMetaData): String {
    if (metaData == null or metaData.Jurisdiction == null) {
      return ""
    }

    return Formatter.dateToString(metaData.EffectiveDate) + " " + metaData.PackageVersion
  }

  static function getMetaDataEditionForDisplay(metaData : SBTUpdateMetaData) : String {
    if (metaData == null or metaData.Jurisdiction == null) {
      return ""
    }

    if (metaData.IsMaintenanceMetaData) {
      return Formatter.dateToString(metaData.EffectiveDate) + " " + metaData.PackageVersion
    }

    return Formatter.dateToString(metaData.EffectiveDate) + " " + metaData.PackageVersionWithoutSBTVersion
  }

  static function getMetaDataCWEdition(metaData: SBTUpdateMetaData): String {
    if (metaData == null or metaData.Jurisdiction == null or metaData.isIndependentState) {
      return ""
    }

    return Formatter.dateToString(metaData.CWEffectiveDate) + " " + metaData.CWVersion
  }

  static function getSummaryStatisticsLabel(hasLatestAdoptedSBTUpdateEdition: boolean, updateDiffType: UpdateDiffType): String {
    if (hasLatestAdoptedSBTUpdateEdition) {
      switch (updateDiffType) {
        case UpdateDiffType.TC_NEW:
            return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Statistics.StateUpdate.Added")
        case UpdateDiffType.TC_CHANGED:
            return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Statistics.StateUpdate.Modified")
        case UpdateDiffType.TC_DELETED:
            return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Statistics.StateUpdate.Deleted")
          default:
          return null
      }
    } else {
      switch (updateDiffType) {
        case UpdateDiffType.TC_NEW:
            return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Statistics.AddingState.Added")
        case UpdateDiffType.TC_CHANGED:
            return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Statistics.AddingState.Modified")
        case UpdateDiffType.TC_DELETED:
            return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Statistics.AddingState.Deleted")
          default:
          return null
      }
    }
  }
}