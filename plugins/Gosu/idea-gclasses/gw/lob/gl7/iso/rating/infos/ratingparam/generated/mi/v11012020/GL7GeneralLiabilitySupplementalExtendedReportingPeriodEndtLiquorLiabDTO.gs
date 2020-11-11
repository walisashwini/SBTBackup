package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtLiquorLiabDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtLiquorLiabDTO {

  public construct(_gL7SupplementalExtendedReportingPeriodEndtLiquorLi : GL7SupplementalExtendedReportingPeriodEndtLiquorLi, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SupplementalExtendedReportingPeriodEndtLiquorLi, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtLiquorLiabDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}