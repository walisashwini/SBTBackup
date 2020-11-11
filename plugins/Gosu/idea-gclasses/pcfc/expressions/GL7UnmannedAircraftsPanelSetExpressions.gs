package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7UnmannedAircraftsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7UnmannedAircraftsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7UnmannedAircraftsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7UnmannedAircraftsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextValue (id=MakeFilterInput) at GL7UnmannedAircraftsPanelSet.pcf: line 66, column 94
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      filterValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=GL7LocationFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 93, column 97
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      locationFilter = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=GL7SublineFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 103, column 96
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      sublineFilter = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=TypeFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 56, column 38
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      typeFilterChoice = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at GL7UnmannedAircraftsPanelSet.pcf: line 21, column 75
    function initialValue_0 () : java.util.List<java.lang.String> {
      return gw.lob.gl7.GL7UnmannedAircraftFilter.TypeFilterSet
    }
    
    // 'initialValue' attribute on Variable at GL7UnmannedAircraftsPanelSet.pcf: line 29, column 36
    function initialValue_1 () : productmodel.GL7Line {
      return policyPeriod.GL7Line
    }
    
    // 'initialValue' attribute on Variable at GL7UnmannedAircraftsPanelSet.pcf: line 33, column 37
    function initialValue_2 () : entity.PolicyLocation {
      return null
    }
    
    // 'initialValue' attribute on Variable at GL7UnmannedAircraftsPanelSet.pcf: line 37, column 32
    function initialValue_3 () : java.lang.String {
      return null
    }
    
    // 'onChange' attribute on PostOnChange at GL7UnmannedAircraftsPanelSet.pcf: line 95, column 63
    function onChange_27 () : void {
      filterValue = locationFilter.PublicID
    }
    
    // 'onChange' attribute on PostOnChange at GL7UnmannedAircraftsPanelSet.pcf: line 105, column 53
    function onChange_36 () : void {
      filterValue = sublineFilter
    }
    
    // 'onChange' attribute on PostOnChange at GL7UnmannedAircraftsPanelSet.pcf: line 58, column 105
    function onChange_5 () : void {
      filterValue = ""; locationFilter = null; sublineFilter = ""
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AddUnmannedAircraftBtn) at GL7UnmannedAircraftsPanelSet.pcf: line 45, column 124
    function toCreateAndAdd_4 (CheckedValues :  Object[]) : java.lang.Object {
      return gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.createWithNewUnmannedAircraft(policyPeriod)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=GL7LocationFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 93, column 97
    function valueRange_31 () : java.lang.Object {
      return gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.validLocations(line)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=GL7SublineFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 103, column 96
    function valueRange_40 () : java.lang.Object {
      return gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.validSublines(line)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=TypeFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 56, column 38
    function valueRange_8 () : java.lang.Object {
      return typeFilterSet
    }
    
    // 'value' attribute on TextValue (id=MakeFilterInput) at GL7UnmannedAircraftsPanelSet.pcf: line 66, column 94
    function value_13 () : java.lang.String {
      return filterValue
    }
    
    // 'value' attribute on ToolbarRangeInput (id=GL7LocationFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 93, column 97
    function value_29 () : entity.PolicyLocation {
      return locationFilter
    }
    
    // 'value' attribute on ToolbarRangeInput (id=GL7SublineFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 103, column 96
    function value_38 () : java.lang.String {
      return sublineFilter
    }
    
    // 'value' attribute on ToolbarRangeInput (id=TypeFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 56, column 38
    function value_6 () : java.lang.String {
      return typeFilterChoice
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=GL7LocationFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 93, column 97
    function verifyValueRangeIsAllowedType_32 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=GL7LocationFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 93, column 97
    function verifyValueRangeIsAllowedType_32 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=GL7LocationFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 93, column 97
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=GL7SublineFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 103, column 96
    function verifyValueRangeIsAllowedType_41 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=GL7SublineFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 103, column 96
    function verifyValueRangeIsAllowedType_41 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=TypeFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 56, column 38
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=TypeFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 56, column 38
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=TypeFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 56, column 38
    function verifyValueRange_10 () : void {
      var __valueRangeArg = typeFilterSet
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=GL7LocationFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 93, column 97
    function verifyValueRange_33 () : void {
      var __valueRangeArg = gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.validLocations(line)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=GL7SublineFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 103, column 96
    function verifyValueRange_42 () : void {
      var __valueRangeArg = gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.validSublines(line)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_41(__valueRangeArg)
    }
    
    // 'visible' attribute on TextValue (id=MakeFilterInput) at GL7UnmannedAircraftsPanelSet.pcf: line 66, column 94
    function visible_12 () : java.lang.Boolean {
      return typeFilterChoice == gw.lob.gl7.GL7UnmannedAircraftFilter.ModelTypeFilter
    }
    
    // 'visible' attribute on TextValue (id=ManufacturerFilterInput) at GL7UnmannedAircraftsPanelSet.pcf: line 75, column 101
    function visible_17 () : java.lang.Boolean {
      return typeFilterChoice == gw.lob.gl7.GL7UnmannedAircraftFilter.ManufacturerTypeFilter
    }
    
    // 'visible' attribute on TextValue (id=UAIdCodeFilterInput) at GL7UnmannedAircraftsPanelSet.pcf: line 84, column 103
    function visible_22 () : java.lang.Boolean {
      return typeFilterChoice == gw.lob.gl7.GL7UnmannedAircraftFilter.AircraftIdCodeTypeFilter
    }
    
    // 'visible' attribute on ToolbarRangeInput (id=GL7LocationFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 93, column 97
    function visible_28 () : java.lang.Boolean {
      return typeFilterChoice == gw.lob.gl7.GL7UnmannedAircraftFilter.LocationTypeFilter
    }
    
    // 'visible' attribute on ToolbarRangeInput (id=GL7SublineFilter_Input) at GL7UnmannedAircraftsPanelSet.pcf: line 103, column 96
    function visible_37 () : java.lang.Boolean {
      return typeFilterChoice == gw.lob.gl7.GL7UnmannedAircraftFilter.SublineTypeFilter
    }
    
    property get filterValue () : String {
      return getVariableValue("filterValue", 0) as String
    }
    
    property set filterValue ($arg :  String) {
      setVariableValue("filterValue", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : productmodel.GL7Line {
      return getVariableValue("line", 0) as productmodel.GL7Line
    }
    
    property set line ($arg :  productmodel.GL7Line) {
      setVariableValue("line", 0, $arg)
    }
    
    property get locationFilter () : entity.PolicyLocation {
      return getVariableValue("locationFilter", 0) as entity.PolicyLocation
    }
    
    property set locationFilter ($arg :  entity.PolicyLocation) {
      setVariableValue("locationFilter", 0, $arg)
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
    
    property get sublineFilter () : java.lang.String {
      return getVariableValue("sublineFilter", 0) as java.lang.String
    }
    
    property set sublineFilter ($arg :  java.lang.String) {
      setVariableValue("sublineFilter", 0, $arg)
    }
    
    property get typeFilterChoice () : java.lang.String {
      return getVariableValue("typeFilterChoice", 0) as java.lang.String
    }
    
    property set typeFilterChoice ($arg :  java.lang.String) {
      setVariableValue("typeFilterChoice", 0, $arg)
    }
    
    property get typeFilterSet () : java.util.List<java.lang.String> {
      return getVariableValue("typeFilterSet", 0) as java.util.List<java.lang.String>
    }
    
    property set typeFilterSet ($arg :  java.util.List<java.lang.String>) {
      setVariableValue("typeFilterSet", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7UnmannedAircraftsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UnmannedAircraftDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on Row at GL7UnmannedAircraftsPanelSet.pcf: line 145, column 68
    function editable_76 () : java.lang.Boolean {
      return unmannedAircraftPresenter.IsEditEffective
    }
    
    // 'value' attribute on TextCell (id=UAircraftNumber_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 150, column 48
    function valueRoot_59 () : java.lang.Object {
      return unmannedAircraftPresenter
    }
    
    // 'value' attribute on TextCell (id=UAircraftNumber_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 150, column 48
    function value_58 () : java.lang.Integer {
      return unmannedAircraftPresenter.UnmannedAircraftNumber
    }
    
    // 'value' attribute on TextCell (id=UAIdentificationCode_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 155, column 47
    function value_61 () : java.lang.String {
      return unmannedAircraftPresenter.UAIdentificationCode
    }
    
    // 'value' attribute on TextCell (id=Manufacturer_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 160, column 47
    function value_64 () : java.lang.String {
      return unmannedAircraftPresenter.Manufacturer
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 165, column 47
    function value_67 () : java.lang.String {
      return unmannedAircraftPresenter.Model
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 170, column 47
    function value_70 () : java.lang.String {
      return unmannedAircraftPresenter.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 176, column 52
    function value_73 () : entity.PolicyLocation {
      return unmannedAircraftPresenter.Location
    }
    
    property get unmannedAircraftPresenter () : gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter {
      return getIteratedValue(2) as gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7UnmannedAircraftsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UnmannedAircraftDVExpressionsImpl extends GL7UnmannedAircraftsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7UnmannedAircraftsPanelSet.pcf: line 183, column 64
    function def_onEnter_81 (def :  pcf.GL7UnmannedAircraftsCV) : void {
      def.onEnter(policyPeriod, selectedUnmannedAircraftPresenter, openForEdit, jobWizardHelper, gw.lob.gl7.GL7Category.CategoriesForUnmannedAircraft)
    }
    
    // 'def' attribute on PanelRef at GL7UnmannedAircraftsPanelSet.pcf: line 183, column 64
    function def_refreshVariables_82 (def :  pcf.GL7UnmannedAircraftsCV) : void {
      def.refreshVariables(policyPeriod, selectedUnmannedAircraftPresenter, openForEdit, jobWizardHelper, gw.lob.gl7.GL7Category.CategoriesForUnmannedAircraft)
    }
    
    // 'editable' attribute on PanelRef at GL7UnmannedAircraftsPanelSet.pcf: line 183, column 64
    function editable_79 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'sortBy' attribute on IteratorSort at GL7UnmannedAircraftsPanelSet.pcf: line 125, column 30
    function sortBy_45 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.UnmannedAircraftNumber
    }
    
    // 'sortBy' attribute on IteratorSort at GL7UnmannedAircraftsPanelSet.pcf: line 128, column 30
    function sortBy_46 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.UAIdentificationCode
    }
    
    // 'sortBy' attribute on IteratorSort at GL7UnmannedAircraftsPanelSet.pcf: line 131, column 30
    function sortBy_47 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.Manufacturer
    }
    
    // 'sortBy' attribute on IteratorSort at GL7UnmannedAircraftsPanelSet.pcf: line 134, column 30
    function sortBy_48 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.Model
    }
    
    // 'sortBy' attribute on IteratorSort at GL7UnmannedAircraftsPanelSet.pcf: line 140, column 30
    function sortBy_50 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.ClassCode
    }
    
    // 'sortBy' attribute on IteratorSort at GL7UnmannedAircraftsPanelSet.pcf: line 143, column 30
    function sortBy_51 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.Location
    }
    
    // 'value' attribute on TextCell (id=UAircraftNumber_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 150, column 48
    function sortValue_52 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.UnmannedAircraftNumber
    }
    
    // 'value' attribute on TextCell (id=UAIdentificationCode_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 155, column 47
    function sortValue_53 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.UAIdentificationCode
    }
    
    // 'value' attribute on TextCell (id=Manufacturer_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 160, column 47
    function sortValue_54 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.Manufacturer
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 165, column 47
    function sortValue_55 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.Model
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 170, column 47
    function sortValue_56 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at GL7UnmannedAircraftsPanelSet.pcf: line 176, column 52
    function sortValue_57 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : java.lang.Object {
      return unmannedAircraftPresenter.Location
    }
    
    // 'toRemove' attribute on RowIterator at GL7UnmannedAircraftsPanelSet.pcf: line 122, column 12
    function toRemove_77 (unmannedAircraftPresenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) : void {
      unmannedAircraftPresenter.removeFromPolicy()
    }
    
    // 'value' attribute on RowIterator at GL7UnmannedAircraftsPanelSet.pcf: line 122, column 12
    function value_78 () : gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter[] {
      return gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.validUnmannedAircrafts(line, typeFilterChoice, filterValue)
    }
    
    // 'visible' attribute on PanelRef at GL7UnmannedAircraftsPanelSet.pcf: line 183, column 64
    function visible_80 () : java.lang.Boolean {
      return selectedUnmannedAircraftPresenter != null
    }
    
    property get selectedUnmannedAircraftPresenter () : gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter {
      return getCurrentSelection(1) as gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter
    }
    
    property set selectedUnmannedAircraftPresenter ($arg :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}