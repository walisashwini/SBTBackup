package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProductWithdrawalCoverageFormDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProductWithdrawalCoverageFormDTO {

  public construct(_gL7ProductWithdrawalCovForm : GL7ProductWithdrawalCovForm, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ProductWithdrawalCovForm, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProductWithdrawalCoverageFormDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}