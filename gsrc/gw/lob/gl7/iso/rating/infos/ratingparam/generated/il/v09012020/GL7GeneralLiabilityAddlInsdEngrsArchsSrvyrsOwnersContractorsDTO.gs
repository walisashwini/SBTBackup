package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsOwnersContractorsDTO {

  public construct(_gL7AddlInsdEngrsArchsSrvyrsOwnersContractors : GL7AddlInsdEngrsArchsSrvyrsOwnersContractors, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdEngrsArchsSrvyrsOwnersContractors, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}