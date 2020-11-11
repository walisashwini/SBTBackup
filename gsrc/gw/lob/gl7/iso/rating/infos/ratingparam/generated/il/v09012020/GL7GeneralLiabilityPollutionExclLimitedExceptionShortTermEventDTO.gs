package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPollutionExclLimitedExceptionShortTermEventDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPollutionExclLimitedExceptionShortTermEventDTO {

  public construct(_gL7PollutionExclLmtdExceptionShortTermEvent : GL7PollutionExclLmtdExceptionShortTermEvent, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PollutionExclLmtdExceptionShortTermEvent, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionExclLimitedExceptionShortTermEventDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}