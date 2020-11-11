package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtSpecificAccsProdsWorkOrLocationsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtSpecificAccsProdsWorkOrLocationsDTO {

  public construct(_gL7SupplementalExtendedReportingPeriodEndtSpecific : GL7SupplementalExtendedReportingPeriodEndtSpecific, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SupplementalExtendedReportingPeriodEndtSpecific, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtSpecificAccsProdsWorkOrLocationsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}