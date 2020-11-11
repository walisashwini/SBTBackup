package gw.lob.common.adapters

uses gw.coverage.CoverageAdapterBase

abstract class LobCoverageAdapter<T extends Coverage> extends CoverageAdapterBase {
  protected var _owner : T

  var _line: PolicyLine

  construct(owner : T) {
    super(owner)
    _owner = owner
  }

  override property get PolicyLine(): PolicyLine {
    if (_line == null) {
      _line = _owner.OwningCoverable.PolicyLine
    }

    return _line
  }

  override property get CoverageState(): Jurisdiction {
    return OwningCoverable.CoverableState
  }
}