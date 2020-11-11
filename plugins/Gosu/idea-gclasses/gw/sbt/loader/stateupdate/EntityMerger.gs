package gw.sbt.loader.stateupdate

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.loader.CurrentEntityConfig
uses gw.sbt.loader.element.Element
uses gw.sbt.loader.element.ElementChange
uses gw.sbt.loader.element.entity.ElementType
uses gw.sbt.loader.element.entity.ElementTypeFactory
uses gw.sbt.loader.element.entity.ImplementsEntityElementType
uses gw.sbt.loader.element.entity.ImplementsInterfaceElementType
uses gw.sbt.loader.io.EntityExtensionModification
uses gw.sbt.loader.io.EntityLineExtensionModification
uses gw.sbt.loader.io.EntityModification
uses gw.sbt.loader.io.EntityStateExtensionModification
uses gw.sbt.loader.io.FileModification
uses gw.sbt.loader.reporter.MessageReporter
uses org.slf4j.LoggerFactory

class EntityMerger {

  static class Result {
    var _loadOps : List<FileModification<Entity>> as readonly LoadOps
    var _changes : List<ElementChange> as readonly Changes
    var _conflicts : List<Conflict> as readonly Conflicts

    private construct(
        loadOps : List<FileModification<Entity>>,
        changes : List<ElementChange>,
        conflicts : List<Conflict>
    ) {
      _loadOps = loadOps
      _changes = changes
      _conflicts = conflicts
    }

    function logMessages() {
      var logger = LoggerFactory.getLogger("PCA")
      Changes.each(\ change -> logger.info(change.Message))
      Conflicts.each(\ conflict -> logger.warn(conflict.Message))
    }

    function reportTo(reporter : MessageReporter) {
      var filesWithConflicts = Conflicts*.Location.toSet()*.Filename.sort()
      filesWithConflicts.each(\ file -> reporter.ConflictReporter.reportEntity(file))
      Changes
          .where(\change -> change.Element.ElementType typeis ImplementsInterfaceElementType or
              change.Element.ElementType typeis ImplementsEntityElementType)
          .each(\change -> reporter.ConflictReporter.reportEntityWarning(change.Location.Filename))
    }
  }

  var _currentEntityConfig : CurrentEntityConfig

  construct(currentEntityConfig : CurrentEntityConfig) {
    _currentEntityConfig = currentEntityConfig
  }

  function merge(currentArtifacts : EntityArtifacts, incomingArtifacts : EntityArtifacts) : Result {
    var changes : List<ElementChange> = {}
    var conflicts : List<Conflict> = {}

    incomingArtifacts.each(\ artifact -> collectChangesAndConflictsFor(artifact, currentArtifacts, changes, conflicts))
    var updatedIncomingArtifacts = updatedIncomingArtifactsFor(incomingArtifacts, changes)

    return new Result(
      :loadOps = updatedIncomingArtifacts
          .where(\ artifact -> changes.hasMatch(\ change -> artifact.Location == change.Location))
          .map(\ artifact -> loadOpFor(artifact)),
      :changes = changes,
      :conflicts = conflicts)
  }

  private property get ElementTypes() : List<ElementType> {
    return ElementTypeFactory.AllElementTypes
  }

  private function collectChangesAndConflictsFor(
      incomingArtifact : EntityArtifact,
      currentArtifacts : EntityArtifacts,
      changes : List<ElementChange>,
      conflicts : List<Conflict>
  ) {
    var entityName = incomingArtifact.EntityName
    ElementTypes.each(\ elementType ->
        incomingArtifact.elementsOfType(elementType).each(\ element -> {
          var maybeExistingLocation = elementType.currentConfigLocationOfElement(_currentEntityConfig,
              entityName, element.Name)
          if (not maybeExistingLocation.Present) {
            elementType.conflictForNewElement(element.Content, incomingArtifact.Location)
                .ifAbsent(\-> changes.add(addedElementChangeFor(element, incomingArtifact.EntityName)))
                .ifPresent(\ conflict -> conflicts.add(conflict))
          }
          maybeExistingLocation.ifPresent(\ existingLocation ->
              // Even if the element is found in the current config using reflection, it may not be defined
              // within the entity's immediate artifacts (i.e., <entity name>.eti/etx/state.etx).
              currentArtifacts.elementFor(elementType, element.Name).ifPresent(\ existingElement -> {
                if (element.conflictsWith(existingElement))
                  conflicts.add(conflictForExistingElement(existingElement))
                else
                  elementType.changeForExistingElement(element, existingElement)
                      .ifPresent(\ change -> changes.add(change))
              }))
      }))
  }

  private function addedElementChangeFor(element : Element, entityName : String) : ElementChange {
    var elementDescription = element.ElementType.Description + ": " + element.Name
    return ElementChange.make(
        :element = element,
        :message = "A new ${elementDescription} has been added to the entity ${entityName}")
  }

  private function conflictForExistingElement(element : Element) : Conflict {
    var elementTypeDescription = element.ElementType.Description
    return Conflict.make(
        :location = element.Location,
        :message = "The ${elementTypeDescription}: ${element.Name} in the entity ${element.Location.Filename} " +
            "has changes in contents. Manual review of this ${elementTypeDescription} is recommended")
  }

  /**
   * An existing element that was modified may be defined in a different file than the one in the update that changed
   * it. Reposition the modified elements to match the existing configuration by removing all elements and then
   * re-adding the changed ones to the correct artifact. This also has the effect of removing elements that will not be
   * changed (i.e., those that are not new or modified, or that have conflicts).
   */
  private function updatedIncomingArtifactsFor(incomingArtifacts : EntityArtifacts, changes : List<ElementChange>)
      : EntityArtifacts {
    var updatedIncomingArtifacts = incomingArtifacts.copy()
    ElementTypes.each(\ elementType ->
        updatedIncomingArtifacts.each(\ artifact -> artifact.removeAllElementsOfType(elementType)))
    changes.each(\ change -> {
      var targetArtifact = updatedIncomingArtifacts.artifactForLocation(change.Location)
      if (targetArtifact == null)
        targetArtifact = updatedIncomingArtifacts.newForLocation(change.Location)
      change.Element.addTo(targetArtifact.Content)
    })
    return updatedIncomingArtifacts
  }

  private function loadOpFor(artifact : EntityArtifact) : FileModification<Entity> {
    var entity = artifact.Content
    var location = artifact.Location
    if (location.IsStateEtx)
      return new EntityStateExtensionModification(entity as EntityExtension)
    else if (location.IsCALineEtx)
      return new EntityLineExtensionModification(entity as EntityExtension, "CA")
    else if (location.IsAULineEtx)
      return new EntityLineExtensionModification(entity as EntityExtension, "AU")
    else if (location.IsCountrywideEtx)
      return new EntityExtensionModification(entity as EntityExtension)
    else if (location.IsEti)
      return new EntityModification(entity)
    else
      throw new IllegalArgumentException("Unknown artifact type for file '${location.Filename}}'")
  }
}