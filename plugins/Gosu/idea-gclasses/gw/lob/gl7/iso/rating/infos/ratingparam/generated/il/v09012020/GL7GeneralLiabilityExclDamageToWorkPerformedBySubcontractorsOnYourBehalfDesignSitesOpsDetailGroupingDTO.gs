package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO> {

  public construct(_gL7LocationSchedExclItems : GL7LocationSchedExclItem[], parent : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO) {
    super( _gL7LocationSchedExclItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedExclItems
    _all = _gL7LocationSchedExclItems.map(\obj -> new GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO {
   return _current as GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO {
   return _parent
  }
  

  
}