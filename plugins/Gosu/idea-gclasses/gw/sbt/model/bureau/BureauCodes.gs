package gw.sbt.model.bureau

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.IntentAndDecision
uses gw.sbt.model.SystemTableKeyValueId
uses gw.sbt.util.LoaderUtil

uses java.util.List

class BureauCodes implements IntentAndDecision {
  // Line-independent identifier for the type of bureau codes
  var _fileName : String as FileName
  var _label : String as Label

  var _tableName : String as TableName
  var _jurisdiction : String as Jurisdiction
  var _stateAddBureauCodes : List<BureauCode> as Codes
  var _intent: Intent as Intent
  var _decisionAndInstructions: DecisionAndInstructions as DecisionAndInstructions

  var _isBureauCode : boolean as IsBureauCode = false

  /**
   * Bureau codes for state update purposes. It is not the best idea to define a reference here but it is better
   * than changing SBTUpdate class. These are only initialized during a state update flow.
   */
  var _stateUpdateBureauCodes : List<StateUpdateBureauCode> as StateUpdateBureauCodes

  /**
   * For state-add:
   *  This is a reflection of how value-dependency.xml assigns a column to be key or value
   * For state-update:
   *  It is created by SystemTableHelper.getSystemTableKeyValueId(), not depend on value-dependency.xml
   */
  var _bureauCodeKeyValueId : SystemTableKeyValueId as BureauCodeKeyValueId


  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
  }

  // adding this constructor to accomodate using BureauCodes class to hold System Tables, if they are seperated into 2 classes, then this can be removed
  construct(isBureauCode : boolean) {
    this()
    _isBureauCode = isBureauCode
  }

  /**
   * This property only applies to state-add presenters
   */
  property get AttributeNames() : List<String> {
    return _stateAddBureauCodes.first().Attributes*.Name.toList()
  }

  function getEffectiveDisplayableStateUpdateBureauCodesContainers(adoptionDate : Date)
      : List<DisplayableStateUpdateBureauCodesContainer> {
    if (_stateUpdateBureauCodes.Empty) {
      return Collections.emptyList()
    }
    //filter by adoption date
    var filteredCodes = _stateUpdateBureauCodes.where(\ createdCode ->
        LoaderUtil.isDateWithinRange(adoptionDate, createdCode.EffectiveDate, createdCode.ExpirationDate))
    //filter by state deletion
    filteredCodes = rejectCodesDeletedByState(filteredCodes, adoptionDate)
    //If both CW and State versions (same key, same value) exist, the effective version should be the State version (CW version should be removed).
    filteredCodes = removeCountryWideIfStateExists(filteredCodes)

    if (filteredCodes.first().Keys.HasElements) {
      // Extract unique key attributes from all rows in a system table
      var uniqueKeyLists : List<Set<BureauCodeAttribute>> = {}  // using List to keep the order
      filteredCodes.each(\bureauCode -> {
        if (not uniqueKeyLists.contains(bureauCode.Keys)) {
          uniqueKeyLists.add(bureauCode.Keys)
        }
      })
      // Extract all rows with matching key attributes,
      return uniqueKeyLists.map(\uniqueKeySet -> new DisplayableStateUpdateBureauCodesContainer(TableName) {
        :DefiningKeys = uniqueKeySet,
        :Codes = filteredCodes.where(\code -> code.Keys == uniqueKeySet),
        :HasValueColumn = HasValueColumnDefined
      })
    } else {
      // When there is no keys, treat each row as a simple list of value
      return filteredCodes.map(\code -> new DisplayableStateUpdateBureauCodesContainer(TableName) {
        :DefiningKeys = {},
        :Codes = {code},
        :HasValueColumn = HasValueColumnDefined
      })
    }
  }

  property get HasValueColumnDefined() :boolean {
    return BureauCodeKeyValueId.ValueColumn.HasContent
  }

  function getSysTableSuffix(productAbbrev : String) : String {
    var sysTableSuffix = FileName
    if (sysTableSuffix.startsWith(productAbbrev.toLowerCase() + "_")) {
      sysTableSuffix = sysTableSuffix.substring(productAbbrev.length + 1)
    }
    return sysTableSuffix
  }

  private function rejectCodesDeletedByState(codes : List<StateUpdateBureauCode>, adoptionDate : Date)
      : List<StateUpdateBureauCode> {
    // Find the state-specific codes that have expired entries / "look-ups" prior to adoption date
    // Note: there may be rows that "bring back" the codes later
    var expiredStateSpecificCodes = _stateUpdateBureauCodes.where(\ code ->
        not code.CW and code.ExpirationDate?.beforeOrEqual(adoptionDate))

    // We only consider a state row is expiring a CW row, if the state-specific row's coverage period falls within
    // the CW row's coverage period. This means for every expired state-specific row, there must be a CW row (with
    // the same value and key) containing an overlaping coverage period.
    expiredStateSpecificCodes.retainWhere(\stateSpecificCode ->
      codes.hasMatch(\code ->
          code.CW and codesMatch(code, stateSpecificCode) and
          stateSpecificCode.ExpirationDate?.afterOrEqual(code.EffectiveDate)))

    // Add back any state-specific codes that are effective over the adoption date. That is, if a state
    // brings back a code that was expired earlier, we should still include it.
    var effectiveStateSpecificCodes = _stateUpdateBureauCodes.where(\ code ->
        not code.CW and LoaderUtil.isDateWithinRange(adoptionDate, code.EffectiveDate, code.ExpirationDate))
    expiredStateSpecificCodes.removeIf(\ code -> effectiveStateSpecificCodes.hasMatch(\ c -> codesMatch(code, c)))
    var isDeleted = \ code : StateUpdateBureauCode -> expiredStateSpecificCodes.hasMatch(\ c -> codesMatch(code, c))
    return codes.where(\ code -> not isDeleted(code))
  }

  private function removeCountryWideIfStateExists(codes : List<StateUpdateBureauCode>)
      : List<StateUpdateBureauCode> {
    var countryWideToBeRemoved : List<StateUpdateBureauCode> = {}
    codes.where(\code -> code.CW).each(\countryWideCode -> {
      var hasJurisdictionRow = codes.hasMatch(\row ->
          (  // exists a state version with the same key, same value
           not row.CW and
           countryWideCode.hasSameKeySetAs(row) and
           countryWideCode.hasSameValueAs(row)
          )
      )
      if (hasJurisdictionRow) {
        countryWideToBeRemoved.add(countryWideCode)
      }
    })
    return codes.where(\code -> not countryWideToBeRemoved.contains(code))
  }


  //filter out the codes and values only exist in current
  public static function removeCodesAndValuesOnlyExistInCurrent(bureauCodesContainersInCurrent : List<DisplayableStateUpdateBureauCodesContainer>,
                                                                bureauCodesContainersInNew : List<DisplayableStateUpdateBureauCodesContainer>,
                                                                bureauCodesContainersInAdopted : List<DisplayableStateUpdateBureauCodesContainer>)
      : List<DisplayableStateUpdateBureauCodesContainer> {
    bureauCodesContainersInCurrent.each(\containerInCurrent -> {
      var filteredCodes : List<StateUpdateBureauCode> = {}
      containerInCurrent.Codes.each(\code -> {
        if (not code.Keys.HasElements) {
          //no key, filter out value only exists in current
          var hasMatchedValue = bureauCodesContainersInNew?.hasMatch(\codeInNew -> codeInNew.Codes*.Value.contains(code.Value))
              or bureauCodesContainersInAdopted?.hasMatch(\codeInAdopted -> codeInAdopted.Codes*.Value.contains(code.Value))
          if (hasMatchedValue) {
            filteredCodes.add(code)
          }
        } else {
          //with key, find the code by key in New and Adopted
          //filter out value only exists in current
          var codeInNew = bureauCodesContainersInNew?.firstWhere(\inNew -> inNew.DefiningKeys == code.Keys)
          var codeInAdopted = bureauCodesContainersInAdopted?.firstWhere(\inNew -> inNew.DefiningKeys == code.Keys)
          if (codeInNew != null or codeInAdopted != null) {
            var valuesInNew = codeInNew.Codes*.Value
            var valuesInAdopted = codeInAdopted.Codes*.Value
            var hasMatchedValue = valuesInNew?.hasMatch(\value -> code.Value == value) or valuesInAdopted?.hasMatch(\value -> code.Value == value)
            if (hasMatchedValue) {
              filteredCodes.add(code)
            }
          }
        }
      })
      //reset codes with filtered codes
      containerInCurrent.Codes = filteredCodes
    })

    bureauCodesContainersInCurrent.retainWhere(\container -> container.Codes.HasElements)
    return bureauCodesContainersInCurrent
  }

  private function codesMatch(first : StateUpdateBureauCode, second : StateUpdateBureauCode) : boolean {
    return first.hasSameKeySetAs(second) and first.hasSameValueAs(second)
  }
}