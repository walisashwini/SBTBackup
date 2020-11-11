package gw.sbt.loader

uses java.lang.Throwable

class FailedLoad {

  var _exception : Throwable as Exception
  var _load : Load as Load

  construct(exception : Throwable, load : Load) {
    _exception = exception
    _load = load
  }
}