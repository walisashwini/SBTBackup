package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO extends gw.rating.LineModelObject {

  public construct(_gL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs : GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs
    _displayName = _gL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _amndmtOfSectVExtddRptgPeriodsSpecificAccsDetail : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailGroupingDTO as readonly AmndmtOfSectVExtddRptgPeriodsSpecificAccsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs {
   return _dataModel as GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs
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