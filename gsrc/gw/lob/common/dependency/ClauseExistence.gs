package gw.lob.common.dependency

interface ClauseExistence<T extends Coverable> {
  function isExistenceConditionMet(coverable : T) : boolean
}