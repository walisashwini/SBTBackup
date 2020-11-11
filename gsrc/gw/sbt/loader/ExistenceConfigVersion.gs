package gw.sbt.loader

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.artifacts.versioned.ContainerKey
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.artifacts.versioned.VersionedConfig
uses gw.xml.XmlElement

class ExistenceConfigVersion {
  var _jurisdiction : String as Jurisdiction
  var _existenceValue : String as ExistenceValue
  var _startEffectiveDate : String as StartEffectiveDate
  var _containerKey : ContainerKey as ContainerKey

  construct(jurisdiction : String, existenceValue : String, startEffectiveDate : String, containerKey : ContainerKey) {
    _jurisdiction = jurisdiction
    _existenceValue = existenceValue
    _startEffectiveDate = startEffectiveDate
    _containerKey = containerKey
  }

  property get Container() : XmlElement {

    var containerStr =
        "<Container name=\"" + _containerKey.Name + "\" type=\"" + _containerKey.Type + "\">\n" + VersionString +
        "</Container>"

    return XmlElement.parse(containerStr.Bytes)
  }

  property get Version() : VersionedConfig {
    return new VersionedConfig(VersionString.Bytes, ContainerPropertyConfigType.EXISTENCE_CONFIG)
  }

  private property get VersionString() : String {
    var jurisdictionTag = ""
    if (_jurisdiction != null and not _jurisdiction.isEmpty()) {
      jurisdictionTag =
          "<Jurisdiction>" + _jurisdiction + "</Jurisdiction>\n"
    }

    var versionString =
          " <Version>\n" +
            "  " + jurisdictionTag +
            "  <EffectiveDate>" + _startEffectiveDate + "</EffectiveDate>\n" +
            "  <Existence met=\"" + _existenceValue + "\"/>\n" +
            " </Version>\n"

    return versionString

  }


}