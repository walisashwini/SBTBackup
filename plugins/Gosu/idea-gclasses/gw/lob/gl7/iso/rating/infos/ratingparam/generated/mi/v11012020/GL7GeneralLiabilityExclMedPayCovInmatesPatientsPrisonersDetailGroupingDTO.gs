package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO {
   return _current as GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO {
   return _parent
  }
  

  
}