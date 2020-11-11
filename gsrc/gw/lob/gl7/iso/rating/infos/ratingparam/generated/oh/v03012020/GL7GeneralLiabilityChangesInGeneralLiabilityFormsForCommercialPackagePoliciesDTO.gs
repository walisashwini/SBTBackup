package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityChangesInGeneralLiabilityFormsForCommercialPackagePoliciesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityChangesInGeneralLiabilityFormsForCommercialPackagePoliciesDTO {

  public construct(_gL7ChangesInGL7FormsForCommercialPackagePolicies : GL7ChangesInGL7FormsForCommercialPackagePolicies, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ChangesInGL7FormsForCommercialPackagePolicies, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityChangesInGeneralLiabilityFormsForCommercialPackagePoliciesDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}