package gw.sbt.loader.stateadd

uses gw.api.locale.DisplayKey
uses gw.sbt.artifacts.lookups.Lookups
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.ProductLookupsFileAddition
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.util.XmlUtil
uses org.slf4j.LoggerFactory

uses java.util.Date

class ProductLoadGenerator {

  var _config : CurrentConfigContents
  var _messageReporter : MessageReporter

  construct(config : CurrentConfigContents, messageReporter : MessageReporter) {
    _config = config
    _messageReporter = messageReporter
  }

  function generateLoad(updateContents: SBTUpdateContents, jurisdiction: String, adoptionDate: Date) : Load {
    var productCode = updateContents.ProductCode

    var load = new Load<String>(productCode)

    var currentProductLookups = _config.getProductLookups(productCode, jurisdiction)
    if (currentProductLookups== null) {
      var productLookups = updateContents.getProductLookups(productCode, jurisdiction)
      productLookups.getProductLookup(jurisdiction).StartEffectiveDate = adoptionDate

      load.add(new ProductLookupsFileAddition(productCode, jurisdiction, productLookups))
    }

    // perform an unconditional check on Prouct information
    var isSameContent = XmlUtil.compareXmlElements(_config.getProduct(productCode).Xml, updateContents.getProduct (productCode).Xml)
    if (not isSameContent) {
      var productPatternFile = "${productCode}.xml"
      LoggerFactory.getLogger("PCA").warn(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.ProductPatternAlreadyExistsButNotIdentical", productPatternFile))
      _messageReporter.ConflictReporter.reportProductPattern(productCode)
    }

    return load
  }
}