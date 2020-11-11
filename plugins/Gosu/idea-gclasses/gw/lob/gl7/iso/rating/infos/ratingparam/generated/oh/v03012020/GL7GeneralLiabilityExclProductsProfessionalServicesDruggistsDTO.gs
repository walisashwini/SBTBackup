package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclProductsProfessionalServicesDruggistsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclProductsProfessionalServicesDruggistsDTO {

  public construct(_gL7ExclProdsProfessionalServicesDruggists : GL7ExclProdsProfessionalServicesDruggists, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclProdsProfessionalServicesDruggists, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclProductsProfessionalServicesDruggistsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}