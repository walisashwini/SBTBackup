package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityEarlierNoticeOfCancellationProvidedByUsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityEarlierNoticeOfCancellationProvidedByUsDTO {

  public construct(_gL7EarlierNoticeOfCancellationProvidedByUs : GL7EarlierNoticeOfCancellationProvidedByUs, parent : GL7GeneralLiabilityDTO) {
    super( _gL7EarlierNoticeOfCancellationProvidedByUs, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityEarlierNoticeOfCancellationProvidedByUsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}