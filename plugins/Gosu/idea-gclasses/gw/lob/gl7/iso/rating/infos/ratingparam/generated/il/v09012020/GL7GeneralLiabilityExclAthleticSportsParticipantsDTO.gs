package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclAthleticSportsParticipantsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclAthleticSportsParticipantsDTO {

  public construct(_gL7ExclAthleticSportsParticipants : GL7ExclAthleticSportsParticipants, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclAthleticSportsParticipants, parent )
    _exclAthleticSportsParticipantsDetail = _gL7ExclAthleticSportsParticipants.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclAthleticSportsParticipantsDetailGroupingDTO(_gL7ExclAthleticSportsParticipants.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclAthleticSportsParticipantsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclAthleticSportsParticipantsDetail() : GL7GeneralLiabilityExclAthleticSportsParticipantsDetailGroupingDTO {
   return _exclAthleticSportsParticipantsDetail as GL7GeneralLiabilityExclAthleticSportsParticipantsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}