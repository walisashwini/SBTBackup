package gw.lob.common.dependency

class CalculatedDependencyUtil {

  static function getClassPathIfItExistsFor(orCondition : ConditionalClause) : String {
    // Need to drill down two levels to find the classPath attribute
    if (orCondition.Clauses.Count == 1) {
      var andCondition = orCondition.Clauses.first()
      if (andCondition.Clauses.Count == 1) {
        return andCondition.Clauses.first().ClassPath
      }
    }

    return null
  }

  reified static function getCalculatedValue<T>(classPath: String, args: Object[], calculatedDependency: CalculatedDependency): T {
    var clazz = Class.forName(classPath)
    var method = clazz.getDeclaredMethod(calculatedDependency.CalculationMethodName, calculatedDependency.CalculationMethodParameters)
    return method.invoke(clazz.newInstance(), args) as T
  }
}