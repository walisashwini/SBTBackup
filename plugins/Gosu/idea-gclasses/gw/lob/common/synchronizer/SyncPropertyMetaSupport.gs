package gw.lob.common.synchronizer

uses entity.PolicyLine
uses gw.lang.reflect.TypeSystem
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.dependency.GWNode
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.dependency.PropertyPathResolver
uses gw.lob.common.dependency.PropertyTypeInfo
uses gw.util.LRUCache
uses gw.util.concurrent.LockingLazyVar

class SyncPropertyMetaSupport {
  static var _instance = LockingLazyVar.make(\-> new SyncPropertyMetaSupport())
  static var _cache = Collections.synchronizedMap(new LRUCache<String, ISynchronizer>(1000))
  var _syncFieldConfig : SyncPropertyConfig

  private construct() {
    _syncFieldConfig = new SyncPropertyConfig()
  }

  internal construct(cfgPath : String) {
    _syncFieldConfig = new SyncPropertyConfig(cfgPath)
  }

  static property get Instance() : SyncPropertyMetaSupport {
    return _instance.get()
  }

  function executeAllBeforeQuote(pLine : PolicyLine) {
    _syncFieldConfig
        .getAllSyncPropertyMeta(EffectiveJurisdictionCriteria.createForCoverable(pLine as Coverable))
        .where(\syncPropertyMeta -> syncPropertyMeta.isApplicableFor(pLine))
        .each(\syncPropertyMeta -> {
          var ctxObjs = resolveContextObjs(pLine, syncPropertyMeta.ContainerPath)
          syncAllNodes(pLine, syncPropertyMeta.ContainerName, syncPropertyMeta.PropertyName, ctxObjs)
        })
  }

  function executeBeforeChange(propInstInfo : PropertyInstanceInfo) {
    var synchronizer = loadInstance(propInstInfo)
    if (synchronizer != null) {
      synchronizer.synchronizeBeforeChange(propInstInfo)
    }
  }

  function executeAfterChange(propInstInfo : PropertyInstanceInfo) {
    var synchronizer = loadInstance(propInstInfo)
    if (synchronizer != null) {
      synchronizer.synchronizeAfterChange(propInstInfo)
    }
  }

  internal function loadInstance(propInstInfo : PropertyInstanceInfo) : ISynchronizer {
    var cachedItem : ISynchronizer = null
    var syncMeta = _syncFieldConfig.getSyncPropertyMeta(propInstInfo)
    if (syncMeta.SynchronizerClass.HasContent) {
      cachedItem = lookupCachedInstance(syncMeta.SynchronizerClass)
      if (cachedItem == null) {
        try {
          var instance = loadInstance(syncMeta.SynchronizerClass)
          if (instance != null) {
            cachedItem = instance as ISynchronizer
            _cache.put(syncMeta.SynchronizerClass, cachedItem)
          }
        } catch (ex : Exception) {
          throw new SyncPropertyException("Cannot perform synchronization for a field : ${syncMeta.PropertyName} on type : ${syncMeta.SynchronizerClass} due to the following error: ${ex.Message}", ex)
        }
      }
    }
    return cachedItem
  }

  private function lookupCachedInstance(cachedKey : String) : ISynchronizer {
    if (_cache.containsKey(cachedKey)) {
      return _cache.get(cachedKey)
    }
    return null
  }

  private function loadInstance(className : String) : Object {
    var syncClassType = TypeSystem.parseType(className)
    if (ISynchronizer.Type.isAssignableFrom(syncClassType)) {
      var classConstructor = syncClassType.TypeInfo.getCallableConstructor({})
      return classConstructor.Constructor.newInstance({})
    } else {
      throw new IllegalArgumentException("Cannot load an instance of a class: ${className} as it does not implement: ${ISynchronizer.Type.Name} interface !")
    }
  }

  private function resolveContextObjs(pLine : PolicyLine, path : String) : List<GWNode> {
    var objs : List<GWNode>
    if (path.countMatches("/") > 1) {
      var pti = new PropertyTypeInfo(path)
      objs = PropertyPathResolver.getValues(pLine as Coverable, pti)
    } else {
      objs = {new GWNode(pLine as Coverable)}
    }
    return objs
  }

  private function syncAllNodes(line : PolicyLine, containerName : String, propertyName : String, nodes : List<GWNode>) {
    nodes.each(\ctxObj -> {
      if (!ctxObj.isValue()) {
        var propInstInfo = new PropertyInstanceInfo(propertyName, containerName, ctxObj.NodeObject, ctxObj.getChild(propertyName, null))
        var synchronizer = loadInstance(propInstInfo)
        if (synchronizer != null) {
          synchronizer.synchronizeBeforeQuote(propInstInfo, line)
        }
      }
    })
  }
}