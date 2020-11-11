package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProfessionalLiabExclWebSiteDesignersDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProfessionalLiabExclWebSiteDesignersDTO {

  public construct(_gL7ProfessionalLiabExclWebSiteDesigners : GL7ProfessionalLiabExclWebSiteDesigners, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ProfessionalLiabExclWebSiteDesigners, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProfessionalLiabExclWebSiteDesignersDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}