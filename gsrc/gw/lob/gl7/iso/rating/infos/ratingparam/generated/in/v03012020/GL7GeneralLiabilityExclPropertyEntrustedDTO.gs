package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclPropertyEntrustedDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclPropertyEntrustedDTO {

  public construct(_gL7ExclPropertyEntrusted : GL7ExclPropertyEntrusted, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclPropertyEntrusted, parent )
    _exclPropertyEntrustedDetail = _gL7ExclPropertyEntrusted.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclPropertyEntrustedDetailGroupingDTO(_gL7ExclPropertyEntrusted.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclPropertyEntrustedDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclPropertyEntrustedDetail() : GL7GeneralLiabilityExclPropertyEntrustedDetailGroupingDTO {
   return _exclPropertyEntrustedDetail as GL7GeneralLiabilityExclPropertyEntrustedDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}