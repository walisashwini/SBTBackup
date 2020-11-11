package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedProfessionalServicesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedProfessionalServicesDTO {

  public construct(_gL7ExclDesignatedProfessionalServices : GL7ExclDesignatedProfessionalServices, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDesignatedProfessionalServices, parent )
    _exclDesignatedProfessionalServicesDetail = _gL7ExclDesignatedProfessionalServices.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailGroupingDTO(_gL7ExclDesignatedProfessionalServices.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedProfessionalServicesDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclDesignatedProfessionalServicesDetail() : GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailGroupingDTO {
   return _exclDesignatedProfessionalServicesDetail as GL7GeneralLiabilityExclDesignatedProfessionalServicesDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}