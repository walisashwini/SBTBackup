package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfLiquorLiabExclusionLimitedExceptionForBringYourOwnAlcoholDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfLiquorLiabExclusionLimitedExceptionForBringYourOwnAlcoholDTO {

  public construct(_gL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY : GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfLiquorLiabExclusionLimitedExceptionForBringYourOwnAlcoholDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}