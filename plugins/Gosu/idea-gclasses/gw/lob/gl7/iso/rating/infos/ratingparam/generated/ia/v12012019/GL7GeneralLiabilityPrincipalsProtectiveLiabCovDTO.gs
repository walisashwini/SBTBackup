package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPrincipalsProtectiveLiabCovDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPrincipalsProtectiveLiabCovDTO {

  public construct(_gL7PrincipalsProtectiveLiabCov : GL7PrincipalsProtectiveLiabCov, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PrincipalsProtectiveLiabCov, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPrincipalsProtectiveLiabCovDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}