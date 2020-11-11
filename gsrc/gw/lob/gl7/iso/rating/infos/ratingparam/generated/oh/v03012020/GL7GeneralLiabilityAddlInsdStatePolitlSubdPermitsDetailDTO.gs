package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO {
   return _parent as GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO
  }
  

  
}