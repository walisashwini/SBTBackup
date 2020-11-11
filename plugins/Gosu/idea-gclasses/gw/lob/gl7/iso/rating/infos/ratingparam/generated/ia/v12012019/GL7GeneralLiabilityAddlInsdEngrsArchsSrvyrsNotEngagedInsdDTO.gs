package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDTO {

  public construct(_gL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd : GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd, parent )
    _addlInsdEngrsArchsSrvyrsNotEngagedInsdDetail = _gL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailGroupingDTO(_gL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdEngrsArchsSrvyrsNotEngagedInsdDetail() : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailGroupingDTO {
   return _addlInsdEngrsArchsSrvyrsNotEngagedInsdDetail as GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}