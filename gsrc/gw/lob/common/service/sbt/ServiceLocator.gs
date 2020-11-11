package gw.lob.common.service.sbt

uses java.util.Map
uses gw.lob.common.sbt.schedules.impl.ScheduleConfigXMLSource
uses gw.lob.common.sbt.schedules.ScheduleConfigSource

class ServiceLocator {

  static var _services : Map<Type<Object>, Object>  = {
      ScheduleConfigSource -> new ScheduleConfigXMLSource()
  }

  reified static function get<T>(type : Type<T>) : T {
    var instance = _services.get(type)
    if (instance == null) {
      throw "type ${type} is not a supported service"
    }
    return instance as T
  }

  /*
   * This function is meant to be used in testing, so
   * that a service implementation can be swapped out with a
   * fake, or mock, implementation
   */
  static function set<T>(type : Type<T>, instance : T) {
    _services.put(type, instance)
  }

}
