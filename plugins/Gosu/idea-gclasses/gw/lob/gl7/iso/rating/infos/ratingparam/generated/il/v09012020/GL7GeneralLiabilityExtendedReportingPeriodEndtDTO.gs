package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExtendedReportingPeriodEndtDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExtendedReportingPeriodEndtDTO {

  public construct(_gL7ExtendedReportingPeriodEndt : GL7ExtendedReportingPeriodEndt, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExtendedReportingPeriodEndt, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExtendedReportingPeriodEndtDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}