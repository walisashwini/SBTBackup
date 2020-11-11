package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndorsementCG3057DTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndorsementCG3057DTO {

  public construct(_gL7SupplementalExtendedReportingPeriodEndorsementC : GL7SupplementalExtendedReportingPeriodEndorsementC, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SupplementalExtendedReportingPeriodEndorsementC, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndorsementCG3057DTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}