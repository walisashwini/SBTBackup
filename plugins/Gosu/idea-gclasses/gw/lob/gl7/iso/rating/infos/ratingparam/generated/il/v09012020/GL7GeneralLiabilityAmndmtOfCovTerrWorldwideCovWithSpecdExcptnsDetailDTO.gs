package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO) {
    super( _gL7SublineTypeSchCondItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO {
   return _parent as GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO
  }
  

  
}