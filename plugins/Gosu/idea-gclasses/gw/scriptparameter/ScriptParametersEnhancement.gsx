package gw.scriptparameter

enhancement ScriptParametersEnhancement: ScriptParameters {

  public static property get EnableDisplayBasicSearchTab(): Boolean {
    return ScriptParameters.getParameterValue("EnableDisplayBasicSearchTab") as Boolean
  }

  public static property get HOPQuoteLevel1Indent(): Integer {
    return ScriptParameters.getParameterValue("HOPQuoteLevel1Indent") as Integer
  }

  public static property get HOPQuoteLevel2Indent(): Integer {
    return ScriptParameters.getParameterValue("HOPQuoteLevel2Indent") as Integer
  }

  public static property get HOPQuoteLevel3Indent(): Integer {
    return ScriptParameters.getParameterValue("HOPQuoteLevel3Indent") as Integer
  }

  public static property get APDProductLinesGosuPackage(): String {
    return ScriptParameters.getParameterValue("APDProductLinesGosuPackage") as String
  }

  //Whether or not digital auto generation is allowed for products in APD
  public static property get APDEnableDigitalAutoGenConfig(): boolean {
    return ScriptParameters.getParameterValue("APDEnableDigitalAutoGenConfig") as boolean
  }
}
