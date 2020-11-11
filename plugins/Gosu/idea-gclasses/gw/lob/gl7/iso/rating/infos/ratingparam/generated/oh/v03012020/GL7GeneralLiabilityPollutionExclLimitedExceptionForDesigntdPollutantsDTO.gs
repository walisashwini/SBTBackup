package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO {

  public construct(_gL7PollutionExclLmtdExceptionForDesigntdPollutants : GL7PollutionExclLmtdExceptionForDesigntdPollutants, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PollutionExclLmtdExceptionForDesigntdPollutants, parent )
    _pollutionExclLimitedExceptionForDesigntdPollutantsDetail = _gL7PollutionExclLmtdExceptionForDesigntdPollutants.GL7ScheduledItems != null ? new GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailGroupingDTO(_gL7PollutionExclLmtdExceptionForDesigntdPollutants.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get PollutionExclLimitedExceptionForDesigntdPollutantsDetail() : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailGroupingDTO {
   return _pollutionExclLimitedExceptionForDesigntdPollutantsDetail as GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}