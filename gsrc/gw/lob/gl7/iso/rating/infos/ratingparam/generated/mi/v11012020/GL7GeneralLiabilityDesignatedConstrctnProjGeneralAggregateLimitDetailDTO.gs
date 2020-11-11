package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO {
   return _parent as GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO
  }
  

  
}