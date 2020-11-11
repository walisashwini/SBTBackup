package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO {
   return _current as GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO {
   return _parent
  }
  

  
}