package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDTO {

  public construct(_gL7ConstrctnProjMngmtProtvLiabCov : GL7ConstrctnProjMngmtProtvLiabCov, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ConstrctnProjMngmtProtvLiabCov, parent )
    _constrctnProjMngmtProtvLiabCovDetail = _gL7ConstrctnProjMngmtProtvLiabCov.GL7ScheduledItems != null ? new GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailGroupingDTO(_gL7ConstrctnProjMngmtProtvLiabCov.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ConstrctnProjMngmtProtvLiabCovDetail() : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailGroupingDTO {
   return _constrctnProjMngmtProtvLiabCovDetail as GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}