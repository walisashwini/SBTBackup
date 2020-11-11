package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO {

  public construct(_gL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns : GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns, parent )
    _amndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetail = _gL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailGroupingDTO(_gL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetail() : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailGroupingDTO {
   return _amndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetail as GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}