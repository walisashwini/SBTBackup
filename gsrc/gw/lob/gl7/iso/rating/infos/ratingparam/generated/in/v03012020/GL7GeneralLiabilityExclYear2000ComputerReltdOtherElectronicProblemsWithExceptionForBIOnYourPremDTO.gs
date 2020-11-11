package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclYear2000ComputerReltdOtherElectronicProblemsWithExceptionForBIOnYourPremDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclYear2000ComputerReltdOtherElectronicProblemsWithExceptionForBIOnYourPremDTO {

  public construct(_gL7ExclY2KCompReltdOtherElectrProbWithExceptionFor : GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclY2KCompReltdOtherElectrProbWithExceptionFor, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclYear2000ComputerReltdOtherElectronicProblemsWithExceptionForBIOnYourPremDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}