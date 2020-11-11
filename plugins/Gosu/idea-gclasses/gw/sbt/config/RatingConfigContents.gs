package gw.sbt.config

uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.xml.XmlElement

interface RatingConfigContents {

  function getRateBookXml(jurisdiction : String) : XmlElement

  function getPCAMergedCWRateBookXml(cwRatebookName : String) : RateBookXml

}
