package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO {
   return _parent as GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO
  }
  

  
}