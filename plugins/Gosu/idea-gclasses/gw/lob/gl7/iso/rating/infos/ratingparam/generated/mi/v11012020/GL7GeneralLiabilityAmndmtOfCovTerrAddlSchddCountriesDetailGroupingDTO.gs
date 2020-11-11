package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO> {

  public construct(_gL7SublineTypeSchCondItems : GL7SublineTypeSchCondItem[], parent : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO) {
    super( _gL7SublineTypeSchCondItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItems
    _all = _gL7SublineTypeSchCondItems.map(\obj -> new GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO {
   return _current as GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfCovTerrAddlSchddCountriesDTO {
   return _parent
  }
  

  
}