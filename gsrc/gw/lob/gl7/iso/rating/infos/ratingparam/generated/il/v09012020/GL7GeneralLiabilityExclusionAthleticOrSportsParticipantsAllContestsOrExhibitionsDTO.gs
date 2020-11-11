package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO {

  public construct(_gL7ExclAthleticOrSportsParticipantsAllContestsOrEx : GL7ExclAthleticOrSportsParticipantsAllContestsOrEx, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclAthleticOrSportsParticipantsAllContestsOrEx, parent )
    _exclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetail = _gL7ExclAthleticOrSportsParticipantsAllContestsOrEx.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailGroupingDTO(_gL7ExclAthleticOrSportsParticipantsAllContestsOrEx.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetail() : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailGroupingDTO {
   return _exclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetail as GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}