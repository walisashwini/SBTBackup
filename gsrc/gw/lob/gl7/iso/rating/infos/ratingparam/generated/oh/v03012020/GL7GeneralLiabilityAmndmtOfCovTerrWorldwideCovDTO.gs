package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovDTO {

  public construct(_gL7AmndmtOfCovTerrWorldwideCov : GL7AmndmtOfCovTerrWorldwideCov, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmndmtOfCovTerrWorldwideCov, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}