package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityElectronicDataLiabEndtDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityElectronicDataLiabEndtDTO {

  public construct(_gL7ElectrDataLiabEndt : GL7ElectrDataLiabEndt, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ElectrDataLiabEndt, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityElectronicDataLiabEndtDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}