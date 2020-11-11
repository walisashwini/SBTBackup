package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses pcf.api.Wizard
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ItemisedCover) at APDRiskPanelSet.pcf: line 64, column 111
    function action_10 () : void {
      APDNewCoverageCategoryPopup.push(riskCoverable)
    }
    
    // 'action' attribute on ToolbarButton (id=addExposureButton) at APDRiskPanelSet.pcf: line 336, column 36
    function action_251 () : void {
      APDNewExposurePopup.push(riskCoverable)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddCoverages) at APDRiskPanelSet.pcf: line 444, column 89
    function action_281 () : void {
      APDClauseSearchPopup.push(riskCoverable, CoveragePatternSearchType.TC_COVERAGE, riskCoverable.Coverable.CoverageLibraryCategories, userPreferences)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddClauses) at APDRiskPanelSet.pcf: line 466, column 64
    function action_287 () : void {
      APDClauseSearchPopup.push(riskCoverable, CoveragePatternSearchType.TC_EXCLCOND, riskCoverable.Coverable.ConditionAndExclusionLibraryCategories, userPreferences)
    }
    
    // 'action' attribute on MenuItem (id=ItemisedCover) at APDRiskPanelSet.pcf: line 64, column 111
    function action_dest_11 () : pcf.api.Destination {
      return pcf.APDNewCoverageCategoryPopup.createDestination(riskCoverable)
    }
    
    // 'action' attribute on ToolbarButton (id=addExposureButton) at APDRiskPanelSet.pcf: line 336, column 36
    function action_dest_252 () : pcf.api.Destination {
      return pcf.APDNewExposurePopup.createDestination(riskCoverable)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddCoverages) at APDRiskPanelSet.pcf: line 444, column 89
    function action_dest_282 () : pcf.api.Destination {
      return pcf.APDClauseSearchPopup.createDestination(riskCoverable, CoveragePatternSearchType.TC_COVERAGE, riskCoverable.Coverable.CoverageLibraryCategories, userPreferences)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddClauses) at APDRiskPanelSet.pcf: line 466, column 64
    function action_dest_288 () : pcf.api.Destination {
      return pcf.APDClauseSearchPopup.createDestination(riskCoverable, CoveragePatternSearchType.TC_EXCLCOND, riskCoverable.Coverable.ConditionAndExclusionLibraryCategories, userPreferences)
    }
    
    // 'def' attribute on InputSetRef (id=OtherCover) at APDRiskPanelSet.pcf: line 450, column 34
    function def_onEnter_284 (def :  pcf.APDRiskClauseInputSet) : void {
      def.onEnter(riskCoverable, riskCoverable.SelectedCoverageLibraryClauses, coverDefinitionHelper, openForEdit)
    }
    
    // 'def' attribute on InputSetRef (id=ConditionsAndExclusions) at APDRiskPanelSet.pcf: line 472, column 47
    function def_onEnter_290 (def :  pcf.APDRiskClauseInputSet) : void {
      def.onEnter(riskCoverable, riskCoverable.SelectedExclusionConditionLibraryClauses, coverDefinitionHelper, openForEdit)
    }
    
    // 'def' attribute on InputSetRef (id=OtherCover) at APDRiskPanelSet.pcf: line 450, column 34
    function def_refreshVariables_285 (def :  pcf.APDRiskClauseInputSet) : void {
      def.refreshVariables(riskCoverable, riskCoverable.SelectedCoverageLibraryClauses, coverDefinitionHelper, openForEdit)
    }
    
    // 'def' attribute on InputSetRef (id=ConditionsAndExclusions) at APDRiskPanelSet.pcf: line 472, column 47
    function def_refreshVariables_291 (def :  pcf.APDRiskClauseInputSet) : void {
      def.refreshVariables(riskCoverable, riskCoverable.SelectedExclusionConditionLibraryClauses, coverDefinitionHelper, openForEdit)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 42, column 202
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskCoverable.PreferredCoverageCurrency = (__VALUE_TO_SET as Currency)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 19, column 70
    function initialValue_0 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 23, column 23
    function initialValue_1 () : Boolean {
      return userPreferences.canDesign()
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 27, column 23
    function initialValue_2 () : Boolean {
      return userPreferences.inDevelopMode()
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=AddCoverages) at APDRiskPanelSet.pcf: line 444, column 89
    function onPick_283 (PickedValue :  APDClause[]) : void {
      createClauseList(PickedValue.whereTypeIs(APDCoverage).toList())
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=AddClauses) at APDRiskPanelSet.pcf: line 466, column 64
    function onPick_289 (PickedValue :  APDClause[]) : void {
      createClauseList(PickedValue.toList())
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskPanelSet.pcf: line 82, column 32
    function sortBy_13 (riskField :  APDRiskField) : java.lang.Object {
      return riskField.Attribute.Sequence
    }
    
    // 'title' attribute on Card (id=Exposure) at APDRiskPanelSet.pcf: line 328, column 55
    function title_274 () : java.lang.String {
      return riskCoverable.Coverable.ExposureLabel
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=riskFields) at APDRiskPanelSet.pcf: line 79, column 42
    function toCreateAndAdd_170 () : APDRiskField {
      return riskCoverable.createAndAddField()
    }
    
    // 'toRemove' attribute on RowIterator (id=riskFields) at APDRiskPanelSet.pcf: line 79, column 42
    function toRemove_171 (riskField :  APDRiskField) : void {
      riskCoverable.removeField(riskField)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 42, column 202
    function valueRoot_6 () : java.lang.Object {
      return riskCoverable
    }
    
    // 'value' attribute on RowIterator (id=riskFields) at APDRiskPanelSet.pcf: line 79, column 42
    function value_172 () : APDRiskField[] {
      return riskCoverable.RiskFields
    }
    
    // 'value' attribute on InputIterator (id=Exposures) at APDRiskPanelSet.pcf: line 344, column 43
    function value_272 () : APDExposure[] {
      return riskCoverable.Coverable.Exposures
    }
    
    // 'value' attribute on CardIterator at APDRiskPanelSet.pcf: line 411, column 41
    function value_280 () : APDClauseCategory[] {
      return riskCoverable.Coverable.ItemisedCoverageCategories
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 42, column 202
    function value_4 () : Currency {
      return riskCoverable.PreferredCoverageCurrency
    }
    
    // 'valueType' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 42, column 202
    function verifyValueType_9 () : void {
      var __valueTypeArg : Currency
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on Toolbar (id=designRiskFieldsToolbar) at APDRiskPanelSet.pcf: line 49, column 33
    function visible_12 () : java.lang.Boolean {
      return canDesign
    }
    
    // 'visible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 135, column 88
    function visible_16 () : java.lang.Boolean {
      return canDesign and not (riskCoverable typeis APDRiskPolicyLine)
    }
    
    // 'visible' attribute on TextCell (id=FieldName_Cell) at APDRiskPanelSet.pcf: line 212, column 44
    function visible_23 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on PanelRef at APDRiskPanelSet.pcf: line 218, column 53
    function visible_248 () : java.lang.Boolean {
      return not userPreferences.canDesign()
    }
    
    // 'visible' attribute on Card (id=RiskDetails) at APDRiskPanelSet.pcf: line 32, column 180
    function visible_249 () : java.lang.Boolean {
      return canDesign or riskCoverable.RiskFields.hasMatch(\f -> f.Availability == APDDataExistenceType.TC_CAPTURED or f.Availability == APDDataExistenceType.TC_DERIVED)
    }
    
    // 'visible' attribute on Card (id=Exposure) at APDRiskPanelSet.pcf: line 328, column 55
    function visible_273 () : java.lang.Boolean {
      return riskCoverable.Coverable.HasExposure
    }
    
    // 'visible' attribute on Card (id=OtherCoverCard) at APDRiskPanelSet.pcf: line 436, column 75
    function visible_286 () : java.lang.Boolean {
      return riskCoverable.Coverable.HasCoverageLibrary or canDesign
    }
    
    // 'visible' attribute on Card (id=ConditionsAndExclusionsCard) at APDRiskPanelSet.pcf: line 458, column 88
    function visible_292 () : java.lang.Boolean {
      return riskCoverable.Coverable.HasConditionAndExclusionLibrary or canDesign
    }
    
    // 'visible' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 42, column 202
    function visible_3 () : java.lang.Boolean {
      return riskCoverable.Branch.Policy.APDProduct.Currencies == APDCurrencyHandling.TC_BASICMULTI or riskCoverable.Branch.Policy.APDProduct.Currencies == APDCurrencyHandling.TC_FULLMULTI
    }
    
    property get canDesign () : Boolean {
      return getVariableValue("canDesign", 0) as Boolean
    }
    
    property set canDesign ($arg :  Boolean) {
      setVariableValue("canDesign", 0, $arg)
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getRequireValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setRequireValue("coverDefinitionHelper", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getRequireValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setRequireValue("riskCoverable", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
          function endExposure(exposures: APDRiskExposure[]) {
            if ((CurrentLocation as Wizard).saveDraft()) { // to keep the data up-to-date before changing LV PL-5377
              for (exp in exposures) {
                exp.endDateWM(riskCoverable.Branch.EditEffectiveDate)
              }
            }
          }
    
        function splitExposure(exposures : APDRiskExposure[]){
          if((CurrentLocation as Wizard).saveDraft()){ // to keep the data up-to-date before changing LV PL-5377
            for(exp in exposures){
              exp.splitWM(riskCoverable.Branch.EditEffectiveDate)
            }
          }
        }
    
          function createClauseList(patterns: java.util.List<APDClause>) {
            for (pattern in patterns) {
              pattern.buidlRiskClause(riskCoverable)
            }
          }
    
          function getMiddleFieldSequence(fieldList : APDRiskField[]) : Integer {
            var size = fieldList.Count
            var seq = size == 0 ? 0 : fieldList.orderBy(\f -> f.Attribute.Sequence).toTypedArray()[((size+1)/2)-1].Attribute.Sequence
            return seq
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardIteratorEntryExpressionsImpl extends APDRiskPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddCoverage) at APDRiskPanelSet.pcf: line 422, column 65
    function action_275 () : void {
      riskCoverable.Coverable.addCoverage(clauseCategory)
    }
    
    // 'def' attribute on InputSetRef at APDRiskPanelSet.pcf: line 427, column 232
    function def_onEnter_277 (def :  pcf.APDRiskClauseInputSet) : void {
      def.onEnter(riskCoverable, openForEdit ? riskCoverable.Coverable.getItemisedCoverages(clauseCategory) : riskCoverable.getRiskItemisedCoverages(clauseCategory), coverDefinitionHelper, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at APDRiskPanelSet.pcf: line 427, column 232
    function def_refreshVariables_278 (def :  pcf.APDRiskClauseInputSet) : void {
      def.refreshVariables(riskCoverable, openForEdit ? riskCoverable.Coverable.getItemisedCoverages(clauseCategory) : riskCoverable.getRiskItemisedCoverages(clauseCategory), coverDefinitionHelper, openForEdit)
    }
    
    // 'title' attribute on Card (id=Coverages) at APDRiskPanelSet.pcf: line 414, column 39
    function title_279 () : java.lang.String {
      return clauseCategory.Name
    }
    
    // 'visible' attribute on Toolbar at APDRiskPanelSet.pcf: line 417, column 35
    function visible_276 () : java.lang.Boolean {
      return canDesign
    }
    
    property get clauseCategory () : APDClauseCategory {
      return getIteratedValue(1) as APDClauseCategory
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends IteratorEntry4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=addColumn) at APDRiskPanelSet.pcf: line 393, column 46
    function action_264 () : void {
      APDNewExposureFieldPopup.push(riskExposures, exposure); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposureField)
    }
    
    // 'action' attribute on ToolbarButton (id=removeExposureButton) at APDRiskPanelSet.pcf: line 399, column 46
    function action_266 () : void {
      exposure.removeExposure(riskCoverable); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposure)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=SplitRiskExposures) at APDRiskPanelSet.pcf: line 370, column 65
    function allCheckedRowsAction_258 (CheckedValues :  APDRiskExposure[], CheckedValuesErrors :  java.util.Map) : void {
      APDSplitRiskPopup.push(CheckedValues.toList())
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=End) at APDRiskPanelSet.pcf: line 378, column 138
    function allCheckedRowsAction_260 (CheckedValues :  APDRiskExposure[], CheckedValuesErrors :  java.util.Map) : void {
      endExposure(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Split) at APDRiskPanelSet.pcf: line 386, column 138
    function allCheckedRowsAction_262 (CheckedValues :  APDRiskExposure[], CheckedValuesErrors :  java.util.Map) : void {
      splitExposure(CheckedValues)
    }
    
    // 'def' attribute on ListViewInput at APDRiskPanelSet.pcf: line 358, column 48
    function def_onEnter_267 (def :  pcf.APDRiskExposureLV_basis) : void {
      def.onEnter(riskCoverable, exposure)
    }
    
    // 'def' attribute on ListViewInput at APDRiskPanelSet.pcf: line 358, column 48
    function def_onEnter_269 (def :  pcf.APDRiskExposureLV_default) : void {
      def.onEnter(riskCoverable, exposure)
    }
    
    // 'def' attribute on ListViewInput at APDRiskPanelSet.pcf: line 358, column 48
    function def_refreshVariables_268 (def :  pcf.APDRiskExposureLV_basis) : void {
      def.refreshVariables(riskCoverable, exposure)
    }
    
    // 'def' attribute on ListViewInput at APDRiskPanelSet.pcf: line 358, column 48
    function def_refreshVariables_270 (def :  pcf.APDRiskExposureLV_default) : void {
      def.refreshVariables(riskCoverable, exposure)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 349, column 47
    function initialValue_253 () : APDRiskExposure[] {
      return riskCoverable.RiskExposuresInPeriod.where(\riskExposure -> riskExposure.Exposure == exposure)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 353, column 37
    function initialValue_254 () : Boolean {
      return exposure.RatingType != APDExposureRatingType.TC_TERM
    }
    
    // 'addLabel' attribute on IteratorButtons at APDRiskPanelSet.pcf: line 363, column 134
    function label_255 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.ManualLine.RiskCoverable.AddExposure", exposure.Name)
    }
    
    // 'removeLabel' attribute on IteratorButtons at APDRiskPanelSet.pcf: line 363, column 134
    function label_256 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.ManualLine.RiskCoverable.RemoveExposure", exposure.Name)
    }
    
    // 'mode' attribute on ListViewInput at APDRiskPanelSet.pcf: line 358, column 48
    function mode_271 () : java.lang.Object {
      return exposure.RatingType
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=SplitRiskExposures) at APDRiskPanelSet.pcf: line 370, column 65
    function visible_257 () : java.lang.Boolean {
      return exposure.HasSplittableFields
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=End) at APDRiskPanelSet.pcf: line 378, column 138
    function visible_259 () : java.lang.Boolean {
      return riskCoverable.Branch.Job typeis PolicyChange and exposure.RatingType != APDExposureRatingType.TC_TERM
    }
    
    // 'visible' attribute on ToolbarButton (id=addColumn) at APDRiskPanelSet.pcf: line 393, column 46
    function visible_263 () : java.lang.Boolean {
      return canDesign
    }
    
    property get riskExposures () : APDRiskExposure[] {
      return getVariableValue("riskExposures", 2) as APDRiskExposure[]
    }
    
    property set riskExposures ($arg :  APDRiskExposure[]) {
      setVariableValue("riskExposures", 2, $arg)
    }
    
    property get windowMode () : Boolean {
      return getVariableValue("windowMode", 2) as Boolean
    }
    
    property set windowMode ($arg :  Boolean) {
      setVariableValue("windowMode", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends useModeRiskFieldDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at APDRiskPanelSet.pcf: line 258, column 41
    function condition_177 () : java.lang.Boolean {
      return riskField.Attribute.Jurisdiction != true
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_182 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_184 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_186 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_188 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_190 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_192 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_194 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_196 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_198 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_200 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_202 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_onEnter_204 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_183 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_185 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_187 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_189 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_191 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_193 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_195 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_197 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_199 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_201 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_203 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function def_refreshVariables_205 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskField)
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function editable_181 () : java.lang.Boolean {
      return riskField.Availability == APDDataExistenceType.TC_CAPTURED or riskField.Availability == APDDataExistenceType.TC_CAPTUREDQUOTE or riskField.Availability == APDDataExistenceType.TC_CAPTUREDBIND or riskField.Availability == APDDataExistenceType.TC_CAPTUREDISSUE
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 270, column 58
    function mode_206 () : java.lang.Object {
      return riskField.Attribute.Type
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 264, column 60
    function valueRoot_179 () : java.lang.Object {
      return riskField.Attribute
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 264, column 60
    function value_178 () : java.lang.String {
      return riskField.Attribute.Label
    }
    
    property get riskField () : APDRiskField {
      return getIteratedValue(2) as APDRiskField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends useModeRiskFieldDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at APDRiskPanelSet.pcf: line 304, column 41
    function condition_213 () : java.lang.Boolean {
      return riskField.Attribute.Jurisdiction != true
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_218 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_220 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_222 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_224 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_226 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_228 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_230 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_232 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_234 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_236 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_238 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_onEnter_240 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_219 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_221 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_223 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_225 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_227 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_229 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_231 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_233 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_235 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_237 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_239 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function def_refreshVariables_241 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskField)
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function editable_217 () : java.lang.Boolean {
      return riskField.Availability == APDDataExistenceType.TC_CAPTURED or riskField.Availability == APDDataExistenceType.TC_CAPTUREDQUOTE or riskField.Availability == APDDataExistenceType.TC_CAPTUREDBIND or riskField.Availability == APDDataExistenceType.TC_CAPTUREDISSUE
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 316, column 58
    function mode_242 () : java.lang.Object {
      return riskField.Attribute.Type
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 310, column 60
    function valueRoot_215 () : java.lang.Object {
      return riskField.Attribute
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 310, column 60
    function value_214 () : java.lang.String {
      return riskField.Attribute.Label
    }
    
    property get riskField () : APDRiskField {
      return getIteratedValue(2) as APDRiskField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends APDRiskPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get exposure () : APDExposure {
      return getIteratedValue(1) as APDExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDRiskPanelSet.pcf: line 194, column 36
    function action_154 () : void {
      APDTagPopup.push(riskField.Attribute, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskPanelSet.pcf: line 113, column 112
    function action_60 () : void {
      riskField.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskPanelSet.pcf: line 118, column 114
    function action_62 () : void {
      riskField.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 159, column 40
    function action_87 () : void {
      APDAttributeRulePopup.push(riskField.Attribute.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)), riskField.Attribute, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDRiskPanelSet.pcf: line 194, column 36
    function action_dest_155 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(riskField.Attribute, openForEdit)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 159, column 40
    function action_dest_88 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(riskField.Attribute.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)), riskField.Attribute, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskPanelSet.pcf: line 113, column 112
    function available_59 () : java.lang.Boolean {
      return riskField.Attribute.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskPanelSet.pcf: line 118, column 114
    function available_61 () : java.lang.Boolean {
      return riskField.Attribute.Sequence != riskCoverable.RiskFields.Count
    }
    
    // 'available' attribute on CheckBoxCell (id=Identifier_Cell) at APDRiskPanelSet.pcf: line 127, column 40
    function available_64 () : java.lang.Boolean {
      return APDFieldType.TF_IDENTIFIERTYPES.TypeKeys.hasMatch(\tk -> tk == riskField.Attribute.Type)
    }
    
    // 'condition' attribute on ToolbarFlag at APDRiskPanelSet.pcf: line 85, column 35
    function condition_24 () : java.lang.Boolean {
      return riskField.Attribute.Jurisdiction != true
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_onEnter_101 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_onEnter_103 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_onEnter_105 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_onEnter_107 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_onEnter_109 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_onEnter_111 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_onEnter_116 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_onEnter_118 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_onEnter_120 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_onEnter_122 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_onEnter_124 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_onEnter_126 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_onEnter_128 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_onEnter_130 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_onEnter_135 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_onEnter_137 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_onEnter_139 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_onEnter_141 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_onEnter_143 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_onEnter_145 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_onEnter_147 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_onEnter_149 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_32 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_34 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_36 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_38 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_40 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_42 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_44 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_46 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_48 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_50 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_52 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_onEnter_54 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_onEnter_97 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_onEnter_99 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_refreshVariables_100 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_refreshVariables_102 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_refreshVariables_104 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_refreshVariables_106 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_refreshVariables_108 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_refreshVariables_110 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_refreshVariables_112 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_refreshVariables_117 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_refreshVariables_119 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_refreshVariables_121 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_refreshVariables_123 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_refreshVariables_125 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_refreshVariables_127 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_refreshVariables_129 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function def_refreshVariables_131 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_refreshVariables_136 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_refreshVariables_138 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_refreshVariables_140 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_refreshVariables_142 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_refreshVariables_144 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_refreshVariables_146 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_refreshVariables_148 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function def_refreshVariables_150 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_33 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_35 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_37 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_39 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_41 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_43 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_45 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_47 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_49 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_51 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_53 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function def_refreshVariables_55 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskField)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function def_refreshVariables_98 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, openForEdit)
    }
    
    // 'value' attribute on TextCell (id=FieldDescription_Cell) at APDRiskPanelSet.pcf: line 203, column 40
    function defaultSetter_160 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskField.Attribute.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at APDRiskPanelSet.pcf: line 212, column 44
    function defaultSetter_165 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskField.Attribute.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 94, column 54
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskField.Attribute.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDRiskPanelSet.pcf: line 127, column 40
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      (riskField.Attribute as APDField).Identifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 135, column 88
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      (riskField.Attribute as APDField).Jurisdiction = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=type_Cell) at APDRiskPanelSet.pcf: line 147, column 39
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskField.Attribute.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'editable' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 94, column 54
    function editable_25 () : java.lang.Boolean {
      return canDesign
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function editable_31 () : java.lang.Boolean {
      return riskField.EditableInUI
    }
    
    // 'editable' attribute on TypeKeyCell (id=type_Cell) at APDRiskPanelSet.pcf: line 147, column 39
    function editable_79 () : java.lang.Boolean {
      return not riskField.Attribute.Jurisdiction
    }
    
    // 'mode' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 168, column 40
    function mode_113 () : java.lang.Object {
      return riskField.Attribute.getUIRuleMode(APDRuleType.TC_DEFAULT)
    }
    
    // 'mode' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 177, column 40
    function mode_132 () : java.lang.Object {
      return riskField.Attribute.getUIRuleMode(APDRuleType.TC_MIN)
    }
    
    // 'mode' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 185, column 40
    function mode_151 () : java.lang.Object {
      return riskField.Attribute.getUIRuleMode(APDRuleType.TC_MAX)
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 101, column 56
    function mode_56 () : java.lang.Object {
      return riskField.Attribute.CellMode
    }
    
    // 'onChange' attribute on PostOnChange at APDRiskPanelSet.pcf: line 137, column 75
    function onChange_71 () : void {
      riskField.Attribute.autoSetRiskLocation()
    }
    
    // 'onChange' attribute on PostOnChange at APDRiskPanelSet.pcf: line 149, column 254
    function onChange_78 () : void {
      if (riskField.Attribute.Type != APDFieldType.TC_VARCHAR and riskField.Attribute.Type != APDFieldType.TC_LOCATION and riskField.Attribute.Type != APDFieldType.TC_PARTY) (riskField.Attribute as APDField).Identifier = false
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 159, column 40
    function valueRange_91 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 94, column 54
    function valueRoot_28 () : java.lang.Object {
      return riskField.Attribute
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDRiskPanelSet.pcf: line 127, column 40
    function valueRoot_67 () : java.lang.Object {
      return (riskField.Attribute as APDField)
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 159, column 40
    function valueRoot_90 () : java.lang.Object {
      return riskField
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDRiskPanelSet.pcf: line 194, column 36
    function value_156 () : java.lang.String {
      return riskField.Attribute.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=FieldDescription_Cell) at APDRiskPanelSet.pcf: line 203, column 40
    function value_159 () : java.lang.String {
      return riskField.Attribute.Description
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at APDRiskPanelSet.pcf: line 212, column 44
    function value_164 () : java.lang.String {
      return riskField.Attribute.Name
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 94, column 54
    function value_26 () : java.lang.String {
      return riskField.Attribute.Label
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDRiskPanelSet.pcf: line 127, column 40
    function value_65 () : java.lang.Boolean {
      return (riskField.Attribute as APDField).Identifier
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 135, column 88
    function value_73 () : java.lang.Boolean {
      return (riskField.Attribute as APDField).Jurisdiction
    }
    
    // 'value' attribute on TypeKeyCell (id=type_Cell) at APDRiskPanelSet.pcf: line 147, column 39
    function value_80 () : APDFieldType {
      return riskField.Attribute.Type
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 159, column 40
    function value_89 () : APDDataExistenceType {
      return riskField.Availability
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 159, column 40
    function verifyValueRangeIsAllowedType_92 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 159, column 40
    function verifyValueRangeIsAllowedType_92 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 159, column 40
    function verifyValueRangeIsAllowedType_92 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 159, column 40
    function verifyValueRange_93 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_92(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=type_Cell) at APDRiskPanelSet.pcf: line 147, column 39
    function verifyValueType_86 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueVisible' attribute on TextCell (id=Tags_Cell) at APDRiskPanelSet.pcf: line 194, column 36
    function visible_153 () : java.lang.Boolean {
      return riskField.Attribute.ShowDisplayValue
    }
    
    // 'visible' attribute on TextCell (id=FieldName_Cell) at APDRiskPanelSet.pcf: line 212, column 44
    function visible_167 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 135, column 88
    function visible_72 () : java.lang.Boolean {
      return riskField.Attribute.Type == APDFieldType.TC_LOCATION
    }
    
    // 'visible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 135, column 88
    function visible_76 () : java.lang.Boolean {
      return canDesign and not (riskCoverable typeis APDRiskPolicyLine)
    }
    
    property get riskField () : APDRiskField {
      return getIteratedValue(1) as APDRiskField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class useModeRiskFieldDVExpressionsImpl extends APDRiskPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 225, column 38
    function initialValue_174 () : APDRiskField[] {
      return riskCoverable.RiskFields.where(\f -> f.ShowInUseMode)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 230, column 31
    function initialValue_175 () : Integer {
      return getMiddleFieldSequence(availableFields)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskPanelSet.pcf: line 255, column 38
    function sortBy_176 (riskField :  APDRiskField) : java.lang.Object {
      return riskField.Attribute.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=riskFieldsLeft) at APDRiskPanelSet.pcf: line 252, column 48
    function toCreateAndAdd_209 () : APDRiskField {
      return riskCoverable.createAndAddField()
    }
    
    // 'toRemove' attribute on RowIterator (id=riskFieldsLeft) at APDRiskPanelSet.pcf: line 252, column 48
    function toRemove_210 (riskField :  APDRiskField) : void {
      riskCoverable.removeField(riskField)
    }
    
    // 'value' attribute on RowIterator (id=riskFieldsLeft) at APDRiskPanelSet.pcf: line 252, column 48
    function value_211 () : APDRiskField[] {
      return availableFields.where(\f -> f.Attribute.Sequence <= middleSequence)
    }
    
    // 'value' attribute on RowIterator (id=riskFieldsRight) at APDRiskPanelSet.pcf: line 298, column 48
    function value_247 () : APDRiskField[] {
      return availableFields.where(\f -> f.Attribute.Sequence > middleSequence)
    }
    
    property get availableFields () : APDRiskField[] {
      return getVariableValue("availableFields", 1) as APDRiskField[]
    }
    
    property set availableFields ($arg :  APDRiskField[]) {
      setVariableValue("availableFields", 1, $arg)
    }
    
    property get middleSequence () : Integer {
      return getVariableValue("middleSequence", 1) as Integer
    }
    
    property set middleSequence ($arg :  Integer) {
      setVariableValue("middleSequence", 1, $arg)
    }
    
    
  }
  
  
}