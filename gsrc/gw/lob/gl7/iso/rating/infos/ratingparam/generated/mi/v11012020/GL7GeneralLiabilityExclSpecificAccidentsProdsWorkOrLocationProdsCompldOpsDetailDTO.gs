package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDTO {
   return _parent as GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDTO
  }
  

  
}