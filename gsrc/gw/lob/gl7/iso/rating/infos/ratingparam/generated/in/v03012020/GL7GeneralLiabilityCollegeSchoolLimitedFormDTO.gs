package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCollegeSchoolLimitedFormDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCollegeSchoolLimitedFormDTO {

  public construct(_gL7CollegeSchoolLmtdForm : GL7CollegeSchoolLmtdForm, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CollegeSchoolLmtdForm, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCollegeSchoolLimitedFormDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}