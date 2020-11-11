package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclConstructionMngmtErrorsOmissionsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclConstructionMngmtErrorsOmissionsDTO {

  public construct(_gL7ExclConstructionMngmtErrorsOmissions : GL7ExclConstructionMngmtErrorsOmissions, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclConstructionMngmtErrorsOmissions, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclConstructionMngmtErrorsOmissionsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}