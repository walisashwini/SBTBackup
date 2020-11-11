package gw.lob.common

uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.ExclusionPattern
uses gw.api.productmodel.ConditionPattern
uses gw.api.productmodel.CoveragePattern
uses gw.lob.common.displayable.LobFieldMetaSupport
uses gw.api.locale.DisplayKey

enhancement CoverableEnhancement : entity.Coverable {

  function isClauseSelectedOrAvailable( clausePattern : ClausePattern) : boolean {

    if (clausePattern typeis CoveragePattern) {
      return this.isCoverageSelectedOrAvailable(clausePattern)
    } else if (clausePattern typeis ConditionPattern) {
      return this.isConditionSelectedOrAvailable(clausePattern)
    } else if (clausePattern typeis ExclusionPattern) {
      return this.isExclusionSelectedOrAvailable(clausePattern)
    }

    return false
  }

  property get EffectiveState() : typekey.Jurisdiction {
    return this.CoverableState ?: this.PolicyLine.BaseState
  }

  function getPropertyLabel(propName: String) : String {
    return DisplayKey.get(LobFieldMetaSupport.Instance.findFieldMeta(this, propName).Label);
  }
}
