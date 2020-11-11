package gw.sbt.config.incoming

uses java.util.Collection

class StateGosuFilesFilter {
  var stateUpperCase: String
  var stateLowerCase: String
  construct(definingState: String) {
    this.stateLowerCase = definingState.toLowerCase()
    this.stateUpperCase = definingState.toUpperCase()
  }

  function apply(candidates: Collection<String>): Collection<String> {
    var filteredResults: Collection<String> = {}

    var filesRootedInGsrc = \candidate: String -> candidate.startsWith("gsrc/")

    var statePackagePredicate = \candidate: String -> candidate.contains("/${stateLowerCase}/")
    var stateSuffixGosuClass = \candidate: String -> candidate.endsWith("_${stateUpperCase}.gs")
    var stateSuffixGosuEnhancement = \candidate: String -> candidate.endsWith("_${stateUpperCase}.gsx")

    var gsrcFiles = candidates.where(filesRootedInGsrc)

    filteredResults.addAll(gsrcFiles.where(statePackagePredicate))
    filteredResults.addAll(gsrcFiles.where(stateSuffixGosuClass))
    filteredResults.addAll(gsrcFiles.where(stateSuffixGosuEnhancement))

    return filteredResults
  }
}