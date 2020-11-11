package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDTO {
   return _parent
  }
  

  
}