package gw.lob.common.util

uses gw.api.diff.DiffItem
uses entity.Clause
uses gw.lob.common.displayable.LobDisplayableFactory
uses gw.lob.common.productmodel.ClauseTermMetaSupport
uses gw.plugin.diff.impl.DiffHelper
uses java.util.LinkedList
uses gw.api.diff.DiffProperty
uses java.util.List

class LOBDiffHelper<L extends entity.PolicyLine> extends DiffHelper<L> {
  construct(reason: DiffReason, polLine1: L, polLine2: L) {
    super(reason, polLine1, polLine2)
  }

  override function filterDiffItems(diffItems: List<DiffItem>): List<DiffItem> {
    diffItems = super.filterDiffItems(diffItems)
    diffItems.removeWhere(\diff -> shouldRemoveDiff(diff))
    return diffItems
  }

  private function shouldRemoveDiff(diff: DiffItem): boolean {
    var shouldRemove = false
    if (diff.Property) {
      var diffProperty = diff.asProperty()

      if ((DifferenceReason == TC_POLICYREVIEW or DifferenceReason == TC_MULTIVERSIONJOB or DifferenceReason == TC_COMPAREJOBS)
          and LOBDiffUtil.isAvailabilityDiff(diffProperty)) {
        shouldRemove = true
      }
      else {
        var diffOwningEntity = diffProperty.Bean
        var isCoverable = Coverable.Type.isAssignableFrom(diffOwningEntity.IntrinsicType)

        if (isCoverable) {
          var displayableDiff = LobDisplayableFactory.getPropertyDisplayable(diffOwningEntity, gw.lob.common.displayable.LobDisplayable, null, false, diffProperty.PropertyInfo.toString())
          shouldRemove = displayableDiff.Visible == false
        } else if (diffOwningEntity typeis Clause) {
          var visible = getCovTermVisibility(diffProperty)
          shouldRemove = visible == false
        }
      }
    }
    return shouldRemove
  }

  private function getCovTermVisibility(diffProperty : DiffProperty) : Boolean {
    var diffOwningEntity = diffProperty.Bean as Clause
    var propName = diffProperty.PropertyInfo.Name

    var clauseAllVersions = new LinkedList<Clause>()
    clauseAllVersions.add(diffOwningEntity)
    clauseAllVersions.add(diffProperty.BasedOn as Clause)
    if (diffProperty.OOSConflict) {
      clauseAllVersions.addAll(diffProperty.OOSConflictingVersions.cast(Clause))
    }
    var visible = clauseAllVersions.map( \ clause -> {
      if (not clause.Slice) {
        return null as Boolean
      }
      var slicedClause = (clause.getSliceUntyped(clause.EffectiveDate)) as Clause
      var covTerm = slicedClause.CovTerms.firstWhere( \ cTerm -> cTerm.Pattern.CoverageColumnProperty as String == propName)
      if (covTerm == null) {
        return null as Boolean
      } else {
        return ClauseTermMetaSupport.Instance.findClauseTermMeta(covTerm).Visible
      }
    }).where( \ visible -> visible != null).fold( \ visible1, visible2 -> visible1.booleanValue() || visible2.booleanValue())
    return visible
  }
}