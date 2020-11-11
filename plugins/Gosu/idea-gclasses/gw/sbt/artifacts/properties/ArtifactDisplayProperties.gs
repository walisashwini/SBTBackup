package gw.sbt.artifacts.properties

uses gw.sbt.artifacts.ArtifactId

uses java.util.Map

class ArtifactDisplayProperties {

  var _propertiesByArtifactId : Map<ArtifactId, DisplayProperties>

  construct(propertiesByArtifactId : Map<ArtifactId, DisplayProperties> = null) {
    _propertiesByArtifactId = propertiesByArtifactId?.copy() ?: {}
  }

  function existFor(artifactId : ArtifactId) : boolean {
    return _propertiesByArtifactId.containsKey(artifactId)
  }

  function getFor(artifactId : ArtifactId) : DisplayProperties {
    return _propertiesByArtifactId.get(artifactId)
  }

  function merge(artifactId : ArtifactId, properties : DisplayProperties) {
    if (existFor(artifactId)) {
      var existingProperties = getFor(artifactId)
      existingProperties.assignProperties(properties)
    } else {
      _propertiesByArtifactId.put(artifactId, properties)
    }
  }

  function copy() : ArtifactDisplayProperties {
    return new ArtifactDisplayProperties(_propertiesByArtifactId)
  }

  property get AllDisplayProperties() : DisplayProperties {
    var allProperties = new DisplayProperties()
    _propertiesByArtifactId.Values.each(\ properties -> allProperties.assignProperties(properties))
    return allProperties
  }
}