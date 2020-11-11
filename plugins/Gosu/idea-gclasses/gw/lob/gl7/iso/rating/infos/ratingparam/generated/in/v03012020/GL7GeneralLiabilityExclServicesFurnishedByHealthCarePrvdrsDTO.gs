package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO {

  public construct(_gL7ExclServicesFurnishedByHealthCarePrvdrs : GL7ExclServicesFurnishedByHealthCarePrvdrs, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclServicesFurnishedByHealthCarePrvdrs, parent )
    _exclServicesFurnishedByHealthCarePrvdrsDetail = _gL7ExclServicesFurnishedByHealthCarePrvdrs.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailGroupingDTO(_gL7ExclServicesFurnishedByHealthCarePrvdrs.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclServicesFurnishedByHealthCarePrvdrsDetail() : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailGroupingDTO {
   return _exclServicesFurnishedByHealthCarePrvdrsDetail as GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}