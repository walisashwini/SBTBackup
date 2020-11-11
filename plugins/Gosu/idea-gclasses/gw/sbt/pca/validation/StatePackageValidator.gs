package gw.sbt.pca.validation

uses java.io.File
uses java.util.ArrayList
uses java.util.List
uses org.slf4j.LoggerFactory

abstract class StatePackageValidator extends Validator {
  var _stop: boolean as Stop
  static var _invalidPackageFiles = new ArrayList<String>()
  function logInvalidPackageFile(file: File) {
    _invalidPackageFiles.add(file.Name)
    LoggerFactory.getLogger("PCA").warn("The file: ${file.Name} was ignored because it is not a zip file containing a statescope file, only state-packages should reside in the PCA's update folder")
  }
  //only used by unit test.
  static public function getInvalidPackageFiles(): List<String> {
    return _invalidPackageFiles
  }
}