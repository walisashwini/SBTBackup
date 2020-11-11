package gw.sbt.util

uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator
uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.content.Content
uses gw.sbt.extractor.content.ConfigExtractor
uses gw.sbt.extractor.content.ContentExtractor
uses gw.sbt.extractor.content.FormExtractor
uses gw.sbt.extractor.content.GsrcExtractor
uses gw.sbt.zip.CustomerPackageUnzipper
uses org.slf4j.LoggerFactory

uses java.io.BufferedReader
uses java.io.ByteArrayInputStream
uses java.io.InputStream
uses java.io.InputStreamReader
uses java.text.SimpleDateFormat

class LoaderUtil {

  static private final var PACKAGE_PREFIX = "package"
  static private final var EXTEND_REGEX = "[.a-zA-Z0-9\\s]*extends.*[0-9]{8}[.a-zA-Z0-9\\s\\{]*"
  static private final var FILE_NAME_REGEX_FOR_AUTOMERGING = ".*generated\\.([a-z]{2})\\.v[0-9]{8}\\..*"


  static var LOADER_EXTRACTORS : List<ContentExtractor> = {
      new ConfigExtractor(),
      new FormExtractor(),
      new GsrcExtractor()
  }

  static function getCustomerContent(customerPackageZip : InputStream, jurisdiction : String) : SBTUpdateContents {
    var customerPackageContents = new CustomerPackageUnzipper().unzipCustomerPackage(customerPackageZip)
    var contents = new ArrayList<Content>()
    LOADER_EXTRACTORS.each(\extractor -> contents.addAll(extractor.extract(customerPackageContents, jurisdiction).Contents))
    return new SBTUpdateContents(contents)
  }

  static function isJurisdictionCW(jurisdiction : String) : boolean {
    if (jurisdiction != null) {
      jurisdiction = jurisdiction.trim()
    }
    return jurisdiction == null or jurisdiction == "" or jurisdiction == "CW"
  }

  //inclusive for startDate, exclusive for endDate
  static function isDateWithinRange(targetDate : Date, startDate : Date, endDate : Date) : boolean {
    if (targetDate == null) {
      return true
    }

    if (endDate == null and startDate != null) {
      return targetDate.after(startDate) or targetDate == startDate
    } else if (startDate == null and endDate != null) {
      return targetDate.before(endDate)
    } else if (startDate != null and endDate != null) {
      return (targetDate.after(startDate) or targetDate == startDate)
          and (targetDate.before(endDate))
    } else {
      return true
    }
  }

  /**
   * Return the union of 2 list of identifiers while making the best *attempt* at maintaining the relative
   * ordering of appearance of IDs in their individual lists. The return type is a List even though all
   * duplicates will be removed.
   *
   * @param ids1
   * @param ids2
   * @return
   */
  static function unionIdsInRelativeOrder(ids1 : String[], ids2 : String[]) : List<String> {
    if (ids1 == null or ids1.IsEmpty) {
      return ids2.toList()
    } else if (ids2 == null or ids2.IsEmpty) {
      return ids1.toList()
    }

    var ids1List = ids1.toList()
    var ids2List = ids2.toList()
    var previousId : String = null

    ids2List.each(\id2 -> {
      if (not ids1List.contains(id2)) {
        if (previousId == null) {
          // This is the first element that was added from the 2nd list
          ids1List.add(id2)
        } else {
          var insertPt = ids1List.indexOf(previousId) + 1
          if (insertPt > ids1List.size()) {
            LoggerFactory.getLogger("PCA").error("Failed to add IDs in order in unionIdsInRelativeOrder")
            ids1List.add(id2)
          } else {
            ids1List.add(insertPt, id2)
          }
        }
        previousId = id2
      } else {
        previousId = id2
      }
    })

    return ids1List
  }

  static function generatePublicId() : String {
    return PublicIdGenerator.instance().generateId()
  }


  static function contentCompareIgnoreWhiteSpace(file1 : byte[], file2 : byte[], ignorePackageAndExtends : boolean = false) : boolean {
    var file1Reader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(file1)))
    var file2Reader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(file2)))

    var contentSame = true
    var file1NextLine : String = null
    var file2NextLine : String = null

    do {
      file1NextLine = getNextNonEmptyLine(file1Reader, ignorePackageAndExtends)
      file2NextLine = getNextNonEmptyLine(file2Reader, ignorePackageAndExtends)

      contentSame = file1NextLine == file2NextLine

    } while (contentSame and file1NextLine != null and file2NextLine != null)
    return contentSame
  }

  static private function getNextNonEmptyLine(fileReader : BufferedReader, ignorePackageAndExtends : boolean) : String {
    var nextLine : String = null
    do {
      nextLine = fileReader.readLine()
    }
    while (nextLine != null and (
        nextLine.trim().Empty or (
            ignorePackageAndExtends and (
                nextLine.startsWith(PACKAGE_PREFIX) or nextLine.matches(EXTEND_REGEX)))))

    return nextLine == null ? nextLine : nextLine.trim()
  }

  static function getFileNameWithoutPath(fileName : String) : String {
    var filePath = fileName.split("\\.")
    return filePath[filePath.length - 2]
  }

  static function getAllFileVersionsWithName(fileName : String, gosuFiles : List<GosuFile>) : List<GosuFile> {
    var unPathFileName = getFileNameWithoutPath(fileName)
    return gosuFiles.where(\gosuFile -> gosuFile.FQName.contains(unPathFileName)
        and getFileStateScope(gosuFile.FQName) == getFileStateScope(fileName))
  }

  static function isFileGenerated(fileName : String) : boolean {
    return fileName.split("\\.").contains("generated")
  }

  static function isFileCW(fileName : String) : boolean {
    return fileName.split("\\.").contains("cw")
  }

  static function getFileStateScope(fileName : String) : String {
    return fileName.match(FILE_NAME_REGEX_FOR_AUTOMERGING)?.first()
  }

  static function isFileUnderConsiderationForAutoMerging(fileName : String) : boolean {
    return fileName.matches(FILE_NAME_REGEX_FOR_AUTOMERGING)
  }
}