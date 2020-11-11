package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO) {
    super( _gL7SublineTypeSchCondItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO {
   return _parent as GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO
  }
  

  
}