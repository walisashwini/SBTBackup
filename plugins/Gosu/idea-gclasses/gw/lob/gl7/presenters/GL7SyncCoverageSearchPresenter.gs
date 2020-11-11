package gw.lob.gl7.presenters

uses gw.lob.gl7.synchronizer.GL7LineSynchronizer

class GL7SyncCoverageSearchPresenter<T extends Coverable> extends GL7CoverageSearchPresenter<T> {

  construct(coverablePerSubline: GL7CoverablePerSubline<T>,
            coverageCategories: String[],
            searchType: CoveragePatternSearchType,
            label: String = null) {
    super(coverablePerSubline, coverageCategories, searchType, label)
  }

  override function addCoverages(clauseSpecs: ClauseSpec[]) {
    super.addCoverages(clauseSpecs)
    synchronizeSublineTypeAddlCoverages(clauseSpecs)
  }

  private function synchronizeSublineTypeAddlCoverages(clauseSpecs : ClauseSpec[]) {
    var coverables = clauseSpecs.where(\clause -> clause.Coverable typeis GL7SublineType)*.Coverable.cast(GL7SublineType)

    if (coverables.HasElements) {
      new GL7LineSynchronizer(coverables).syncSublineTypeAddlCoverages()
    }
  }
}