package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityMedPayCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityMedPayCoverageDTO {

  public construct(_gL7MedPay : GL7MedPay, parent : GL7GeneralLiabilityDTO) {
    super( _gL7MedPay, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityMedPayCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}