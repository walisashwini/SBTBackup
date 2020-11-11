package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO {
   return _parent
  }
  

  
}