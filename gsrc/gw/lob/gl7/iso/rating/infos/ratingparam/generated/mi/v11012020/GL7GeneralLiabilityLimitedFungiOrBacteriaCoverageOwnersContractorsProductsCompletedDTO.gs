package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedFungiOrBacteriaCoverageOwnersContractorsProductsCompletedDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedFungiOrBacteriaCoverageOwnersContractorsProductsCompletedDTO {

  public construct(_gL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom : GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedFungiOrBacteriaCoverageOwnersContractorsProductsCompletedDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}