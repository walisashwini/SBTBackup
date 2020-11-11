package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDTO {

  public construct(_gL7PesticideOrHerbicideApplicatorCov : GL7PesticideOrHerbicideApplicatorCov, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PesticideOrHerbicideApplicatorCov, parent )
    _pesticideOrHerbicideApplicatorCovDetail = _gL7PesticideOrHerbicideApplicatorCov.GL7ScheduledItems != null ? new GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailGroupingDTO(_gL7PesticideOrHerbicideApplicatorCov.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get PesticideOrHerbicideApplicatorCovDetail() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailGroupingDTO {
   return _pesticideOrHerbicideApplicatorCovDetail as GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}