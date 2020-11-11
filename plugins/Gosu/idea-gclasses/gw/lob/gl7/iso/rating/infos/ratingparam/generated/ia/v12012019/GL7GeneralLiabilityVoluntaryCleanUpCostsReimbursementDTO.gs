package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityVoluntaryCleanUpCostsReimbursementDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityVoluntaryCleanUpCostsReimbursementDTO {

  public construct(_gL7VoluntaryCleanUpCostsReimbursement : GL7VoluntaryCleanUpCostsReimbursement, parent : GL7GeneralLiabilityDTO) {
    super( _gL7VoluntaryCleanUpCostsReimbursement, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityVoluntaryCleanUpCostsReimbursementDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}