package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAmndmtOfLimitsOfInsDTO extends gw.rating.LineModelObject {

  public construct(_gL7AmndmtOfLmtsOfIns : GL7AmndmtOfLmtsOfIns, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AmndmtOfLmtsOfIns
    _damageToPremRentedToYouLimit = _cf.makeStringFrom (_gL7AmndmtOfLmtsOfIns.GL7DamageToPremRentedToYouLimitTerm.Value)
    _eachOccurrenceLimit = _cf.makeStringFrom (_gL7AmndmtOfLmtsOfIns.GL7EachOccurrenceLimitTerm.Value)
    _generalAggregateLimit = _cf.makeStringFrom (_gL7AmndmtOfLmtsOfIns.GL7GeneralAggLimitTerm.Value)
    _manualPremium = _gL7AmndmtOfLmtsOfIns.GL7ManualPremium16Term.Value
    _medicalExpenseLimit = _cf.makeStringFrom (_gL7AmndmtOfLmtsOfIns.GL7MedicalExpenseLimitTerm.Value)
    _persAndAdvertInjLimit = _cf.makeStringFrom (_gL7AmndmtOfLmtsOfIns.GL7PersAndAdvertInjLimitTerm.Value)
    _prodCompOpsAggregateLimit = _cf.makeStringFrom (_gL7AmndmtOfLmtsOfIns.GL7ProdCompOpsAggLimitTerm.Value)
    _displayName = _gL7AmndmtOfLmtsOfIns.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfLimitsOfInsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _prodCompOpsAggregateLimit : java.lang.String as ProdCompOpsAggregateLimit = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _persAndAdvertInjLimit : java.lang.String as PersAndAdvertInjLimit = ""

  @VisibleInRateflow
  protected var _medicalExpenseLimit : java.lang.String as MedicalExpenseLimit = ""

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _generalAggregateLimit : java.lang.String as GeneralAggregateLimit = ""

  @VisibleInRateflow
  protected var _eachOccurrenceLimit : java.lang.String as EachOccurrenceLimit = ""

  @VisibleInRateflow
  protected var _damageToPremRentedToYouLimit : java.lang.String as DamageToPremRentedToYouLimit = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AmndmtOfLmtsOfIns {
   return _dataModel as GL7AmndmtOfLmtsOfIns
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