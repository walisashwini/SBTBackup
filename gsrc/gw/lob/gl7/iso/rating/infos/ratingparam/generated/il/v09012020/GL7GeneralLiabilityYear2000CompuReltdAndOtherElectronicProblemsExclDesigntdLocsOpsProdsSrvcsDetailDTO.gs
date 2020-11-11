package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO {
   return _parent as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO
  }
  

  
}