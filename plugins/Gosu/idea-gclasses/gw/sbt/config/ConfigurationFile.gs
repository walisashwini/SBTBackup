package gw.sbt.config

uses gw.sbt.artifacts.forms.CustomFormInferencesContent
uses java.util.ArrayList
uses java.util.Date
uses gw.sbt.util.Formatter
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.util.LoaderUtil
uses gw.sbt.util.ProductCodeToAbbreviationMapper
uses java.util.List

class ConfigurationFile {
  private var _folder : String as readonly Folder
  private var _name : String as readonly Name

  private construct(folder : String, name : String) {
    _folder = folder
    _name = name
  }

  static function fromPath(filenameWithPath : String) : ConfigurationFile {
    var match = filenameWithPath.match("(.+)/([^/]+)")
    return new ConfigurationFile(:folder = match.get(0), :name = match.get(1))
  }

  static function rootFolder() : ConfigurationFile {
    return new ConfigurationFile("", "")
  }

  property get Path(): String {
    var dir = Folder
    if (dir.HasContent and Name.HasContent and not dir.endsWith("/") and not dir.endsWith("\\")) {
      dir += '/'
    }
    return dir + Name
  }

  static function systable(systableName : String) : ConfigurationFile {
    return new ConfigurationFile("config/resources/systables/", systableName)
  }

  static function customFormInference() : ConfigurationFile {
    return systable(CustomFormInferencesContent.SYSTABLE_FILENAME)
  }

  static function systemTableRegistryFile() : ConfigurationFile {
    return new ConfigurationFile("config/resources/", "systables.xml")
  }

  static function bureauCodesConfig() : ConfigurationFile {
    return new ConfigurationFile("config/resources/", "pca_bureau_codes_config.xml")
  }

  static function clausePatternFolder(policyLine : String) : ConfigurationFile {
    return new ConfigurationFile(clausePatternPrefix(policyLine), "")
  }

  static function clausePattern(name : String, policyLine : String) : ConfigurationFile {
    return new ConfigurationFile(clausePatternPrefix(policyLine), name)
  }

  static function clausePatternPrefix(policyLine : String) : String {
    return "config/resources/productmodel/policylinepatterns/${policyLine}/coveragepatterns/"
  }

  static function clausePatternLookups(name : String, policyLine : String, jurisdiction : String) : ConfigurationFile {
    if (LoaderUtil.isJurisdictionCW(jurisdiction)) {
      return new ConfigurationFile("config/resources/productmodel/policylinepatterns/${policyLine}/coveragepatterns/", name)
    }
    return new ConfigurationFile("config/resources/productmodel/policylinepatterns/${policyLine}/jurisdictions/${jurisdiction}/coveragepatterns/", name)
  }

  static function rateBooksFolder() : ConfigurationFile {
    return new ConfigurationFile("config/content/ratebooks/", "")
  }

  static function rateBooksGeneratedFile(lineCode : String, jurisdiction : String, processedDate : Date, fileName : String) : ConfigurationFile {
    var dirName = getGeneratedDirectoryName(lineCode, jurisdiction, processedDate)
    return new ConfigurationFile("config/content/${dirName}/", fileName)
  }

  static function mergedPCACWRateBooksGeneratedFile(fileName : String) : ConfigurationFile {
    return new ConfigurationFile("config/content/", fileName)
  }

  static function clausePatternLookups(state : String, name : String, policyLine : String,
                                       targetConfiguration : TargetConfiguration) : List<ConfigurationFile> {
    var configFiles = new ArrayList<ConfigurationFile>()
    var cwLookupsFile = clausePatternLookups(name, policyLine, :jurisdiction = null)
    if (targetConfiguration.exists(cwLookupsFile)) configFiles.add(cwLookupsFile)
    var stateLookupsFile = clausePatternLookups(name, policyLine, :jurisdiction = state)
    if (targetConfiguration.exists(stateLookupsFile)) configFiles.add(stateLookupsFile)
    return configFiles
  }

  static function productsFolder() : ConfigurationFile {
    return new ConfigurationFile("config/resources/productmodel/products", "")
  }

  static function productPattern(productCode : String) : ConfigurationFile {
    return new ConfigurationFile("config/resources/productmodel/products/${productCode}", "${productCode}.xml")
  }

  static function productLookups(name : String, productCode : String, jurisdiction : String) : ConfigurationFile {
    if (LoaderUtil.isJurisdictionCW(jurisdiction)) {
      return new ConfigurationFile("config/resources/productmodel/products/${productCode}/", name)
    }
    return new ConfigurationFile("config/resources/productmodel/products/${productCode}/jurisdictions/${jurisdiction}/", name)
  }

  static function policyLinePatternLookups(name: String, policyLine: String, jurisdiction: String = null)
      : ConfigurationFile {
    var basePath = "config/resources/productmodel/policylinepatterns/${policyLine}/"
    var lookupsFilePath = basePath + (LoaderUtil.isJurisdictionCW(jurisdiction) ? "" : "jurisdictions/${jurisdiction}/")
    return new ConfigurationFile(lookupsFilePath, name)
  }

  static function policyLinePattern(name : String, policyLine : String) : ConfigurationFile {
    return new ConfigurationFile("config/resources/productmodel/policylinepatterns/${policyLine}/", name)
  }

  static function modifierMinMax(policyLine : String, jurisdiction : String) : ConfigurationFile {
    return new ConfigurationFile("config/resources/productmodel/policylinepatterns/${policyLine}/jurisdictions/${jurisdiction}/", "${policyLine}-modifierminmax.xml")
  }

  static function displayProperties() : ConfigurationFile {
    return new ConfigurationFile("config/locale/", "display.properties")
  }

  static function displayProperties805() : ConfigurationFile {
    return new ConfigurationFile("config/locale/en_US", "display.properties")
  }

  static function productModelDisplayKeys() : ConfigurationFile {
    return new ConfigurationFile("config/locale/", "productmodel.display.properties")
  }

  static function productModelDisplayKeys805() : ConfigurationFile {
    return new ConfigurationFile("config/locale/en_US", "productmodel.display.properties")
  }

  static function entityFromExtensions(name : String) : ConfigurationFile {
    return new ConfigurationFile(entityFolder().Folder, name)
  }

  static function entityFolder() : ConfigurationFile {
    return new ConfigurationFile("config/extensions/entity/", "")
  }

  static function pcfFolder() : ConfigurationFile {
    return new ConfigurationFile(ConfigContents.PCF_SOURCE_ROOT, "")
  }

  static function gosuFolder() : ConfigurationFile {
    return new ConfigurationFile(ConfigContents.GOSU_SOURCE_ROOT, "")
  }

  static function xsdFolder() : ConfigurationFile {
    return new ConfigurationFile(ConfigContents.XSD_SOURCE_ROOT, "")
  }

  static function pluginFolder() : ConfigurationFile {
    return new ConfigurationFile(ConfigContents.PLUGIN_SOURCE_ROOT, "")
  }

  static function entityFromMetadata(name : String) : ConfigurationFile {
    return new ConfigurationFile("config/metadata/entity/", name)
  }

  static function entity(name : String, targetConfiguration : TargetConfiguration) : ConfigurationFile {
    var configFile = entityFromExtensions(name)
    if (targetConfiguration.exists(configFile)) return configFile

    return entityFromMetadata(name)
  }

  static function typelistFromExtensions(name : String) : ConfigurationFile {
    return new ConfigurationFile("config/extensions/typelist/", name)
  }

  static function typelistFolder() : ConfigurationFile {
    return new ConfigurationFile("config/extensions/typelist/", "")
  }

  static function contentFolder() : ConfigurationFile {
    return new ConfigurationFile("config/content/", "")
  }

  static function pcaMergedRatebook(fileName:String) : ConfigurationFile {
    return new ConfigurationFile("config/content/", fileName)
  }

  static function ratebook(fileName:String) : ConfigurationFile {
    return new ConfigurationFile("config/content/ratebooks/", fileName)
  }

  //the form pattern file exists in current configuration, only used by test cases
  static function formPatternFile(policyLine : String) : ConfigurationFile {
    return new ConfigurationFile("config/content/", ProductCodeToAbbreviationMapper.getProductAbbreviation(policyLine) + "FormPatterns.xml")
  }

  //the generated form pattern file by load (state-add and state-update)
  static function formPatterns(jurisdiction : String, policyLine : String, processedDate : Date) : ConfigurationFile {
    return new ConfigurationFile("config/content/${getGeneratedDirectoryName(policyLine, jurisdiction, processedDate)}",
        ProductCodeToAbbreviationMapper.getProductAbbreviation(policyLine) + "FormPatterns.xml")
  }

  static function loadReportFile(jurisdiction : String, policyLine : String, processedDate : Date) : ConfigurationFile {
    return getGeneratedReportFile(policyLine, jurisdiction, processedDate, "Loader Results Report")
  }

  static function deviationsReportFile(jurisdiction : String, policyLine : String, processedDate : Date) : ConfigurationFile {
    return getGeneratedReportFile(policyLine, jurisdiction, processedDate, "ISO Deviations Report")
  }

  static function configurationReportFile(jurisdiction : String, policyLine : String, processedDate : Date) : ConfigurationFile {
    return getGeneratedReportFile(policyLine, jurisdiction, processedDate, "Configuration Report")
  }

  static function auditReportFile(jurisdiction : String, policyLine : String, processedDate : Date) : ConfigurationFile {
    return getGeneratedReportFile(policyLine, jurisdiction, processedDate, "CW Audit Report")
  }

  static function ratingReportFile(jurisdiction : String, policyLine : String, processedDate : Date) : ConfigurationFile {
    return getGeneratedReportFile(policyLine, jurisdiction, processedDate, "Rating Report")
  }

  static function conflictFilesZipFile(jurisdiction : String, policyLine : String, processedDate : Date) : ConfigurationFile {
    return getGeneratedFile(policyLine, jurisdiction, processedDate, "Conflict Files", "zip")
  }

  static function mergedFilesZipFile(jurisdiction : String, policyLine : String, processedDate : Date) : ConfigurationFile {
    return getGeneratedFile(policyLine, jurisdiction, processedDate, "Merged Files", "zip")
  }

  static function configurationBackupZipFile() : ConfigurationFile {
    return new ConfigurationFile("", "PCARevert.zip")
  }

  static function gosuFile(fileNameWithPath : String, fileExtension : String) : ConfigurationFile {
    var fullNamePathList = fileNameWithPath.split("\\.")
    var fileName = fullNamePathList.last() + "." + fileExtension
    var packagePath = fullNamePathList.toList().subList(0, fullNamePathList.length - 1).join("/")
    return new ConfigurationFile("gsrc/${packagePath}/", fileName)
  }

  static function scheduleConfig(productAbbreviation : String) : ConfigurationFile {
    return new ConfigurationFile("config/resources/", productAbbreviation.toLowerCase() + "-schedule-config.xml")
  }

  static function pcfFile(filePath : String, fileName : String) : ConfigurationFile {
    return new ConfigurationFile(filePath, fileName)
  }

  static function xsdFile(filePath : String, fileName : String) : ConfigurationFile {
    return new ConfigurationFile(filePath, fileName)
  }

  static function pluginFile(filePath : String, fileName : String) : ConfigurationFile {
    return new ConfigurationFile(filePath, fileName)
  }

  static function stateSpecificXml(productAbbreviation : String) : ConfigurationFile {
    return new ConfigurationFile("config/", productAbbreviation.toLowerCase() + "_state_specific.xml")
  }

  static function getGeneratedDirectoryName(lineCode : String, jurisdiction : String, processedDate : Date) : String {
    return lineCode + jurisdiction + Formatter.dateToString(processedDate, "yyyyMMdd")
  }

  static function valueDependencyConfig(productAbbreviation : String) : ConfigurationFile {
    return new ConfigurationFile("config/resources/", productAbbreviation.toLowerCase() + "-value-dependency-config.xml")
  }

  static function lobFieldMetaConfig(productAbbreviation : String) : ConfigurationFile {
    return new ConfigurationFile("config/resources/", productAbbreviation.toLowerCase() + "-lob-field-meta.xml")
  }

  //get the container property configuration file by its type
  static function getContainerPropertyConfig(type : ContainerPropertyConfigType, productAbbreviation : String) : ConfigurationFile {
    return new ConfigurationFile("config/resources/", productAbbreviation.toLowerCase() + "-" + type.ConfigFile)
  }

  static function diffTree(productAbbreviation : String) : ConfigurationFile {
    return new ConfigurationFile("config/resources/diff", productAbbreviation.toUpperCase() + "DiffTree.xml")
  }

  static function LookupTablesFile() : ConfigurationFile {
    return new ConfigurationFile("config/lookuptables/", "lookuptables.xml")
  }

  static function sbtCommonContents() : ConfigurationFile {
    return new ConfigurationFile("config/", ConfigContents.SBT_COMMON_CONTENTS)
  }

  private static function getGeneratedReportFile(
      lineCode : String,
      jurisdiction : String,
      processedDate : Date,
      reportType : String
  ) : ConfigurationFile {
    return getGeneratedFile(lineCode, jurisdiction, processedDate, reportType, "html")
  }

  private static function getGeneratedFile(
      lineCode : String,
      jurisdiction : String,
      processedDate : Date,
      reportType : String,
      fileExtension : String
  ) : ConfigurationFile {
    var formattedProcessedDate = Formatter.dateToString(processedDate, "MM_dd_yyyy")
    var productAbbrev = ProductCodeToAbbreviationMapper.getProductAbbreviation(lineCode)
    var fileName = "PCA ${reportType} ${productAbbrev}_${jurisdiction}_${formattedProcessedDate}.${fileExtension}"
    var folder = "config/content/${getGeneratedDirectoryName(lineCode, jurisdiction, processedDate)}"
    return new ConfigurationFile(folder, fileName)
  }

  override function equals(o : Object) : boolean {
    if (o == null) return false
    if (typeof o != ConfigurationFile) return false
    return Path == (o as ConfigurationFile).Path
  }

  override function hashCode() : int {
    return Path.hashCode()
  }
}