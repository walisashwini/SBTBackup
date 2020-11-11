package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityFiduciariesFiduciaryInterestDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityFiduciariesFiduciaryInterestDTO {

  public construct(_gL7FiduciariesFiduciaryInterest : GL7FiduciariesFiduciaryInterest, parent : GL7GeneralLiabilityDTO) {
    super( _gL7FiduciariesFiduciaryInterest, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityFiduciariesFiduciaryInterestDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}