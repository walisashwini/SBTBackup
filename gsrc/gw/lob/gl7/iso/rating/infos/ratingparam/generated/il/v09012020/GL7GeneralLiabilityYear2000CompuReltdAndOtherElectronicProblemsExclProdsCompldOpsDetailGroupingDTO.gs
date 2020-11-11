package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO {
   return _current as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO {
   return _parent
  }
  

  
}