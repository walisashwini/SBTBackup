package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCoverageExtensionCoverageAProductRestorationExpenseDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCoverageExtensionCoverageAProductRestorationExpenseDTO {

  public construct(_gL7CovExtensionCovAProductRestorationExpense : GL7CovExtensionCovAProductRestorationExpense, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CovExtensionCovAProductRestorationExpense, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCoverageExtensionCoverageAProductRestorationExpenseDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}