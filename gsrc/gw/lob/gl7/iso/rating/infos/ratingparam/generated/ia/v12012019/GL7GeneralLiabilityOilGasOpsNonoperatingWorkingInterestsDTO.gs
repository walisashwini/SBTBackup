package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityOilGasOpsNonoperatingWorkingInterestsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityOilGasOpsNonoperatingWorkingInterestsDTO {

  public construct(_gL7OilGasOpsNonoperatingWorkingInterests : GL7OilGasOpsNonoperatingWorkingInterests, parent : GL7GeneralLiabilityDTO) {
    super( _gL7OilGasOpsNonoperatingWorkingInterests, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityOilGasOpsNonoperatingWorkingInterestsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}