package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclBodilyInjuryToRailroadPassengersDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclBodilyInjuryToRailroadPassengersDTO {

  public construct(_gL7ExclBIToRailroadPassengers : GL7ExclBIToRailroadPassengers, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclBIToRailroadPassengers, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclBodilyInjuryToRailroadPassengersDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}