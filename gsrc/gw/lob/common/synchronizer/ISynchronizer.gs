package gw.lob.common.synchronizer

uses gw.lob.common.dependency.PropertyInstanceInfo

/**
 * Generic interface which should be used by the SyncPropertyMeta framework to perform the synchronization
*/
interface ISynchronizer<T extends PolicyLine> {

  function synchronizeBeforeChange( propInst : PropertyInstanceInfo )
  function synchronizeAfterChange( propInst : PropertyInstanceInfo )
  function synchronizeBeforeQuote( propInst : PropertyInstanceInfo , pLine : T)

}