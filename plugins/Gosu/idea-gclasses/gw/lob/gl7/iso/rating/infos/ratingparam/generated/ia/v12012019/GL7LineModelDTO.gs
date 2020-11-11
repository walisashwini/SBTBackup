package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7LineModelDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7LineModelDTO {

  public construct(line : GL7GeneralLiabilityLine, parameters : gw.lob.common.parameters.Parameters) {
    super( line )
    _currentJurisdiction = Jurisdiction.get(parameters.getParam("Jurisdiction"))
    _generalLiability = line != null ? new GL7GeneralLiabilityDTO(line, parameters) : null
  }

  var _currentJurisdiction : Jurisdiction
  
  
  @VisibleInRateflow(false)
  override property get CurrentJurisdiction() : Jurisdiction {
   return _currentJurisdiction
  }
  

  
  @VisibleInRateflow
  property get GeneralLiability() : GL7GeneralLiabilityDTO {
   return _generalLiability as GL7GeneralLiabilityDTO
  }
  

  
}