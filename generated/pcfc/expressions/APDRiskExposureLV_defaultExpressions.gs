package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskExposureLV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskExposureLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDRiskExposureLV.default.pcf: line 18, column 33
    function initialValue_0 () : APDRiskExposure[] {
      return riskCoverable.RiskExposuresInPeriod.where(\riskExposure -> riskExposure.Exposure == exposure)
    }
    
    // 'initialValue' attribute on Variable at APDRiskExposureLV.default.pcf: line 22, column 23
    function initialValue_1 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().canDesign()
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskExposureLV.default.pcf: line 49, column 26
    function sortBy_4 (exposureHeading :  APDExposureField) : java.lang.Object {
      return exposureHeading.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=riskExposureLV) at APDRiskExposureLV.default.pcf: line 92, column 37
    function toCreateAndAdd_105 () : APDRiskExposure {
      return exposure.buildRiskExposure(riskCoverable)
    }
    
    // 'toRemove' attribute on RowIterator (id=riskExposureLV) at APDRiskExposureLV.default.pcf: line 92, column 37
    function toRemove_106 (riskExposure :  APDRiskExposure) : void {
      riskCoverable.removeExposure(riskExposure)
    }
    
    // 'value' attribute on RowIterator (id=riskExposureLV) at APDRiskExposureLV.default.pcf: line 92, column 37
    function value_107 () : APDRiskExposure[] {
      return riskExposures
    }
    
    // 'value' attribute on CellIterator (id=exposureHeading) at APDRiskExposureLV.default.pcf: line 46, column 40
    function value_23 () : APDExposureField[] {
      return exposure.Fields
    }
    
    // 'visible' attribute on TextCell (id=EffectiveDateHeading_Cell) at APDRiskExposureLV.default.pcf: line 35, column 49
    function visible_2 () : java.lang.Boolean {
      return exposure.HasSplittableFields
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
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends APDRiskExposureLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskExposureLV.default.pcf: line 110, column 28
    function sortBy_32 (exposureField :  APDExposureField) : java.lang.Object {
      return exposureField.Sequence
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.default.pcf: line 98, column 51
    function valueRoot_25 () : java.lang.Object {
      return riskExposure
    }
    
    // 'value' attribute on RowIterator (id=riskExposureVersionsLV) at APDRiskExposureLV.default.pcf: line 126, column 39
    function value_104 () : APDRiskExposure[] {
      return riskExposure.AdditionalVersions.cast(APDRiskExposure)
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.default.pcf: line 98, column 51
    function value_24 () : java.util.Date {
      return riskExposure.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at APDRiskExposureLV.default.pcf: line 102, column 51
    function value_28 () : java.util.Date {
      return riskExposure.ExpirationDate
    }
    
    // 'value' attribute on CellIterator (id=exposureField) at APDRiskExposureLV.default.pcf: line 107, column 42
    function value_63 () : APDExposureField[] {
      return exposure.Fields
    }
    
    // 'visible' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.default.pcf: line 98, column 51
    function visible_26 () : java.lang.Boolean {
      return exposure.HasSplittableFields
    }
    
    property get riskExposure () : APDRiskExposure {
      return getIteratedValue(1) as APDRiskExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_35 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_37 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_39 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_41 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_43 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_45 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_47 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_49 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_51 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_53 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_55 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_onEnter_57 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_36 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_38 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_40 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_42 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_44 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_46 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_48 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_50 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_52 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_54 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_56 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function def_refreshVariables_58 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function editable_33 () : java.lang.Boolean {
      return riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField).Availability == APDDataExistenceType.TC_CAPTURED
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function mode_59 () : java.lang.Object {
      return exposureField.CellMode
    }
    
    // 'visible' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 116, column 174
    function visible_34 () : java.lang.Boolean {
      return not (exposureField.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence == APDDataExistenceType.TC_HIDDEN) or canDesign
    }
    
    property get exposureField () : APDExposureField {
      return getIteratedValue(2) as APDExposureField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskExposureLV.default.pcf: line 143, column 30
    function sortBy_72 (exposureField :  APDExposureField) : java.lang.Object {
      return exposureField.Sequence
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.default.pcf: line 131, column 53
    function valueRoot_65 () : java.lang.Object {
      return riskExposureVersion
    }
    
    // 'value' attribute on CellIterator (id=exposureField) at APDRiskExposureLV.default.pcf: line 140, column 44
    function value_103 () : APDExposureField[] {
      return exposure.Fields
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.default.pcf: line 131, column 53
    function value_64 () : java.util.Date {
      return riskExposureVersion.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at APDRiskExposureLV.default.pcf: line 135, column 53
    function value_68 () : java.util.Date {
      return riskExposureVersion.ExpirationDate
    }
    
    // 'visible' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.default.pcf: line 131, column 53
    function visible_66 () : java.lang.Boolean {
      return exposure.HasSplittableFields
    }
    
    property get riskExposureVersion () : APDRiskExposure {
      return getIteratedValue(2) as APDRiskExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends IteratorEntry4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_75 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_77 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_79 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_81 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_83 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_85 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_87 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_89 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_91 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_93 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_95 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_onEnter_97 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_76 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_78 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_80 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_82 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_84 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_86 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_88 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_90 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_92 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_94 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_96 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function def_refreshVariables_98 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskExposureVersion.Fields.firstWhere(\t -> t.Attribute == exposureField))
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function editable_73 () : java.lang.Boolean {
      return exposureField.SplitByRatingPeriods
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function mode_99 () : java.lang.Object {
      return exposureField.CellMode
    }
    
    // 'visible' attribute on ModalCellRef (id=value) at APDRiskExposureLV.default.pcf: line 149, column 176
    function visible_74 () : java.lang.Boolean {
      return not (exposureField.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence == APDDataExistenceType.TC_HIDDEN) or canDesign
    }
    
    property get exposureField () : APDExposureField {
      return getIteratedValue(3) as APDExposureField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskExposureLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=RemoveField) at APDRiskExposureLV.default.pcf: line 77, column 109
    function action_13 () : void {
      exposure.removeField(exposureHeading, riskCoverable)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskExposureLV.default.pcf: line 62, column 103
    function action_6 () : void {
      exposureHeading.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposure)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskExposureLV.default.pcf: line 67, column 105
    function action_8 () : void {
      exposureHeading.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposure)
    }
    
    // 'action' attribute on MenuItem (id=EditField) at APDRiskExposureLV.default.pcf: line 71, column 100
    function action_9 () : void {
      APDExposureFieldPopup.push(exposureHeading, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=EditField) at APDRiskExposureLV.default.pcf: line 71, column 100
    function action_dest_10 () : pcf.api.Destination {
      return pcf.APDExposureFieldPopup.createDestination(exposureHeading, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=RemoveField) at APDRiskExposureLV.default.pcf: line 77, column 109
    function available_11 () : java.lang.Boolean {
      return not exposureHeading.Jurisdiction
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskExposureLV.default.pcf: line 62, column 103
    function available_5 () : java.lang.Boolean {
      return exposureHeading.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskExposureLV.default.pcf: line 67, column 105
    function available_7 () : java.lang.Boolean {
      return exposureHeading.Sequence != exposureHeading.Exposure.Fields.Count
    }
    
    // 'def' attribute on MenuItemSetRef at APDRiskExposureLV.default.pcf: line 79, column 79
    function def_onEnter_14 (def :  pcf.APDRiskJurisdictionMenuItemSet) : void {
      def.onEnter(exposureHeading, canDesign)
    }
    
    // 'def' attribute on MenuItemSetRef at APDRiskExposureLV.default.pcf: line 79, column 79
    function def_refreshVariables_15 (def :  pcf.APDRiskJurisdictionMenuItemSet) : void {
      def.refreshVariables(exposureHeading, canDesign)
    }
    
    // 'value' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.default.pcf: line 57, column 23
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposureHeading.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.default.pcf: line 57, column 23
    function editable_16 () : java.lang.Boolean {
      return canDesign
    }
    
    // 'value' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.default.pcf: line 57, column 23
    function valueRoot_19 () : java.lang.Object {
      return exposureHeading
    }
    
    // 'value' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.default.pcf: line 57, column 23
    function value_17 () : java.lang.String {
      return exposureHeading.Label
    }
    
    // 'visible' attribute on MenuItem (id=RemoveField) at APDRiskExposureLV.default.pcf: line 77, column 109
    function visible_12 () : java.lang.Boolean {
      return not(exposureHeading.Type == APDFieldType.TC_PARTY and exposureHeading.ExposureParty)
    }
    
    // 'visible' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.default.pcf: line 57, column 23
    function visible_21 () : java.lang.Boolean {
      return not (exposureHeading.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence == APDDataExistenceType.TC_HIDDEN) or canDesign
    }
    
    property get exposureHeading () : APDExposureField {
      return getIteratedValue(1) as APDExposureField
    }
    
    
  }
  
  
}