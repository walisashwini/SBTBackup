package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailDTO {
   return _current as GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovDTO {
   return _parent
  }
  

  
}