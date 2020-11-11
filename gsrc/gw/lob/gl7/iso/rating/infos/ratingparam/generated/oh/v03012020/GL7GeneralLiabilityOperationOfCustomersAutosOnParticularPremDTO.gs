package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityOperationOfCustomersAutosOnParticularPremDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityOperationOfCustomersAutosOnParticularPremDTO {

  public construct(_gL7OperationOfCustomersAutosOnParticularPrem : GL7OperationOfCustomersAutosOnParticularPrem, parent : GL7GeneralLiabilityDTO) {
    super( _gL7OperationOfCustomersAutosOnParticularPrem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityOperationOfCustomersAutosOnParticularPremDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}