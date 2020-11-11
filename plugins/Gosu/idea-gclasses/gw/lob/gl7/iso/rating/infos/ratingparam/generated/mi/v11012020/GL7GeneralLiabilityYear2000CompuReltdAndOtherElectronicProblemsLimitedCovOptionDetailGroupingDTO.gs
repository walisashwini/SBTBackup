package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO {
   return _current as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO {
   return _parent
  }
  

  
}