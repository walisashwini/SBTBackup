package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductManagementPageExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductManagementPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=APDProductManagementPage) at APDProductManagementPage.pcf: line 8, column 76
    static function canVisit_92 () : java.lang.Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().canDesign() and gw.api.system.PCDependenciesGateway.ServerMode.Dev
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // Page (id=APDProductManagementPage) at APDProductManagementPage.pcf: line 8, column 76
    static function parent_93 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 251, column 52
    function sortValue_82 (installedProduct :  gw.api.productmodel.Product) : java.lang.Object {
      return installedProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementPage.pcf: line 255, column 59
    function sortValue_83 (installedProduct :  gw.api.productmodel.Product) : java.lang.Object {
      return installedProduct.Description
    }
    
    // 'value' attribute on RowIterator (id=InstalledProduct) at APDProductManagementPage.pcf: line 246, column 59
    function value_91 () : gw.api.productmodel.Product[] {
      var findProduct = gw.api.productmodel.ProductLookup.getByCodeIdentifier("Manual"); return gw.api.productmodel.ProductLookup.getAll().subtract({findProduct}).toTypedArray()
    }
    
    override property get CurrentLocation () : pcf.APDProductManagementPage {
      return super.CurrentLocation as pcf.APDProductManagementPage
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get recreateProductTree () : Boolean {
      return getVariableValue("recreateProductTree", 0) as Boolean
    }
    
    property set recreateProductTree ($arg :  Boolean) {
      setVariableValue("recreateProductTree", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 210, column 57
    function action_64 () : void {
      JobForward.go(submission)
    }
    
    // 'action' attribute on TextCell (id=SubPrimaryInsured_Cell) at APDProductManagementPage.pcf: line 215, column 66
    function action_69 () : void {
      ContactForward.go(submission.LatestPeriod.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // 'action' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 210, column 57
    function action_dest_65 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // 'action' attribute on TextCell (id=SubPrimaryInsured_Cell) at APDProductManagementPage.pcf: line 215, column 66
    function action_dest_70 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(submission.LatestPeriod.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // 'value' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 210, column 57
    function valueRoot_67 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on DateCell (id=SubEffDate_Cell) at APDProductManagementPage.pcf: line 219, column 81
    function valueRoot_75 () : java.lang.Object {
      return submission.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 210, column 57
    function value_66 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=SubPrimaryInsured_Cell) at APDProductManagementPage.pcf: line 215, column 66
    function value_71 () : java.lang.String {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=SubEffDate_Cell) at APDProductManagementPage.pcf: line 219, column 81
    function value_74 () : java.util.Date {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=SubStatus_Cell) at APDProductManagementPage.pcf: line 223, column 61
    function value_77 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    property get submission () : Submission {
      return getIteratedValue(2) as Submission
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends APDProductManagementPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonCell (id=GenerateTemplate_Cell) at APDProductManagementPage.pcf: line 261, column 99
    function action_90 () : void {
      gw.apd.model.generate.xml.ProductTemplateGenerator.downloadXml(installedProduct.CodeIdentifier)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 251, column 52
    function valueRoot_85 () : java.lang.Object {
      return installedProduct
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 251, column 52
    function value_84 () : java.lang.String {
      return installedProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementPage.pcf: line 255, column 59
    function value_87 () : java.lang.String {
      return installedProduct.Description
    }
    
    property get installedProduct () : gw.api.productmodel.Product {
      return getIteratedValue(1) as gw.api.productmodel.Product
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 56, column 51
    function valueRoot_16 () : java.lang.Object {
      return manualProduct
    }
    
    // 'value' attribute on TextCell (id=Submissions_Cell) at APDProductManagementPage.pcf: line 69, column 54
    function valueRoot_24 () : java.lang.Object {
      return gw.api.database.Query.make(Submission).join(Submission#Policy).compare(Policy#APDProduct, gw.api.database.Relop.Equals, manualProduct).select()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 56, column 51
    function value_15 () : java.lang.String {
      return manualProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementPage.pcf: line 60, column 58
    function value_18 () : java.lang.String {
      return manualProduct.Description
    }
    
    // 'value' attribute on TextCell (id=Lines_Cell) at APDProductManagementPage.pcf: line 64, column 99
    function value_21 () : java.lang.String {
      return manualProduct.ProductLines*.ProductLine*.Name.join(", ")
    }
    
    // 'value' attribute on TextCell (id=Submissions_Cell) at APDProductManagementPage.pcf: line 69, column 54
    function value_23 () : java.lang.Integer {
      return gw.api.database.Query.make(Submission).join(Submission#Policy).compare(Policy#APDProduct, gw.api.database.Relop.Equals, manualProduct).select().Count
    }
    
    // 'value' attribute on BooleanRadioCell (id=Installed_Cell) at APDProductManagementPage.pcf: line 76, column 68
    function value_26 () : java.lang.Boolean {
      return manualProduct.DateInstalled != null
    }
    
    // 'value' attribute on DateCell (id=DateInstalled_Cell) at APDProductManagementPage.pcf: line 80, column 60
    function value_28 () : java.util.Date {
      return manualProduct.DateInstalled
    }
    
    // 'value' attribute on DateCell (id=LastUpdated_Cell) at APDProductManagementPage.pcf: line 86, column 58
    function value_31 () : java.util.Date {
      return manualProduct.DateUpdated
    }
    
    property get manualProduct () : APDProduct {
      return getIteratedValue(2) as APDProduct
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDProductManagementPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ImportFromXmind) at APDProductManagementPage.pcf: line 34, column 86
    function action_2 () : void {
      APDLoadXmindPopup.push(null, null)
    }
    
    // 'action' attribute on ToolbarButton (id=ImportFromTemplate) at APDProductManagementPage.pcf: line 38, column 89
    function action_4 () : void {
      APDLoadProductTemplatePopup.push(null, null)
    }
    
    // 'action' attribute on ToolbarButton (id=NewProduct) at APDProductManagementPage.pcf: line 42, column 84
    function action_6 () : void {
      APDNewProductPopup.push(null, null)
    }
    
    // 'action' attribute on ToolbarButton (id=ImportFromXmind) at APDProductManagementPage.pcf: line 34, column 86
    function action_dest_3 () : pcf.api.Destination {
      return pcf.APDLoadXmindPopup.createDestination(null, null)
    }
    
    // 'action' attribute on ToolbarButton (id=ImportFromTemplate) at APDProductManagementPage.pcf: line 38, column 89
    function action_dest_5 () : pcf.api.Destination {
      return pcf.APDLoadProductTemplatePopup.createDestination(null, null)
    }
    
    // 'action' attribute on ToolbarButton (id=NewProduct) at APDProductManagementPage.pcf: line 42, column 84
    function action_dest_7 () : pcf.api.Destination {
      return pcf.APDNewProductPopup.createDestination(null, null)
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 28, column 34
    function initialValue_1 () : APDProduct {
      return productDetails
    }
    
    // 'value' attribute on TextCell (id=Lines_Cell) at APDProductManagementPage.pcf: line 64, column 99
    function sortValue_10 (manualProduct :  APDProduct) : java.lang.Object {
      return manualProduct.ProductLines*.ProductLine*.Name.join(", ")
    }
    
    // 'value' attribute on TextCell (id=Submissions_Cell) at APDProductManagementPage.pcf: line 69, column 54
    function sortValue_11 (manualProduct :  APDProduct) : java.lang.Object {
      return gw.api.database.Query.make(Submission).join(Submission#Policy).compare(Policy#APDProduct, gw.api.database.Relop.Equals, manualProduct).select().Count
    }
    
    // 'value' attribute on BooleanRadioCell (id=Installed_Cell) at APDProductManagementPage.pcf: line 76, column 68
    function sortValue_12 (manualProduct :  APDProduct) : java.lang.Object {
      return manualProduct.DateInstalled != null
    }
    
    // 'value' attribute on DateCell (id=DateInstalled_Cell) at APDProductManagementPage.pcf: line 80, column 60
    function sortValue_13 (manualProduct :  APDProduct) : java.lang.Object {
      return manualProduct.DateInstalled
    }
    
    // 'value' attribute on DateCell (id=LastUpdated_Cell) at APDProductManagementPage.pcf: line 86, column 58
    function sortValue_14 (manualProduct :  APDProduct) : java.lang.Object {
      return manualProduct.DateUpdated
    }
    
    // 'value' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 210, column 57
    function sortValue_60 (submission :  Submission) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=SubPrimaryInsured_Cell) at APDProductManagementPage.pcf: line 215, column 66
    function sortValue_61 (submission :  Submission) : java.lang.Object {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=SubEffDate_Cell) at APDProductManagementPage.pcf: line 219, column 81
    function sortValue_62 (submission :  Submission) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=SubStatus_Cell) at APDProductManagementPage.pcf: line 223, column 61
    function sortValue_63 (submission :  Submission) : java.lang.Object {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 56, column 51
    function sortValue_8 (manualProduct :  APDProduct) : java.lang.Object {
      return manualProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementPage.pcf: line 60, column 58
    function sortValue_9 (manualProduct :  APDProduct) : java.lang.Object {
      return manualProduct.Description
    }
    
    // 'title' attribute on TitleBar (id=ProductSubmissionsTitle) at APDProductManagementPage.pcf: line 197, column 127
    function title_59 () : java.lang.String {
      return DisplayKey.get("Web.APDProductManagementPage.SubmissionLV.Title", productDetails.Name)
    }
    
    // 'value' attribute on RowIterator (id=ManualProduct) at APDProductManagementPage.pcf: line 51, column 44
    function value_34 () : APDProduct[] {
      return APDProduct.ManualProducts
    }
    
    // 'value' attribute on RowIterator at APDProductManagementPage.pcf: line 204, column 86
    function value_80 () : gw.api.database.IQueryBeanResult<Submission> {
      return gw.api.database.Query.make(Submission).join(Submission#Policy).compare(Policy#APDProduct, gw.api.database.Relop.Equals, productDetails).select()
    }
    
    // 'visible' attribute on Card (id=ProductDetails) at APDProductManagementPage.pcf: line 95, column 50
    function visible_58 () : java.lang.Boolean {
      return productDetails != null
    }
    
    property get productDetails () : APDProduct {
      return getCurrentSelection(1) as APDProduct
    }
    
    property set productDetails ($arg :  APDProduct) {
      setCurrentSelection(1, $arg)
    }
    
    property get selectedProduct () : APDProduct {
      return getVariableValue("selectedProduct", 1) as APDProduct
    }
    
    property set selectedProduct ($arg :  APDProduct) {
      setVariableValue("selectedProduct", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelSetExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=EditProduct) at APDProductManagementPage.pcf: line 112, column 39
    function action_37 () : void {
      APDProductDefinition.go(productDetails)
    }
    
    // 'action' attribute on MenuItem (id=FromTemplate) at APDProductManagementPage.pcf: line 120, column 105
    function action_39 () : void {
      recreateProductTree = true; APDLoadProductTemplatePopup.push(productDetails)
    }
    
    // 'action' attribute on MenuItem (id=FromXmind) at APDProductManagementPage.pcf: line 124, column 102
    function action_40 () : void {
      recreateProductTree = true; APDLoadXmindPopup.push(productDetails)
    }
    
    // 'action' attribute on ToolbarButton (id=RemoveProduct) at APDProductManagementPage.pcf: line 133, column 50
    function action_43 () : void {
      productDetails.maybeRemove()
    }
    
    // 'action' attribute on ToolbarButton (id=Export) at APDProductManagementPage.pcf: line 140, column 39
    function action_47 () : void {
      productDetails.exportToClient()
    }
    
    // 'action' attribute on TextValue (id=ExpandAll) at APDProductManagementPage.pcf: line 158, column 55
    function action_48 () : void {
      gw.apd.APDProductTreeHelper.expandAll(productTree)
    }
    
    // 'action' attribute on TextValue (id=CollapseAll) at APDProductManagementPage.pcf: line 163, column 55
    function action_49 () : void {
      gw.apd.APDProductTreeHelper.collapseAll(productTree)
    }
    
    // 'action' attribute on ToolbarButton (id=EditProduct) at APDProductManagementPage.pcf: line 112, column 39
    function action_dest_38 () : pcf.api.Destination {
      return pcf.APDProductDefinition.createDestination(productDetails)
    }
    
    // 'available' attribute on ToolbarButton (id=RemoveProduct) at APDProductManagementPage.pcf: line 133, column 50
    function available_41 () : java.lang.Boolean {
      return productDetails.canRemove()
    }
    
    // 'available' attribute on ToolbarButton (id=Export) at APDProductManagementPage.pcf: line 140, column 39
    function available_46 () : java.lang.Boolean {
      return productDetails.CanExport
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=RemoveProduct) at APDProductManagementPage.pcf: line 133, column 50
    function confirmMessage_44 () : java.lang.String {
      return DisplayKey.get("Web.APD.RemoveProduct.Confirmation", productDetails.Name)
    }
    
    // RowTree (id=ProductRowTree) at APDProductManagementPage.pcf: line 172, column 45
    function containerLabel_57 (item :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 101, column 57
    function initialValue_35 () : gw.api.tree.RowTreeRootNode {
      if(productDetails != selectedProduct || recreateProductTree) {selectedProduct = productDetails; recreateProductTree = false; return gw.apd.APDProductTreeHelper.createProductTree(selectedProduct)}; return productTree
    }
    
    // 'value' attribute on TextCell (id=NodeName_Cell) at APDProductManagementPage.pcf: line 179, column 42
    function sortValue_50 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=NodeType_Cell) at APDProductManagementPage.pcf: line 183, column 79
    function sortValue_51 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Type")
    }
    
    // 'title' attribute on TitleBar (id=ProductDetailsTitle) at APDProductManagementPage.pcf: line 106, column 52
    function title_36 () : java.lang.String {
      return productDetails.Name
    }
    
    // 'tooltip' attribute on ToolbarButton (id=RemoveProduct) at APDProductManagementPage.pcf: line 133, column 50
    function tooltip_45 () : java.lang.String {
      return productDetails.getRemoveProductErrors()
    }
    
    // 'value' attribute on RowTree (id=ProductRowTree) at APDProductManagementPage.pcf: line 172, column 45
    function value_56 () : java.lang.Object {
      return productTree
    }
    
    // 'visible' attribute on ToolbarButton (id=RemoveProduct) at APDProductManagementPage.pcf: line 133, column 50
    function visible_42 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get productTree () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("productTree", 2) as gw.api.tree.RowTreeRootNode
    }
    
    property set productTree ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("productTree", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=NodeName_Cell) at APDProductManagementPage.pcf: line 179, column 42
    function value_52 () : java.lang.String {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=NodeType_Cell) at APDProductManagementPage.pcf: line 183, column 79
    function value_54 () : java.lang.String {
      return item.getAttributeValue("Type")
    }
    
    property get item () : gw.xml.XMLNode {
      return getIteratedValue(3) as gw.xml.XMLNode
    }
    
    
  }
  
  
}