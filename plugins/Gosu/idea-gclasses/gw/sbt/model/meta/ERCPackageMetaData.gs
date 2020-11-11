package gw.sbt.model.meta

uses gw.sbt.util.LoaderUtil

uses java.util.List

/**
 * This class represents the metadata from a single .zip package. It contains a list of jurisdictions within this
 * package.
 */
class ERCPackageMetaData {

  var _line : LineMetaData as Line
  var _jurisdictions : List<JurisdictionMetaData> as Jurisdictions = {}
  var _qualifier : String as Qualifier
  var _sbtVersion : SBTVersionMetaData as SBTVersion = null

  function getState(state : String) : JurisdictionMetaData {
    return _jurisdictions.firstWhere( \ jurisdiction -> jurisdiction.Jurisdiction == state)
  }

  property get isInDependentState(): boolean {
    return _jurisdictions.hasMatch(\ jurisdiction -> !LoaderUtil.isJurisdictionCW(jurisdiction.Jurisdiction) and jurisdiction.StateBureau=="INDEPENDENT")
  }

}