package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadProductTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDLoadProductTemplatePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadProductTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDLoadProductTemplatePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
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
    
    // 'afterCommit' attribute on Popup (id=APDLoadProductTemplatePopup) at APDLoadProductTemplatePopup.pcf: line 12, column 65
    function afterCommit_9 (TopLocation :  pcf.api.Location) : void {
      if (account != null) xmlImportHelper.NewProduct.createSubmission(account, selectionOfProducer)
    }
    
    // 'beforeCommit' attribute on Popup (id=APDLoadProductTemplatePopup) at APDLoadProductTemplatePopup.pcf: line 12, column 65
    function beforeCommit_10 (pickedValue :  java.lang.Object) : void {
      xmlImportHelper.importProduct()
    }
    
    // 'value' attribute on FileInput (id=ProductTemplate_Input) at APDLoadProductTemplatePopup.pcf: line 48, column 46
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      xmlImportHelper.XMLFile = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'initialValue' attribute on Variable at APDLoadProductTemplatePopup.pcf: line 29, column 20
    function initialValue_0 () : User {
      return User.util.CurrentUser
    }
    
    // 'initialValue' attribute on Variable at APDLoadProductTemplatePopup.pcf: line 33, column 58
    function initialValue_1 () : gw.apd.model.export.APDProductImportHelper {
      return new gw.apd.model.export.APDProductImportHelper(existingProduct)
    }
    
    // EditButtons at APDLoadProductTemplatePopup.pcf: line 36, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'validationExpression' attribute on FileInput (id=ProductTemplate_Input) at APDLoadProductTemplatePopup.pcf: line 48, column 46
    function validationExpression_3 () : java.lang.Object {
      return xmlImportHelper.validateXML()
    }
    
    // 'value' attribute on FileInput (id=ProductTemplate_Input) at APDLoadProductTemplatePopup.pcf: line 48, column 46
    function valueRoot_6 () : java.lang.Object {
      return xmlImportHelper
    }
    
    // 'value' attribute on FileInput (id=ProductTemplate_Input) at APDLoadProductTemplatePopup.pcf: line 48, column 46
    function value_4 () : gw.api.web.WebFile {
      return xmlImportHelper.XMLFile
    }
    
    override property get CurrentLocation () : pcf.APDLoadProductTemplatePopup {
      return super.CurrentLocation as pcf.APDLoadProductTemplatePopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get currentUser () : User {
      return getVariableValue("currentUser", 0) as User
    }
    
    property set currentUser ($arg :  User) {
      setVariableValue("currentUser", 0, $arg)
    }
    
    property get existingProduct () : APDProduct {
      return getVariableValue("existingProduct", 0) as APDProduct
    }
    
    property set existingProduct ($arg :  APDProduct) {
      setVariableValue("existingProduct", 0, $arg)
    }
    
    property get selectionOfProducer () : ProducerSelection {
      return getVariableValue("selectionOfProducer", 0) as ProducerSelection
    }
    
    property set selectionOfProducer ($arg :  ProducerSelection) {
      setVariableValue("selectionOfProducer", 0, $arg)
    }
    
    property get xmlImportHelper () : gw.apd.model.export.APDProductImportHelper {
      return getVariableValue("xmlImportHelper", 0) as gw.apd.model.export.APDProductImportHelper
    }
    
    property set xmlImportHelper ($arg :  gw.apd.model.export.APDProductImportHelper) {
      setVariableValue("xmlImportHelper", 0, $arg)
    }
    
    
  }
  
  
}