package gw.lob.common.synchronizer

uses java.lang.RuntimeException
uses java.lang.Throwable

class SyncPropertyException extends RuntimeException {
  construct(msg: String) {
    super(msg)
  }

  construct(msg : String, cause : Throwable) {
    super(msg, cause)
  }
}