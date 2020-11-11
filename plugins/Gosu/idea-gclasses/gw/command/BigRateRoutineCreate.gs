package gw.command

uses gw.rating.flow.BigRateRoutine

@Export
@DefaultMethod("createRoutine")
class BigRateRoutineCreate extends BaseCommand {

  function createRoutine() {
    BigRateRoutine.getOrCreateBigRateRoutine()
  }
}