package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExtendedReportingPeriodEndorsementForElectronicDataLiabilityCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExtendedReportingPeriodEndorsementForElectronicDataLiabilityCoverageDTO {

  public construct(_gL7ExtendedReportingPeriodEndorsementForElectrData : GL7ExtendedReportingPeriodEndorsementForElectrData, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExtendedReportingPeriodEndorsementForElectrData, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExtendedReportingPeriodEndorsementForElectronicDataLiabilityCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}