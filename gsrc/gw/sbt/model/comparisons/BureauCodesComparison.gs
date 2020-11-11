package gw.sbt.model.comparisons

uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.bureau.DisplayableStateUpdateBureauCodesContainer
uses gw.sbt.model.bureau.StateUpdateBureauCode
uses gw.sbt.util.Serializer

class BureauCodesComparison extends Comparison<BureauCodes> {
  var _adoptionDate : Date
  var _bureauCodeRowComparisons : List<Comparison<DisplayableStateUpdateBureauCodesContainer>> as readonly BureauCodeRowComparisons

  construct(currentVersion : BureauCodes, newVersion : BureauCodes, adoptedVersion : BureauCodes,
            comparisonDeicsionSource : ComparisonDecisionSource,
            adoptionDate : Date,
            parent : Comparison) {
    super(currentVersion, newVersion, adoptedVersion, comparisonDeicsionSource, parent)
    _adoptionDate = adoptionDate
    _bureauCodeRowComparisons = createRowComparisons(adoptionDate)
  }

  override property get Children(): List<Comparison<DisplayableStateUpdateBureauCodesContainer>> {
    return BureauCodeRowComparisons
  }

  override function cloneForRevert() : BureauCodesComparison {
    return new BureauCodesComparison(
        cloneBureauCodes(Current), cloneBureauCodes(New), cloneBureauCodes(Adopted),
        Serializer.makeCopy(_comparisonDecisionSource), _adoptionDate, Parent)
  }

  function copyDecisionsAndInstructionsFrom(templateComparison: BureauCodesComparison) {
    DecisionAndInstructions.updateFrom(templateComparison.DecisionAndInstructions)
    BureauCodeRowComparisons.each(\rowComparison -> {
      var matchedRowComparison = templateComparison.BureauCodeRowComparisons.firstWhere(\templateRowComparison ->
          {
            if(rowComparison.CanonicalVersion.DefiningKeys.HasElements) {
              return templateRowComparison.CanonicalVersion.DefiningKeys == rowComparison.CanonicalVersion.DefiningKeys
            } else {
              return (templateRowComparison.New.ValueRepresentation +
                  templateRowComparison.Current.ValueRepresentation +
                  templateRowComparison.Adopted.ValueRepresentation) ==
                  (rowComparison.New.ValueRepresentation +
                      rowComparison.Current.ValueRepresentation +
                      rowComparison.Adopted.ValueRepresentation)
            }
          })

      if (matchedRowComparison != null) {
        rowComparison.copyDecisionsAndInstructionsFrom(matchedRowComparison)
      }
    })

    New.DecisionAndInstructions?.updateFrom(templateComparison.New.DecisionAndInstructions)
    Adopted.DecisionAndInstructions?.updateFrom(templateComparison.Adopted.DecisionAndInstructions)
    Current.DecisionAndInstructions?.updateFrom(templateComparison.Current.DecisionAndInstructions)
  }

  private function createRowComparisons(adoptionDate : Date): List<Comparison<DisplayableStateUpdateBureauCodesContainer>> {
    var newRows : List<DisplayableStateUpdateBureauCodesContainer>
        = New?.getEffectiveDisplayableStateUpdateBureauCodesContainers(adoptionDate) ?: {}
    var adoptedRows : List<DisplayableStateUpdateBureauCodesContainer> =
        Adopted?.getEffectiveDisplayableStateUpdateBureauCodesContainers(adoptionDate) ?: {}
    var currentRows : List<DisplayableStateUpdateBureauCodesContainer> =
        Current?.getEffectiveDisplayableStateUpdateBureauCodesContainers(adoptionDate) ?: {}

    //remove any customer-added columns from current keyColumns.
    if (Current.BureauCodeKeyValueId.KeyColumns.HasElements) {
      var keyColumnsInCurrent = Current.BureauCodeKeyValueId.KeyColumns
      var keyColumnsInNew = New.BureauCodeKeyValueId.KeyColumns?:{}
      var keyColumnsInAdopted = Adopted.BureauCodeKeyValueId.KeyColumns?:{}
      var customKeyColumns = keyColumnsInCurrent.where(\currentKeyColumn ->
          (not keyColumnsInNew.contains(currentKeyColumn)) and (not keyColumnsInAdopted.contains(currentKeyColumn))
      )

      if (customKeyColumns.HasElements) {
        //remove these columns from the definingKeys for all the current rows
        currentRows.each(\currentRow -> {
          currentRow.DefiningKeys?.removeWhere(\definingKey -> customKeyColumns.contains(definingKey.Name))
          //remove these columns from rows' codes.
          currentRow.Codes.each(\code -> {
            code.Keys?.removeWhere(\definingKey -> customKeyColumns.contains(definingKey.Name))
          })
        })
        //also removes these columns from the KeyColumns definition for the current BureauCodeKeyValueId
        Current.BureauCodeKeyValueId.KeyColumns.removeAll(customKeyColumns)
      }
    }

    //remove any rows only exists in current (custom-added rows)
    currentRows = BureauCodes.removeCodesAndValuesOnlyExistInCurrent(currentRows, newRows, adoptedRows)

    var processedRows : Set<DisplayableStateUpdateBureauCodesContainer> = {}
    var rowComparisons : List<Comparison<DisplayableStateUpdateBureauCodesContainer>> = {}

    // Create comparisons for bureau codes files that have keys defined
    if(New.BureauCodeKeyValueId.KeyColumns.HasElements
        or Current.BureauCodeKeyValueId.KeyColumns.HasElements
        or Adopted.BureauCodeKeyValueId.KeyColumns.HasElements) {

      newRows.each(\newRow -> {
        var currentRow = currentRows.firstWhere(\currentRow -> currentRow.DefiningKeys == newRow.DefiningKeys)
        var adoptedRow = adoptedRows.firstWhere(\adoptedRow -> adoptedRow.DefiningKeys == newRow.DefiningKeys)
        rowComparisons.add(BasicComparison.with(currentRow, newRow, adoptedRow, _comparisonDecisionSource, this))

        processedRows.add(newRow)
        processedRows.add(adoptedRow)
      })

      adoptedRows.where(\adoptedRow -> not processedRows.contains(adoptedRow)).each(\adoptedRow -> {
        var newRow = newRows.firstWhere(\newRow -> newRow.DefiningKeys == adoptedRow.DefiningKeys)
        var currentRow = currentRows.firstWhere(\currentRow -> currentRow.DefiningKeys == adoptedRow.DefiningKeys)
        rowComparisons.add(BasicComparison.with(currentRow, newRow, adoptedRow, _comparisonDecisionSource, this))
      })
    }
    // Create comparisons for bureau codes files that have only value columns
    else {
      var allUniqueValues = newRows*.ValueRepresentation.toSet()
      allUniqueValues.addAll(adoptedRows*.ValueRepresentation.toSet())
      allUniqueValues.each(\value -> {
        rowComparisons.add(
            BasicComparison.with(
                currentRows.firstWhere(\currentRow -> currentRow.ValueRepresentation == value),
                newRows.firstWhere(\newRow -> newRow.ValueRepresentation == value),
                adoptedRows.firstWhere(\adoptedRow -> adoptedRow.ValueRepresentation == value),
                _comparisonDecisionSource, this))
      })
    }

    return rowComparisons
  }

  private function cloneBureauCodes(originalBureauCodes : BureauCodes) : BureauCodes {
    if(originalBureauCodes == null) {
      return originalBureauCodes
    }

    var bureauCodes = new BureauCodes() {
      :FileName = originalBureauCodes.FileName,
      :Label = originalBureauCodes.Label,
      :TableName = originalBureauCodes.TableName,
      :Jurisdiction = originalBureauCodes.Jurisdiction,
      :Codes = originalBureauCodes.Codes,
      :Intent = originalBureauCodes.Intent,
      :BureauCodeKeyValueId = originalBureauCodes.BureauCodeKeyValueId
    }

    bureauCodes.DecisionAndInstructions = Serializer.makeCopy(originalBureauCodes.DecisionAndInstructions)
    bureauCodes.StateUpdateBureauCodes = originalBureauCodes.StateUpdateBureauCodes.map(\originalStateUpdateBureauCode ->
      new StateUpdateBureauCode() {
        :CW = originalStateUpdateBureauCode.CW,
        :Value = originalStateUpdateBureauCode.Value,
        :Keys = originalStateUpdateBureauCode.Keys,
        :EffectiveDate = originalStateUpdateBureauCode.EffectiveDate,
        :ExpirationDate = originalStateUpdateBureauCode.ExpirationDate,
        :DecisionAndInstructions = Serializer.makeCopy(originalStateUpdateBureauCode.DecisionAndInstructions)
      })

    return bureauCodes
  }

}