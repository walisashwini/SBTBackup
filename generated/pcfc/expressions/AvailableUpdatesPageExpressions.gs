package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/AvailableUpdatesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AvailableUpdatesPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/AvailableUpdatesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AvailableUpdatesPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, forceRefresh :  boolean) : int {
      return 0
    }
    
    // 'parent' attribute on Page (id=AvailableUpdatesPage) at AvailableUpdatesPage.pcf: line 11, column 95
    static function parent_50 (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, forceRefresh :  boolean) : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AvailableUpdatesPage {
      return super.CurrentLocation as pcf.AvailableUpdatesPage
    }
    
    property get filterOption () : gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION {
      return getVariableValue("filterOption", 0) as gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION
    }
    
    property set filterOption ($arg :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) {
      setVariableValue("filterOption", 0, $arg)
    }
    
    property get forceRefresh () : boolean {
      return getVariableValue("forceRefresh", 0) as java.lang.Boolean
    }
    
    property set forceRefresh ($arg :  boolean) {
      setVariableValue("forceRefresh", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/AvailableUpdatesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on BooleanRadioCell (id=Analysis_Cell) at AvailableUpdatesPage.pcf: line 130, column 38
    function action_20 () : void {
      gw.sbt.pca.view.presenter.PresenterUtil.goToListOfUpdates(updatePresenter.AvailableSBTUpdate, updatePresenter.LatestAdoptedSBTUpdate, repo, configLocation, filterOption)
    }
    
    // 'value' attribute on TextCell (id=LatestAdopted_Cell) at AvailableUpdatesPage.pcf: line 144, column 61
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      updatePresenter.LatestAdoptedSBTUpdate = (__VALUE_TO_SET as gw.sbt.model.SBTUpdateMetaData)
    }
    
    // 'value' attribute on RangeCell (id=AvailableSBTUpdates_Cell) at AvailableUpdatesPage.pcf: line 153, column 60
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      updatePresenter.AvailableSBTUpdate = (__VALUE_TO_SET as gw.sbt.model.SBTUpdateMetaData)
    }
    
    // 'editable' attribute on TextCell (id=LatestAdopted_Cell) at AvailableUpdatesPage.pcf: line 144, column 61
    function editable_29 () : java.lang.Boolean {
      return updatePresenter.LatestAdoptedDropDownEditable
    }
    
    // 'editable' attribute on RangeCell (id=AvailableSBTUpdates_Cell) at AvailableUpdatesPage.pcf: line 153, column 60
    function editable_36 () : java.lang.Boolean {
      return updatePresenter.NewUpdateDropDownEditable
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=Analysis_Cell) at AvailableUpdatesPage.pcf: line 130, column 38
    function iconLabel_21 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getAnalysisTooltips(updatePresenter.Status)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Analysis_Cell) at AvailableUpdatesPage.pcf: line 130, column 38
    function icon_22 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getAnalysisIconName(updatePresenter.Status)
    }
    
    // 'outputConversion' attribute on TextCell (id=LatestAdopted_Cell) at AvailableUpdatesPage.pcf: line 144, column 61
    function outputConversion_30 (VALUE :  gw.sbt.model.SBTUpdateMetaData) : java.lang.String {
      return VALUE != null ? VALUE.toString() : DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.AddingStateDefault")
    }
    
    // 'requestValidationExpression' attribute on RangeCell (id=AvailableSBTUpdates_Cell) at AvailableUpdatesPage.pcf: line 153, column 60
    function requestValidationExpression_37 (VALUE :  gw.sbt.model.SBTUpdateMetaData) : java.lang.Object {
      return updatePresenter.validateAvailableSBTMetaData(VALUE)
    }
    
    // 'valueRange' attribute on RangeCell (id=AvailableSBTUpdates_Cell) at AvailableUpdatesPage.pcf: line 153, column 60
    function valueRange_41 () : java.lang.Object {
      return updatePresenter.AvailableSBTUpdates
    }
    
    // 'value' attribute on TextCell (id=Line_Cell) at AvailableUpdatesPage.pcf: line 134, column 47
    function valueRoot_24 () : java.lang.Object {
      return updatePresenter
    }
    
    // 'value' attribute on TextCell (id=Line_Cell) at AvailableUpdatesPage.pcf: line 134, column 47
    function value_23 () : java.lang.String {
      return updatePresenter.Line
    }
    
    // 'value' attribute on TextCell (id=Jurisdiction_Cell) at AvailableUpdatesPage.pcf: line 138, column 47
    function value_26 () : java.lang.String {
      return updatePresenter.Jurisdiction
    }
    
    // 'value' attribute on TextCell (id=LatestAdopted_Cell) at AvailableUpdatesPage.pcf: line 144, column 61
    function value_31 () : gw.sbt.model.SBTUpdateMetaData {
      return updatePresenter.LatestAdoptedSBTUpdate
    }
    
    // 'value' attribute on RangeCell (id=AvailableSBTUpdates_Cell) at AvailableUpdatesPage.pcf: line 153, column 60
    function value_38 () : gw.sbt.model.SBTUpdateMetaData {
      return updatePresenter.AvailableSBTUpdate
    }
    
    // 'valueRange' attribute on RangeCell (id=AvailableSBTUpdates_Cell) at AvailableUpdatesPage.pcf: line 153, column 60
    function verifyValueRangeIsAllowedType_42 ($$arg :  gw.sbt.model.SBTUpdateMetaData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AvailableSBTUpdates_Cell) at AvailableUpdatesPage.pcf: line 153, column 60
    function verifyValueRangeIsAllowedType_42 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AvailableSBTUpdates_Cell) at AvailableUpdatesPage.pcf: line 153, column 60
    function verifyValueRange_43 () : void {
      var __valueRangeArg = updatePresenter.AvailableSBTUpdates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_42(__valueRangeArg)
    }
    
    // 'valueVisible' attribute on BooleanRadioCell (id=Analysis_Cell) at AvailableUpdatesPage.pcf: line 130, column 38
    function visible_19 () : java.lang.Boolean {
      return updatePresenter.ValidUpdatesSelected
    }
    
    // 'visible' attribute on Row (id=Update) at AvailableUpdatesPage.pcf: line 120, column 52
    function visible_46 () : java.lang.Boolean {
      return updatePresenter.RowVisible
    }
    
    property get updatePresenter () : gw.sbt.pca.view.presenter.MetaDataPresenter {
      return getIteratedValue(3) as gw.sbt.pca.view.presenter.MetaDataPresenter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/AvailableUpdatesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AvailableUpdatesPage.pcf: line 166, column 75
    function def_onEnter_48 (def :  pcf.UpdateSummaryPanelSet) : void {
      def.onEnter(selectedUpdatePresenter, repo)
    }
    
    // 'def' attribute on PanelRef at AvailableUpdatesPage.pcf: line 166, column 75
    function def_refreshVariables_49 (def :  pcf.UpdateSummaryPanelSet) : void {
      def.refreshVariables(selectedUpdatePresenter, repo)
    }
    
    // 'label' attribute on Label at AvailableUpdatesPage.pcf: line 56, column 125
    function label_12 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getPCAInstructions(availableUpdatesPresenters, filterOption)
    }
    
    // 'label' attribute on Label at AvailableUpdatesPage.pcf: line 61, column 75
    function label_13 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.PCAVersion
    }
    
    // 'sortBy' attribute on IteratorSort at AvailableUpdatesPage.pcf: line 110, column 30
    function sortBy_16 (updatePresenter :  gw.sbt.pca.view.presenter.MetaDataPresenter) : java.lang.Object {
      return updatePresenter.Line
    }
    
    // 'sortBy' attribute on IteratorSort at AvailableUpdatesPage.pcf: line 113, column 30
    function sortBy_17 (updatePresenter :  gw.sbt.pca.view.presenter.MetaDataPresenter) : java.lang.Object {
      return updatePresenter.Jurisdiction
    }
    
    // 'sortBy' attribute on IteratorSort at AvailableUpdatesPage.pcf: line 116, column 30
    function sortBy_18 (updatePresenter :  gw.sbt.pca.view.presenter.MetaDataPresenter) : java.lang.Object {
      return updatePresenter.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=BlankGroupHeader_Cell) at AvailableUpdatesPage.pcf: line 71, column 110
    function value_14 () : java.lang.String {
      return java.lang.System.getProperty("line.separator")
    }
    
    // 'value' attribute on RowIterator at AvailableUpdatesPage.pcf: line 107, column 91
    function value_47 () : java.util.List<gw.sbt.pca.view.presenter.MetaDataPresenter> {
      return availableUpdatesPresenters
    }
    
    property get selectedUpdatePresenter () : gw.sbt.pca.view.presenter.MetaDataPresenter {
      return getCurrentSelection(2) as gw.sbt.pca.view.presenter.MetaDataPresenter
    }
    
    property set selectedUpdatePresenter ($arg :  gw.sbt.pca.view.presenter.MetaDataPresenter) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/AvailableUpdatesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends AvailableUpdatesPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=selectedFilter_Input) at AvailableUpdatesPage.pcf: line 43, column 87
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      filterOption = (__VALUE_TO_SET as gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION)
    }
    
    // 'initialValue' attribute on Variable at AvailableUpdatesPage.pcf: line 26, column 57
    function initialValue_0 () : gw.sbt.pca.repository.ContentRepository {
      return gw.sbt.pca.repository.ContentRepositoryProvider.CurrentRepository
    }
    
    // 'initialValue' attribute on Variable at AvailableUpdatesPage.pcf: line 30, column 30
    function initialValue_1 () : java.io.File {
      return gw.sbt.pca.repository.ContentRepositoryProvider.CurrentConfigLocation
    }
    
    // 'initialValue' attribute on Variable at AvailableUpdatesPage.pcf: line 34, column 83
    function initialValue_2 () : java.util.List<gw.sbt.pca.view.presenter.MetaDataPresenter> {
      return gw.sbt.pca.view.presenter.PresenterUtil.createMetaDataPresentersFromRepo(repo, filterOption, forceRefresh)
    }
    
    // 'onChange' attribute on PostOnChange at AvailableUpdatesPage.pcf: line 45, column 70
    function onChange_3 () : void {
      AvailableUpdatesPage.go(filterOption, false)
    }
    
    // 'onChange' attribute on PostOnChange at AvailableUpdatesPage.pcf: line 45, column 70
    function onChange_dest_4 () : pcf.api.Destination {
      return pcf.AvailableUpdatesPage.createDestination(filterOption, false)
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=selectedFilter_Input) at AvailableUpdatesPage.pcf: line 43, column 87
    function optionLabel_7 (VALUE :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getFilterOptionDescription(VALUE)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=selectedFilter_Input) at AvailableUpdatesPage.pcf: line 43, column 87
    function valueRange_8 () : java.lang.Object {
      return gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION.AllValues
    }
    
    // 'value' attribute on ToolbarRangeInput (id=selectedFilter_Input) at AvailableUpdatesPage.pcf: line 43, column 87
    function value_5 () : gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION {
      return filterOption
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=selectedFilter_Input) at AvailableUpdatesPage.pcf: line 43, column 87
    function verifyValueRangeIsAllowedType_9 ($$arg :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=selectedFilter_Input) at AvailableUpdatesPage.pcf: line 43, column 87
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=selectedFilter_Input) at AvailableUpdatesPage.pcf: line 43, column 87
    function verifyValueRange_10 () : void {
      var __valueRangeArg = gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION.AllValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    property get availableUpdatesPresenters () : java.util.List<gw.sbt.pca.view.presenter.MetaDataPresenter> {
      return getVariableValue("availableUpdatesPresenters", 1) as java.util.List<gw.sbt.pca.view.presenter.MetaDataPresenter>
    }
    
    property set availableUpdatesPresenters ($arg :  java.util.List<gw.sbt.pca.view.presenter.MetaDataPresenter>) {
      setVariableValue("availableUpdatesPresenters", 1, $arg)
    }
    
    property get configLocation () : java.io.File {
      return getVariableValue("configLocation", 1) as java.io.File
    }
    
    property set configLocation ($arg :  java.io.File) {
      setVariableValue("configLocation", 1, $arg)
    }
    
    property get repo () : gw.sbt.pca.repository.ContentRepository {
      return getVariableValue("repo", 1) as gw.sbt.pca.repository.ContentRepository
    }
    
    property set repo ($arg :  gw.sbt.pca.repository.ContentRepository) {
      setVariableValue("repo", 1, $arg)
    }
    
    
  }
  
  
}