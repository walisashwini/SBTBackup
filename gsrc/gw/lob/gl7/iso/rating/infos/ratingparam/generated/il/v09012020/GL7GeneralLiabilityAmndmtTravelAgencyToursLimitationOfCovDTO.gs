package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtTravelAgencyToursLimitationOfCovDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtTravelAgencyToursLimitationOfCovDTO {

  public construct(_gL7AmndmtTravelAgencyToursLimitationOfCov : GL7AmndmtTravelAgencyToursLimitationOfCov, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmndmtTravelAgencyToursLimitationOfCov, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtTravelAgencyToursLimitationOfCovDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}