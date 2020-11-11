package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclSalineSubstancesContaminationDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclSalineSubstancesContaminationDTO {

  public construct(_gL7ExclSalineSubstancesContamination : GL7ExclSalineSubstancesContamination, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclSalineSubstancesContamination, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclSalineSubstancesContaminationDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}