package gw.lob.common.dependency

interface CalculatedDependency<T> {

  property get CalculationMethodName(): String

  property get CalculationMethodParameters(): Class[]

  function getCalculatedValue(classPath : String, args : Object[]) : T
}