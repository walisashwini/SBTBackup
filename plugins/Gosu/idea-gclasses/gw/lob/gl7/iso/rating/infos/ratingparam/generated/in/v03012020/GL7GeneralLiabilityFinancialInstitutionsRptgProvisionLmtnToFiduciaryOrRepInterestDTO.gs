package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityFinancialInstitutionsRptgProvisionLmtnToFiduciaryOrRepInterestDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityFinancialInstitutionsRptgProvisionLmtnToFiduciaryOrRepInterestDTO {

  public construct(_gL7FinancialInstitutionsRptgProvisionLmtnToFiducia : GL7FinancialInstitutionsRptgProvisionLmtnToFiducia, parent : GL7GeneralLiabilityDTO) {
    super( _gL7FinancialInstitutionsRptgProvisionLmtnToFiducia, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityFinancialInstitutionsRptgProvisionLmtnToFiduciaryOrRepInterestDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}