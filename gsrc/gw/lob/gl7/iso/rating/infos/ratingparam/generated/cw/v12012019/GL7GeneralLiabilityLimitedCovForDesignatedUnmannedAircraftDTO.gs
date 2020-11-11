package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftDTO extends gw.rating.LineModelObject {

  public construct(_gL7LmtdCovForDesignatedUnmannedAircraf1 : GL7LmtdCovForDesignatedUnmannedAircraf1, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7LmtdCovForDesignatedUnmannedAircraf1
    _displayName = _gL7LmtdCovForDesignatedUnmannedAircraf1.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LmtdCovForDesignatedUnmannedAircraf1 {
   return _dataModel as GL7LmtdCovForDesignatedUnmannedAircraf1
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}