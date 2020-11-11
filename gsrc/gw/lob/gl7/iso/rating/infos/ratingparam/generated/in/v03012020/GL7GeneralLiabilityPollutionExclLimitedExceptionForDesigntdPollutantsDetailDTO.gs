package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO {
   return _parent as GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO
  }
  

  
}