package gw.sbt.model.comparisons

uses com.google.common.collect.ImmutableSet

uses java.util.Collection
uses java.util.Set
uses java.util.List

class PluggableChildComparisonFactory<P, C> implements ChildComparisonFactory<P, C> {
    var _getChildValues(parent : P) : List<C>
    var _getChildId(child : C) : String
    var _createChildComparison(currentVersion : C, newVersion : C, adoptedVersion: C) : Comparison<C>

  construct(getChildValues(parent : P) : List<C>,
            getChildId(child : C) : String,
            createChildComparison(currentVersion : C, newVersion : C, adoptedVersion: C) : Comparison<C>) {
    _getChildValues = getChildValues
    _getChildId = getChildId
    _createChildComparison = createChildComparison
  }

  override function createChildComparisonsFor(parentComparison : Comparison<P>) : List<Comparison<C>> {
    var currentChildren = _getChildValues(parentComparison.Current)
    var newChildren = _getChildValues(parentComparison.New)
    var adoptedChildren = _getChildValues(parentComparison.Adopted)
    var uniqueChildIds = allUniqueIdsFor({ newChildren, adoptedChildren, currentChildren }, _getChildId)

    return uniqueChildIds.map(\ childId -> _createChildComparison(
        findById(currentChildren, _getChildId, childId),
        findById(newChildren, _getChildId, childId),
        findById(adoptedChildren, _getChildId, childId)))
  }

  private function allUniqueIdsFor(
      listsOfObjectsWithId : List<List<C>>,
      getId(object : C) : String) : Set<String> {

    var list = listsOfObjectsWithId
        .where(\ objects -> objects != null)
        .flatMap(\objects -> objects.map(\object -> getId(object)))
    return ImmutableSet.copyOf(list) // eleminate the duplicates and maintain the order of the list.
  }

  private function findById(
      candidates : Collection<C>,
      getCandidateId(candidate : C) : String,
      targetId : String) : C {
    return candidates?.firstWhere(\ candidate -> getCandidateId(candidate) == targetId)
  }
}