package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityClassificationPollutionCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityClassificationPollutionCoverageDTO {

  public construct(_gL7ClassificationPollution : GL7ClassificationPollution, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7ClassificationPollution, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationPollutionCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   return 1
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent as GL7GeneralLiabilityClassificationDTO
  }
  

  
}