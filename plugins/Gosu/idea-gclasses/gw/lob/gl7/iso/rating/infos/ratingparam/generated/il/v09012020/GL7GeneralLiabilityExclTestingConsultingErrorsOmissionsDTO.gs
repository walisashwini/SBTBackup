package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclTestingConsultingErrorsOmissionsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclTestingConsultingErrorsOmissionsDTO {

  public construct(_gL7ExclTestingConsultingErrorsOmissions : GL7ExclTestingConsultingErrorsOmissions, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclTestingConsultingErrorsOmissions, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclTestingConsultingErrorsOmissionsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}