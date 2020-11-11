package gw.lob.common.parameters

uses java.util.List

class AdditionalParameter {
  var parameterName: String as readonly ParameterName
  var parameterValues: List<String> as readonly ParameterValues = {}
  construct(paramName: String, paramValues: List<String>) {
    parameterName = paramName
    parameterValues = paramValues
  }
}