package gw.sbt.pca.analysis

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.model.ProductModelObject
uses gw.sbt.model.Risk
uses gw.sbt.model.RiskAttributeVersion
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.util.LoaderUtil
uses org.slf4j.LoggerFactory


class EffectiveAvailabilityHelper {

  static function setEffectiveAvailability(sbtUpdate : SBTUpdate) {
    setEffectiveAvailabilityOnClause(sbtUpdate)
    setEffectiveAvailabilityOnForm(sbtUpdate)
    setEffectiveVersionOnRiskAttribute(sbtUpdate)
  }

  static function isAnyClauseEffectiveAvailabilityDifferent(sbtUpdate : SBTUpdate, adoptionDate : Date) : boolean {
    return sbtUpdate.Clauses.hasMatch(\clause -> isAnyEffectiveAvailabilityDifferentOnProductModel(clause, adoptionDate))
  }

  static function isAnyFormEffectiveAvailabilityDifferent(sbtUpdate : SBTUpdate, adoptionDate : Date) : boolean {
    return sbtUpdate.Forms.hasMatch(\form ->
        form.EffectiveAvailability.Availability != getEffectiveAvailability(form.Availabilities, adoptionDate).Availability)
  }

  static function isAnyRiskEffectiveAvailabilityDifferent(sbtUpdate : SBTUpdate, adoptionDate : Date) : boolean {
    return sbtUpdate.Risks.hasMatch(\risk -> isAnyRiskAttributeEffectiveAvailabilityDifferent(risk, adoptionDate, sbtUpdate.MetaData.Jurisdiction))
  }

  private static function isAnyRiskAttributeEffectiveAvailabilityDifferent(risk: Risk, adoptionDate : Date, jurisdiction: String) : boolean {
    return risk.RiskAttributes
        .hasMatch(\ riskAttribute -> getRiskAttributeEffectiveVersion(riskAttribute.VersionList, adoptionDate, jurisdiction).Available != riskAttribute.EffectiveVersion.Available)
  }

  static function getRiskAttributeEffectiveVersion(versionList: List<RiskAttributeVersion>, adoptionDate : Date, jurisdiction: String) : RiskAttributeVersion {
    var effectiveVersionForJurisdiction = versionList.firstWhere(\version -> version.Jurisdiction == jurisdiction and LoaderUtil.isDateWithinRange(adoptionDate, version.EffectiveDate, version.ExpiryDate))
    if (effectiveVersionForJurisdiction != null) {
      return effectiveVersionForJurisdiction
    } else {
      var effectiveVersionForCW = versionList.firstWhere(\version -> LoaderUtil.isJurisdictionCW(version.Jurisdiction) and LoaderUtil.isDateWithinRange(adoptionDate, version.EffectiveDate, version.ExpiryDate))
      if (effectiveVersionForCW != null) {
        return effectiveVersionForCW
      }
    }
    return null
  }

  static function setEffectiveAvailabilityOnClause(clauses : List<Clause>, adoptionDate: Date) {
    clauses.each(\clause -> setEffectiveAvailabilitiesOnProductModelObject(clause, adoptionDate))
  }

  static function setEffectiveAvailabilityOnClause(sbtUpdate : SBTUpdate) {
    setEffectiveAvailabilityOnClause(sbtUpdate.Clauses, sbtUpdate.AdoptionDate)
  }

  static function setEffectiveAvailabilityOnForm(sbtUpdate : SBTUpdate) {
    sbtUpdate.Forms.each(\form -> { form.EffectiveAvailability = getEffectiveAvailability(form.Availabilities, sbtUpdate.AdoptionDate) })
  }

  static function setEffectiveVersionOnRiskAttribute(sbtUpdate : SBTUpdate) {
    sbtUpdate.Risks.each(\risk -> {
      var riskAttributes = risk.RiskAttributes
      riskAttributes.each(\riskAttribute -> {
        riskAttribute.EffectiveVersion = getRiskAttributeEffectiveVersion(riskAttribute.VersionList, sbtUpdate.AdoptionDate, sbtUpdate.MetaData.Jurisdiction)
      })
    })
  }

  public static function setEffectiveAvailabilitiesOnProductModelObject(productModelObject : ProductModelObject, adoptionDate : Date) {
    productModelObject.ChildrenWithAvailability.each(\ productModelObjectChild ->
        setEffectiveAvailabilitiesOnProductModelObject(productModelObjectChild, adoptionDate))
    productModelObject.EffectiveAvailability = getEffectiveAvailability(productModelObject.Availabilities, adoptionDate)
  }

  private static function isAnyEffectiveAvailabilityDifferentOnProductModel(productModelObject : ProductModelObject, adoptionDate : Date) : boolean {
    return
        productModelObject.EffectiveAvailability.Availability !=
          getEffectiveAvailability(productModelObject.Availabilities, adoptionDate).Availability
        or
        productModelObject.ChildrenWithAvailability.hasMatch(\productModelObjectChild ->
            isAnyEffectiveAvailabilityDifferentOnProductModel(productModelObjectChild, adoptionDate))
  }

  private static function getEffectiveAvailability(availabilities : List<ProductModelAvailability>, adoptionDate : Date)
      : ProductModelAvailability {
    var effectiveAvailability : ProductModelAvailability = null

    if (adoptionDate != null) {
      var matchedAvailabilities = availabilities.where(\productModelAvailability ->
          LoaderUtil.isDateWithinRange(adoptionDate, productModelAvailability.EffDate, productModelAvailability.ExpDate))
      effectiveAvailability = matchedAvailabilities
          .firstWhere(\availability -> availability.Jurisdiction != null and availability.Jurisdiction != "CW")?:matchedAvailabilities.first()
    } else {
      var jurisdictionalAvailability = availabilities.firstWhere(
          \availability -> availability.Jurisdiction.HasContent and availability.Jurisdiction != "CW")
      effectiveAvailability = jurisdictionalAvailability ?: availabilities.first()
    }

    // If no CW/State lookup matches the adoption date, then the effective availability becomes unavailable
    if (effectiveAvailability == null) {
      effectiveAvailability = availabilities.first()
      effectiveAvailability = new ProductModelAvailability(Lookup.UNAVAILABLE, adoptionDate, null, null)
    }

    return effectiveAvailability
  }

  static function getEffectivePolicyForm(forms : List<PolicyForm>, formNumber : String) : PolicyForm {
    if (forms.HasElements) {
      var candidateForms = forms.where(\form -> form.Number == formNumber)
      if (candidateForms.Count == 1) {
        return candidateForms.first()
      } else if (candidateForms.Count != 0) {
        var effectiveForm = candidateForms.firstWhere(\form -> form.UseInsteadOfCWForm != null)
        if (effectiveForm == null) {
          LoggerFactory.getLogger("PCA").error("Another effective edition of the same form was found in the form pattern file which is NOT a CW state replacement form. Please bring this to Guidewire/TDC attention (by opening a ticket) as this could be an ISO Content error. Form Number: ${formNumber}.")
          LoggerFactory.getLogger("PCA").error("Note: PCA has defaulted to the state specific edition of this form for its analysis.")
          effectiveForm = candidateForms.firstWhere(\form -> !LoaderUtil.isJurisdictionCW(form.EffectiveAvailability.Jurisdiction))
        }
        return effectiveForm
      }
    }
    return null
  }

}