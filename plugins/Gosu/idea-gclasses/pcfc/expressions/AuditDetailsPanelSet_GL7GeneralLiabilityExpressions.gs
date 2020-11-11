package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditDetailsPanelSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditDetailsPanelSet_GL7GeneralLiabilityExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditDetailsPanelSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 14, column 62
    function initialValue_0 () : gw.lob.gl7.presenters.GL7AuditDetailsPresenter {
      return gw.lob.gl7.presenters.GL7AuditDetailsPresenter.forLine(policyPeriod.GL7Line)
    }
    
    // 'value' attribute on PanelIterator at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 18, column 110
    function value_69 () : java.util.List<gw.lob.gl7.presenters.GL7AuditDetailsPresenter.JurisdictionPresenter> {
      return auditDetailsPresenter.JurisdictionPresenters
    }
    
    property get auditDetailsPresenter () : gw.lob.gl7.presenters.GL7AuditDetailsPresenter {
      return getVariableValue("auditDetailsPresenter", 0) as gw.lob.gl7.presenters.GL7AuditDetailsPresenter
    }
    
    property set auditDetailsPresenter ($arg :  gw.lob.gl7.presenters.GL7AuditDetailsPresenter) {
      setVariableValue("auditDetailsPresenter", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditDetailsPanelSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AuditedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 78, column 86
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposurePresenter.AuditedExposureAmount = (__VALUE_TO_SET as java.lang.Long)
    }
    
    // 'value' attribute on TextCell (id=AuditedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 91, column 99
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposurePresenter.AuditedProdsCompltdOpsExposureAmount = (__VALUE_TO_SET as java.lang.Long)
    }
    
    // 'editable' attribute on TextCell (id=AuditedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 91, column 99
    function editable_57 () : java.lang.Boolean {
      return exposurePresenter.CanEditAuditedProductsCompletedOpsExposure
    }
    
    // 'label' attribute on TextCell (id=EstimatedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 71, column 86
    function label_38 () : java.lang.Object {
      return sublinePresenter.GenericExposureColumns.EstimatedLabel
    }
    
    // 'label' attribute on TextCell (id=AuditedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 78, column 86
    function label_44 () : java.lang.Object {
      return sublinePresenter.GenericExposureColumns.AuditedLabel
    }
    
    // 'label' attribute on TextCell (id=EstimatedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 84, column 99
    function label_51 () : java.lang.Object {
      return sublinePresenter.ProductsCompletedOpsExposureColumns.EstimatedLabel
    }
    
    // 'label' attribute on TextCell (id=AuditedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 91, column 99
    function label_58 () : java.lang.Object {
      return sublinePresenter.ProductsCompletedOpsExposureColumns.AuditedLabel
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 45, column 77
    function valueRoot_21 () : java.lang.Object {
      return exposurePresenter.LocationWM
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 49, column 64
    function valueRoot_24 () : java.lang.Object {
      return exposurePresenter
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 45, column 77
    function value_20 () : java.lang.String {
      return exposurePresenter.LocationWM.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 49, column 64
    function value_23 () : java.lang.String {
      return exposurePresenter.ClassCode
    }
    
    // 'value' attribute on TextCell (id=ClassDescription_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 53, column 71
    function value_26 () : java.lang.String {
      return exposurePresenter.ClassDescription
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 57, column 68
    function value_29 () : java.util.Date {
      return exposurePresenter.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 61, column 69
    function value_32 () : java.util.Date {
      return exposurePresenter.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=PremiumBasis_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 65, column 67
    function value_35 () : java.lang.String {
      return exposurePresenter.PremiumBasis
    }
    
    // 'value' attribute on TextCell (id=EstimatedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 71, column 86
    function value_39 () : java.lang.Long {
      return exposurePresenter.ExposureAmount
    }
    
    // 'value' attribute on TextCell (id=AuditedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 78, column 86
    function value_45 () : java.lang.Long {
      return exposurePresenter.AuditedExposureAmount
    }
    
    // 'value' attribute on TextCell (id=EstimatedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 84, column 99
    function value_52 () : java.lang.Long {
      return exposurePresenter.ProdsCompltdOpsExposureAmount
    }
    
    // 'value' attribute on TextCell (id=AuditedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 91, column 99
    function value_59 () : java.lang.Long {
      return exposurePresenter.AuditedProdsCompltdOpsExposureAmount
    }
    
    // 'visible' attribute on TextCell (id=EstimatedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 71, column 86
    function visible_41 () : java.lang.Boolean {
      return sublinePresenter.GenericExposureColumns.Visible
    }
    
    // 'visible' attribute on TextCell (id=EstimatedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 84, column 99
    function visible_54 () : java.lang.Boolean {
      return sublinePresenter.ProductsCompletedOpsExposureColumns.Visible
    }
    
    property get exposurePresenter () : gw.lob.gl7.presenters.GL7ExposurePresenter {
      return getIteratedValue(3) as gw.lob.gl7.presenters.GL7ExposurePresenter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditDetailsPanelSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=AuditedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 78, column 86
    function label_11 () : java.lang.Object {
      return sublinePresenter.GenericExposureColumns.AuditedLabel
    }
    
    // 'label' attribute on TextCell (id=EstimatedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 84, column 99
    function label_14 () : java.lang.Object {
      return sublinePresenter.ProductsCompletedOpsExposureColumns.EstimatedLabel
    }
    
    // 'label' attribute on TextCell (id=AuditedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 91, column 99
    function label_17 () : java.lang.Object {
      return sublinePresenter.ProductsCompletedOpsExposureColumns.AuditedLabel
    }
    
    // 'label' attribute on ListViewInput at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 33, column 37
    function label_67 () : java.lang.String {
      return sublinePresenter.SublineName
    }
    
    // 'label' attribute on TextCell (id=EstimatedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 71, column 86
    function label_8 () : java.lang.Object {
      return sublinePresenter.GenericExposureColumns.EstimatedLabel
    }
    
    // 'value' attribute on TextCell (id=AuditedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 78, column 86
    function sortValue_12 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.AuditedExposureAmount
    }
    
    // 'value' attribute on TextCell (id=EstimatedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 84, column 99
    function sortValue_15 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ProdsCompltdOpsExposureAmount
    }
    
    // 'value' attribute on TextCell (id=AuditedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 91, column 99
    function sortValue_18 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.AuditedProdsCompltdOpsExposureAmount
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 45, column 77
    function sortValue_2 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.LocationWM.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 49, column 64
    function sortValue_3 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ClassCode
    }
    
    // 'value' attribute on TextCell (id=ClassDescription_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 53, column 71
    function sortValue_4 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ClassDescription
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 57, column 68
    function sortValue_5 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 61, column 69
    function sortValue_6 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=PremiumBasis_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 65, column 67
    function sortValue_7 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.PremiumBasis
    }
    
    // 'value' attribute on TextCell (id=EstimatedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 71, column 86
    function sortValue_9 (exposurePresenter :  gw.lob.gl7.presenters.GL7ExposurePresenter) : java.lang.Object {
      return exposurePresenter.ExposureAmount
    }
    
    // 'value' attribute on RowIterator at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 40, column 100
    function value_66 () : java.util.List<gw.lob.gl7.presenters.GL7ExposurePresenter> {
      return sublinePresenter.ExposurePresenters
    }
    
    // 'visible' attribute on TextCell (id=EstimatedExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 71, column 86
    function visible_10 () : java.lang.Boolean {
      return sublinePresenter.GenericExposureColumns.Visible
    }
    
    // 'visible' attribute on TextCell (id=EstimatedProductsCompletedOpsExposure_Cell) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 84, column 99
    function visible_16 () : java.lang.Boolean {
      return sublinePresenter.ProductsCompletedOpsExposureColumns.Visible
    }
    
    property get sublinePresenter () : gw.lob.gl7.presenters.GL7AuditDetailsPresenter.SublineTypePresenter {
      return getIteratedValue(2) as gw.lob.gl7.presenters.GL7AuditDetailsPresenter.SublineTypePresenter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditDetailsPanelSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends AuditDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'title' attribute on TitleBar (id=JurisdictionTitle) at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 22, column 59
    function title_1 () : java.lang.String {
      return jurisdictionPresenter.JurisdictionName
    }
    
    // 'value' attribute on PanelIterator at AuditDetailsPanelSet.GL7GeneralLiability.pcf: line 27, column 115
    function value_68 () : java.util.List<gw.lob.gl7.presenters.GL7AuditDetailsPresenter.SublineTypePresenter> {
      return jurisdictionPresenter.SublineTypePresenters
    }
    
    property get jurisdictionPresenter () : gw.lob.gl7.presenters.GL7AuditDetailsPresenter.JurisdictionPresenter {
      return getIteratedValue(1) as gw.lob.gl7.presenters.GL7AuditDetailsPresenter.JurisdictionPresenter
    }
    
    
  }
  
  
}