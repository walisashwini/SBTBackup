package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailDTO {
   return _current as GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovOwnersContractorsDTO {
   return _parent
  }
  

  
}