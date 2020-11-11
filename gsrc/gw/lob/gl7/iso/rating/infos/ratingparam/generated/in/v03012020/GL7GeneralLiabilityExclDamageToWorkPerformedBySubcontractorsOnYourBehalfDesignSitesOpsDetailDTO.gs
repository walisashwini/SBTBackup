package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO {

  public construct(_gL7LocationSchedExclItem : GL7LocationSchedExclItem, parent : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO) {
    super( _gL7LocationSchedExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO {
   return _parent as GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO
  }
  

  
}