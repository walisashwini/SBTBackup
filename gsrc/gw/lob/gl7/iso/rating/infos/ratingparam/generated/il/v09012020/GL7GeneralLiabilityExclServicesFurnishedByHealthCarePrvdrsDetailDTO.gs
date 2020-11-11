package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO {
   return _parent as GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO
  }
  

  
}