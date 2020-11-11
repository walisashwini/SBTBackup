package gw.lob.common.parameters

uses java.util.Map

class Parameters {
  public static final var JURISDICTION_PARAMETER_NAME: String = "Jurisdiction"
  var parameters: Map<String, String> = {}
  public function getParam(paramName: String): String {
    return parameters.get(paramName)
  }

  public function withParam(paramName: String, paramValue: String): Parameters {
    parameters.put(paramName, paramValue)
    return this
  }
}