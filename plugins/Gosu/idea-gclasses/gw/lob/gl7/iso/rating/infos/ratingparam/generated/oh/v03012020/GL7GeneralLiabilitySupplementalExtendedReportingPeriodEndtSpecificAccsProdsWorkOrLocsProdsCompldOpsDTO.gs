package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtSpecificAccsProdsWorkOrLocsProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtSpecificAccsProdsWorkOrLocsProdsCompldOpsDTO {

  public construct(_gL7SupplementalExtendedReportingPeriodEndtSpecifi1 : GL7SupplementalExtendedReportingPeriodEndtSpecifi1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SupplementalExtendedReportingPeriodEndtSpecifi1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySupplementalExtendedReportingPeriodEndtSpecificAccsProdsWorkOrLocsProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}