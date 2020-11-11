package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO> {

  public construct(_gL7SublineTypeSchCondItems : GL7SublineTypeSchCondItem[], parent : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO) {
    super( _gL7SublineTypeSchCondItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItems
    _all = _gL7SublineTypeSchCondItems.map(\obj -> new GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO {
   return _current as GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO {
   return _parent
  }
  

  
}