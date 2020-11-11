package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO {
   return _current as GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO {
   return _parent
  }
  

  
}