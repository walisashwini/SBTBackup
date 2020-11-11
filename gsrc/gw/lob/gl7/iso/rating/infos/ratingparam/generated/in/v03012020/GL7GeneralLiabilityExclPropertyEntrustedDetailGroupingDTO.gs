package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclPropertyEntrustedDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclPropertyEntrustedDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclPropertyEntrustedDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclPropertyEntrustedDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclPropertyEntrustedDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclPropertyEntrustedDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclPropertyEntrustedDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclPropertyEntrustedDetailDTO {
   return _current as GL7GeneralLiabilityExclPropertyEntrustedDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclPropertyEntrustedDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclPropertyEntrustedDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclPropertyEntrustedDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclPropertyEntrustedDTO {
   return _parent
  }
  

  
}