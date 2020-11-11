package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO {

  public construct(_gL7ExclDamageToWorkPerformedBySubcontractorsOnYou1 : GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7ExclDamageToWorkPerformedBySubcontractorsOnYou1, parent )
    _exclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetail = _gL7ExclDamageToWorkPerformedBySubcontractorsOnYou1.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailGroupingDTO(_gL7ExclDamageToWorkPerformedBySubcontractorsOnYou1.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetail() : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailGroupingDTO {
   return _exclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetail as GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}