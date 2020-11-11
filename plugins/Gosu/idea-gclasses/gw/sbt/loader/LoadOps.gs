package gw.sbt.loader

uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses java.util.Stack
uses java.util.List

class LoadOps {

  var _ops : List<LoadOp> as readonly Ops
  var _performedOps: Stack<LoadOp> as readonly CommittedOps
  var _hasProductModelOps : boolean
  var _hasSystemTablesOps : boolean

  construct() {
    _ops = {}
    _performedOps = {}
  }

  function add(op : LoadOp) {
    if (op.isProductModelOp()) _hasProductModelOps = true
    if (op.isSystemTablesOp()) _hasSystemTablesOps = true
    _ops.add(op)
  }

  function commit(writer : SBTUpdateLoaderWriter) {
    _ops.each( \ op -> {
      _performedOps.push(op)
      op.perform(writer)
    })
  }

  function undo(writer : SBTUpdateLoaderWriter) {
    _performedOps.each( \ op -> op.undo(writer))
  }

  property get HasProductModelOps() : boolean {
    return _hasProductModelOps
  }

  property get HasSystemTablesOps() : boolean {
    return _hasSystemTablesOps
  }

  property get HasOps() : boolean {
    return Ops.HasElements
  }
}