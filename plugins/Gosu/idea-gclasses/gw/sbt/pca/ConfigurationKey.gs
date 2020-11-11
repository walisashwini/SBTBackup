package gw.sbt.pca

uses gw.lang.reflect.features.PropertyReference
uses gw.sbt.model.SBTUpdateMetaData
uses java.util.List

class ConfigurationKey extends ValueObject {
  var _line : String as readonly Line
  var _jurisdiction : String as readonly Jurisdiction
  var _effectiveDate : Date as readonly EffectiveDate
  var _version : String as readonly Version

  private construct(line : String, jurisdiction : String, effectiveDate: Date, version: String) {
    _line = line
    _jurisdiction = jurisdiction
    _effectiveDate = effectiveDate
    _version = version
  }

  private construct(line : String, jurisdiction : String) {
    _line = line
    _jurisdiction = jurisdiction
  }

  static function with(line : String, jurisdiction : String, effectiveDate: Date, version: String) : ConfigurationKey {
    return new ConfigurationKey(line, jurisdiction, effectiveDate, version)
  }

  static function fromMetaData(sbtUpdateMetaData : SBTUpdateMetaData) : ConfigurationKey {
    return new ConfigurationKey(sbtUpdateMetaData.Line.Code, sbtUpdateMetaData.Jurisdiction, sbtUpdateMetaData.EffectiveDate, sbtUpdateMetaData.PackageVersion)
  }

  static function fromMetaDataGroupByLineAndState(sbtUpdateMetaData : SBTUpdateMetaData) : ConfigurationKey {
    return new ConfigurationKey(sbtUpdateMetaData.Line.Code, sbtUpdateMetaData.Jurisdiction)
  }

  override property get ValueProperties() : List<PropertyReference<ConfigurationKey, Object>> {
    return {#Line, #Jurisdiction, #EffectiveDate, #Version}
  }
}