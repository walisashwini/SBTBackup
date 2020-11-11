package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProfessionalLiabExclElectronicDataProcgSrvcCompuConsultingProgrammingSrvcDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProfessionalLiabExclElectronicDataProcgSrvcCompuConsultingProgrammingSrvcDTO {

  public construct(_gL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon : GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProfessionalLiabExclElectronicDataProcgSrvcCompuConsultingProgrammingSrvcDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}