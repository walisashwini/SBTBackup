package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO {

  public construct(_gL7AmndmtOfCovTerrAddlSchddCountries : GL7AmndmtOfCovTerrAddlSchddCountries, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmndmtOfCovTerrAddlSchddCountries, parent )
    _amndmtOfCovTerrAddlSchddCountriesDetail = _gL7AmndmtOfCovTerrAddlSchddCountries.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailGroupingDTO(_gL7AmndmtOfCovTerrAddlSchddCountries.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmndmtOfCovTerrAddlSchddCountriesDetail() : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailGroupingDTO {
   return _amndmtOfCovTerrAddlSchddCountriesDetail as GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}