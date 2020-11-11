package gw.sbt.pca.validation

uses java.io.File
uses gw.sbt.model.meta.ERCPackageMetaData

class SatePackageMetadataValidator extends StatePackageValidator {
  var _file: File
  var _metadata: ERCPackageMetaData

  construct(file: File, metadata: ERCPackageMetaData) {
    _metadata = metadata
    _file = file
  }

  override function validate() {
    if (_metadata == null) {
      Stop = true    // set the Stop sign to indicate this is a show stopper
      logInvalidPackageFile(_file)
    }
    // For future validation enhancement
    // TODO: The qualifier (customer package filename sans extension) should be set from the MetadataReader
    // TODO: Include checksum in the MetaData as well
  }
}