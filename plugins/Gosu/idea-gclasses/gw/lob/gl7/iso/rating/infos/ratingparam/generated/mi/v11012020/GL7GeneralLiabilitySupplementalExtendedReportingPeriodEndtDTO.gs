package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtDTO {

  public construct(_gL7SupplementalExtendedReportingPeriodEndt : GL7SupplementalExtendedReportingPeriodEndt, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SupplementalExtendedReportingPeriodEndt, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}