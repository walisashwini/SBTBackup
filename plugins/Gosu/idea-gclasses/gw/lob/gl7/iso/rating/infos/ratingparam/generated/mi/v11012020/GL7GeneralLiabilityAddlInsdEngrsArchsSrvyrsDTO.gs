package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsDTO {

  public construct(_gL7AddlInsdEngrsArchsSrvyrs : GL7AddlInsdEngrsArchsSrvyrs, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdEngrsArchsSrvyrs, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}