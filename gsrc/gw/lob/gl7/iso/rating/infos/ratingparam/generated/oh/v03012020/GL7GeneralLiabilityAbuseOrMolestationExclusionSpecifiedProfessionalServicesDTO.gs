package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDTO {

  public construct(_gL7AbuseOrMolestationExclSpecifiedProfessionalServ : GL7AbuseOrMolestationExclSpecifiedProfessionalServ, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AbuseOrMolestationExclSpecifiedProfessionalServ, parent )
    _abuseOrMolestationExclusionSpecifiedProfessionalServicesDetail = _gL7AbuseOrMolestationExclSpecifiedProfessionalServ.GL7ScheduledItems != null ? new GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailGroupingDTO(_gL7AbuseOrMolestationExclSpecifiedProfessionalServ.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AbuseOrMolestationExclusionSpecifiedProfessionalServicesDetail() : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailGroupingDTO {
   return _abuseOrMolestationExclusionSpecifiedProfessionalServicesDetail as GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}