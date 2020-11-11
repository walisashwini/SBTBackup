package gw.sbt.loader

uses com.guidewire.commons.metadata.internal.loader2.MetadataLoader
uses com.guidewire.commons.metadata.schema.dm2.EntityNodeBase
uses gw.xml.AbstractXMLNode

class TypeSystemCurrentEntityConfig implements CurrentEntityConfig {

  override function locationOfField(entityName : String, fieldName : String) : Optional<ArtifactLocation> {
    return locationOfChildNode(entityName,
        \ entity -> entity.Fields.firstWhere(\ node -> node.Name == fieldName))
  }

  override function locationOfImplementsInterface(entityName : String, iface : String) : Optional<ArtifactLocation> {
    return locationOfChildNode(entityName,
        \ entity -> entity.ImplementsInterfaces.firstWhere(\ node -> node.Iface == iface))
  }

  override function locationOfImplementsEntity(entityName : String, name : String) : Optional<ArtifactLocation> {
    return locationOfChildNode(entityName,
        \ entity -> entity.ImplementsEntities.firstWhere(\ node -> node.Name == name))
  }

  private function locationOfChildNode(
      entityName : String,
      getChildNode(entityNode : EntityNodeBase) : AbstractXMLNode
  ) : Optional<ArtifactLocation> {
    var entityNode = MetadataLoader.Instance.getEntity(entityName)

    if (entityNode == null) return Optional.empty()

    var childNode = getChildNode(entityNode)
    return childNode == null
        ? Optional.empty()
        : Optional.of(ArtifactLocation.forFilename(locationFilenameFor(childNode)))
  }

  private function locationFilenameFor(fieldNode : AbstractXMLNode) : String {
    return fieldNode.Location.FileName ?: fieldNode.Location.RealLocation.FileName
  }
}
