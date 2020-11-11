package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExtendedReportingPeriodEndtForEmpBenefitsLiabCovDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExtendedReportingPeriodEndtForEmpBenefitsLiabCovDTO {

  public construct(_gL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo : GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExtendedReportingPeriodEndtForEmpBenefitsLiabCovDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}