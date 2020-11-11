package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO> {

  public construct(_gL7SublineTypeSchCondItems : GL7SublineTypeSchCondItem[], parent : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO) {
    super( _gL7SublineTypeSchCondItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItems
    _all = _gL7SublineTypeSchCondItems.map(\obj -> new GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO {
   return _current as GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO {
   return _parent
  }
  

  
}