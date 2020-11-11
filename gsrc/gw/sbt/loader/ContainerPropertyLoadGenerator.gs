package gw.sbt.loader

uses gw.sbt.artifacts.versioned.ContainerKey
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.loader.merger.VersionedConfigMerger
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.stateupdate.StateUpdateLoadGenerator
uses gw.sbt.model.UpdateDecision

class ContainerPropertyLoadGenerator extends StateUpdateLoadGenerator {

  var _decisionsMap : Map<String, UpdateDecision> as DecisionsMap = {}
  var _configType : ContainerPropertyConfigType

  construct(adoptionDate : Date, jurisdiction : String, isIndependentState : boolean, messageReporter : MessageReporter, configType : ContainerPropertyConfigType) {
    super(null, null, null)
    _jurisdiction = jurisdiction
    _isIndependentState = isIndependentState
    _adoptionDate = adoptionDate
    _messageReporter = messageReporter
    _configType = configType
  }

  function withDecisionsMap(decisionMap: Map<String, UpdateDecision>) : ContainerPropertyLoadGenerator {
    _decisionsMap = decisionMap
    return this
  }

  function generateLoad(currentContainerPropertyConfig : ContainerPropertyConfig,
                        updateContainerPropertyConfig : ContainerPropertyConfig,
                        adoptedContainerPropertyConfig : ContainerPropertyConfig,
                        createLoadOp(currentContainerPropertyConfig : ContainerPropertyConfig) : LoadOp) : Load {
    if (currentContainerPropertyConfig == null) {
      var resultContainerPropertyConfig = updateContainerPropertyConfig
      resultContainerPropertyConfig.useAdoptionDate(AdoptionDate)
      var load = new Load<ContainerPropertyConfig>(resultContainerPropertyConfig)
      load.add(createLoadOp(resultContainerPropertyConfig))
      return load
    } else {
      var resultContainerPropertyConfig = createResultContainerPropertyConfigModel(currentContainerPropertyConfig,
          updateContainerPropertyConfig, adoptedContainerPropertyConfig)
      var load = new Load<ContainerPropertyConfig>(resultContainerPropertyConfig)
      load.add(createLoadOp(resultContainerPropertyConfig))
      return load
    }
  }

  function createResultContainerPropertyConfigModel(currentContainerPropertyConfig : ContainerPropertyConfig,
                                                    updateContainerPropertyConfig : ContainerPropertyConfig,
                                                    adoptedContainerPropertyConfig : ContainerPropertyConfig) : ContainerPropertyConfig {
    var currentContainerKeys = currentContainerPropertyConfig.ContainerKeys?: new HashSet<ContainerKey> ()
    var updateContainerKeys = updateContainerPropertyConfig.ContainerKeys?: new HashSet<ContainerKey> ()
    var adoptedContainerKeys = adoptedContainerPropertyConfig.ContainerKeys?: new HashSet<ContainerKey> ()
    var isStateUpdate = adoptedContainerPropertyConfig != null

    var unionOfContainerKeys = updateContainerKeys.union(currentContainerKeys)
    unionOfContainerKeys.each(\containerKey -> {
      // It is a NEW container for the new config  (ADD case)
      if(not currentContainerKeys.contains(containerKey)) {
        //for lob-field-meta (RiskAttribute), the 'available' is already flipped over if the decision is 'REJECT'
        new VersionedConfigMerger(MessageReporter, _configType).addContainerForJurisdiction(currentContainerPropertyConfig, updateContainerPropertyConfig, containerKey, Jurisdiction, AdoptionDate)
      }
      // It is a container that doesn not exist in new config, but exists in the adopted and current config (REMOVE case)
      else if (not updateContainerKeys.contains(containerKey) and (adoptedContainerKeys.contains(containerKey) or (_isIndependentState and !isStateUpdate))) {
        new VersionedConfigMerger(MessageReporter, _configType).expireContainerForJurisdiction(DecisionsMap, currentContainerPropertyConfig, updateContainerPropertyConfig, containerKey, Jurisdiction, AdoptionDate)
      }
      // the container exists both in current and new config (DELTA case)
      else if (updateContainerKeys.contains(containerKey)){
        new VersionedConfigMerger(MessageReporter, _configType).mergeContainerForJurisdiction(DecisionsMap, currentContainerPropertyConfig, updateContainerPropertyConfig, adoptedContainerPropertyConfig, containerKey, Jurisdiction, AdoptionDate, _isIndependentState)
      }
    })

    // cw case
    if (ExistenceConfigCache.getInstance().HasElements and _configType == ContainerPropertyConfigType.EXISTENCE_CONFIG) {
      var existenceConfigCacheConfig = ExistenceConfigCache.getInstance().generateContainerPropertyConfig()
      var existenceConfigCacheContainerKeys = existenceConfigCacheConfig.ContainerKeys?: new HashSet<ContainerKey>()
      existenceConfigCacheContainerKeys.each(\containerKey -> {
        if(not currentContainerKeys.contains(containerKey)) {
          new VersionedConfigMerger(MessageReporter, _configType).addContainerFromExistenceCache(currentContainerPropertyConfig,
              existenceConfigCacheConfig, containerKey, AdoptionDate)
        }
        else if (existenceConfigCacheContainerKeys.contains(containerKey)){
          new VersionedConfigMerger(MessageReporter, _configType).mergeContainerFromExistenceCache(currentContainerPropertyConfig,
              existenceConfigCacheConfig, containerKey, AdoptionDate)
        }
      })

    }


    return currentContainerPropertyConfig
  }
}