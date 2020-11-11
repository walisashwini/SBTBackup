package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTotalPollutionExclusionOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTotalPollutionExclusionOwnersContractorsDTO {

  public construct(_gL7TotalPollutionExclOwnersContractors : GL7TotalPollutionExclOwnersContractors, parent : GL7GeneralLiabilityDTO) {
    super( _gL7TotalPollutionExclOwnersContractors, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTotalPollutionExclusionOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}