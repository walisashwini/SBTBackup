package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadXmindPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDLoadXmindPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadXmindPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDLoadXmindPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (existingProduct :  APDProduct) : int {
      return 1
    }
    
    static function __constructorIndex (account :  Account, selectionOfProducer :  ProducerSelection) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=APDLoadXmindPopup) at APDLoadXmindPopup.pcf: line 12, column 65
    function afterCommit_21 (TopLocation :  pcf.api.Location) : void {
      if (account != null) xMindHelper.NewProduct.createSubmission(account, selectionOfProducer)
    }
    
    // 'beforeCommit' attribute on Popup (id=APDLoadXmindPopup) at APDLoadXmindPopup.pcf: line 12, column 65
    function beforeCommit_22 (pickedValue :  java.lang.Object) : void {
      xMindHelper.buildProduct(defaultFieldsRequiredForCodegen)
    }
    
    // 'value' attribute on RangeInput (id=LocalLanguage_Input) at APDLoadXmindPopup.pcf: line 62, column 39
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      xMindHelper.LocalLanguage = (__VALUE_TO_SET as LanguageType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DefaultCodegenFields_Input) at APDLoadXmindPopup.pcf: line 69, column 38
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      defaultFieldsRequiredForCodegen = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on FileInput (id=fileInput_Input) at APDLoadXmindPopup.pcf: line 55, column 42
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      xMindHelper.ZipFile = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'initialValue' attribute on Variable at APDLoadXmindPopup.pcf: line 32, column 46
    function initialValue_0 () : gw.apd.xmind.XMindImportHelper {
      return new gw.apd.xmind.XMindImportHelper(existingProduct)
    }
    
    // 'initialValue' attribute on Variable at APDLoadXmindPopup.pcf: line 40, column 23
    function initialValue_1 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // EditButtons at APDLoadXmindPopup.pcf: line 43, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'validationExpression' attribute on FileInput (id=fileInput_Input) at APDLoadXmindPopup.pcf: line 55, column 42
    function validationExpression_3 () : java.lang.Object {
      return xMindHelper.validateXMindFile()
    }
    
    // 'valueRange' attribute on RangeInput (id=LocalLanguage_Input) at APDLoadXmindPopup.pcf: line 62, column 39
    function valueRange_12 () : java.lang.Object {
      return xMindHelper.LocalLanguageOptions
    }
    
    // 'value' attribute on FileInput (id=fileInput_Input) at APDLoadXmindPopup.pcf: line 55, column 42
    function valueRoot_6 () : java.lang.Object {
      return xMindHelper
    }
    
    // 'value' attribute on BooleanRadioInput (id=DefaultCodegenFields_Input) at APDLoadXmindPopup.pcf: line 69, column 38
    function value_17 () : java.lang.Boolean {
      return defaultFieldsRequiredForCodegen
    }
    
    // 'value' attribute on FileInput (id=fileInput_Input) at APDLoadXmindPopup.pcf: line 55, column 42
    function value_4 () : gw.api.web.WebFile {
      return xMindHelper.ZipFile
    }
    
    // 'value' attribute on RangeInput (id=LocalLanguage_Input) at APDLoadXmindPopup.pcf: line 62, column 39
    function value_9 () : LanguageType {
      return xMindHelper.LocalLanguage
    }
    
    // 'valueRange' attribute on RangeInput (id=LocalLanguage_Input) at APDLoadXmindPopup.pcf: line 62, column 39
    function verifyValueRangeIsAllowedType_13 ($$arg :  LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LocalLanguage_Input) at APDLoadXmindPopup.pcf: line 62, column 39
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LocalLanguage_Input) at APDLoadXmindPopup.pcf: line 62, column 39
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LocalLanguage_Input) at APDLoadXmindPopup.pcf: line 62, column 39
    function verifyValueRange_14 () : void {
      var __valueRangeArg = xMindHelper.LocalLanguageOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'visible' attribute on BooleanRadioInput (id=DefaultCodegenFields_Input) at APDLoadXmindPopup.pcf: line 69, column 38
    function visible_16 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    override property get CurrentLocation () : pcf.APDLoadXmindPopup {
      return super.CurrentLocation as pcf.APDLoadXmindPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get defaultFieldsRequiredForCodegen () : boolean {
      return getVariableValue("defaultFieldsRequiredForCodegen", 0) as java.lang.Boolean
    }
    
    property set defaultFieldsRequiredForCodegen ($arg :  boolean) {
      setVariableValue("defaultFieldsRequiredForCodegen", 0, $arg)
    }
    
    property get existingProduct () : APDProduct {
      return getVariableValue("existingProduct", 0) as APDProduct
    }
    
    property set existingProduct ($arg :  APDProduct) {
      setVariableValue("existingProduct", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get selectionOfProducer () : ProducerSelection {
      return getVariableValue("selectionOfProducer", 0) as ProducerSelection
    }
    
    property set selectionOfProducer ($arg :  ProducerSelection) {
      setVariableValue("selectionOfProducer", 0, $arg)
    }
    
    property get xMindHelper () : gw.apd.xmind.XMindImportHelper {
      return getVariableValue("xMindHelper", 0) as gw.apd.xmind.XMindImportHelper
    }
    
    property set xMindHelper ($arg :  gw.apd.xmind.XMindImportHelper) {
      setVariableValue("xMindHelper", 0, $arg)
    }
    
    property get xmindFile () : gw.api.web.WebFile {
      return getVariableValue("xmindFile", 0) as gw.api.web.WebFile
    }
    
    property set xmindFile ($arg :  gw.api.web.WebFile) {
      setVariableValue("xmindFile", 0, $arg)
    }
    
    
  }
  
  
}