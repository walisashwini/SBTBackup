package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO {
   return _current as GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDTO {
   return _parent
  }
  

  
}