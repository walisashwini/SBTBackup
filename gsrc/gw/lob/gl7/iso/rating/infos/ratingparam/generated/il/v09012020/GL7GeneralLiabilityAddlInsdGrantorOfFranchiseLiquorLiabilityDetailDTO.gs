package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDTO {
   return _parent as GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDTO
  }
  

  
}