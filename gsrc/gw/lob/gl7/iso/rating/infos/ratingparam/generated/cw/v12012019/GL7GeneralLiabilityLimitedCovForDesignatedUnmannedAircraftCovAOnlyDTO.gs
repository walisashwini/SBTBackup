package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftCovAOnlyDTO extends gw.rating.LineModelObject {

  public construct(_gL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1 : GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1
    _displayName = _gL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftCovAOnlyDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1 {
   return _dataModel as GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1
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