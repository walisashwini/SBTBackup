package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityContractualLiabLimitationDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityContractualLiabLimitationDTO {

  public construct(_gL7ContractualLiabLimitation : GL7ContractualLiabLimitation, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ContractualLiabLimitation, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityContractualLiabLimitationDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}