package gw.lob.common.availability

uses gw.api.domain.covterm.OptionCovTerm
uses gw.lang.reflect.IMethodCallHandler
uses gw.lang.reflect.IMethodInfo
uses gw.util.Pair

uses java.util.Map

class OptionCovTermAvailabilityHandlerUtil {

  static var _handlers : Map<Pair<String,String>, IMethodCallHandler> = null

  static function handlerFor(clausePatternCode : String, covTermPatternCode : String) : IMethodCallHandler {
    if (_handlers == null) {
      init()
    }
    return _handlers.get(Pair.make(clausePatternCode, covTermPatternCode))
  }

  static private function init() {
    _handlers = OptionCovTerm.Type.TypeInfo.Methods
      .where(\ method -> method.Annotations.hasMatch(\ ann -> ann.Type == gw.lob.common.annotations.Availability.Type))
      .mapToKeyAndValue(\ m -> keyMapper(m), \ m -> m.CallHandler)
  }

  static private function keyMapper(method : IMethodInfo) : Pair<String, String> {
    var ann = method.Annotations.firstWhere(\ ann -> ann.Type == gw.lob.common.annotations.Availability.Type)
    var instance = ann.Instance as gw.lob.common.annotations.Availability
    return Pair.make(instance.ClausePattern, instance.CovTermPattern)
  }

}