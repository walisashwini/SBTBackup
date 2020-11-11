package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO {
   return _parent as GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO
  }
  

  
}