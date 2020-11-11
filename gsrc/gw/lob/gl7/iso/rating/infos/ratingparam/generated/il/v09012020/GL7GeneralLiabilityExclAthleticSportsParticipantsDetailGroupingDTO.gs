package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclAthleticSportsParticipantsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclAthleticSportsParticipantsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclAthleticSportsParticipantsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclAthleticSportsParticipantsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclAthleticSportsParticipantsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclAthleticSportsParticipantsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclAthleticSportsParticipantsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclAthleticSportsParticipantsDetailDTO {
   return _current as GL7GeneralLiabilityExclAthleticSportsParticipantsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclAthleticSportsParticipantsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclAthleticSportsParticipantsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclAthleticSportsParticipantsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclAthleticSportsParticipantsDTO {
   return _parent
  }
  

  
}