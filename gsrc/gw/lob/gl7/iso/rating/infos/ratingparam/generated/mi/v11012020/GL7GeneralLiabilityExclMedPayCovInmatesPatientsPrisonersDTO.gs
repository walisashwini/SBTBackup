package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO {

  public construct(_gL7ExclMedPayCovInmatesPatientsPrisoners : GL7ExclMedPayCovInmatesPatientsPrisoners, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclMedPayCovInmatesPatientsPrisoners, parent )
    _exclMedPayCovInmatesPatientsPrisonersDetail = _gL7ExclMedPayCovInmatesPatientsPrisoners.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailGroupingDTO(_gL7ExclMedPayCovInmatesPatientsPrisoners.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclMedPayCovInmatesPatientsPrisonersDetail() : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailGroupingDTO {
   return _exclMedPayCovInmatesPatientsPrisonersDetail as GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}