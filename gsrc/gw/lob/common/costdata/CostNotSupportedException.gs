package gw.lob.common.costdata

uses java.lang.RuntimeException

class CostNotSupportedException extends RuntimeException {
  construct(message: String) {
    super(message)
  }
}