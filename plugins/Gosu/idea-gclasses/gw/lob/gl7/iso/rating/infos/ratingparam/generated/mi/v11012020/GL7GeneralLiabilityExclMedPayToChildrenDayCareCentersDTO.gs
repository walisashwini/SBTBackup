package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclMedPayToChildrenDayCareCentersDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclMedPayToChildrenDayCareCentersDTO {

  public construct(_gL7ExclMedPayToChildrenDayCareCenters : GL7ExclMedPayToChildrenDayCareCenters, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclMedPayToChildrenDayCareCenters, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclMedPayToChildrenDayCareCentersDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}