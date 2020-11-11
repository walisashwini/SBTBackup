package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExtendedReportingPeriodForTerrorismCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExtendedReportingPeriodForTerrorismCoverageDTO {

  public construct(_gL7ExtendedReportingPeriodForTerr : GL7ExtendedReportingPeriodForTerr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExtendedReportingPeriodForTerr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExtendedReportingPeriodForTerrorismCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}