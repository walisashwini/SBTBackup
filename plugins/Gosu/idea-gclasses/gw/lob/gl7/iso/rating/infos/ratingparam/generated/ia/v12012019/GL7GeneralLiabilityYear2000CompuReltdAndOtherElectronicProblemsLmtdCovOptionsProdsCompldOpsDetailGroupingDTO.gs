package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO {
   return _current as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO {
   return _parent
  }
  

  
}