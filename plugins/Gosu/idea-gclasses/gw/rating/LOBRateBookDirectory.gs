package gw.rating

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.api.locale.DisplayKey
uses org.slf4j.LoggerFactory

uses java.io.File
uses java.io.FilenameFilter

class LOBRateBookDirectory {

  private static var RATEBOOKS_DIR = "/config/content/ratebooks"
  private static var _rateBooksDir = APIConfigFileAccess.INSTANCE.getConfigFile(RATEBOOKS_DIR)

  function hasRateBookFiles() : boolean {
    if (_rateBooksDir == null) {
      LoggerFactory.getLogger("Configuration").warn(DisplayKey.get("Web.RateBook.Import.Errors.MissingDirectoryStructure", RATEBOOKS_DIR))
      return false
    }
    if (_rateBooksDir.listFiles().IsEmpty) {
      LoggerFactory.getLogger("Configuration").warn(DisplayKey.get("Web.RateBook.Import.Errors.MissingRateBookFiles", RATEBOOKS_DIR))
      return false
    }
    return true
  }

  property get AllRateBookFiles() : File[] {
    return _rateBooksDir.listFiles(new FilenameFilter() {
      override public function accept(dir : File, name : String) : boolean {
        return name.toLowerCase().endsWith(".xml");
      }
    })
  }

}