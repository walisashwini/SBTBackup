package gw.sbt.artifacts.valuedependency

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.SystemTableKeyValueId
uses gw.sbt.util.LoaderUtil
uses gw.xml.XmlElement
uses java.util.Date
uses java.util.List

class ValueDependencyConfig extends XmlContent {
  var _valueDependencies: List<ValueDependency> as ValueDependencies
  construct(content: byte []) {
    super(content)
    init()
  }

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
    init()
  }

  private function init() {
    _valueDependencies = getChildren().map(\child -> new ValueDependency(child))
  }

  function addValueDependency(valueDependency: ValueDependency) {
    _content.addChild(valueDependency.Xml)
    _valueDependencies.add(valueDependency)
  }

  function findValueDependency(valueDependencyKey: String) : ValueDependency{
    return _valueDependencies.firstWhere(\valDep -> valDep.ValueDependencyKey == valueDependencyKey)
  }

  function useAdoptionDate(adoptionDate : Date) {
    _valueDependencies.each(\valueDependency -> valueDependency.useAdoptionDate(adoptionDate))
  }

  function getSystemTableKeyValueId(systemTableName : String, jurisdiction : String, adoptionDate : Date) : SystemTableKeyValueId {
    if (systemTableName == "DBTerritory")
      return getTerritoryCodesKeyValueId(systemTableName, jurisdiction, adoptionDate)

    var matchedValueDependency = ValueDependencies.firstWhere(
        \ valueDependency -> valueDependency.SystemTables.HasElements and
        valueDependency.SystemTables*.Name.contains(systemTableName))
    var matchedSystemTable = matchedValueDependency == null
        ? null
        : matchingEffectiveSystemTableForJurisdiction(
        matchedValueDependency.SystemTables.where(\table -> table.Name == systemTableName),
        jurisdiction, adoptionDate)

    return matchedSystemTable == null
        ? null
        : new SystemTableKeyValueId(
              :keyColumns = Arrays.asList(matchedSystemTable.KeyColumns*.Name),
              :valueColumn = matchedSystemTable.ValueColumn,
              :effectiveDate = matchedSystemTable.EffectiveDate,
              :expiryDate = matchedSystemTable.ExpiryDate)
  }

  // TODO: Use this method for all system tables (i.e., replace #getSystemTableKeyValueId). Due to the release deadline,
  // its scope was limited to territory codes in order to minimize the risk of regressions. See USPCA-122.
  function getTerritoryCodesKeyValueId(systemTableName : String, jurisdiction : String, adoptionDate : Date)
      : SystemTableKeyValueId {
    var matchedValueDependencySystemTables = ValueDependencies
        .where(\ valueDependency ->
            valueDependency.SystemTables.HasElements and valueDependency.SystemTables*.Name.contains(systemTableName))
        .map(\ valueDependency -> matchingEffectiveSystemTableForJurisdiction(
            valueDependency.SystemTables.where(\ table -> table.Name == systemTableName), jurisdiction, adoptionDate))
    var bestMatchedSystemTable = matchedValueDependencySystemTables.firstWhere(\ table -> table.KeyColumns.HasElements)
        ?: matchedValueDependencySystemTables.first()

    return bestMatchedSystemTable == null
        ? null
        : new SystemTableKeyValueId(
              :keyColumns = Arrays.asList(bestMatchedSystemTable.KeyColumns*.Name),
              :valueColumn = bestMatchedSystemTable.ValueColumn,
              :effectiveDate = bestMatchedSystemTable.EffectiveDate,
              :expiryDate = bestMatchedSystemTable.ExpiryDate)
  }

  private function matchingEffectiveSystemTableForJurisdiction(
      systemTables : List<ValueDependencySystemTable>,
      jurisdiction : String,
      adoptionDate : Date
  ) : ValueDependencySystemTable {
    return systemTables.firstWhere(\ table -> table.Jurisdiction == jurisdiction and LoaderUtil.isDateWithinRange (adoptionDate, table.EffectiveDate, table.ExpiryDate)) ?:
        systemTables.firstWhere(\ table -> LoaderUtil.isJurisdictionCW(table.Jurisdiction) and LoaderUtil.isDateWithinRange (adoptionDate, table.EffectiveDate, table.ExpiryDate))
  }
}