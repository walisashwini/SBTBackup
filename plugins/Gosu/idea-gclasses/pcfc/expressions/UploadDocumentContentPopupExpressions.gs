package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/UploadDocumentContentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UploadDocumentContentPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/document/UploadDocumentContentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UploadDocumentContentPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (document :  Document) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=UploadDocumentContentPopup) at UploadDocumentContentPopup.pcf: line 11, column 92
    function beforeCommit_8 (pickedValue :  java.lang.Object) : void {
      document.validateCompatibleMimeType(documentFile); document.uploadFileFromBrowser(documentFile)
    }
    
    // 'canVisit' attribute on Popup (id=UploadDocumentContentPopup) at UploadDocumentContentPopup.pcf: line 11, column 92
    static function canVisit_9 (document :  Document) : java.lang.Boolean {
      return perm.Document.edit(document)
    }
    
    // 'value' attribute on FileInput (id=Attachment_Input) at UploadDocumentContentPopup.pcf: line 35, column 34
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentFile = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // EditButtons at UploadDocumentContentPopup.pcf: line 23, column 32
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Label at UploadDocumentContentPopup.pcf: line 29, column 170
    function label_1 () : java.lang.String {
      return DisplayKey.get("Web.Policy.Documents.Document.UpdateDocument.UpdateContent", document.getMimeTypeLabel(document.MimeType), document.Name)
    }
    
    // 'value' attribute on TextInput (id=DocType_Input) at UploadDocumentContentPopup.pcf: line 44, column 43
    function valueRoot_6 () : java.lang.Object {
      return documentFile
    }
    
    // 'value' attribute on FileInput (id=Attachment_Input) at UploadDocumentContentPopup.pcf: line 35, column 34
    function value_2 () : gw.api.web.WebFile {
      return documentFile
    }
    
    // 'value' attribute on TextInput (id=DocType_Input) at UploadDocumentContentPopup.pcf: line 44, column 43
    function value_5 () : java.lang.String {
      return documentFile.MIMEType
    }
    
    override property get CurrentLocation () : pcf.UploadDocumentContentPopup {
      return super.CurrentLocation as pcf.UploadDocumentContentPopup
    }
    
    property get document () : Document {
      return getVariableValue("document", 0) as Document
    }
    
    property set document ($arg :  Document) {
      setVariableValue("document", 0, $arg)
    }
    
    property get documentFile () : gw.api.web.WebFile {
      return getVariableValue("documentFile", 0) as gw.api.web.WebFile
    }
    
    property set documentFile ($arg :  gw.api.web.WebFile) {
      setVariableValue("documentFile", 0, $arg)
    }
    
    
  }
  
  
}