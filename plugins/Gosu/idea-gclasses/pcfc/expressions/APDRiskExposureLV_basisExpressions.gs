package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskExposureLV_basisExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskExposureLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDRiskExposureLV.basis.pcf: line 17, column 33
    function initialValue_0 () : APDRiskExposure[] {
      return riskCoverable.RiskExposuresWM.where(\re -> re.Exposure == exposure)
    }
    
    // 'initialValue' attribute on Variable at APDRiskExposureLV.basis.pcf: line 21, column 23
    function initialValue_1 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().canDesign()
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskExposureLV.basis.pcf: line 44, column 26
    function sortBy_4 (exposureHeading :  APDExposureField) : java.lang.Object {
      return exposureHeading.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=riskExposureLV) at APDRiskExposureLV.basis.pcf: line 86, column 37
    function toCreateAndAdd_60 () : APDRiskExposure {
      return exposure.buildRiskExposureWM(riskCoverable)
    }
    
    // 'toRemove' attribute on RowIterator (id=riskExposureLV) at APDRiskExposureLV.basis.pcf: line 86, column 37
    function toRemove_61 (riskExposure :  APDRiskExposure) : void {
      riskCoverable.removeExposureWM(riskExposure)
    }
    
    // 'value' attribute on CellIterator (id=exposureHeading) at APDRiskExposureLV.basis.pcf: line 41, column 40
    function value_22 () : APDExposureField[] {
      return exposure.Fields
    }
    
    // 'value' attribute on RowIterator (id=riskExposureLV) at APDRiskExposureLV.basis.pcf: line 86, column 37
    function value_62 () : APDRiskExposure[] {
      return riskExposures
    }
    
    // 'visible' attribute on TextCell (id=EffectiveDate_Cell) at APDRiskExposureLV.basis.pcf: line 32, column 65
    function visible_2 () : java.lang.Boolean {
      return riskCoverable.Branch.Job typeis PolicyChange
    }
    
    property get canDesign () : Boolean {
      return getVariableValue("canDesign", 0) as Boolean
    }
    
    property set canDesign ($arg :  Boolean) {
      setVariableValue("canDesign", 0, $arg)
    }
    
    property get exposure () : APDExposure {
      return getRequireValue("exposure", 0) as APDExposure
    }
    
    property set exposure ($arg :  APDExposure) {
      setRequireValue("exposure", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getRequireValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setRequireValue("riskCoverable", 0, $arg)
    }
    
    property get riskExposures () : APDRiskExposure[] {
      return getVariableValue("riskExposures", 0) as APDRiskExposure[]
    }
    
    property set riskExposures ($arg :  APDRiskExposure[]) {
      setVariableValue("riskExposures", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends APDRiskExposureLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskExposureLV.basis.pcf: line 105, column 28
    function sortBy_31 (exposureField :  APDExposureField) : java.lang.Object {
      return exposureField.Sequence
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.basis.pcf: line 92, column 67
    function valueRoot_24 () : java.lang.Object {
      return riskExposure
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.basis.pcf: line 92, column 67
    function value_23 () : java.util.Date {
      return riskExposure.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpiryDate_Cell) at APDRiskExposureLV.basis.pcf: line 97, column 67
    function value_27 () : java.util.Date {
      return riskExposure.ExpirationDate
    }
    
    // 'value' attribute on CellIterator (id=exposureFields) at APDRiskExposureLV.basis.pcf: line 102, column 42
    function value_59 () : APDExposureField[] {
      return exposure.Fields
    }
    
    // 'visible' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.basis.pcf: line 92, column 67
    function visible_25 () : java.lang.Boolean {
      return riskCoverable.Branch.Job typeis PolicyChange
    }
    
    property get riskExposure () : APDRiskExposure {
      return getIteratedValue(1) as APDRiskExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_33 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_35 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_37 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_39 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_41 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_43 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_45 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_47 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_49 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_51 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_53 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_onEnter_55 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_34 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_36 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_38 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_40 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_42 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_44 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_46 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_48 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_50 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_52 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_54 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function def_refreshVariables_56 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function mode_57 () : java.lang.Object {
      return exposureField.Type
    }
    
    // 'visible' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 111, column 174
    function visible_32 () : java.lang.Boolean {
      return not (exposureField.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence == APDDataExistenceType.TC_HIDDEN) or canDesign
    }
    
    property get exposureField () : APDExposureField {
      return getIteratedValue(2) as APDExposureField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskExposureLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=RemoveField) at APDRiskExposureLV.basis.pcf: line 71, column 109
    function action_12 () : void {
      exposure.removeField(exposureHeading, riskCoverable)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskExposureLV.basis.pcf: line 57, column 103
    function action_6 () : void {
      exposureHeading.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposure)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskExposureLV.basis.pcf: line 62, column 105
    function action_8 () : void {
      exposureHeading.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposure)
    }
    
    // 'action' attribute on MenuItem (id=EditField) at APDRiskExposureLV.basis.pcf: line 66, column 100
    function action_9 () : void {
      APDExposureFieldPopup.push(exposureHeading, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=EditField) at APDRiskExposureLV.basis.pcf: line 66, column 100
    function action_dest_10 () : pcf.api.Destination {
      return pcf.APDExposureFieldPopup.createDestination(exposureHeading, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskExposureLV.basis.pcf: line 57, column 103
    function available_5 () : java.lang.Boolean {
      return exposureHeading.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskExposureLV.basis.pcf: line 62, column 105
    function available_7 () : java.lang.Boolean {
      return exposureHeading.Sequence != exposureHeading.Exposure.Fields.Count
    }
    
    // 'def' attribute on MenuItemSetRef at APDRiskExposureLV.basis.pcf: line 73, column 79
    function def_onEnter_13 (def :  pcf.APDRiskJurisdictionMenuItemSet) : void {
      def.onEnter(exposureHeading, canDesign)
    }
    
    // 'def' attribute on MenuItemSetRef at APDRiskExposureLV.basis.pcf: line 73, column 79
    function def_refreshVariables_14 (def :  pcf.APDRiskJurisdictionMenuItemSet) : void {
      def.refreshVariables(exposureHeading, canDesign)
    }
    
    // 'value' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 52, column 23
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposureHeading.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 52, column 23
    function editable_15 () : java.lang.Boolean {
      return canDesign
    }
    
    // 'value' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 52, column 23
    function valueRoot_18 () : java.lang.Object {
      return exposureHeading
    }
    
    // 'value' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 52, column 23
    function value_16 () : java.lang.String {
      return exposureHeading.Label
    }
    
    // 'visible' attribute on MenuItem (id=RemoveField) at APDRiskExposureLV.basis.pcf: line 71, column 109
    function visible_11 () : java.lang.Boolean {
      return not(exposureHeading.Type == APDFieldType.TC_PARTY and exposureHeading.ExposureParty)
    }
    
    // 'visible' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 52, column 23
    function visible_20 () : java.lang.Boolean {
      return not (exposureHeading.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence == APDDataExistenceType.TC_HIDDEN) or canDesign
    }
    
    property get exposureHeading () : APDExposureField {
      return getIteratedValue(1) as APDExposureField
    }
    
    
  }
  
  
}