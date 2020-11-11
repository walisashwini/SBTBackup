package gw.lob.gl7.presenters

uses gw.lang.reflect.features.PropertyReference
uses gw.lob.common.displayable.LobDisplayable
uses gw.lob.common.displayable.LobDisplayableFactory
uses gw.lob.gl7.GL7Category.CoverableCoverageCategories

class GL7PolicyLineSummaryPresenter {
  var _coverable : Coverable
  var _coverableCategories : CoverableCoverageCategories

  construct(coverable : Coverable, coverableCategories : CoverableCoverageCategories) {
    _coverable = coverable
    _coverableCategories = coverableCategories
  }

  private static property get PolicyReviewDataModelFields() : List<PropertyReference> {
    return {
      GL7SublineType#ProdsWithdrawalCoverage,
      GL7SublineType#ProductWithdrawalCoverageType,
      GL7SublineType#EDLRetroactiveDate,
      GL7SublineType#LiquorRetroactiveDate,
      GL7SublineType#PollutionRetroactiveDate,
      GL7SublineType#PremOpsProdsRetroactiveDate,
      GL7SublineType#UndergroundStorageTankRetroactiveDate,
      GL7SublineType#ProductsWithdrawalCutOff,
      GL7SublineType#ProductWithdrawalParticipationPercentage,
      GL7SublineType#LegalEntity,
      GL7SublineType#PollutionCleanUpCoverage
    }
  }

  static function filterDisplayable<T extends LobDisplayable>() : block(displayable : LobDisplayable) : boolean {
    return \ displayable -> PolicyReviewDataModelFields*.PropertyInfo*.Name.contains(displayable.PropertyInfo.Name)
  }

  function dataModelFieldsExist<T extends LobDisplayable>(lobDisplayableClass: Type<T>) : boolean {
    return LobDisplayableFactory.getEntityDisplayables<LobDisplayable>(_coverable, lobDisplayableClass, null, false)
     .hasMatch( \ displayable -> displayable.Visible)

  }

  private function productModelClausesExist() : boolean {
    return Coverages.HasElements or
        AdditionalCoverages.HasElements or
        Exclusions.HasElements or
        Conditions.HasElements or
        AdditionalInsureds.HasElements
  }

  function displayTitle<T extends LobDisplayable>(lobDisplayableClass: Type<T>) : boolean {
    return dataModelFieldsExist<LobDisplayable>(lobDisplayableClass) or
      productModelClausesExist()
  }

  property get Coverages() : List<Coverage> {
    return _coverable.getCoveragesInCategories({_coverableCategories.StandardCoverage.CodeIdentifier})
  }

  property get AdditionalCoverages() : List<Coverage> {
    return _coverable.getCoveragesInCategories({_coverableCategories.AdditionalCoverage.CodeIdentifier})
  }

  property get Exclusions() : List<Exclusion> {
    return _coverable.getExclusionsInCategories({_coverableCategories.Exclusion.CodeIdentifier})
  }

  property get Conditions() : List<PolicyCondition> {
    return _coverable.getConditionsInCategories({_coverableCategories.Condition.CodeIdentifier})
  }

  property get AdditionalInsureds() : List<Coverage> {
    return _coverable.getCoveragesInCategories({_coverableCategories.AdditionalInsured.CodeIdentifier})
  }
}
