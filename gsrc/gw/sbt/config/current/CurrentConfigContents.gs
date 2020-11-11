package gw.sbt.config.current

uses gw.sbt.artifacts.SbtCommonContents
uses gw.sbt.artifacts.difftree.DiffTree
uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.artifacts.lookuptables.LookupTables
uses gw.sbt.artifacts.pcf.PcfFile
uses gw.sbt.artifacts.plugin.PluginFile
uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.artifacts.ratebooks.RateBookXmlDigested
uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.xsd.XsdFile
uses gw.sbt.config.ConfigContents
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.DataModelConfigContents
uses gw.sbt.config.DisplayPropertiesConfigContents
uses gw.sbt.config.FileConfigContents
uses gw.sbt.config.FileTargetConfiguration
uses gw.sbt.config.ProductModelConfigContents
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.loader.RateBookHelper
uses gw.sbt.loader.SystemTableHelper
uses gw.xml.XmlElement
uses org.slf4j.LoggerFactory

class CurrentConfigContents implements ConfigContents {

  delegate displayContentsDelegate represents DisplayPropertiesConfigContents
  delegate entityContentsDelegate represents DataModelConfigContents
  delegate productModelContentsDelegate represents ProductModelConfigContents
  delegate fileContentsDelegate represents FileConfigContents

  var _config : TargetConfiguration as readonly Config
  var _policyLinePatternCode : String as readonly PolicyLinePatternCode
  var _productAbbreviation : String as readonly ProductAbbreviation

  construct(policyLinePatternCode : String, productAbbreviation : String, config : TargetConfiguration = null) {
    _policyLinePatternCode = policyLinePatternCode
    _productAbbreviation = productAbbreviation
    _config = config?:new FileTargetConfiguration(null)

    displayContentsDelegate = new CurrentConfigDisplayContentsDelegate(this)
    entityContentsDelegate = new CurrentConfigEntityContentsDelegate(this)
    productModelContentsDelegate = new CurrentConfigProductModelContentsDelegate(this)
    fileContentsDelegate = new CurrentConfigFileContentsDelegate(this)
  }

  override function getSystemTable(filenameWithExtension : String) : SystemTable {
    var content = Config.contents(ConfigurationFile.systable(filenameWithExtension))
    return (content != null and content.Count > 0) ? new SystemTable(content, filenameWithExtension.substring(0, filenameWithExtension.lastIndexOf("."))) : null
  }

  //Currently only integration tests read ratebook from filesystem instead of reading from DB.
  override function getRateBookXml(jurisdiction : String) : XmlElement {
    var filePaths = Config.listFilePaths(ConfigurationFile.rateBooksFolder())
    var ratebookPath = filePaths.firstWhere(\filePath -> filePath.contains(jurisdiction))
    if (ratebookPath.HasContent) {
      var content = Config.contents(ConfigurationFile.ratebook(ratebookPath))
      return (content != null and content.Count > 0) ? XmlElement.parse(content) : null
    } else {
      return null
    }
  }

  override function getPCAMergedCWRateBookXml(cwRatebookName : String) : RateBookXml {
    var filePaths = Config.listFilePaths(ConfigurationFile.contentFolder())
    var pcaMergedRateBookXmlPath = filePaths.firstWhere(\filePath -> filePath.contains(cwRatebookName)
        and filePath.endsWith(RateBookHelper.PCA_MERGED_CW_RATEBOOK_SUFFIX))
    if (pcaMergedRateBookXmlPath.HasContent) {
      var content = Config.contents(ConfigurationFile.pcaMergedRatebook(pcaMergedRateBookXmlPath))
      return (content != null and content.Count > 0) ? new RateBookXmlDigested(content) : null
    } else {
      LoggerFactory.getLogger("PCA").info("Could not find the merged countrywide ratebook, which should be created by the first state update")
      return null
    }
  }

  property get DiffTree() : DiffTree {
    var content = Config.contents(ConfigurationFile.diffTree(ProductAbbreviation))
    return content == null or content.length == 0 ? null : new DiffTree(content)
  }

  property get LookupTables() : LookupTables {
    var content = Config.contents(ConfigurationFile.LookupTablesFile())
    return content == null or content.length == 0 ? null : new LookupTables(content)
  }

  function getPcfFiles() : List<PcfFile> {
    var listPcfFiles : List<PcfFile> = {}
    var pcfFilePaths = Config.listFilePaths(ConfigurationFile.pcfFolder())
    pcfFilePaths.where(\filePath -> filePath.endsWith(".pcf")).each(\pcfFilePath -> {
      var pcfDirName = PCF_SOURCE_ROOT
      var pcfFileName : String
      var lastIndexOfSlash = pcfFilePath.lastIndexOf('/')
      if (lastIndexOfSlash == -1) {
        pcfFileName = pcfFilePath
      } else {
        pcfDirName = pcfDirName + pcfFilePath.substring(0, lastIndexOfSlash + 1)
        pcfFileName = pcfFilePath.substring(lastIndexOfSlash + 1)
      }
      var pcfFile = this.getPcfFile(pcfDirName, pcfFileName)
      listPcfFiles.add(pcfFile)
    })
    return listPcfFiles
  }

  function getGosuFiles() : List<GosuFile> {
    var listGosuFiles : List<GosuFile> = {}
    var gosuFilePaths = Config.listFilePaths(ConfigurationFile.gosuFolder())
    gosuFilePaths.each(\gosuFilePath -> {
      if (gosuFilePath.endsWith(".gs") or gosuFilePath.endsWith(".gsx")) {
        var fileExtension = gosuFilePath.substring(gosuFilePath.lastIndexOf('.') + 1)
        var fullName = gosuFilePath.substring(0, gosuFilePath.lastIndexOf('.')).replaceAll("/", ".")
        var gosuFile = this.getGosuFile(fullName, fileExtension)
        listGosuFiles.add(gosuFile)
      }
    })
    return listGosuFiles
  }

  function getXsdFiles() : List<XsdFile> {
    var listXsdFiles : List<XsdFile> = {}
    var xsdFilePaths = Config.listFilePaths(ConfigurationFile.xsdFolder())
    xsdFilePaths.where(\filePath -> filePath.endsWith(".xsd")).each(\xsdFilePath -> {
      var xsdDirName = XSD_SOURCE_ROOT
      var xsdFileName : String
      var lastIndexOfSlash = xsdFilePath.lastIndexOf('/')
      if (lastIndexOfSlash == -1) {
        xsdFileName = xsdFilePath
      } else {
        xsdDirName = xsdDirName + xsdFilePath.substring(0, lastIndexOfSlash + 1)
        xsdFileName = xsdFilePath.substring(lastIndexOfSlash + 1)
      }
      var xsdFile = this.getXsdFile(xsdDirName, xsdFileName)
      listXsdFiles.add(xsdFile)
    })
    return listXsdFiles
  }

  function getAllSystemTableFileNames() : Set<String> {
    var allSystablesFileNames = SystemTableRegistry.AllSystemTableFileNames
    allSystablesFileNames.removeWhere(\systableFileName -> not systableFileName.containsIgnoreCase(ProductAbbreviation))

    SystemTableHelper.ExcludedSystemTableFileNames.each(\excludedFileName -> {
      allSystablesFileNames.removeWhere(\systableFileName -> systableFileName == excludedFileName)
    })

    return allSystablesFileNames
  }

  function getPluginFiles() : List<PluginFile> {
    var listPluginFiles : List<PluginFile> = {}
    var pluginFilePaths = Config.listFilePaths(ConfigurationFile.pluginFolder())
    pluginFilePaths.where(\filePath -> filePath.endsWith(".gwp")).each(\pluginFilePath -> {
      var pluginDirName = PLUGIN_SOURCE_ROOT
      var pluginFileName : String
      var lastIndexOfSlash = pluginFilePath.lastIndexOf('/')
      if (lastIndexOfSlash == -1) {
        pluginFileName = pluginFilePath
      } else {
        pluginDirName = pluginDirName + pluginFilePath.substring(0, lastIndexOfSlash + 1)
        pluginFileName = pluginFilePath.substring(lastIndexOfSlash + 1)
      }
      var pluginFile = this.getPluginFile(pluginDirName, pluginFileName)
      listPluginFiles.add(pluginFile)
    })
    return listPluginFiles
  }

  property get SbtCommonContents() : SbtCommonContents {
    var content = Config.contents(ConfigurationFile.sbtCommonContents())
    return content == null or content.length == 0 ? null : new SbtCommonContents(content)
  }

}