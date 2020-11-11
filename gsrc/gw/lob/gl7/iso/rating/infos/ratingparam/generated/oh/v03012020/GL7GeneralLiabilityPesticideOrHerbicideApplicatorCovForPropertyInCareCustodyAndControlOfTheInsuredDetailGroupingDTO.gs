package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailGroupingDTO extends gw.rating.LineModelObject implements gw.rating.Groupable<GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailDTO> {

  public construct(_gL7SublineSchedCovItems : GL7SublineSchedCovItem[], parent : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineSchedCovItems
    _all = _gL7SublineSchedCovItems.map(\obj -> new GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailDTO) {
    _current = current
  }

  @VisibleInRateflow
  var _current : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailDTO as readonly Current  

  @VisibleInRateflow
  var _all : java.util.List<GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailDTO> as readonly All  

  var _parent : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDTO {
   return _parent
  }
  

  
}