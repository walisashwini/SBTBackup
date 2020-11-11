package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO {
   return _parent as GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO
  }
  

  
}