package gw.lob.gl7

uses gw.api.util.JurisdictionMappingUtil
uses gw.lang.reflect.features.IPropertyReference
uses gw.lob.common.displayable.LobFieldMetaSupport

enhancement GL7LocationEnhancement : entity.GL7Location {

  property get Jurisdiction() : Jurisdiction {
    return JurisdictionMappingUtil.getJurisdiction(this.PolicyLocation)
  }

  function locationDisplay(maxLength : int = -1) : String {
    return maxLength == -1 or this.DisplayName.length <= maxLength
         ? this.DisplayName
         : this.DisplayName.substring(0, maxLength-1)
  }

  property get LastVersionWM() : GL7Location {
    return this.VersionList.AllVersions.last().Unsliced
  }

  property get BasisScalableGL7Exposures() : GL7Exposure[] {
    return this.GL7Exposures.where(\ exp -> exp.IsBasisScalable)
  }

  property get GL7LocationDeductiblesChangedFromBasedOn() : Set<IPropertyReference> {
    var deductibleFields = {
        GL7Location#LiquorDeductible,
        GL7Location#PremOpsBIDeductible,
        GL7Location#PremOpsBIPDDeductible,
        GL7Location#PremOpsPDDeductible,
        GL7Location#ProdsCompldOpsBIDeductible,
        GL7Location#ProdsCompldOpsBIPDDeductible,
        GL7Location#ProdsCompldOpsPDDeductible,
        GL7Location#ProductWithdrawalDeductible
    }
    deductibleFields.retainWhere(\ prop -> this.isFieldChangedFromBasedOn(prop.PropertyInfo.Name))
    return deductibleFields.toSet()
  }

  function fieldExists(name : String) : boolean {
    return LobFieldMetaSupport.Instance.findFieldMeta(this, name) != null
  }

  function setFieldIfFound<T>(propertyName : String, getValue() : T) {
    if (this.fieldExists(propertyName))
      this[propertyName] = getValue()
  }
}
