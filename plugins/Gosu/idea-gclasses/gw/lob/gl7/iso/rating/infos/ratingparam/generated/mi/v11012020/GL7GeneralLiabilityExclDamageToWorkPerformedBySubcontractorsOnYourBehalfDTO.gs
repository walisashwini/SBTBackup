package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDTO {

  public construct(_gL7ExclDamageToWorkPerformedBySubcontractorsOnYour : GL7ExclDamageToWorkPerformedBySubcontractorsOnYour, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDamageToWorkPerformedBySubcontractorsOnYour, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}