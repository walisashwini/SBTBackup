package gw.sbt.loader.stateupdate

uses gw.api.locale.DisplayKey
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.util.XmlUtil
uses org.slf4j.LoggerFactory

class ProductLoadGenerator extends StateUpdateLoadGenerator {

  construct(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, messageReporter : MessageReporter) {
    super(currentContents, updateContents, null)
    _messageReporter = messageReporter
  }

  function reportConflict() {
    var productCode = _updateContents.ProductCode
    var currentProductPattern = _currentContents.getProduct(productCode)
    var updateProductPattern = _updateContents.getProduct(productCode)
    //Comparing with the actual XML contents, not by bytes
    var isSameContent = XmlUtil.compareXmlElements(currentProductPattern.Xml, updateProductPattern.Xml)
    if (not isSameContent) {
      var productPatternFile = "${productCode}.xml"
      LoggerFactory.getLogger("PCA").warn(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.ProductPatternAlreadyExistsButNotIdentical", productPatternFile))
      _messageReporter.ConflictReporter.reportProductPattern(productCode)
    }
  }
}