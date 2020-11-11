package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverableCVExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverableCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=ProductLineLocalizedValues) at APDCoverableCV.pcf: line 47, column 42
    function def_onEnter_10 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(coverable, localizationFields, localizationLabels)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 745, column 71
    function def_onEnter_405 (def :  pcf.APDCoverablePricingPanelSet) : void {
      def.onEnter(coverable, costCodeHelper)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 42, column 94
    function def_onEnter_5 (def :  pcf.APDCoverableInputSet_default) : void {
      def.onEnter(coverable)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 42, column 94
    function def_onEnter_7 (def :  pcf.APDCoverableInputSet_line) : void {
      def.onEnter(coverable)
    }
    
    // 'def' attribute on PanelRef (id=ProductLineLocalizedValues) at APDCoverableCV.pcf: line 47, column 42
    function def_refreshVariables_11 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(coverable, localizationFields, localizationLabels)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 745, column 71
    function def_refreshVariables_406 (def :  pcf.APDCoverablePricingPanelSet) : void {
      def.refreshVariables(coverable, costCodeHelper)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 42, column 94
    function def_refreshVariables_6 (def :  pcf.APDCoverableInputSet_default) : void {
      def.refreshVariables(coverable)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 42, column 94
    function def_refreshVariables_8 (def :  pcf.APDCoverableInputSet_line) : void {
      def.refreshVariables(coverable)
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 16, column 70
    function initialValue_0 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 20, column 23
    function initialValue_1 () : Boolean {
      return userPreferences.inDevelopMode()
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 25, column 24
    function initialValue_2 () : String[] {
      return coverable.LocalizationFields
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 30, column 24
    function initialValue_3 () : String[] {
      return coverable.LocalizationLabels
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 34, column 43
    function initialValue_4 () : gw.apd.model.CostCodeHelper {
      return new gw.apd.model.CostCodeHelper()
    }
    
    // 'mode' attribute on InputSetRef at APDCoverableCV.pcf: line 42, column 94
    function mode_9 () : java.lang.Object {
      return coverable typeis APDProductLine ? "line" : "default"
    }
    
    // 'value' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 770, column 37
    function sortValue_408 (child :  APDCoverable) : java.lang.Object {
      return child.Name
    }
    
    // 'value' attribute on TextCell (id=childDescription_Cell) at APDCoverableCV.pcf: line 774, column 44
    function sortValue_409 (child :  APDCoverable) : java.lang.Object {
      return child.Description
    }
    
    // 'title' attribute on Card (id=CoverableExclusions) at APDCoverableCV.pcf: line 482, column 92
    function title_329 () : java.lang.String {
      return DisplayKey.get( "Web.APDProductScreen.APDProductLine.Exclusions" )
    }
    
    // 'title' attribute on Card (id=CoverableConditions) at APDCoverableCV.pcf: line 612, column 92
    function title_404 () : java.lang.String {
      return DisplayKey.get( "Web.APDProductScreen.APDProductLine.Conditions" )
    }
    
    // 'title' attribute on Card (id=CoverablePricing) at APDCoverableCV.pcf: line 743, column 87
    function title_407 () : java.lang.String {
      return DisplayKey.get( "Web.APDProductScreen.APDCoverable.Pricing" )
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=CoverableLV) at APDCoverableCV.pcf: line 764, column 40
    function toCreateAndAdd_418 () : APDCoverable {
      return coverable.addCoverable()
    }
    
    // 'toRemove' attribute on RowIterator (id=CoverableLV) at APDCoverableCV.pcf: line 764, column 40
    function toRemove_419 (child :  APDCoverable) : void {
      coverable.removeCoverable(child)
    }
    
    // 'value' attribute on RowIterator (id=CoverableLV) at APDCoverableCV.pcf: line 764, column 40
    function value_420 () : APDCoverable[] {
      return coverable.ChildCoverables
    }
    
    // 'visible' attribute on Card (id=CoverableExposures) at APDCoverableCV.pcf: line 234, column 39
    function visible_204 () : java.lang.Boolean {
      return coverable.HasExposure
    }
    
    // 'visible' attribute on Card (id=CoverableChildren) at APDCoverableCV.pcf: line 750, column 39
    function visible_421 () : java.lang.Boolean {
      return coverable.HasChildren
    }
    
    property get costCodeHelper () : gw.apd.model.CostCodeHelper {
      return getVariableValue("costCodeHelper", 0) as gw.apd.model.CostCodeHelper
    }
    
    property set costCodeHelper ($arg :  gw.apd.model.CostCodeHelper) {
      setVariableValue("costCodeHelper", 0, $arg)
    }
    
    property get coverable () : APDCoverable {
      return getRequireValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get localizationFields () : String[] {
      return getVariableValue("localizationFields", 0) as String[]
    }
    
    property set localizationFields ($arg :  String[]) {
      setVariableValue("localizationFields", 0, $arg)
    }
    
    property get localizationLabels () : String[] {
      return getVariableValue("localizationLabels", 0) as String[]
    }
    
    property set localizationLabels ($arg :  String[]) {
      setVariableValue("localizationLabels", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 266, column 86
    function action_154 () : void {
      APDExposureFieldsPopup.push(exposure, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 266, column 86
    function action_dest_155 () : pcf.api.Destination {
      return pcf.APDExposureFieldsPopup.createDestination(exposure, openForEdit)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 260, column 42
    function defaultSetter_151 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=ExposureType_Cell) at APDCoverableCV.pcf: line 274, column 47
    function defaultSetter_157 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ExposureType = (__VALUE_TO_SET as APDExposureType)
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 286, column 86
    function defaultSetter_164 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ContactRole = (__VALUE_TO_SET as APDExposureContactRole)
    }
    
    // 'value' attribute on TypeKeyCell (id=RiskLocation_Cell) at APDCoverableCV.pcf: line 296, column 51
    function defaultSetter_171 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.RiskLocation = (__VALUE_TO_SET as APDRiskLocationType)
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingType_Cell) at APDCoverableCV.pcf: line 307, column 54
    function defaultSetter_176 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.RatingType = (__VALUE_TO_SET as APDExposureRatingType)
    }
    
    // 'value' attribute on TextCell (id=MenuLabel_Cell) at APDCoverableCV.pcf: line 314, column 47
    function defaultSetter_182 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.MenuLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 320, column 49
    function defaultSetter_188 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 327, column 44
    function defaultSetter_194 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.TypeName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextCell (id=MenuLabel_Cell) at APDCoverableCV.pcf: line 314, column 47
    function label_180 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.MenuLabel"))
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 320, column 49
    function label_186 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.Description"))
    }
    
    // 'label' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 327, column 44
    function label_192 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.TypeName"))
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableCV.pcf: line 298, column 71
    function onChange_169 () : void {
      exposure.toggleJurisdictionLocation()
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 286, column 86
    function validationExpression_161 () : java.lang.Object {
      return (exposure.ExposureType == APDExposureType.TC_CONTACT && exposure.ContactRole == null)? DisplayKey.get("Web.APDValidation.Exposure.MissingContactRole") : null
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 260, column 42
    function valueRoot_152 () : java.lang.Object {
      return exposure
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 260, column 42
    function value_150 () : java.lang.String {
      return exposure.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=ExposureType_Cell) at APDCoverableCV.pcf: line 274, column 47
    function value_156 () : APDExposureType {
      return exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 286, column 86
    function value_163 () : APDExposureContactRole {
      return exposure.ContactRole
    }
    
    // 'value' attribute on TypeKeyCell (id=RiskLocation_Cell) at APDCoverableCV.pcf: line 296, column 51
    function value_170 () : APDRiskLocationType {
      return exposure.RiskLocation
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingType_Cell) at APDCoverableCV.pcf: line 307, column 54
    function value_175 () : APDExposureRatingType {
      return exposure.RatingType
    }
    
    // 'value' attribute on TextCell (id=MenuLabel_Cell) at APDCoverableCV.pcf: line 314, column 47
    function value_181 () : java.lang.String {
      return exposure.MenuLabel
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 320, column 49
    function value_187 () : java.lang.String {
      return exposure.Description
    }
    
    // 'value' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 327, column 44
    function value_193 () : java.lang.String {
      return exposure.TypeName
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ExposureType_Cell) at APDCoverableCV.pcf: line 274, column 47
    function verifyValueType_160 () : void {
      var __valueTypeArg : APDExposureType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 286, column 86
    function verifyValueType_168 () : void {
      var __valueTypeArg : APDExposureContactRole
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RiskLocation_Cell) at APDCoverableCV.pcf: line 296, column 51
    function verifyValueType_174 () : void {
      var __valueTypeArg : APDRiskLocationType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RatingType_Cell) at APDCoverableCV.pcf: line 307, column 54
    function verifyValueType_179 () : void {
      var __valueTypeArg : APDExposureRatingType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueVisible' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 286, column 86
    function visible_162 () : java.lang.Boolean {
      return exposure.ExposureType == APDExposureType.TC_CONTACT
    }
    
    // 'visible' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 327, column 44
    function visible_196 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get exposure () : APDExposure {
      return getIteratedValue(2) as APDExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ListDetailPanel3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 386, column 85
    function action_216 () : void {
      APDClauseTermsPopup.push(coverage, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=EditButton_Cell) at APDCoverableCV.pcf: line 392, column 95
    function action_218 () : void {
      APDCoveragePopup.push(coverage, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 407, column 96
    function action_221 () : void {
      APDClauseCategoryPopup.push(coverage.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDCoverableCV.pcf: line 412, column 69
    function action_223 () : void {
      APDNewLibraryCategoryPopup.push(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 421, column 53
    function action_233 () : void {
      APDClauseRulePopup.push(coverage.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE), coverage, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 429, column 36
    function action_240 () : void {
      APDTagPopup.push(coverage, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDCoverableCV.pcf: line 453, column 99
    function action_259 () : void {
      coverage.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDCoverableCV.pcf: line 458, column 101
    function action_261 () : void {
      coverage.moveDown()
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 386, column 85
    function action_dest_217 () : pcf.api.Destination {
      return pcf.APDClauseTermsPopup.createDestination(coverage, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=EditButton_Cell) at APDCoverableCV.pcf: line 392, column 95
    function action_dest_219 () : pcf.api.Destination {
      return pcf.APDCoveragePopup.createDestination(coverage, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 407, column 96
    function action_dest_222 () : pcf.api.Destination {
      return pcf.APDClauseCategoryPopup.createDestination(coverage.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDCoverableCV.pcf: line 412, column 69
    function action_dest_224 () : pcf.api.Destination {
      return pcf.APDNewLibraryCategoryPopup.createDestination(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 421, column 53
    function action_dest_234 () : pcf.api.Destination {
      return pcf.APDClauseRulePopup.createDestination(coverage.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE), coverage, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 429, column 36
    function action_dest_241 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(coverage, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 407, column 96
    function available_220 () : java.lang.Boolean {
      return coverage.ClauseCategory != null
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDCoverableCV.pcf: line 453, column 99
    function available_258 () : java.lang.Boolean {
      return coverage.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDCoverableCV.pcf: line 458, column 101
    function available_260 () : java.lang.Boolean {
      return coverage.Sequence != coverable.Coverages.Count
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 380, column 42
    function defaultSetter_213 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 402, column 49
    function defaultSetter_227 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.ClauseCategory = (__VALUE_TO_SET as APDClauseCategory)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 435, column 49
    function defaultSetter_247 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 442, column 44
    function defaultSetter_253 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 435, column 49
    function label_245 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 442, column 44
    function label_251 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddNewCategory) at APDCoverableCV.pcf: line 412, column 69
    function onPick_225 (PickedValue :  APDClauseCategory) : void {
      coverage.ClauseCategory = PickedValue
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 402, column 49
    function valueRange_229 () : java.lang.Object {
      return coverage.Coverable.ClauseCategories
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 421, column 53
    function valueRange_236 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 380, column 42
    function valueRoot_214 () : java.lang.Object {
      return coverage
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 380, column 42
    function value_212 () : java.lang.String {
      return coverage.Name
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 402, column 49
    function value_226 () : APDClauseCategory {
      return coverage.ClauseCategory
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 421, column 53
    function value_235 () : APDDataExistenceType {
      return coverage.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_OPTIONAL
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 429, column 36
    function value_242 () : java.lang.String {
      return coverage.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 435, column 49
    function value_246 () : java.lang.String {
      return coverage.Description
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 442, column 44
    function value_252 () : java.lang.String {
      return coverage.CodeIdentifier
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 402, column 49
    function verifyValueRangeIsAllowedType_230 ($$arg :  APDClauseCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 402, column 49
    function verifyValueRangeIsAllowedType_230 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 402, column 49
    function verifyValueRangeIsAllowedType_230 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 421, column 53
    function verifyValueRangeIsAllowedType_237 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 421, column 53
    function verifyValueRangeIsAllowedType_237 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 421, column 53
    function verifyValueRangeIsAllowedType_237 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 402, column 49
    function verifyValueRange_231 () : void {
      var __valueRangeArg = coverage.Coverable.ClauseCategories
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_230(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 421, column 53
    function verifyValueRange_238 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_237(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 442, column 44
    function visible_255 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get coverage () : APDCoverage {
      return getIteratedValue(2) as APDCoverage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ListDetailPanel4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 522, column 87
    function action_278 () : void {
      APDClauseTermsPopup.push(exclusion, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 537, column 96
    function action_283 () : void {
      APDClauseCategoryPopup.push(exclusion.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDCoverableCV.pcf: line 542, column 70
    function action_285 () : void {
      APDNewLibraryCategoryPopup.push(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 551, column 53
    function action_295 () : void {
      APDClauseRulePopup.push(exclusion.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE), exclusion, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 559, column 36
    function action_302 () : void {
      APDTagPopup.push(exclusion, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDCoverableCV.pcf: line 583, column 99
    function action_321 () : void {
      exclusion.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDCoverableCV.pcf: line 588, column 101
    function action_323 () : void {
      exclusion.moveDown()
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 522, column 87
    function action_dest_279 () : pcf.api.Destination {
      return pcf.APDClauseTermsPopup.createDestination(exclusion, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 537, column 96
    function action_dest_284 () : pcf.api.Destination {
      return pcf.APDClauseCategoryPopup.createDestination(exclusion.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDCoverableCV.pcf: line 542, column 70
    function action_dest_286 () : pcf.api.Destination {
      return pcf.APDNewLibraryCategoryPopup.createDestination(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 551, column 53
    function action_dest_296 () : pcf.api.Destination {
      return pcf.APDClauseRulePopup.createDestination(exclusion.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE), exclusion, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 559, column 36
    function action_dest_303 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(exclusion, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 537, column 96
    function available_282 () : java.lang.Boolean {
      return exclusion.ClauseCategory != null
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDCoverableCV.pcf: line 583, column 99
    function available_320 () : java.lang.Boolean {
      return exclusion.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDCoverableCV.pcf: line 588, column 101
    function available_322 () : java.lang.Boolean {
      return exclusion.Sequence != coverable.Exclusions.Count
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 516, column 43
    function defaultSetter_275 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 532, column 49
    function defaultSetter_289 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.ClauseCategory = (__VALUE_TO_SET as APDClauseCategory)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 565, column 50
    function defaultSetter_309 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 572, column 44
    function defaultSetter_315 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 565, column 50
    function label_307 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 572, column 44
    function label_313 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddNewCategory) at APDCoverableCV.pcf: line 542, column 70
    function onPick_287 (PickedValue :  APDClauseCategory) : void {
      exclusion.ClauseCategory = PickedValue
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 532, column 49
    function valueRange_291 () : java.lang.Object {
      return exclusion.Coverable.ClauseCategories
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 551, column 53
    function valueRange_298 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 516, column 43
    function valueRoot_276 () : java.lang.Object {
      return exclusion
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 516, column 43
    function value_274 () : java.lang.String {
      return exclusion.Name
    }
    
    // 'value' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 522, column 87
    function value_280 () : java.lang.String {
      return DisplayKey.get( "Web.APDCoverableCV.EditTerms" )
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 532, column 49
    function value_288 () : APDClauseCategory {
      return exclusion.ClauseCategory
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 551, column 53
    function value_297 () : APDDataExistenceType {
      return exclusion.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_OPTIONAL
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 559, column 36
    function value_304 () : java.lang.String {
      return exclusion.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 565, column 50
    function value_308 () : java.lang.String {
      return exclusion.Description
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 572, column 44
    function value_314 () : java.lang.String {
      return exclusion.CodeIdentifier
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 532, column 49
    function verifyValueRangeIsAllowedType_292 ($$arg :  APDClauseCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 532, column 49
    function verifyValueRangeIsAllowedType_292 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 532, column 49
    function verifyValueRangeIsAllowedType_292 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 551, column 53
    function verifyValueRangeIsAllowedType_299 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 551, column 53
    function verifyValueRangeIsAllowedType_299 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 551, column 53
    function verifyValueRangeIsAllowedType_299 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 532, column 49
    function verifyValueRange_293 () : void {
      var __valueRangeArg = exclusion.Coverable.ClauseCategories
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_292(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 551, column 53
    function verifyValueRange_300 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_299(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 572, column 44
    function visible_317 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get exclusion () : APDExclusion {
      return getIteratedValue(2) as APDExclusion
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ListDetailPanel5ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 653, column 87
    function action_345 () : void {
      APDClauseTermsPopup.push(condition, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 668, column 98
    function action_350 () : void {
      APDClauseCategoryPopup.push(condition.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDCoverableCV.pcf: line 673, column 70
    function action_353 () : void {
      APDNewLibraryCategoryPopup.push(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 682, column 53
    function action_365 () : void {
      APDClauseRulePopup.push(condition.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE), condition, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 690, column 36
    function action_372 () : void {
      APDTagPopup.push(condition, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDCoverableCV.pcf: line 714, column 101
    function action_391 () : void {
      condition.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDCoverableCV.pcf: line 719, column 103
    function action_394 () : void {
      condition.moveDown()
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 653, column 87
    function action_dest_346 () : pcf.api.Destination {
      return pcf.APDClauseTermsPopup.createDestination(condition, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 668, column 98
    function action_dest_351 () : pcf.api.Destination {
      return pcf.APDClauseCategoryPopup.createDestination(condition.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDCoverableCV.pcf: line 673, column 70
    function action_dest_354 () : pcf.api.Destination {
      return pcf.APDNewLibraryCategoryPopup.createDestination(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 682, column 53
    function action_dest_366 () : pcf.api.Destination {
      return pcf.APDClauseRulePopup.createDestination(condition.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE), condition, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 690, column 36
    function action_dest_373 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(condition, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 668, column 98
    function available_349 () : java.lang.Boolean {
      return condition.ClauseCategory != null
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDCoverableCV.pcf: line 714, column 101
    function available_390 () : java.lang.Boolean {
      return condition.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDCoverableCV.pcf: line 719, column 103
    function available_393 () : java.lang.Boolean {
      return condition.Sequence != coverable.Conditions.Count
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 647, column 43
    function defaultSetter_341 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 663, column 49
    function defaultSetter_358 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.ClauseCategory = (__VALUE_TO_SET as APDClauseCategory)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 696, column 50
    function defaultSetter_379 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 703, column 44
    function defaultSetter_385 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 647, column 43
    function label_339 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.Name" )
    }
    
    // 'label' attribute on MenuItem (id=EditCategory) at APDCoverableCV.pcf: line 668, column 98
    function label_352 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.EditClauseCategory" )
    }
    
    // 'label' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 663, column 49
    function label_356 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.ClauseCategory" )
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 696, column 50
    function label_377 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get( "Web.APDCoverableCV.Description" ))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 703, column 44
    function label_383 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get( "Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix ))
    }
    
    // 'label' attribute on MenuItem (id=MoveUp) at APDCoverableCV.pcf: line 714, column 101
    function label_392 () : java.lang.Object {
      return DisplayKey.get( "Web.APDProductScreen.APDCoverage.Move.Up" )
    }
    
    // 'label' attribute on MenuItem (id=MoveDown) at APDCoverableCV.pcf: line 719, column 103
    function label_395 () : java.lang.Object {
      return DisplayKey.get( "Web.APDProductScreen.APDCoverage.Move.Down" )
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddNewCategory) at APDCoverableCV.pcf: line 673, column 70
    function onPick_355 (PickedValue :  APDClauseCategory) : void {
      condition.ClauseCategory = PickedValue
    }
    
    // 'selectLabel' attribute on RowIterator (id=ConditionsLV) at APDCoverableCV.pcf: line 636, column 42
    function selectLabel_398 () : java.lang.String {
      return DisplayKey.get( "Button.Select" )
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 663, column 49
    function valueRange_360 () : java.lang.Object {
      return condition.Coverable.ClauseCategories
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 682, column 53
    function valueRange_368 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 647, column 43
    function valueRoot_342 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 647, column 43
    function value_340 () : java.lang.String {
      return condition.Name
    }
    
    // 'value' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 653, column 87
    function value_347 () : java.lang.String {
      return DisplayKey.get( "Web.APDCoverableCV.EditTerms" )
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 663, column 49
    function value_357 () : APDClauseCategory {
      return condition.ClauseCategory
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 682, column 53
    function value_367 () : APDDataExistenceType {
      return condition.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_OPTIONAL
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 690, column 36
    function value_374 () : java.lang.String {
      return condition.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 696, column 50
    function value_378 () : java.lang.String {
      return condition.Description
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 703, column 44
    function value_384 () : java.lang.String {
      return condition.CodeIdentifier
    }
    
    // 'value' attribute on ButtonCell (id=MoveButton_Cell) at APDCoverableCV.pcf: line 709, column 92
    function value_396 () : java.lang.String {
      return DisplayKey.get( "Web.APDProductScreen.APDField.Move" )
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 663, column 49
    function verifyValueRangeIsAllowedType_361 ($$arg :  APDClauseCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 663, column 49
    function verifyValueRangeIsAllowedType_361 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 663, column 49
    function verifyValueRangeIsAllowedType_361 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 682, column 53
    function verifyValueRangeIsAllowedType_369 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 682, column 53
    function verifyValueRangeIsAllowedType_369 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 682, column 53
    function verifyValueRangeIsAllowedType_369 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 663, column 49
    function verifyValueRange_362 () : void {
      var __valueRangeArg = condition.Coverable.ClauseCategories
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_361(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 682, column 53
    function verifyValueRange_370 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_369(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 703, column 44
    function visible_387 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get condition () : APDCondition {
      return getIteratedValue(2) as APDCondition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends APDCoverableCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 770, column 37
    function action_410 () : void {
      APDCoverablePopup.push(child, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 770, column 37
    function action_dest_411 () : pcf.api.Destination {
      return pcf.APDCoverablePopup.createDestination(child, openForEdit)
    }
    
    // 'value' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 770, column 37
    function valueRoot_413 () : java.lang.Object {
      return child
    }
    
    // 'value' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 770, column 37
    function value_412 () : java.lang.String {
      return child.Name
    }
    
    // 'value' attribute on TextCell (id=childDescription_Cell) at APDCoverableCV.pcf: line 774, column 44
    function value_415 () : java.lang.String {
      return child.Description
    }
    
    property get child () : APDCoverable {
      return getIteratedValue(1) as APDCoverable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 158, column 36
    function action_105 () : void {
      APDTagPopup.push(field, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDCoverableCV.pcf: line 204, column 96
    function action_138 () : void {
      field.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDCoverableCV.pcf: line 209, column 98
    function action_140 () : void {
      field.moveDown()
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDCoverableCV.pcf: line 92, column 44
    function action_24 () : void {
      APDDropDownDefinitionPopup.push(field, false, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 126, column 53
    function action_46 () : void {
      APDAttributeRulePopup.push(field.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)), field, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 158, column 36
    function action_dest_106 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(field, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDCoverableCV.pcf: line 92, column 44
    function action_dest_25 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(field, false, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 126, column 53
    function action_dest_47 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(field.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)), field, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDCoverableCV.pcf: line 204, column 96
    function available_137 () : java.lang.Boolean {
      return field.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDCoverableCV.pcf: line 209, column 98
    function available_139 () : java.lang.Boolean {
      return field.Sequence != coverable.Fields.Count
    }
    
    // 'available' attribute on CheckBoxCell (id=Identifier_Cell) at APDCoverableCV.pcf: line 107, column 45
    function available_33 () : java.lang.Boolean {
      return APDFieldType.TF_IDENTIFIERTYPES.TypeKeys.hasMatch(\tk -> tk == field.Type)
    }
    
    // 'condition' attribute on ToolbarFlag at APDCoverableCV.pcf: line 76, column 35
    function condition_17 () : java.lang.Boolean {
      return not field.Jurisdiction
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_onEnter_101 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_onEnter_53 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_onEnter_55 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_onEnter_57 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_onEnter_59 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_onEnter_61 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_onEnter_63 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_onEnter_65 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_onEnter_67 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_onEnter_70 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_onEnter_72 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_onEnter_74 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_onEnter_76 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_onEnter_78 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_onEnter_80 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_onEnter_82 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_onEnter_84 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_onEnter_87 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_onEnter_89 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_onEnter_91 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_onEnter_93 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_onEnter_95 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_onEnter_97 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_onEnter_99 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_refreshVariables_100 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_refreshVariables_102 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_refreshVariables_54 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_refreshVariables_56 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_refreshVariables_58 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_refreshVariables_60 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_refreshVariables_62 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_refreshVariables_64 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_refreshVariables_66 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function def_refreshVariables_68 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_refreshVariables_71 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_refreshVariables_73 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_refreshVariables_75 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_refreshVariables_77 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_refreshVariables_79 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_refreshVariables_81 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_refreshVariables_83 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function def_refreshVariables_85 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_refreshVariables_88 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_refreshVariables_90 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_refreshVariables_92 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_refreshVariables_94 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_refreshVariables_96 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function def_refreshVariables_98 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, openForEdit)
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDCoverableCV.pcf: line 164, column 54
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.SplitByRatingPeriods = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDCoverableCV.pcf: line 174, column 50
    function defaultSetter_117 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Scalable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at APDCoverableCV.pcf: line 180, column 43
    function defaultSetter_121 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Category = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 186, column 46
    function defaultSetter_126 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 193, column 44
    function defaultSetter_132 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDCoverableCV.pcf: line 84, column 40
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDCoverableCV.pcf: line 92, column 44
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDCoverableCV.pcf: line 107, column 45
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Identifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableCV.pcf: line 115, column 67
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Jurisdiction = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 186, column 46
    function label_124 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 193, column 44
    function label_130 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'mode' attribute on ModalCellRef (id=MaximumValue) at APDCoverableCV.pcf: line 150, column 37
    function mode_103 () : java.lang.Object {
      return field.getUIRuleMode(APDRuleType.TC_MAX)
    }
    
    // 'mode' attribute on ModalCellRef (id=DefaultValue) at APDCoverableCV.pcf: line 134, column 37
    function mode_69 () : java.lang.Object {
      return field.getUIRuleMode(APDRuleType.TC_DEFAULT)
    }
    
    // 'mode' attribute on ModalCellRef (id=MinimumValue) at APDCoverableCV.pcf: line 142, column 37
    function mode_86 () : java.lang.Object {
      return field.getUIRuleMode(APDRuleType.TC_MIN)
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableCV.pcf: line 166, column 99
    function onChange_110 () : void {
      if (field.SplitByRatingPeriods == false) {field.Scalable = false}
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableCV.pcf: line 94, column 131
    function onChange_22 () : void {
      field.DropDownType = (field.Type == APDFieldType.TC_TYPEKEY) ? APDDropDownType.TC_TYPELIST : null
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableCV.pcf: line 117, column 61
    function onChange_39 () : void {
      field.autoSetRiskLocation()
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 126, column 53
    function valueRange_49 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDCoverableCV.pcf: line 84, column 40
    function valueRoot_20 () : java.lang.Object {
      return field
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 158, column 36
    function value_107 () : java.lang.String {
      return field.TagDisplayValue
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDCoverableCV.pcf: line 164, column 54
    function value_111 () : java.lang.Boolean {
      return field.SplitByRatingPeriods
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDCoverableCV.pcf: line 174, column 50
    function value_116 () : java.lang.Boolean {
      return field.Scalable
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at APDCoverableCV.pcf: line 180, column 43
    function value_120 () : java.lang.String {
      return field.Category
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 186, column 46
    function value_125 () : java.lang.String {
      return field.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 193, column 44
    function value_131 () : java.lang.String {
      return field.Name
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDCoverableCV.pcf: line 84, column 40
    function value_18 () : java.lang.String {
      return field.Label
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDCoverableCV.pcf: line 92, column 44
    function value_27 () : APDFieldType {
      return field.Type
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDCoverableCV.pcf: line 107, column 45
    function value_34 () : java.lang.Boolean {
      return field.Identifier
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableCV.pcf: line 115, column 67
    function value_41 () : java.lang.Boolean {
      return field.Jurisdiction
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 126, column 53
    function value_48 () : APDDataExistenceType {
      return field.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)).DefaultExistence ?: APDDataExistenceType.TC_CAPTURED
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 126, column 53
    function verifyValueRangeIsAllowedType_50 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 126, column 53
    function verifyValueRangeIsAllowedType_50 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 126, column 53
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableCV.pcf: line 126, column 53
    function verifyValueRange_51 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=Type_Cell) at APDCoverableCV.pcf: line 92, column 44
    function verifyValueType_32 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueVisible' attribute on TextCell (id=Tags_Cell) at APDCoverableCV.pcf: line 158, column 36
    function visible_104 () : java.lang.Boolean {
      return field.ShowDisplayValue
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Scalable_Cell) at APDCoverableCV.pcf: line 174, column 50
    function visible_115 () : java.lang.Boolean {
      return field.CanScale
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 193, column 44
    function visible_134 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDCoverableCV.pcf: line 92, column 44
    function visible_23 () : java.lang.Boolean {
      return field.Type == APDFieldType.TC_TYPEKEY
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableCV.pcf: line 115, column 67
    function visible_40 () : java.lang.Boolean {
      return field.Type == APDFieldType.TC_LOCATION
    }
    
    // 'visible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableCV.pcf: line 115, column 67
    function visible_44 () : java.lang.Boolean {
      return not (coverable typeis APDProductLine)
    }
    
    property get field () : APDField {
      return getIteratedValue(2) as APDField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel2ExpressionsImpl extends APDCoverableCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDCoverableCV.pcf: line 339, column 45
    function def_onEnter_202 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(exposureDetails, {"Name", "Description", "MenuLabel"}, {DisplayKey.get("Web.APDCoverableCV.APDExposure.Name"), DisplayKey.get("Web.APDCoverableCV.APDExposure.Description"), DisplayKey.get("Web.APDCoverableCV.APDExposure.MenuLabel")})
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDCoverableCV.pcf: line 339, column 45
    function def_refreshVariables_203 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(exposureDetails, {"Name", "Description", "MenuLabel"}, {DisplayKey.get("Web.APDCoverableCV.APDExposure.Name"), DisplayKey.get("Web.APDCoverableCV.APDExposure.Description"), DisplayKey.get("Web.APDCoverableCV.APDExposure.MenuLabel")})
    }
    
    // 'label' attribute on TextCell (id=MenuLabel_Cell) at APDCoverableCV.pcf: line 314, column 47
    function label_146 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.MenuLabel"))
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 320, column 49
    function label_147 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.Description"))
    }
    
    // 'label' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 327, column 44
    function label_148 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.TypeName"))
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ExposuresLV) at APDCoverableCV.pcf: line 251, column 41
    function toCreateAndAdd_199 () : APDExposure {
      return coverable.addExposure()
    }
    
    // 'toRemove' attribute on RowIterator (id=ExposuresLV) at APDCoverableCV.pcf: line 251, column 41
    function toRemove_200 (exposure :  APDExposure) : void {
      coverable.removeFromExposures(exposure)
    }
    
    // 'value' attribute on RowIterator (id=ExposuresLV) at APDCoverableCV.pcf: line 251, column 41
    function value_201 () : APDExposure[] {
      return coverable.Exposures
    }
    
    // 'visible' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 327, column 44
    function visible_149 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get exposureDetails () : APDExposure {
      return getCurrentSelection(1) as APDExposure
    }
    
    property set exposureDetails ($arg :  APDExposure) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel3ExpressionsImpl extends APDCoverableCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageCoverageCategories) at APDCoverableCV.pcf: line 358, column 29
    function action_205 () : void {
      APDManageClauseCategoriesPopup.push(coverable, openForEdit)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageCoverageCategories) at APDCoverableCV.pcf: line 358, column 29
    function action_dest_206 () : pcf.api.Destination {
      return pcf.APDManageClauseCategoriesPopup.createDestination(coverable, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=CoverageLocalizedValues) at APDCoverableCV.pcf: line 473, column 49
    function def_onEnter_265 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(coverageDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'def' attribute on PanelRef (id=CoverageLocalizedValues) at APDCoverableCV.pcf: line 473, column 49
    function def_refreshVariables_266 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(coverageDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'label' attribute on ToolbarButton (id=ManageCoverageCategories) at APDCoverableCV.pcf: line 358, column 29
    function label_207 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.ManageClauseCategoriesButton" )
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 435, column 49
    function label_209 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 442, column 44
    function label_210 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoverableCV.pcf: line 372, column 32
    function sortBy_208 (coverage :  APDCoverage) : java.lang.Object {
      return coverage.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=CoveragesLV) at APDCoverableCV.pcf: line 369, column 41
    function toCreateAndAdd_262 () : APDCoverage {
      return coverable.addCoverage(null)
    }
    
    // 'toRemove' attribute on RowIterator (id=CoveragesLV) at APDCoverableCV.pcf: line 369, column 41
    function toRemove_263 (coverage :  APDCoverage) : void {
      coverable.removeCoverage(coverage)
    }
    
    // 'value' attribute on RowIterator (id=CoveragesLV) at APDCoverableCV.pcf: line 369, column 41
    function value_264 () : APDCoverage[] {
      return coverable.Coverages
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 442, column 44
    function visible_211 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get coverageDetails () : APDCoverage {
      return getCurrentSelection(1) as APDCoverage
    }
    
    property set coverageDetails ($arg :  APDCoverage) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel4ExpressionsImpl extends APDCoverableCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageExclusionCategories) at APDCoverableCV.pcf: line 494, column 29
    function action_267 () : void {
      APDManageClauseCategoriesPopup.push(coverable, openForEdit)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageExclusionCategories) at APDCoverableCV.pcf: line 494, column 29
    function action_dest_268 () : pcf.api.Destination {
      return pcf.APDManageClauseCategoriesPopup.createDestination(coverable, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=ExclusionLocalizedValues) at APDCoverableCV.pcf: line 603, column 50
    function def_onEnter_327 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(exclusionDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'def' attribute on PanelRef (id=ExclusionLocalizedValues) at APDCoverableCV.pcf: line 603, column 50
    function def_refreshVariables_328 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(exclusionDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'label' attribute on ToolbarButton (id=ManageExclusionCategories) at APDCoverableCV.pcf: line 494, column 29
    function label_269 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.ManageClauseCategoriesButton" )
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 565, column 50
    function label_271 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 572, column 44
    function label_272 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoverableCV.pcf: line 508, column 32
    function sortBy_270 (exclusion :  APDExclusion) : java.lang.Object {
      return exclusion.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ExclusionsLV) at APDCoverableCV.pcf: line 505, column 42
    function toCreateAndAdd_324 () : APDExclusion {
      return coverable.addExclusion( null )
    }
    
    // 'toRemove' attribute on RowIterator (id=ExclusionsLV) at APDCoverableCV.pcf: line 505, column 42
    function toRemove_325 (exclusion :  APDExclusion) : void {
      coverable.removeExclusion( exclusion )
    }
    
    // 'value' attribute on RowIterator (id=ExclusionsLV) at APDCoverableCV.pcf: line 505, column 42
    function value_326 () : APDExclusion[] {
      return coverable.Exclusions
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 572, column 44
    function visible_273 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get exclusionDetails () : APDExclusion {
      return getCurrentSelection(1) as APDExclusion
    }
    
    property set exclusionDetails ($arg :  APDExclusion) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel5ExpressionsImpl extends APDCoverableCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageConditionCategories) at APDCoverableCV.pcf: line 624, column 29
    function action_330 () : void {
      APDManageClauseCategoriesPopup.push(coverable, openForEdit)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageConditionCategories) at APDCoverableCV.pcf: line 624, column 29
    function action_dest_331 () : pcf.api.Destination {
      return pcf.APDManageClauseCategoriesPopup.createDestination(coverable, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=ConditionLocalizedValues) at APDCoverableCV.pcf: line 734, column 50
    function def_onEnter_402 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter( conditionDetails, {"Name", "Description"}, {DisplayKey.get( "Web.APDCoverableCV.Name" ), DisplayKey.get( "Web.APDCoverableCV.Description" )})
    }
    
    // 'def' attribute on PanelRef (id=ConditionLocalizedValues) at APDCoverableCV.pcf: line 734, column 50
    function def_refreshVariables_403 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables( conditionDetails, {"Name", "Description"}, {DisplayKey.get( "Web.APDCoverableCV.Name" ), DisplayKey.get( "Web.APDCoverableCV.Description" )})
    }
    
    // 'label' attribute on ToolbarButton (id=ManageConditionCategories) at APDCoverableCV.pcf: line 624, column 29
    function label_332 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.ManageClauseCategoriesButton" )
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 647, column 43
    function label_334 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.Name" )
    }
    
    // 'label' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoverableCV.pcf: line 663, column 49
    function label_335 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.ClauseCategory" )
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 696, column 50
    function label_336 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get( "Web.APDCoverableCV.Description" ))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 703, column 44
    function label_337 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get( "Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix ))
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoverableCV.pcf: line 639, column 32
    function sortBy_333 (condition :  APDCondition) : java.lang.Object {
      return condition.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ConditionsLV) at APDCoverableCV.pcf: line 636, column 42
    function toCreateAndAdd_399 () : APDCondition {
      return coverable.addCondition( null )
    }
    
    // 'toRemove' attribute on RowIterator (id=ConditionsLV) at APDCoverableCV.pcf: line 636, column 42
    function toRemove_400 (condition :  APDCondition) : void {
      coverable.removeCondition( condition )
    }
    
    // 'value' attribute on RowIterator (id=ConditionsLV) at APDCoverableCV.pcf: line 636, column 42
    function value_401 () : APDCondition[] {
      return coverable.Conditions
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoverableCV.pcf: line 703, column 44
    function visible_338 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get conditionDetails () : APDCondition {
      return getCurrentSelection(1) as APDCondition
    }
    
    property set conditionDetails ($arg :  APDCondition) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDCoverableCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=FieldLocalizedValues) at APDCoverableCV.pcf: line 224, column 46
    function def_onEnter_144 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(fieldDetails, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'def' attribute on PanelRef (id=FieldLocalizedValues) at APDCoverableCV.pcf: line 224, column 46
    function def_refreshVariables_145 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(fieldDetails, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 186, column 46
    function label_14 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 193, column 44
    function label_15 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoverableCV.pcf: line 73, column 32
    function sortBy_12 (field :  APDField) : java.lang.Object {
      return field.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=FieldsLV) at APDCoverableCV.pcf: line 70, column 38
    function toCreateAndAdd_141 () : APDField {
      return coverable.createAndAddField()
    }
    
    // 'toRemove' attribute on RowIterator (id=FieldsLV) at APDCoverableCV.pcf: line 70, column 38
    function toRemove_142 (field :  APDField) : void {
      coverable.removeField(field)
    }
    
    // 'value' attribute on RowIterator (id=FieldsLV) at APDCoverableCV.pcf: line 70, column 38
    function value_143 () : APDField[] {
      return coverable.Fields
    }
    
    // 'visible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableCV.pcf: line 115, column 67
    function visible_13 () : java.lang.Boolean {
      return not (coverable typeis APDProductLine)
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 193, column 44
    function visible_16 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get fieldDetails () : APDField {
      return getCurrentSelection(1) as APDField
    }
    
    property set fieldDetails ($arg :  APDField) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}