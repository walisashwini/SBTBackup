package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityEarlierNoticeOfCancellationProvidedByUsOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityEarlierNoticeOfCancellationProvidedByUsOwnersContractorsDTO {

  public construct(_gL7EarlierNoticeOfCancellationProvidedByUsOwnersCo : GL7EarlierNoticeOfCancellationProvidedByUsOwnersCo, parent : GL7GeneralLiabilityDTO) {
    super( _gL7EarlierNoticeOfCancellationProvidedByUsOwnersCo, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityEarlierNoticeOfCancellationProvidedByUsOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}