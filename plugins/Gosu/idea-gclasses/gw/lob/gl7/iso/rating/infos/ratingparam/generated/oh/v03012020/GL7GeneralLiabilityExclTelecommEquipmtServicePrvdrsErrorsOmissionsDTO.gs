package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclTelecommEquipmtServicePrvdrsErrorsOmissionsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclTelecommEquipmtServicePrvdrsErrorsOmissionsDTO {

  public construct(_gL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions : GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclTelecommEquipmtServicePrvdrsErrorsOmissionsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}