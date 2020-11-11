package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewRisksPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7PolicyReviewRisksPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewRisksPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7PolicyReviewRisksPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ExpandAllButton) at GL7PolicyReviewRisksPanelSet.pcf: line 38, column 90
    function action_3 () : void {
      expandCollapseContext.expandAll()
    }
    
    // 'action' attribute on ToolbarButton (id=CollapseAllButton) at GL7PolicyReviewRisksPanelSet.pcf: line 42, column 92
    function action_4 () : void {
      expandCollapseContext.collapseAll()
    }
    
    // 'cacheKey' attribute on ToolbarFilter at GL7PolicyReviewRisksPanelSet.pcf: line 48, column 39
    function cacheKey_7 () : java.lang.String {
      return resetFilterSelection.nextLong() as String
    }
    
    // 'filter' attribute on ToolbarFilterOption at GL7PolicyReviewRisksPanelSet.pcf: line 53, column 29
    function filter_5 () : gw.api.filters.IFilter {
      return new gw.lob.gl7.tree.filter.GL7AllLocationsFilter (expandCollapseContext)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at GL7PolicyReviewRisksPanelSet.pcf: line 56, column 29
    function filters_6 () : gw.api.filters.IFilter[] {
      return gw.lob.gl7.tree.filter.GL7LocationFilters.eachLocation(expandCollapseContext, line)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewRisksPanelSet.pcf: line 23, column 63
    function initialValue_0 () : gw.lob.gl7.pcf.GL7TreeNodeExpandCollapseContext {
      return new gw.lob.gl7.pcf.GL7TreeNodeExpandCollapseContext()
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewRisksPanelSet.pcf: line 27, column 43
    function initialValue_1 () : gw.api.tree.RowTreeRootNode {
      return new gw.lob.gl7.tree.GL7PolicyReviewTreeBuilder(line).createPolicyReviewTreeWithContext(expandCollapseContext)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewRisksPanelSet.pcf: line 31, column 32
    function initialValue_2 () : java.util.Random {
      return new java.util.Random()
    }
    
    property get expandCollapseContext () : gw.lob.gl7.pcf.GL7TreeNodeExpandCollapseContext {
      return getVariableValue("expandCollapseContext", 0) as gw.lob.gl7.pcf.GL7TreeNodeExpandCollapseContext
    }
    
    property set expandCollapseContext ($arg :  gw.lob.gl7.pcf.GL7TreeNodeExpandCollapseContext) {
      setVariableValue("expandCollapseContext", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : productmodel.GL7Line {
      return getRequireValue("line", 0) as productmodel.GL7Line
    }
    
    property set line ($arg :  productmodel.GL7Line) {
      setRequireValue("line", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get resetFilterSelection () : java.util.Random {
      return getVariableValue("resetFilterSelection", 0) as java.util.Random
    }
    
    property set resetFilterSelection ($arg :  java.util.Random) {
      setVariableValue("resetFilterSelection", 0, $arg)
    }
    
    property get rootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("rootNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set rootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("rootNode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewRisksPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends GL7PolicyReviewRisksPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // RowTree (id=GL7PolicyReviewTree) at GL7PolicyReviewRisksPanelSet.pcf: line 70, column 30
    function containerLabel_15 (gl7Row :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewRisksPanelSet.pcf: line 92, column 67
    function def_onEnter_16 (def :  pcf.GL7PolicyReviewPanelSet_GL7Exposure) : void {
      def.onEnter(selectedRow.RowEntity, policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewRisksPanelSet.pcf: line 92, column 67
    function def_onEnter_18 (def :  pcf.GL7PolicyReviewPanelSet_GL7UnmannedAircraft) : void {
      def.onEnter(selectedRow.RowEntity, policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewRisksPanelSet.pcf: line 92, column 67
    function def_onEnter_20 (def :  pcf.GL7PolicyReviewPanelSet_PolicyLocation) : void {
      def.onEnter(selectedRow.RowEntity, policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewRisksPanelSet.pcf: line 92, column 67
    function def_onEnter_22 (def :  pcf.GL7PolicyReviewPanelSet_default) : void {
      def.onEnter(selectedRow.RowEntity, policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewRisksPanelSet.pcf: line 92, column 67
    function def_refreshVariables_17 (def :  pcf.GL7PolicyReviewPanelSet_GL7Exposure) : void {
      def.refreshVariables(selectedRow.RowEntity, policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewRisksPanelSet.pcf: line 92, column 67
    function def_refreshVariables_19 (def :  pcf.GL7PolicyReviewPanelSet_GL7UnmannedAircraft) : void {
      def.refreshVariables(selectedRow.RowEntity, policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewRisksPanelSet.pcf: line 92, column 67
    function def_refreshVariables_21 (def :  pcf.GL7PolicyReviewPanelSet_PolicyLocation) : void {
      def.refreshVariables(selectedRow.RowEntity, policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewRisksPanelSet.pcf: line 92, column 67
    function def_refreshVariables_23 (def :  pcf.GL7PolicyReviewPanelSet_default) : void {
      def.refreshVariables(selectedRow.RowEntity, policyPeriod, jobWizardHelper)
    }
    
    // 'mode' attribute on PanelRef at GL7PolicyReviewRisksPanelSet.pcf: line 92, column 67
    function mode_24 () : java.lang.Object {
      return (typeof selectedRow.RowEntity).RelativeName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GL7PolicyReviewRisksPanelSet.pcf: line 79, column 45
    function sortValue_8 (gl7Row :  gw.lob.gl7.tree.GL7AbstractSummaryRow) : java.lang.Object {
      return gl7Row.Description
    }
    
    // 'value' attribute on RowTree (id=GL7PolicyReviewTree) at GL7PolicyReviewRisksPanelSet.pcf: line 70, column 30
    function value_14 () : java.lang.Object {
      return rootNode
    }
    
    property get selectedRow () : gw.lob.gl7.tree.GL7AbstractSummaryRow {
      return getCurrentSelection(1) as gw.lob.gl7.tree.GL7AbstractSummaryRow
    }
    
    property set selectedRow ($arg :  gw.lob.gl7.tree.GL7AbstractSummaryRow) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewRisksPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Description_Cell) at GL7PolicyReviewRisksPanelSet.pcf: line 79, column 45
    function actionAvailable_10 () : java.lang.Boolean {
      return selectedRow.Description == gl7Row.Description
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at GL7PolicyReviewRisksPanelSet.pcf: line 79, column 45
    function action_9 () : void {
      expandCollapseContext.save()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GL7PolicyReviewRisksPanelSet.pcf: line 79, column 45
    function valueRoot_12 () : java.lang.Object {
      return gl7Row
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GL7PolicyReviewRisksPanelSet.pcf: line 79, column 45
    function value_11 () : java.lang.String {
      return gl7Row.Description
    }
    
    property get gl7Row () : gw.lob.gl7.tree.GL7AbstractSummaryRow {
      return getIteratedValue(2) as gw.lob.gl7.tree.GL7AbstractSummaryRow
    }
    
    
  }
  
  
}