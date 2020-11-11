package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl : GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl, parent )
    _addlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetail = _gL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailGroupingDTO(_gL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetail() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailGroupingDTO {
   return _addlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetail as GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}