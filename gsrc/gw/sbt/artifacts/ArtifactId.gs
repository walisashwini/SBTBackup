package gw.sbt.artifacts

uses gw.lang.reflect.features.PropertyReference
uses gw.sbt.model.HasPublicId
uses gw.sbt.pca.ValueObject
uses java.util.List

class ArtifactId extends ValueObject<ArtifactId> {
  var _type : ArtifactType as readonly Type
  var _publicId : String as readonly PublicId

  private construct(type : ArtifactType, publicId : String) {
    _type = type
    _publicId = publicId
  }

  static function make(type : ArtifactType, publicId : String) : ArtifactId {
    return new ArtifactId(type, publicId)
  }

  static function forArtifact(artifact : HasPublicId) : ArtifactId {
    return ArtifactId.make(ArtifactType.forArtifact(artifact), artifact.PublicId)
  }

  override property get ValueProperties() : List<PropertyReference<ArtifactId, Object>> {
    return {#Type, #PublicId}
  }
}