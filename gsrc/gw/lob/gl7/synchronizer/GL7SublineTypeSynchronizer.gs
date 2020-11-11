package gw.lob.gl7.synchronizer

uses gw.lob.common.LobPropertyService
uses gw.lob.common.compatibility.LobCompatibilityHelper
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.synchronizer.ISynchronizer
uses gw.lob.gl7.compatibility.GL7CompatibilityConstants

class GL7SublineTypeSynchronizer implements ISynchronizer<GL7GeneralLiabilityLine> {
  override function synchronizeBeforeChange(propInst: PropertyInstanceInfo) {
  }

  override function synchronizeAfterChange(propInst: PropertyInstanceInfo) {
    var sublineType = propInst.ContextObject as GL7SublineType
    var updatedFields = synchronizeFields(propInst)

    updatedFields.each( \ field -> LobPropertyService.Instance.updateEntityDependentProperties(field))
  }

  override function synchronizeBeforeQuote(propInst: PropertyInstanceInfo, pLine: GL7GeneralLiabilityLine) {
    var sublineType = propInst.ContextObject as GL7SublineType
    if(sublineType.GL7MedPayExists) {
      LobPropertyService.Instance.updateClauseCovTermsDependentProperties(sublineType.GL7MedPay.Pattern, sublineType)
    }
    GL7GeneralLiabilityLine.setScheduleRatingModificationApplies(sublineType)
  }

  /**
   * Synchronized fields and return a list of updated properties
   */
  private function synchronizeFields(propInst: PropertyInstanceInfo): List<PropertyInstanceInfo> {
    var sublineType = propInst.ContextObject as GL7SublineType
    var policyEffectiveDate = sublineType.PolicyLine.EffectiveDate
    var businessStartDate = sublineType.ExperienceBusinessStartDate

    var differenceInMonths =
        (policyEffectiveDate.YearOfDate - businessStartDate.YearOfDate) * 12
            + (policyEffectiveDate.MonthOfYear - businessStartDate.MonthOfYear)

    var experienceNumberYearsRequired = 0

    if (differenceInMonths >= 30) {
      experienceNumberYearsRequired = 3
    } else if (differenceInMonths >= 18) {
      experienceNumberYearsRequired = 2
    } else if (differenceInMonths >= 6) {
      experienceNumberYearsRequired = 1
    }

    var originalValue = sublineType.getFieldValue(GL7CompatibilityConstants.SUBLINETYPE_ExperienceNumberYearsRequired)
    if (originalValue == experienceNumberYearsRequired) {
      return {}
    } else {
      LobCompatibilityHelper.setFieldValue(sublineType, GL7CompatibilityConstants.SUBLINETYPE_ExperienceNumberYearsRequired, experienceNumberYearsRequired)
      return {new PropertyInstanceInfo(LobCompatibilityHelper.getBoundPropertyReference(sublineType, GL7CompatibilityConstants.SUBLINETYPE_ExperienceNumberYearsRequired))}
    }
  }
}