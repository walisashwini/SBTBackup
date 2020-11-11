package gw.sbt.model

uses gw.sbt.model.meta.ERCPackageMetaData
uses gw.sbt.model.meta.JurisdictionMetaData
uses gw.sbt.model.meta.LineMetaData

uses java.util.Date
uses java.util.Objects

class SBTUpdateMetaData {
  var _ercMetaData : ERCPackageMetaData as ERCMetaData
  var _jurisdiction : String

  var _cwRCRN : DownloadContent as CWRCRN
  var _stateRCRN : DownloadContent as StateRCRN

  var _adopted : boolean as Adopted
  var _isMaintenanceMetaData : boolean as IsMaintenanceMetaData

  construct(ercMetaData : ERCPackageMetaData, jurisdiction : String, adopted : boolean = false, eligibleForRevert : boolean = false, isMaintenanceMetaData : boolean = false) {
    _ercMetaData = ercMetaData
    _jurisdiction = jurisdiction
    _adopted = adopted
    _isMaintenanceMetaData = isMaintenanceMetaData
  }

  property get Line() : LineMetaData {
    return _ercMetaData.Line
  }

  property get CWEffectiveDate() : Date {
    return _ercMetaData.getState("CW").EffectiveDate
  }

  property get CWVersion() : String {
    return _ercMetaData.getState("CW").Version
  }

  property get CwEdition() : String {
    return CWEffectiveDate + " " + CWVersion
  }

  property get Jurisdiction() : String {
    return _jurisdiction
  }

  property get EffectiveDate() : Date {
    return JurisdictionMetaData.EffectiveDate
  }

  // Changes from Version to better represent the deviation from standard SBT Package State version
  property get PackageVersion() : String {
    if (SBTVersionDate == null) {
      return JurisdictionMetaData.Version
    } else {
      return JurisdictionMetaData.Version + " " + "SBT_Version_" + SBTVersionDate
    }
  }

  property get PackageVersionWithoutSBTVersion() : String {
    return JurisdictionMetaData.Version
  }

  property get Qualifier() : String {
    return _ercMetaData.Qualifier
  }

  property set Qualifier(qualifier : String) {
    _ercMetaData.Qualifier = qualifier
  }

  property set IsMaintenanceMetaData(isMaintenanceMetaData : boolean) {
    _isMaintenanceMetaData = isMaintenanceMetaData
  }

  property get StateBureau(): String { return JurisdictionMetaData.StateBureau}

  property get SBTVersionDate() : Date {
    return _ercMetaData.SBTVersion != null? _ercMetaData.SBTVersion.EffectiveDate : null
  }

  private property get JurisdictionMetaData() : JurisdictionMetaData {
    return _ercMetaData.getState(_jurisdiction)
  }

  override function toString() : String {
    if (_isMaintenanceMetaData) {
      return EffectiveDate + " " + PackageVersion
    }

    return EffectiveDate + " " + PackageVersionWithoutSBTVersion
  }

  function toStringWithoutSBTVersion() : String {
    return EffectiveDate + " " + JurisdictionMetaData.Version
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis SBTUpdateMetaData and
        Line.Code == other.Line.Code and
        EffectiveDate == other.EffectiveDate and
        Jurisdiction == other.Jurisdiction and
        PackageVersion == other.PackageVersion and
        Qualifier == other.Qualifier and
        Adopted == other.Adopted and
        StateBureau == other.StateBureau
  }

  override function hashCode() : int {
    return Objects.hash({Line.Code, EffectiveDate, Jurisdiction, PackageVersion, Qualifier, Adopted, StateBureau})
  }

  function copy(): SBTUpdateMetaData {
    return new SBTUpdateMetaData(ERCMetaData, Jurisdiction)
  }

  function getCombinedMetaDataBasedOn(otherSbtUpdateMetaData : SBTUpdateMetaData) : SBTUpdateMetaData {
    var combinedConfigMetaData = new SBTUpdateMetaData(ERCMetaData, Jurisdiction) {
      var ver = PackageVersion
      override property get PackageVersion() : String {
        return ver + "-" + otherSbtUpdateMetaData.PackageVersion + "-" + EffectiveDate + "-" + otherSbtUpdateMetaData.EffectiveDate
      }
    }

    return combinedConfigMetaData
  }

  function isLaterThan(otherSBTUpdateMetaData : SBTUpdateMetaData) : boolean {
    if(EffectiveDate.after(otherSBTUpdateMetaData.EffectiveDate)) {
      return true
    }

    return PackageVersion.compareTo(otherSBTUpdateMetaData.PackageVersion) > 0
  }

  property get isIndependentState(): boolean {
    return ERCMetaData.isInDependentState
  }
}