package gw.lob.common.dependency

interface ClauseAvailability<T extends Coverable> {
  function isAvailable(coverable : T) : boolean
}