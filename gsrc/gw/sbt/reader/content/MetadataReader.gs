package gw.sbt.reader.content

uses gw.sbt.artifacts.metadata.Statescope
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.model.meta.ERCPackageMetaData
uses gw.sbt.model.meta.JurisdictionMetaData
uses gw.sbt.model.meta.LineMetaData
uses gw.sbt.model.meta.SBTVersionMetaData

class MetadataReader {
  static final var LINE = "Line"
  static final var JURISDICTIONS = "Jurisdictions"

  function read(updateContents: SBTUpdateContents) : ERCPackageMetaData {
    return read(updateContents.StateScope)
  }

  function read(statescope : Statescope): ERCPackageMetaData {
    var metadata = new ERCPackageMetaData () {
      :Line = (statescope.Line == null) ? null : new LineMetaData() {
        :Name = statescope.Line.Name,
        :Code = statescope.Line.Code
      },
      :Jurisdictions = statescope.AllJurisdictions.map( \ jurisdiction -> new JurisdictionMetaData() {
        :Jurisdiction = jurisdiction.Code,
        :EffectiveDate = jurisdiction.EffDate,
        :Version = jurisdiction.Version,
        :StateBureau = jurisdiction.StateBureau
      }).toList()
    }

    if (statescope.getChild("body").getChildren("div")
        .firstWhere(\div -> div.getAttributeValue("class") == "SBTVersion") != null) {
      metadata.SBTVersion = new SBTVersionMetaData() {
        :EffectiveDate = statescope.SBTVersion.EffDate
      }
    }

    return metadata
  }

}