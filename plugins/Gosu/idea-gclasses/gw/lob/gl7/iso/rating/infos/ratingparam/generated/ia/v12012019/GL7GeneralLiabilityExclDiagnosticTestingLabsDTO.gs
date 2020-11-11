package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDiagnosticTestingLabsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDiagnosticTestingLabsDTO {

  public construct(_gL7ExclDiagnosticTestingLabs : GL7ExclDiagnosticTestingLabs, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDiagnosticTestingLabs, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDiagnosticTestingLabsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}