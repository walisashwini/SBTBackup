package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO {
   return _parent as GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO
  }
  

  
}