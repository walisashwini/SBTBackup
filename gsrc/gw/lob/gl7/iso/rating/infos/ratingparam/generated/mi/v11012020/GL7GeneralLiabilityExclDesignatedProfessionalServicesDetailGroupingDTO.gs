package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclDesignatedProfessionalServicesDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailDTO {
   return _current as GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclDesignatedProfessionalServicesDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedProfessionalServicesDTO {
   return _parent
  }
  

  
}