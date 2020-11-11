package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdElectiveOrAppointiveExecutiveOfficersOfPublicCorpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdElectiveOrAppointiveExecutiveOfficersOfPublicCorpsDTO {

  public construct(_gL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf : GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdElectiveOrAppointiveExecutiveOfficersOfPublicCorpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}