package gw.sbt.artifacts.gosu

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.util.LoaderUtil

class GosuFile implements ContentWrapper {

  var _fullName : String as readonly FullName
  var _fileExtension : String as readonly FileExtension
  var _content : byte[]as readonly Bytes

  static public final var GS_EXTENSION : String = "gs"
  static public final var GS_ENHANCEMENT_EXTENSION : String = "gsx"

  private static final var PACKAGE_EXTEND_STATEMENT_REGEX = "[\\s\\S]*(package.*[0-9]{8})[\\s\\S]*(extends[^\\{]*)\\{[\\s\\S]*"

  construct(fullName : String, fileExtension : String, content : byte[]) {
    _fullName = fullName
    _fileExtension = fileExtension
    _content = content
  }

  property get FQName() : String {
    return _fullName + "." + _fileExtension
  }

  /**
   * Update the content using the incoming gosu file package statement
   *
   * @param file
   */
  public function updateDate(file : GosuFile) {
    var content = new String(this.Bytes)
    var thisGroup = content.match(PACKAGE_EXTEND_STATEMENT_REGEX)
    var fileGroup = new String(file.Bytes).match(PACKAGE_EXTEND_STATEMENT_REGEX)

    if (thisGroup == null or thisGroup.size() < 2 || fileGroup.size() < 2) {
      throw "Not Valid DTO"
    } else {
      content = content.replaceAll(thisGroup.first(), fileGroup.first())
      if (not LoaderUtil.isFileCW(this.FQName)) {
        content = content.replaceAll(thisGroup.get(1), fileGroup.get(1))
      }
    }

    _content = content.Bytes
    _fullName = file.FullName
  }
}