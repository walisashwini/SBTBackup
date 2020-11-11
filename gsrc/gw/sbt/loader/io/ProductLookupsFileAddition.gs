package gw.sbt.loader.io

uses gw.sbt.artifacts.lookups.Lookups
uses gw.sbt.config.ConfigurationFile

class ProductLookupsFileAddition extends FileAddition<Lookups> {

  construct(productCode : String, jurisdiction : String, content: Lookups) {
    super(ConfigurationFile.productLookups(productCode + "-lookups.xml", productCode, jurisdiction), content)
  }
}