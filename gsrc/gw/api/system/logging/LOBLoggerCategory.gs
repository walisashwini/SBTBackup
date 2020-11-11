package gw.api.system.logging

uses gw.api.system.PCLoggerCategory

class LOBLoggerCategory extends PCLoggerCategory {
  static final var _transformation : org.slf4j.Logger as TRANSFORMATION = createLogger("Transformation")
  static final var _dependency : org.slf4j.Logger as DEPENDENCY = createLogger("Dependency")
}