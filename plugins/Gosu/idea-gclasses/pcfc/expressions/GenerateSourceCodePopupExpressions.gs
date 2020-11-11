package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/GenerateSourceCodePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenerateSourceCodePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/GenerateSourceCodePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenerateSourceCodePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (product :  APDProduct, mode :  gw.apd.model.generate.ProductGeneratorHelper.GenerationMode) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=GenerateSourceCodePopup) at GenerateSourceCodePopup.pcf: line 13, column 81
    function afterCommit_17 (TopLocation :  pcf.api.Location) : void {
      TopLocation.commit(); TopLocation.startEditing()
    }
    
    // 'afterEnter' attribute on Popup (id=GenerateSourceCodePopup) at GenerateSourceCodePopup.pcf: line 13, column 81
    function afterEnter_18 () : void {
      helper.compareCheckSum(mode)
    }
    
    // 'beforeCommit' attribute on Popup (id=GenerateSourceCodePopup) at GenerateSourceCodePopup.pcf: line 13, column 81
    function beforeCommit_19 (pickedValue :  java.lang.Object) : void {
      helper.generateConfiguration(mode)
    }
    
    // RowTree at GenerateSourceCodePopup.pcf: line 50, column 38
    function containerLabel_16 (item :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'initialValue' attribute on Variable at GenerateSourceCodePopup.pcf: line 25, column 53
    function initialValue_0 () : gw.apd.model.generate.CheckSumManager {
      return new gw.apd.model.generate.CheckSumManager(new gw.apd.model.generate.GeneratorPathUtil().createCheckSumPath(product.CodeIdentifier.toLowerCase()))
    }
    
    // 'initialValue' attribute on Variable at GenerateSourceCodePopup.pcf: line 29, column 60
    function initialValue_1 () : gw.apd.model.generate.ProductGeneratorHelper {
      return new gw.apd.model.generate.ProductGeneratorHelper(product, checkSumManager)
    }
    
    // 'label' attribute on AlertBar (id=currencyMismatchAlert) at GenerateSourceCodePopup.pcf: line 41, column 55
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.APD.CurrencyMismatch.WarningMessage",helper.findFirstMulticurrencyMode())
    }
    
    // 'label' attribute on AlertBar (id=changesDetectionAlert) at GenerateSourceCodePopup.pcf: line 45, column 50
    function label_6 () : java.lang.Object {
      return helper.ModifiedFileWarning
    }
    
    // 'value' attribute on TextCell (id=ElementName_Cell) at GenerateSourceCodePopup.pcf: line 55, column 149
    function sortValue_7 (item :  gw.xml.XMLNode) : java.lang.Object {
      return {"WARNING","ERROR"}.contains(item.ElementName) ? "" : item.getAttributeValue("Type")
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GenerateSourceCodePopup.pcf: line 67, column 65
    function sortValue_8 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on RowTree at GenerateSourceCodePopup.pcf: line 50, column 38
    function value_15 () : java.lang.Object {
      return helper.ProductTree
    }
    
    // 'updateVisible' attribute on EditButtons at GenerateSourceCodePopup.pcf: line 36, column 146
    function visible_2 () : java.lang.Boolean {
      return (helper.ProductTree.Children.first().Data as gw.xml.XMLNode).getAttributeValue("Valid") == "true"
    }
    
    // 'visible' attribute on AlertBar (id=currencyMismatchAlert) at GenerateSourceCodePopup.pcf: line 41, column 55
    function visible_3 () : java.lang.Boolean {
      return helper.CurrencyDisplayModeMismatch
    }
    
    // 'visible' attribute on AlertBar (id=changesDetectionAlert) at GenerateSourceCodePopup.pcf: line 45, column 50
    function visible_5 () : java.lang.Boolean {
      return helper.HasModifiedFileWarning
    }
    
    override property get CurrentLocation () : pcf.GenerateSourceCodePopup {
      return super.CurrentLocation as pcf.GenerateSourceCodePopup
    }
    
    property get checkSumManager () : gw.apd.model.generate.CheckSumManager {
      return getVariableValue("checkSumManager", 0) as gw.apd.model.generate.CheckSumManager
    }
    
    property set checkSumManager ($arg :  gw.apd.model.generate.CheckSumManager) {
      setVariableValue("checkSumManager", 0, $arg)
    }
    
    property get helper () : gw.apd.model.generate.ProductGeneratorHelper {
      return getVariableValue("helper", 0) as gw.apd.model.generate.ProductGeneratorHelper
    }
    
    property set helper ($arg :  gw.apd.model.generate.ProductGeneratorHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get mode () : gw.apd.model.generate.ProductGeneratorHelper.GenerationMode {
      return getVariableValue("mode", 0) as gw.apd.model.generate.ProductGeneratorHelper.GenerationMode
    }
    
    property set mode ($arg :  gw.apd.model.generate.ProductGeneratorHelper.GenerationMode) {
      setVariableValue("mode", 0, $arg)
    }
    
    property get product () : APDProduct {
      return getVariableValue("product", 0) as APDProduct
    }
    
    property set product ($arg :  APDProduct) {
      setVariableValue("product", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/GenerateSourceCodePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends GenerateSourceCodePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=ValidityIcon_Cell) at GenerateSourceCodePopup.pcf: line 63, column 29
    function iconColor_12 () : gw.api.web.color.GWColor {
      return helper.getValidityIcon(item).Second
    }
    
    // 'icon' attribute on BooleanRadioCell (id=ValidityIcon_Cell) at GenerateSourceCodePopup.pcf: line 63, column 29
    function icon_11 () : java.lang.String {
      return helper.getValidityIcon(item).First
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GenerateSourceCodePopup.pcf: line 67, column 65
    function value_13 () : java.lang.String {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=ElementName_Cell) at GenerateSourceCodePopup.pcf: line 55, column 149
    function value_9 () : java.lang.String {
      return {"WARNING","ERROR"}.contains(item.ElementName) ? "" : item.getAttributeValue("Type")
    }
    
    property get item () : gw.xml.XMLNode {
      return getIteratedValue(1) as gw.xml.XMLNode
    }
    
    
  }
  
  
}