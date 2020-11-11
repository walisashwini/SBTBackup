package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomaticStatusWhenReqdInWrittenConstrctnAgrmtWithYouCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomaticStatusWhenReqdInWrittenConstrctnAgrmtWithYouCompldOpsDTO {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh : GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomaticStatusWhenReqdInWrittenConstrctnAgrmtWithYouCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}