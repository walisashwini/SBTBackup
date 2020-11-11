package gw.sbt.loader.stateupdate

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.CurrentEntityConfig
uses gw.sbt.loader.EntityColumnHelper
uses gw.sbt.loader.Load
uses gw.sbt.loader.TypeSystemCurrentEntityConfig
uses gw.sbt.loader.io.EntityAddition
uses gw.sbt.loader.io.EntityExtensionAddition
uses gw.sbt.loader.io.EntityLineExtensionAddition
uses gw.sbt.loader.io.EntityStateExtensionAddition
uses gw.sbt.loader.io.FileAddition
uses gw.sbt.loader.reporter.MessageReporter
uses org.slf4j.LoggerFactory

class EntityLoadGenerator extends StateUpdateLoadGenerator {
  var _currentEntityConfig : CurrentEntityConfig

  construct(
      currentContents : CurrentConfigContents,
      updateContents : SBTUpdateContents,
      messageReporter : MessageReporter,
      currentEntityConfig : CurrentEntityConfig = null
  ) {
    super(currentContents, updateContents, null)
    _messageReporter = messageReporter
    _currentEntityConfig = currentEntityConfig ?: new TypeSystemCurrentEntityConfig()
  }

  function generateLoad() : Load {
    var load = new Load<Entity>()
    var entityNames = _updateContents.getEntities()*.EntityName
    var entityExtNames = _updateContents.getEntityExtensions()*.EntityName
    var allEntityNames = EntityColumnHelper.createUnion({entityNames?.toList(), entityExtNames?.toList()})

    allEntityNames.each(\ entityName -> {
      var currentEntityArtifacts = EntityArtifacts.fromContents(_currentContents, entityName)
      var incomingEntityArtifacts = EntityArtifacts.fromContents(_updateContents, entityName)

      // if using the current as the base, adding the entire "updated" entity may not make sense, unless the LOB will make sure it can be added without checking
      if (currentEntityArtifacts.Empty) {
        addAdditionLoadOps(incomingEntityArtifacts, load)
      } else {
        var entityMerger = new EntityMerger(_currentEntityConfig)
        var result = entityMerger.merge(currentEntityArtifacts, incomingEntityArtifacts)
        result.LoadOps.each(\ loadOp -> load.add(loadOp))
        result.logMessages()
        result.reportTo(_messageReporter)
      }
    })

    return load
  }

  private function addAdditionLoadOps(modifiedEntityArtifacts : EntityArtifacts, load : Load) {
    modifiedEntityArtifacts.each(\ artifact -> {
      load.add(additionLoadOpFor(artifact))
      LoggerFactory.getLogger("PCA").info(
          "An entity ${artifact.Location.Filename} has been copied into the current configuration")
    })
  }

  private function additionLoadOpFor(artifact : EntityArtifact) : FileAddition {
    var entity = artifact.Content
    var location = artifact.Location
    if (location.IsStateEtx)
      return new EntityStateExtensionAddition(entity as EntityExtension)
    else if (location.IsCALineEtx)
      return new EntityLineExtensionAddition(entity as EntityExtension, "CA")
    else if (location.IsAULineEtx)
      return new EntityLineExtensionAddition(entity as EntityExtension, "AU")
    else if (location.IsCountrywideEtx)
      return new EntityExtensionAddition(entity as EntityExtension)
    else if (location.IsEti)
      return new EntityAddition(entity)
    else
      throw new IllegalArgumentException("Cannot determine load op for entity file '${location.Filename}'")
  }
}