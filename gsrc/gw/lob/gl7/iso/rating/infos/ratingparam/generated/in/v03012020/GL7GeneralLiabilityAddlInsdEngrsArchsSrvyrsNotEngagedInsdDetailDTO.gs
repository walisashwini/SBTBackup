package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDTO {
   return _parent as GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDTO
  }
  

  
}