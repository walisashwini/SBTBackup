package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclLoggingLumberingOperationsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclLoggingLumberingOperationsDTO {

  public construct(_gL7ExclLoggingLumberingOps : GL7ExclLoggingLumberingOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclLoggingLumberingOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclLoggingLumberingOperationsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}