package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO {

  public construct(_gL7AddlInsdLessorLeasedEquipmt : GL7AddlInsdLessorLeasedEquipmt, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdLessorLeasedEquipmt, parent )
    _addlInsdLessorLeasedEquipmtDetail = _gL7AddlInsdLessorLeasedEquipmt.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailGroupingDTO(_gL7AddlInsdLessorLeasedEquipmt.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdLessorLeasedEquipmtDetail() : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailGroupingDTO {
   return _addlInsdLessorLeasedEquipmtDetail as GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}