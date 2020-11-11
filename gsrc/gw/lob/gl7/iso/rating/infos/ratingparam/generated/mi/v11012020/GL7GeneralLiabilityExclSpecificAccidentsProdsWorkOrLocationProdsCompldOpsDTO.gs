package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDTO {

  public construct(_gL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo : GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo, parent )
    _exclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetail = _gL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailGroupingDTO(_gL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetail() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailGroupingDTO {
   return _exclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetail as GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}