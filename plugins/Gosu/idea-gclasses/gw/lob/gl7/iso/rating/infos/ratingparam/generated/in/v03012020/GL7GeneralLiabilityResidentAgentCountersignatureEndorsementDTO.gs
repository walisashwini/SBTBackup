package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityResidentAgentCountersignatureEndorsementDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityResidentAgentCountersignatureEndorsementDTO {

  public construct(_gL7ResidentAgentCountersignatureEndorsement : GL7ResidentAgentCountersignatureEndorsement, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ResidentAgentCountersignatureEndorsement, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityResidentAgentCountersignatureEndorsementDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}