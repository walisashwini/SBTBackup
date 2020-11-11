package gw.sbt.config.incoming

uses gw.sbt.artifacts.GwDocumentation
uses gw.sbt.artifacts.SbtCommonContents
uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.artifacts.lookuptables.LookupTables
uses gw.sbt.artifacts.metadata.Statescope
uses gw.sbt.artifacts.pcf.PcfFile
uses gw.sbt.artifacts.plugin.PluginFile
uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.xsd.XsdFile
uses gw.sbt.config.ConfigContents
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.DataModelConfigContents
uses gw.sbt.config.DisplayPropertiesConfigContents
uses gw.sbt.config.FileConfigContents
uses gw.sbt.config.ProductModelConfigContents
uses gw.sbt.config.RatingConfigContents
uses gw.sbt.content.Content
uses gw.sbt.model.DownloadContent
uses gw.sbt.model.SBTUpdate
uses java.util.ArrayList
uses gw.sbt.artifacts.difftree.DiffTree
uses gw.sbt.loader.SystemTableHelper
uses org.apache.commons.io.FilenameUtils

uses java.util.List

class SBTUpdateContents extends SBTUpdateContentsBase implements ConfigContents {

  delegate displayContentsDelegate represents DisplayPropertiesConfigContents
  delegate entityContentsDelegate represents DataModelConfigContents
  delegate productModelContentsDelegate represents ProductModelConfigContents
  delegate ratingContentsDelegate represents RatingConfigContents
  delegate fileContentsDelegate represents FileConfigContents

  construct(updateContents: List<Content>) {
    super(updateContents)

    displayContentsDelegate = new SBTUpdateDisplayContentsDelegate(this)
    entityContentsDelegate = new SBTUpdateEntityContentsDelegate(this)
    productModelContentsDelegate = new SBTUpdateProductModelContentsDelegate(this)
    ratingContentsDelegate = new SBTUpdateRatingContentsDelegate(this)
    fileContentsDelegate = new SBTUpdateFileContentsDelegate(this)
  }

  property get StateScope(): Statescope {
    var statescopeContent = getContent("statescope_readme.html")
    if (statescopeContent != null) {
      return new Statescope(statescopeContent)
    } else {
      return null
    }
  }

  function getXsdFiles(): List<XsdFile> {
    var fileAbsolutePaths = _content.keySet().where(\fileAbsolutePath -> (
        fileAbsolutePath.startsWith(XSD_SOURCE_ROOT) and (fileAbsolutePath.endsWith(".xsd"))
    ))
    var xsdFiles = fileAbsolutePaths.map(\absolutePath -> {
      var fileName = FilenameUtils.getName(absolutePath)
      var filePath = FilenameUtils.getPath(absolutePath)
      return new XsdFile(filePath, fileName, _content.get(absolutePath))
    })
    return xsdFiles
  }

  function getPluginFiles(): List<PluginFile> {
    var fileAbsolutePaths = _content.keySet().where(\fileAbsolutePath -> (
        fileAbsolutePath.startsWith(PLUGIN_SOURCE_ROOT) and (fileAbsolutePath.endsWith(".gwp"))
    ))
    var pluginFiles = fileAbsolutePaths.map(\absolutePath -> {
      var fileName = FilenameUtils.getName(absolutePath)
      var filePath = FilenameUtils.getPath(absolutePath)
      return new PluginFile(filePath, fileName, _content.get(absolutePath))
    })
    return pluginFiles
  }

  function getPcfFiles(): List<PcfFile> {
    var fileAbsolutePaths = _content.keySet().where(\fileAbsolutePath -> (
        fileAbsolutePath.startsWith(PCF_SOURCE_ROOT) and (fileAbsolutePath.endsWith(".pcf"))
    ))
    var pcfFiles = fileAbsolutePaths.map(\absolutePath -> {
      var fileName = FilenameUtils.getName(absolutePath)
      var filePath = FilenameUtils.getPath(absolutePath)
      return new PcfFile(filePath, fileName, _content.get(absolutePath))
    })
    return pcfFiles
  }

  function getGosuFiles(): List<GosuFile> {
    var filePaths = _content.keySet().where(\filePath -> (
        filePath.startsWith(GOSU_SOURCE_ROOT)
        and (filePath.endsWith(".gs") or filePath.endsWith(".gsx"))
    ))

    var gosuFiles = filePaths.map(\path -> {
      var pos = path.lastIndexOf('.')
      var fullName = path.substring(GOSU_SOURCE_ROOT.length, pos).replace('/', '.')
      var fileExtension = path.substring(pos + 1)
      return new GosuFile(fullName, fileExtension, _content.get(path))
    })
    return gosuFiles
  }

  function getStateGosuFiles(state: String): List<GosuFile> {
    var filePaths = new StateGosuFilesFilter(state).apply(_content.keySet()).toSet()

    final var fromStateSpecificXml = getFilePathsInStateSpecificXml(state)
    fromStateSpecificXml.retainWhere( \ path -> path.endsWith(".gs") or path.endsWith(".gsx"))
    filePaths.addAll(fromStateSpecificXml)

    var gosuFiles = filePaths.map( \ path -> {
      var pos = path.lastIndexOf('.')
      var fullName = path.substring(GOSU_SOURCE_ROOT.length, pos).replace('/', '.')
      var fileExtension = path.substring(pos + 1)
      return new GosuFile(fullName, fileExtension, _content.get(path))
    })
    return gosuFiles
  }

  private function getFilePathsInStateSpecificXml(state: String) : List<String> {
    var fileEntries = new ArrayList<String>()

    StateSpecificXml.$Children?.each( \ node -> {
      if (node.$QName.LocalPart.equalsIgnoreCase("lob")) {
        var fileOrDirectoryEntries = node.$Children.firstWhere( \ elt -> elt.$QName.LocalPart == "state" and elt.getAttributeValue("name") == state).$Children
        if(fileOrDirectoryEntries != null)  {
          fileEntries.addAll(fileOrDirectoryEntries.where( \ entry -> entry.$QName.LocalPart == "file" and contentExist(entry.$Text))*.$Text.toList())

          var directoryEntries = fileOrDirectoryEntries.where( \ entry -> entry.$QName.LocalPart == "dir")*.$Text.toList()
          directoryEntries.each( \ dir -> fileEntries.addAll(getContentPathsOnPath(dir)))
        }
      }
    })

    return fileEntries
  }

  function getRateBookFileName(jurisdiction: String): String {
    var path = ConfigurationFile.rateBooksFolder().Path
    var filePattern = ".*${jurisdiction}\\-\\d{8}.*"

    var matchedKey = _content.Keys.firstWhere(\key -> key.startsWith(path) and key.matches(filePattern))
    return matchedKey?.split("/")?.last()
  }

  function getGwDocumentation(jurisdiction: String) : GwDocumentation {
    var documentation = getContent(GwDocumentation.getFileName(jurisdiction))
    if (documentation != null) {
      return new GwDocumentation (documentation, jurisdiction)
    }
    return null
  }

  property get CWRCRNFileName() : String {
    var filePattern = "RCRN\\-\\w{2}\\-CW\\-\\d{8}.*"
    return _content.Keys.firstWhere(\key -> key.matches(filePattern))
  }

  function getStateRCRNFileName(jurisdiction : String) : String {
    var filePattern = "RCRN\\-\\w{2}\\-${jurisdiction}\\-\\d{8}.*"
    return _content.Keys.firstWhere(\key -> key.matches(filePattern))
  }

  property get CWRCRN() : DownloadContent {
    return createReleaseNotes(CWRCRNFileName)
  }

  function getStateRCRN(jurisdiction : String) : DownloadContent {
    return createReleaseNotes(getStateRCRNFileName(jurisdiction))
  }

  private function createReleaseNotes(fileName : String) : DownloadContent {
    var releaseNotesContent = getContent(fileName)
    return releaseNotesContent != null ? new DownloadContent () {:FileName = fileName, :Content = releaseNotesContent} : null
  }

  property get DiffTree() : DiffTree {
    var content = getContent(ConfigurationFile.diffTree(ProductAbbreviation))
    return content == null ? null : new DiffTree(content)
  }

  property get LookupTables() : LookupTables {
    var content = getContent(ConfigurationFile.LookupTablesFile())
    return content == null ? null : new LookupTables(content)
  }

  property get SbtCommonContents() : SbtCommonContents {
    var content = getContent(ConfigurationFile.sbtCommonContents())
    return content == null or content.length == 0 ? null : new SbtCommonContents(content)
  }

  //all system tables inside systables folders.
  private property get AllSystemTables() : List<SystemTable> {
    final var SOURCE_ROOT = "config/resources/systables/"
    var filePaths = _content.keySet().where(\path -> path.startsWith(SOURCE_ROOT)
        and (path.endsWith(".xml")))
    var systables = filePaths.map(\path -> {
      var pos = path.lastIndexOf('.')
      var fileName = path.substring(SOURCE_ROOT.length, pos)
      return new SystemTable(_content.get(path), fileName)
    })

    return systables
  }

  //system tables excluding 'bureau codes' and 'excluded' system tables.
  function getRemainingSystemTables(sbtUpdate : SBTUpdate) : List<SystemTable> {
    var remainingSystemTables = AllSystemTables
    var bureauCodeSystemTables = getBureauCodeSystemTables(sbtUpdate)
    bureauCodeSystemTables.each(\bc -> remainingSystemTables.removeWhere(\s -> s.TableName == bc.TableName))
    ExcludedSystemTables.each(\sysTable -> remainingSystemTables.removeWhere(\fs -> fs.TableName == sysTable.TableName))
    return remainingSystemTables
  }

  //'bureau codes' system tables
  function getBureauCodeSystemTables(sbtUpdate : SBTUpdate) : List<SystemTable> {
    var bureauCodeList : List<SystemTable> = {}
    sbtUpdate.BureauCodeFileDefinitions.each(\fileDefinition -> {
      var bureuCodesSystem = getSystemTable(fileDefinition.FileNameWithExtension)
      if (bureuCodesSystem != null) {
        bureauCodeList.add(getSystemTable(fileDefinition.FileNameWithExtension))
      }
    })
    return bureauCodeList
  }

  //'excluded' system tables
  private property get ExcludedSystemTables() : List<SystemTable> {
    var excludedSystemTables : List<SystemTable> = {}
    SystemTableHelper.ExcludedSystemTableFileNames.each(\sysTableName -> {
      var excludedSystemTable = getSystemTable(sysTableName)
      if (excludedSystemTable != null) {
        excludedSystemTables.add(excludedSystemTable)
      }
    })
    return excludedSystemTables
  }

}
