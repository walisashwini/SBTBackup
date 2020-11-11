package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailDTO {
   return _current as GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDTO {
   return _parent
  }
  

  
}