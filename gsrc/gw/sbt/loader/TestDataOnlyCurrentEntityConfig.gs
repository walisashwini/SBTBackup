package gw.sbt.loader

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.config.current.CurrentConfigContents

class TestDataOnlyCurrentEntityConfig implements CurrentEntityConfig {
  var _currentContents : CurrentConfigContents

  construct(currentContents : CurrentConfigContents) {
    _currentContents = currentContents
  }

  override function locationOfField(entityName : String, fieldName : String) : Optional<ArtifactLocation> {
    return locationOfElementInContents(artifactsByFilenameFor(entityName),
            \ entity -> entity.Fields.hasMatch(\ field -> field.Name == fieldName))
  }

  override function locationOfImplementsInterface(entityName : String, iface : String) : Optional<ArtifactLocation> {
    return locationOfElementInContents(artifactsByFilenameFor(entityName),
            \ entity -> entity.ImplementsInterfaces.hasMatch(\ element -> element.IFace == iface))
  }

  override function locationOfImplementsEntity(entityName : String, name : String) : Optional<ArtifactLocation> {
    return locationOfElementInContents(artifactsByFilenameFor(entityName),
        \ entity -> entity.ImplementsEntitys.hasMatch(\ element -> element.Name == name))
  }


  private function artifactsByFilenameFor(entityName : String) : Map<String, Entity> {
    var artifactsByFilename = {
        "${entityName}.eti" -> _currentContents.getEntity(entityName),
        "${entityName}.etx" -> _currentContents.getEntityExtension(entityName),
        "${entityName}.state.etx" -> _currentContents.getEntityExtension(entityName + ".state")
    }
    artifactsByFilename.retainWhereValues(\ content -> content != null)
    return artifactsByFilename
  }

  private function locationOfElementInContents(
      artifactsByFilename : Map<String, Entity>,
      isElementInEntity(entity : Entity) : boolean
  ) : Optional<ArtifactLocation> {
    var filenameOfArtifactContainingElement = artifactsByFilename.entrySet().firstWhere(\ entry -> {
      var artifact = entry.Value
      return isElementInEntity(artifact)
    }).Key
    return filenameOfArtifactContainingElement == null
        ? Optional.empty()
        : Optional.of(ArtifactLocation.forFilename(filenameOfArtifactContainingElement))
  }
}
