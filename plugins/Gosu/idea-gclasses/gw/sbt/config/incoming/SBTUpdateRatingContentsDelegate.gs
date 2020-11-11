package gw.sbt.config.incoming

uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.RatingConfigContents
uses gw.xml.XmlElement

class SBTUpdateRatingContentsDelegate implements RatingConfigContents {

  var _updateContents: SBTUpdateContents as UpdateContents

  construct(updateContents: SBTUpdateContents) {
    _updateContents = updateContents
  }

  override function getRateBookXml(jurisdiction: String): XmlElement {
    var xmlContent = UpdateContents.getFirstContentMatching(ConfigurationFile.rateBooksFolder().Path, ".*${jurisdiction}(\\s\\d)?\\-\\d{8}.*")
    if (xmlContent == null) {
      return null
    }
    return XmlElement.parse(xmlContent)
  }

  override function getPCAMergedCWRateBookXml(cwRatebookName : String) : RateBookXml {
    return null
  }

}
