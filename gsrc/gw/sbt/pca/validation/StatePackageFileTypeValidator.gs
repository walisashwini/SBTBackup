package gw.sbt.pca.validation

uses java.io.File

class StatePackageFileTypeValidator extends StatePackageValidator {
  var _file:File
  construct(file : File) {
    _file = file
  }
  override function validate() {  //Must be a zip file. 
    _file.listFiles()
          .where(\f -> f.File and (not f.Name.endsWith(".zip")))
          .each(\f -> logInvalidPackageFile(f))
  }
}