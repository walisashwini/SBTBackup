package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO extends gw.rating.LineModelObject {

  public construct(_gL7AmndmtOfCovTerrAddlSchddCountries : GL7AmndmtOfCovTerrAddlSchddCountries, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AmndmtOfCovTerrAddlSchddCountries
    _displayName = _gL7AmndmtOfCovTerrAddlSchddCountries.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _amndmtOfCovTerrAddlSchddCountriesDetail : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailGroupingDTO as readonly AmndmtOfCovTerrAddlSchddCountriesDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AmndmtOfCovTerrAddlSchddCountries {
   return _dataModel as GL7AmndmtOfCovTerrAddlSchddCountries
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}