package gw.sbt.loader

uses java.lang.RuntimeException
uses gw.sbt.loader.io.SBTUpdateLoaderWriter

uses java.util.List

class Loads {

  var _loads: List<Load> as AllLoads
  var _failedLoads : List<FailedLoad> as FailedLoads
  var _successfulLoads : List<Load> as SuccessfulLoads

  construct() {
    _loads = {}
    _failedLoads = {}
    _successfulLoads = {}
  }

  function addAll(loads : List<Load>) {
    loads.each( \ load -> add(load))
  }

  function add(load : Load) {
    if(load typeis EmptyLoad or load.LoadOps.HasOps) {
      _loads.add(load)
    }
  }

  function commit(writer : SBTUpdateLoaderWriter) {
    _loads.each( \ load -> {
      try {
        load.commit(writer)

        // Do not add to successfully completed loads if a load requires further manual changes
        if(load.ManualWorkRequired) {
          _failedLoads.add(new FailedLoad(new RuntimeException(load.Messages.join(", ")), load))
        } else {
          _successfulLoads.add(load)
        }
      } catch (e : java.lang.Exception) {
        _failedLoads.add(new FailedLoad(e, load))
      }
    })
  }

  function undo(writer : SBTUpdateLoaderWriter) {
    _loads.reverse().each( \ load -> load.undo(writer))
  }
}