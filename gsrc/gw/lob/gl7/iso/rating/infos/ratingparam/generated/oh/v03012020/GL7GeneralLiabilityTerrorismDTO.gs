package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTerrorismDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTerrorismDTO {

  public construct(_gL7Terr : GL7Terr, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7Terr, parent )
    var tempAsDataModel = ParentLineModelObject.AsDataModel
    _terrorismAllOtherSublineCoverage = tempAsDataModel.GL7TerrAllOtherSubline != null ? new GL7GeneralLiabilityTerrorismAllOtherSublineCoverageDTO(tempAsDataModel.GL7TerrAllOtherSubline, this) : null
    _terrorismPremOpsCoverage = tempAsDataModel.GL7TerrPremOps != null ? new GL7GeneralLiabilityTerrorismPremOpsCoverageDTO(tempAsDataModel.GL7TerrPremOps, this) : null
    _terrorismProdsCompldOpsCoverage = tempAsDataModel.GL7TerrProdsCompldOps != null ? new GL7GeneralLiabilityTerrorismProdsCompldOpsCoverageDTO(tempAsDataModel.GL7TerrProdsCompldOps, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTerrorismDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get TerrorismProdsCompldOpsCoverage() : GL7GeneralLiabilityTerrorismProdsCompldOpsCoverageDTO {
   return _terrorismProdsCompldOpsCoverage as GL7GeneralLiabilityTerrorismProdsCompldOpsCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get TerrorismPremOpsCoverage() : GL7GeneralLiabilityTerrorismPremOpsCoverageDTO {
   return _terrorismPremOpsCoverage as GL7GeneralLiabilityTerrorismPremOpsCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get TerrorismAllOtherSublineCoverage() : GL7GeneralLiabilityTerrorismAllOtherSublineCoverageDTO {
   return _terrorismAllOtherSublineCoverage as GL7GeneralLiabilityTerrorismAllOtherSublineCoverageDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent as GL7GeneralLiabilityClassificationDTO
  }
  

  
}