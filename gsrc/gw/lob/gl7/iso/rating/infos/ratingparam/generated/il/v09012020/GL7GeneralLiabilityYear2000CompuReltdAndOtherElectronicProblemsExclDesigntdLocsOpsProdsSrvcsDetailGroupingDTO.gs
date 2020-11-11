package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO {
   return _current as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO {
   return _parent
  }
  

  
}