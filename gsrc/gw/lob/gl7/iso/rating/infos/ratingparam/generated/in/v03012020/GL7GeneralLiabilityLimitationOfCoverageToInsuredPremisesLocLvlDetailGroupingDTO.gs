package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO {
   return _current as GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO {
   return _parent
  }
  

  
}