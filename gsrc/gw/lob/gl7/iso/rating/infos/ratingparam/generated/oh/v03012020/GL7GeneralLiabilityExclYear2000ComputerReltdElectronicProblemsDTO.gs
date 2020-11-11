package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclYear2000ComputerReltdElectronicProblemsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclYear2000ComputerReltdElectronicProblemsDTO {

  public construct(_gL7ExclY2KCompReltdElectrProb : GL7ExclY2KCompReltdElectrProb, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclY2KCompReltdElectrProb, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclYear2000ComputerReltdElectronicProblemsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}