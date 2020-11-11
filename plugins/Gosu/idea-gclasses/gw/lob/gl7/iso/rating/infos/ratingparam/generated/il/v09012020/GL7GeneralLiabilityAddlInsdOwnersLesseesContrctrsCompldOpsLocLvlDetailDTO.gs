package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO) {
    super( _gL7LocationSchedCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO {
   return _parent as GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO
  }
  

  
}