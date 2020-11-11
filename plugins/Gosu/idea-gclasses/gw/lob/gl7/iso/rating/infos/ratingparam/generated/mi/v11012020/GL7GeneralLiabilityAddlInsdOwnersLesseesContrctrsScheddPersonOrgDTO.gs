package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDTO {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg : GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg, parent )
    _addlInsdOwnersLesseesContrctrsScheddPersonOrgDetail = _gL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailGroupingDTO(_gL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdOwnersLesseesContrctrsScheddPersonOrgDetail() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailGroupingDTO {
   return _addlInsdOwnersLesseesContrctrsScheddPersonOrgDetail as GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}