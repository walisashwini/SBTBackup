package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTotalPollutionExclEndtDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTotalPollutionExclEndtDTO {

  public construct(_gL7TotalPollutionExclEndt : GL7TotalPollutionExclEndt, parent : GL7GeneralLiabilityDTO) {
    super( _gL7TotalPollutionExclEndt, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTotalPollutionExclEndtDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}