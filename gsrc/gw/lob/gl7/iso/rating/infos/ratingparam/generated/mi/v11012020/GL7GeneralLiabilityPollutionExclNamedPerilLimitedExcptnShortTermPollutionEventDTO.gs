package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPollutionExclNamedPerilLimitedExcptnShortTermPollutionEventDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPollutionExclNamedPerilLimitedExcptnShortTermPollutionEventDTO {

  public construct(_gL7PollutionExclNamedPerilLmtdExcptnShortTermPollu : GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PollutionExclNamedPerilLmtdExcptnShortTermPollu, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionExclNamedPerilLimitedExcptnShortTermPollutionEventDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}