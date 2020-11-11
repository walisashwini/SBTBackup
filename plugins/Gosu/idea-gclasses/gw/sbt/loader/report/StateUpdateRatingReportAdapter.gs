package gw.sbt.loader.report

uses gw.sbt.model.UpdateDecision
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateBookPresenter
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableCategoryPresenter
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableRowPresenter
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRatingAlgorithmCategoryPresenter
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRatingAlgorithmRowPresenter
uses gw.util.Pair

class StateUpdateRatingReportAdapter {
  var _stateUpdateRateBookPresenter : StateUpdateRateBookPresenter
  var _rateTableRowPresenters : List<StateUpdateRateTableRowPresenter>
  var _rateTableAlgorithmPresenters: List<StateUpdateRatingAlgorithmRowPresenter>

  construct(stateUpdateRateBookPresenter : StateUpdateRateBookPresenter) {
    _stateUpdateRateBookPresenter = stateUpdateRateBookPresenter
  }

  function initializeReport(ratingReport : StateUpdateRatingReport) {
    ratingReport.withNewRateTables(NewRateTables)
    ratingReport.withRemovedRateTables(RemovedRateTables)
    var isoMOdifiedRateTables= getISOModifiedRateTables (ratingReport)
    ratingReport.withISOModifiedRateTables(isoMOdifiedRateTables)
    var carrierModifiedRateTables= getCarrierModifiedRateTables (ratingReport)
    ratingReport.withCarrierModifiedRateTables(carrierModifiedRateTables)
    ratingReport.withNewAlgorithms(NewAlgorithms)
    ratingReport.withRemovedAlgorithms(RemovedAlgorithms)
    ratingReport.withModifiedAlgorithms(ModifiedAlgorithms)
  }

  property get RatingAlgorithmPresenters() : List<StateUpdateRatingAlgorithmRowPresenter> {
    if (_rateTableAlgorithmPresenters == null) {
      _rateTableAlgorithmPresenters = {}
      var ratingAlgorithmCategoryPresenter = _stateUpdateRateBookPresenter.Children
          .firstWhere(\child -> child typeis StateUpdateRatingAlgorithmCategoryPresenter)

      if (ratingAlgorithmCategoryPresenter != null) {
        _rateTableAlgorithmPresenters.addAll(ratingAlgorithmCategoryPresenter.Children.cast(StateUpdateRatingAlgorithmRowPresenter))
      }
    }
    return _rateTableAlgorithmPresenters
  }

  property get RateTableRowPresenters() : List<StateUpdateRateTableRowPresenter> {
    if (_rateTableRowPresenters == null) {
      _rateTableRowPresenters = {}
      var rateTableCategoryPresenter = _stateUpdateRateBookPresenter.Children
          .firstWhere(\child -> child typeis StateUpdateRateTableCategoryPresenter)

      if (rateTableCategoryPresenter != null) {
        _rateTableRowPresenters.addAll(rateTableCategoryPresenter.Children.cast(StateUpdateRateTableRowPresenter))
      }
    }

    return _rateTableRowPresenters
  }

  private function getISOModifiedRateTables(ratingReport : StateUpdateRatingReport) : List<AdaptedReportRateTableDiff> {
    var rateTables : List<AdaptedReportRateTableDiff> = {}
    RateTableRowPresenters.where(\presenter -> presenter.DiffType == UpdateDiffType.TC_CHANGED)*.ComparisonPresenterForReport
        .each(\presenter ->
            rateTables.add(new AdaptedReportRateTableDiff() {
              :TableName = presenter.Description + " (" + ratingReport.getUpdateDecisionDescription(presenter.Decision) + ")",
              :ParameterList = presenter.ParameterNames,
              :CurrentTitle = presenter.CurrentTitle,
              :NewTitle = presenter.NewTitle,
              :DiffTitle = presenter.DiffTitle,
              :AdoptedTitle = presenter.AdoptedTitle,
              :Rows = presenter.Children.where(\factorPresenter -> factorPresenter.Decision == UpdateDecision.ACCEPT or factorPresenter.Decision == UpdateDecision.REJECT
              ).map(\factorPresenter ->
                  new AdaptedReportTableRowDiff() {
                    :ParameterValueList = factorPresenter.ParameterValues,
                    :CurrentValue = factorPresenter.CurrentValue,
                    :NewValue = factorPresenter.NewValue,
                    :DiffValue = factorPresenter.DiffValue,
                    :DecisionValue = factorPresenter.Decision,
                    :AdoptedValue = factorPresenter.AdoptedValue
                  }
              )
            })
        )

    return rateTables
  }

  private function getCarrierModifiedRateTables(ratingReport : StateUpdateRatingReport) : List<AdaptedReportRateTableDiff> {
    var rateTables : List<AdaptedReportRateTableDiff> = {}

    RateTableRowPresenters
        // First filter out only tables that's delta or no change, at the table level
        .where(\tableRowPresenter -> tableRowPresenter.DiffType == UpdateDiffType.TC_CHANGED or tableRowPresenter.DiffType == UpdateDiffType.TC_NOCHANGE)*.ComparisonPresenterForReport
        .each(\tableComparisonPresenter -> {
          // Get rows of the table where a row must contain no difference between Adopted & New, but must also contain
          // a difference between Current & New. User decision should not be relevant here.
          var carrierModifiedRowPresenters = tableComparisonPresenter.Children.where(\factorRowPresenter ->
              not factorRowPresenter.FactorRowComparison.CompareAdoptedToNew.IsDifferentOverall and
                  factorRowPresenter.FactorRowComparison.CompareCurrentToNew.IsDifferentOverall)

          if (carrierModifiedRowPresenters.HasElements) {
            var decisionString = tableComparisonPresenter.Decision == UpdateDecision.ACCEPT or tableComparisonPresenter.Decision == UpdateDecision.REJECT ?
                " (" + ratingReport.getUpdateDecisionDescription(tableComparisonPresenter.Decision) + ")" : ""
            rateTables.add(new AdaptedReportRateTableDiff() {
              :TableName = tableComparisonPresenter.Description + decisionString,
              :ParameterList = tableComparisonPresenter.ParameterNames,
              :CurrentTitle = tableComparisonPresenter.CurrentTitle,
              :NewTitle = tableComparisonPresenter.NewTitle,
              :DiffTitle = tableComparisonPresenter.DiffTitle,
              :AdoptedTitle = tableComparisonPresenter.AdoptedTitle,
              :Rows = carrierModifiedRowPresenters.map(\factorPresenter ->
                  new AdaptedReportTableRowDiff() {
                    :ParameterValueList = factorPresenter.ParameterValues,
                    :CurrentValue = factorPresenter.CurrentValue,
                    :NewValue = factorPresenter.NewValue,
                    :DiffValue = factorPresenter.DiffValue,
                    :DecisionValue = factorPresenter.Decision,
                    :AdoptedValue = factorPresenter.AdoptedValue
                  })
            })
          }
        })

    return rateTables
  }

  private property get NewRateTables() : List<Pair<String, UpdateDecision>> {
    var newRateTables : List<Pair<String, UpdateDecision>> = {}
    RateTableRowPresenters.where(\presenter -> presenter.DiffType == UpdateDiffType.TC_NEW)
        .each(\presenter -> {
          newRateTables.add(new Pair<String, UpdateDecision>(presenter.Description, presenter.Decision))
        })

    return newRateTables
  }

  private property get RemovedRateTables() : List<Pair<String, UpdateDecision>> {
    var removedRateTables : List<Pair<String, UpdateDecision>> = {}
    RateTableRowPresenters.where(\presenter -> presenter.DiffType == UpdateDiffType.TC_DELETED)
        .each(\presenter -> {
          removedRateTables.add(new Pair<String, UpdateDecision>(presenter.Description, presenter.Decision))
        })

    return removedRateTables
  }


  private property get NewAlgorithms() : List<Pair<String, UpdateDecision>> {
    var newAlgorithms : List<Pair<String, UpdateDecision>> = {}
    RatingAlgorithmPresenters.where(\presenter -> presenter.DiffType == UpdateDiffType.TC_NEW)
        .each(\presenter -> {
          newAlgorithms.add(new Pair<String, UpdateDecision>(presenter.Description, presenter.Decision))
        })

    return newAlgorithms
  }

  private property get RemovedAlgorithms() : List<Pair<String, UpdateDecision>> {
    var newAlgorithms : List<Pair<String, UpdateDecision>> = {}
    RatingAlgorithmPresenters.where(\presenter -> presenter.DiffType == UpdateDiffType.TC_DELETED)
        .each(\presenter -> {
          newAlgorithms.add(new Pair<String, UpdateDecision>(presenter.Description, presenter.Decision))
        })

    return newAlgorithms
  }

  private property get ModifiedAlgorithms() : List<Pair<String, UpdateDecision>> {
    var newAlgorithms : List<Pair<String, UpdateDecision>> = {}
    RatingAlgorithmPresenters.where(\presenter -> presenter.DiffType == UpdateDiffType.TC_CHANGED)
        .each(\presenter -> {
          newAlgorithms.add(new Pair<String, UpdateDecision>(presenter.Description, presenter.Decision))
        })

    return newAlgorithms
  }

  static class AdaptedReportRateTableDiff {
    var tableName : String as TableName
    var _parameterList : List<String>as ParameterList = {}
    var _currentTitle : String as CurrentTitle
    var _newTitle : String as NewTitle
    var _diffTitle : String as DiffTitle
    var _adoptedTitle : String as AdoptedTitle
    var _rows : List<AdaptedReportTableRowDiff>as Rows = {}

  }

  static class AdaptedReportTableRowDiff {
    var _parameterValueList : List<String>as ParameterValueList = {}
    var _current : String as CurrentValue
    var _new : String as NewValue
    var _diffValue : String as DiffValue
    var _decisionValue : UpdateDecision as DecisionValue
    var _adoptedValue : String as AdoptedValue
  }
}