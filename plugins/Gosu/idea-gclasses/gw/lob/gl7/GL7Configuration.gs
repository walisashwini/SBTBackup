package gw.lob.gl7

uses gw.policy.PolicyLineConfiguration
uses gw.plugin.rateflow.IRateRoutineConfig
uses gw.rating.LOBRateRoutineConfig
uses gw.api.productmodel.PolicyLinePatternLookup

class GL7Configuration extends PolicyLineConfiguration{

  override property get RateRoutineConfig() : IRateRoutineConfig {
    return new LOBRateRoutineConfig()
  }

  override property get AllowedCurrencies() : List<Currency>  {
    var pattern = PolicyLinePatternLookup.getByPublicID(InstalledPolicyLine.TC_GL7.UnlocalizedName)
    return pattern.AvailableCurrenciesByPriority
  }

}
