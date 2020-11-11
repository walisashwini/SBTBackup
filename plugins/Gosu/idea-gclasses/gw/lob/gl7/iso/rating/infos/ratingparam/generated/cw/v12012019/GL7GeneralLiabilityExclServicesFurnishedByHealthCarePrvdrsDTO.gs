package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclServicesFurnishedByHealthCarePrvdrs : GL7ExclServicesFurnishedByHealthCarePrvdrs, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclServicesFurnishedByHealthCarePrvdrs
    _displayName = _gL7ExclServicesFurnishedByHealthCarePrvdrs.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclServicesFurnishedByHealthCarePrvdrsDetail : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailGroupingDTO as readonly ExclServicesFurnishedByHealthCarePrvdrsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclServicesFurnishedByHealthCarePrvdrs {
   return _dataModel as GL7ExclServicesFurnishedByHealthCarePrvdrs
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