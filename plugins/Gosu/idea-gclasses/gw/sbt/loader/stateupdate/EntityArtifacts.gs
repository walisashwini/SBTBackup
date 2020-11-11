package gw.sbt.loader.stateupdate

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.config.ConfigContents
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.loader.element.Element
uses gw.sbt.loader.element.entity.ElementType

class EntityArtifacts implements Iterable<EntityArtifact> {

  var _artifacts : List<EntityArtifact>

  private construct(artifacts : List<EntityArtifact>) {
    _artifacts = artifacts
  }

  static function fromContents(contents : ConfigContents, entityName : String) : EntityArtifacts {
    var artifacts = {
        new EntityArtifact(ArtifactLocation.forFilename("${entityName}.eti"), contents.getEntity(entityName)),
        new EntityArtifact(ArtifactLocation.forFilename("${entityName}.etx"),
            contents.getEntityExtension(entityName)),
        new EntityArtifact(ArtifactLocation.forFilename("${entityName}.state.etx"),
            contents.getEntityExtension(entityName + ".state")),
        new EntityArtifact(ArtifactLocation.forFilename("${entityName}.CA.etx"),
            contents.getEntityExtension(entityName + ".CA")),
        new EntityArtifact(ArtifactLocation.forFilename("${entityName}.AU.etx"),
        contents.getEntityExtension(entityName + ".AU"))
    }.where(\ artifact -> artifact.Content != null)

    return new EntityArtifacts(artifacts)
  }

  static function withArtifacts(artifacts : List<EntityArtifact>) : EntityArtifacts {
    return new EntityArtifacts(artifacts)
  }

  override function iterator() : Iterator<EntityArtifact> {
    return _artifacts.iterator()
  }

  property get EntityName() : String {
    return _artifacts.first().Content.EntityName
  }


  reified function elementFor<T extends NamedXmlContent>(elementType : ElementType<T>, elementName : String) : Optional<Element<T>> {
    for (artifact in this) {
      var elementContent = elementType.elementsFrom(artifact.Content).firstWhere(\ element ->
          element.Name == elementName)
      if (elementContent != null)
        return Optional.of(Element.make(elementType, elementContent, artifact.Location))
    }
    return Optional.empty()
  }

  function artifactForLocation(location : ArtifactLocation) : EntityArtifact {
    return _artifacts.firstWhere(\ artifact -> artifact.Location == location)
  }

  property get Empty() : boolean {
    return _artifacts.Empty
  }

  function copy() : EntityArtifacts {
    return new EntityArtifacts(_artifacts.map(\ artifact -> artifact.copy()))
  }

  function newForLocation(location : ArtifactLocation) : EntityArtifact {
    if (artifactForLocation(location) != null)
      throw new IllegalArgumentException("Entity file '${location.Filename}' already exists")
    if (not location.IsEtx)
      throw new IllegalArgumentException("Only the addition of an .etx is supported")
    var newArtifact = EntityArtifact.make(location, EntityExtension.newEntityExtension(EntityName))
    _artifacts.add(newArtifact)
    return newArtifact
  }
}