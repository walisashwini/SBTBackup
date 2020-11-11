package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses pcf.api.Wizard
uses gw.lob.gl7.presenters.GL7ExposurePresenter
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposuresPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7ExposuresPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposuresPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExposureLDVExpressionsImpl extends GL7ExposuresPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7ExposuresPanelSet.pcf: line 137, column 56
    function def_onEnter_62 (def :  pcf.GL7ExposureCV) : void {
      def.onEnter(policyPeriod, selectedExposurePresenter, false, jobWizardHelper, gw.lob.gl7.GL7Category.CategoriesForExposure)
    }
    
    // 'def' attribute on PanelRef at GL7ExposuresPanelSet.pcf: line 137, column 56
    function def_refreshVariables_63 (def :  pcf.GL7ExposureCV) : void {
      def.refreshVariables(policyPeriod, selectedExposurePresenter, false, jobWizardHelper, gw.lob.gl7.GL7Category.CategoriesForExposure)
    }
    
    // 'sortBy' attribute on IteratorSort at GL7ExposuresPanelSet.pcf: line 73, column 30
    function sortBy_10 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.LocationWM
    }
    
    // 'sortBy' attribute on IteratorSort at GL7ExposuresPanelSet.pcf: line 76, column 30
    function sortBy_11 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return gw.lob.gl7.presenters.GL7PresenterUtil.SortedSublines.indexOf(exposurePresenter.SublineType.Subline)
    }
    
    // 'sortBy' attribute on IteratorSort at GL7ExposuresPanelSet.pcf: line 79, column 30
    function sortBy_12 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ExposureSliced.ClassCode
    }
    
    // 'sortBy' attribute on IteratorSort at GL7ExposuresPanelSet.pcf: line 82, column 30
    function sortBy_13 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GL7ExposuresPanelSet.pcf: line 89, column 58
    function sortValue_14 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at GL7ExposuresPanelSet.pcf: line 94, column 59
    function sortValue_15 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Subline_Cell) at GL7ExposuresPanelSet.pcf: line 99, column 52
    function sortValue_16 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.SublineType
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at GL7ExposuresPanelSet.pcf: line 105, column 52
    function sortValue_17 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.LocationWM
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at GL7ExposuresPanelSet.pcf: line 110, column 54
    function sortValue_18 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GL7ExposuresPanelSet.pcf: line 115, column 61
    function sortValue_19 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ClassDescription
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at GL7ExposuresPanelSet.pcf: line 121, column 45
    function sortValue_20 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ExposureAmount
    }
    
    // 'value' attribute on TextCell (id=ProdsExposure_Cell) at GL7ExposuresPanelSet.pcf: line 126, column 45
    function sortValue_21 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ProdsCompltdOpsExposureAmount
    }
    
    // 'value' attribute on TextCell (id=PremiumBasis_Cell) at GL7ExposuresPanelSet.pcf: line 130, column 57
    function sortValue_22 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.PremiumBasis
    }
    
    // 'toRemove' attribute on RowIterator at GL7ExposuresPanelSet.pcf: line 70, column 70
    function toRemove_59 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : void {
      exposurePresenter.removeFromPolicy()
    }
    
    // 'value' attribute on RowIterator at GL7ExposuresPanelSet.pcf: line 70, column 70
    function value_60 () : gw.lob.gl7.presenters.GL7ExposurePresenter[] {
      return line.GL7ExposuresWM.map(\ exposure -> gw.lob.gl7.presenters.GL7ExposurePresenter.create(exposure))
    }
    
    // 'visible' attribute on PanelRef at GL7ExposuresPanelSet.pcf: line 137, column 56
    function visible_61 () : java.lang.Boolean {
      return selectedExposurePresenter != null
    }
    
    property get selectedExposurePresenter () : gw.lob.gl7.presenters.GL7ExposurePresenter {
      return getCurrentSelection(1) as gw.lob.gl7.presenters.GL7ExposurePresenter
    }
    
    property set selectedExposurePresenter ($arg :  gw.lob.gl7.presenters.GL7ExposurePresenter) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposuresPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7ExposuresPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Split) at GL7ExposuresPanelSet.pcf: line 47, column 59
    function allCheckedRowsAction_7 (CheckedValues :  gw.lob.gl7.presenters.GL7ExposurePresenter[], CheckedValuesErrors :  java.util.Map) : void {
      splitExposure(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=End) at GL7ExposuresPanelSet.pcf: line 55, column 59
    function allCheckedRowsAction_9 (CheckedValues :  gw.lob.gl7.presenters.GL7ExposurePresenter[], CheckedValuesErrors :  java.util.Map) : void {
      endExposure(CheckedValues)
    }
    
    // 'initialValue' attribute on Variable at GL7ExposuresPanelSet.pcf: line 19, column 39
    function initialValue_0 () : GL7GeneralLiabilityLine {
      return policyPeriod.GL7Line
    }
    
    // 'value' attribute on MenuItemIterator at GL7ExposuresPanelSet.pcf: line 29, column 49
    function value_4 () : entity.GL7SublineType[] {
      return gw.lob.gl7.presenters.GL7CoverablePerSubline.forSublinesOn(line).SublineSortedCoverables
    }
    
    // 'visible' attribute on ToolbarButton (id=AddExposureBtn) at GL7ExposuresPanelSet.pcf: line 25, column 33
    function visible_5 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=Split) at GL7ExposuresPanelSet.pcf: line 47, column 59
    function visible_6 () : java.lang.Boolean {
      return policyPeriod.Job typeis PolicyChange
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : GL7GeneralLiabilityLine {
      return getVariableValue("line", 0) as GL7GeneralLiabilityLine
    }
    
    property set line ($arg :  GL7GeneralLiabilityLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
    function endExposure(presenters : GL7ExposurePresenter[]){
      if((CurrentLocation as Wizard).saveDraft()){ // to keep the data up-to-date before changing LV PL-5377
        for(presenter in presenters) {
          presenter.endExposureWM()
        }
      }
    }
    
    function splitExposure(presenters : GL7ExposurePresenter[]){
      if((CurrentLocation as Wizard).saveDraft()){ // to keep the data up-to-date before changing LV PL-5377
        for(presenter in presenters) {
          presenter.splitExposureWM()
        }
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposuresPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ExposureLDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on DateCell (id=EffectiveDate_Cell) at GL7ExposuresPanelSet.pcf: line 89, column 58
    function action_23 () : void {
      GL7ExposurePopup.push(policyPeriod, exposurePresenter, openForEdit and exposurePresenter.IsEditEffective, jobWizardHelper)
    }
    
    // 'action' attribute on DateCell (id=ExpirationDate_Cell) at GL7ExposuresPanelSet.pcf: line 94, column 59
    function action_28 () : void {
      GL7ExposurePopup.push(policyPeriod, exposurePresenter, openForEdit and exposurePresenter.IsEditEffective, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=ClassCode_Cell) at GL7ExposuresPanelSet.pcf: line 110, column 54
    function action_39 () : void {
      GL7ExposurePopup.push(policyPeriod, exposurePresenter, openForEdit and exposurePresenter.IsEditEffective, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at GL7ExposuresPanelSet.pcf: line 115, column 61
    function action_44 () : void {
      GL7ExposurePopup.push(policyPeriod, exposurePresenter, openForEdit and exposurePresenter.IsEditEffective, jobWizardHelper)
    }
    
    // 'action' attribute on DateCell (id=EffectiveDate_Cell) at GL7ExposuresPanelSet.pcf: line 89, column 58
    function action_dest_24 () : pcf.api.Destination {
      return pcf.GL7ExposurePopup.createDestination(policyPeriod, exposurePresenter, openForEdit and exposurePresenter.IsEditEffective, jobWizardHelper)
    }
    
    // 'action' attribute on DateCell (id=ExpirationDate_Cell) at GL7ExposuresPanelSet.pcf: line 94, column 59
    function action_dest_29 () : pcf.api.Destination {
      return pcf.GL7ExposurePopup.createDestination(policyPeriod, exposurePresenter, openForEdit and exposurePresenter.IsEditEffective, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=ClassCode_Cell) at GL7ExposuresPanelSet.pcf: line 110, column 54
    function action_dest_40 () : pcf.api.Destination {
      return pcf.GL7ExposurePopup.createDestination(policyPeriod, exposurePresenter, openForEdit and exposurePresenter.IsEditEffective, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at GL7ExposuresPanelSet.pcf: line 115, column 61
    function action_dest_45 () : pcf.api.Destination {
      return pcf.GL7ExposurePopup.createDestination(policyPeriod, exposurePresenter, openForEdit and exposurePresenter.IsEditEffective, jobWizardHelper)
    }
    
    // 'editable' attribute on Row at GL7ExposuresPanelSet.pcf: line 84, column 60
    function editable_58 () : java.lang.Boolean {
      return exposurePresenter.IsEditEffective
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GL7ExposuresPanelSet.pcf: line 89, column 58
    function valueRoot_26 () : java.lang.Object {
      return exposurePresenter
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GL7ExposuresPanelSet.pcf: line 89, column 58
    function value_25 () : java.util.Date {
      return exposurePresenter.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at GL7ExposuresPanelSet.pcf: line 94, column 59
    function value_30 () : java.util.Date {
      return exposurePresenter.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Subline_Cell) at GL7ExposuresPanelSet.pcf: line 99, column 52
    function value_33 () : entity.GL7SublineType {
      return exposurePresenter.SublineType
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at GL7ExposuresPanelSet.pcf: line 105, column 52
    function value_36 () : entity.PolicyLocation {
      return exposurePresenter.LocationWM
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at GL7ExposuresPanelSet.pcf: line 110, column 54
    function value_41 () : java.lang.String {
      return exposurePresenter.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GL7ExposuresPanelSet.pcf: line 115, column 61
    function value_46 () : java.lang.String {
      return exposurePresenter.ClassDescription
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at GL7ExposuresPanelSet.pcf: line 121, column 45
    function value_49 () : java.lang.Long {
      return exposurePresenter.ExposureAmount
    }
    
    // 'value' attribute on TextCell (id=ProdsExposure_Cell) at GL7ExposuresPanelSet.pcf: line 126, column 45
    function value_52 () : java.lang.Long {
      return exposurePresenter.ProdsCompltdOpsExposureAmount
    }
    
    // 'value' attribute on TextCell (id=PremiumBasis_Cell) at GL7ExposuresPanelSet.pcf: line 130, column 57
    function value_55 () : java.lang.String {
      return exposurePresenter.PremiumBasis
    }
    
    property get exposurePresenter () : gw.lob.gl7.presenters.GL7ExposurePresenter {
      return getIteratedValue(2) as gw.lob.gl7.presenters.GL7ExposurePresenter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposuresPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7ExposuresPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Item) at GL7ExposuresPanelSet.pcf: line 33, column 40
    function action_1 () : void {
      GL7ExposurePopup.push(policyPeriod, gw.lob.gl7.presenters.GL7ExposurePresenter.createWithNewExposure(policyPeriod, subline), openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=Item) at GL7ExposuresPanelSet.pcf: line 33, column 40
    function action_dest_2 () : pcf.api.Destination {
      return pcf.GL7ExposurePopup.createDestination(policyPeriod, gw.lob.gl7.presenters.GL7ExposurePresenter.createWithNewExposure(policyPeriod, subline), openForEdit, jobWizardHelper)
    }
    
    // 'label' attribute on MenuItem (id=Item) at GL7ExposuresPanelSet.pcf: line 33, column 40
    function label_3 () : java.lang.Object {
      return subline.Subline
    }
    
    property get subline () : entity.GL7SublineType {
      return getIteratedValue(1) as entity.GL7SublineType
    }
    
    
  }
  
  
}