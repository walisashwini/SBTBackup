package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO {
   return _parent as GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO
  }
  

  
}