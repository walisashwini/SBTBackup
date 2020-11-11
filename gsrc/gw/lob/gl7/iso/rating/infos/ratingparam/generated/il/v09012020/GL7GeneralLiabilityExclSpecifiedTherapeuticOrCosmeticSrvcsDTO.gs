package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDTO {

  public construct(_gL7ExclSpecifiedTherapeuticOrCosmeticSrvcs : GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclSpecifiedTherapeuticOrCosmeticSrvcs, parent )
    _exclSpecifiedTherapeuticOrCosmeticSrvcsDetail = _gL7ExclSpecifiedTherapeuticOrCosmeticSrvcs.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailGroupingDTO(_gL7ExclSpecifiedTherapeuticOrCosmeticSrvcs.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclSpecifiedTherapeuticOrCosmeticSrvcsDetail() : GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailGroupingDTO {
   return _exclSpecifiedTherapeuticOrCosmeticSrvcsDetail as GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}