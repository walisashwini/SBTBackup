package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDTO {

  public construct(_gL7PesticideOrHerbicideApplicatorCovOwnersContract : GL7PesticideOrHerbicideApplicatorCovOwnersContract, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PesticideOrHerbicideApplicatorCovOwnersContract, parent )
    _pesticideOrHerbicideApplicatorCovOwnersContractorsDetail = _gL7PesticideOrHerbicideApplicatorCovOwnersContract.GL7ScheduledItems != null ? new GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailGroupingDTO(_gL7PesticideOrHerbicideApplicatorCovOwnersContract.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get PesticideOrHerbicideApplicatorCovOwnersContractorsDetail() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailGroupingDTO {
   return _pesticideOrHerbicideApplicatorCovOwnersContractorsDetail as GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}