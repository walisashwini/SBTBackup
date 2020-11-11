package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityElectronicDataLiabilityCoverageFormDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityElectronicDataLiabilityCoverageFormDTO {

  public construct(_gL7ElectrDataLiabCovForm : GL7ElectrDataLiabCovForm, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ElectrDataLiabCovForm, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityElectronicDataLiabilityCoverageFormDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}