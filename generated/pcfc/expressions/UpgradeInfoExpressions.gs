package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/infopages/UpgradeInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UpgradeInfoExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/infopages/UpgradeInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends UpgradeInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=BatchProcess_Cell) at UpgradeInfo.pcf: line 286, column 57
    function valueRoot_77 () : java.lang.Object {
      return processHistory
    }
    
    // 'value' attribute on TypeKeyCell (id=BatchProcess_Cell) at UpgradeInfo.pcf: line 286, column 57
    function value_76 () : typekey.BatchProcessType {
      return processHistory.ProcessType
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at UpgradeInfo.pcf: line 294, column 53
    function value_79 () : java.util.Date {
      return processHistory.StartDate
    }
    
    // 'value' attribute on DateCell (id=CompleteDate_Cell) at UpgradeInfo.pcf: line 301, column 96
    function value_82 () : java.util.Date {
      return processHistory.RanToCompletion ? processHistory.CompleteDate : null
    }
    
    // 'value' attribute on TextCell (id=OpsPerformed_Cell) at UpgradeInfo.pcf: line 306, column 50
    function value_84 () : java.lang.Integer {
      return processHistory.OpsPerformed
    }
    
    // 'value' attribute on TextCell (id=FailedOps_Cell) at UpgradeInfo.pcf: line 311, column 50
    function value_87 () : java.lang.Integer {
      return processHistory.FailedOps
    }
    
    // 'value' attribute on TextCell (id=FailureReason_Cell) at UpgradeInfo.pcf: line 316, column 57
    function value_90 () : java.lang.String {
      return processHistory.FailureReason
    }
    
    property get processHistory () : entity.ProcessHistory {
      return getIteratedValue(1) as entity.ProcessHistory
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/UpgradeInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UpgradeInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=View) at UpgradeInfo.pcf: line 224, column 66
    function action_63 () : void {
      ReportView.push("UpgradeInfo", UpgradeRow.PublicID)
    }
    
    // 'action' attribute on Link (id=Download) at UpgradeInfo.pcf: line 240, column 66
    function action_67 () : void {
      Page.download(UpgradeRow)
    }
    
    // 'action' attribute on Link (id=DeleteDetails) at UpgradeInfo.pcf: line 254, column 66
    function action_69 () : void {
      UpgradeRow.deleteAllChildren()
    }
    
    // 'action' attribute on Link (id=View) at UpgradeInfo.pcf: line 224, column 66
    function action_dest_64 () : pcf.api.Destination {
      return pcf.ReportView.createDestination("UpgradeInfo", UpgradeRow.PublicID)
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 138, column 83
    function initialValue_38 () : gw.api.database.IQueryBeanResult<UpgradeRowCount> {
      return UpgradeRow.findUpgradeRowCounts() as gw.api.database.IQueryBeanResult<UpgradeRowCount>
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 142, column 88
    function initialValue_39 () : gw.api.database.IQueryBeanResult<UpgradeTableRegistry> {
      return UpgradeRow.findUpgradeTableRegistries() as gw.api.database.IQueryBeanResult<UpgradeTableRegistry>
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 146, column 87
    function initialValue_40 () : gw.api.database.IQueryBeanResult<UpgradeDBStorageSet> {
      return UpgradeRow.findUpgradeDBStorageSets(false) as gw.api.database.IQueryBeanResult<UpgradeDBStorageSet>
    }
    
    // RowIterator (id=UpgradeInstanceIterator) at UpgradeInfo.pcf: line 134, column 74
    function initializeVariables_70 () : void {
        RowCountsQuery = UpgradeRow.findUpgradeRowCounts() as gw.api.database.IQueryBeanResult<UpgradeRowCount>;
  TableRegistryQuery = UpgradeRow.findUpgradeTableRegistries() as gw.api.database.IQueryBeanResult<UpgradeTableRegistry>;
  StorageSetQueryBefore = UpgradeRow.findUpgradeDBStorageSets(false) as gw.api.database.IQueryBeanResult<UpgradeDBStorageSet>;

    }
    
    // 'label' attribute on Link (id=Status) at UpgradeInfo.pcf: line 157, column 59
    function label_43 () : java.lang.Object {
      return Page.getStatus(UpgradeRow)
    }
    
    // 'label' attribute on Link (id=DeferredTaskStatus) at UpgradeInfo.pcf: line 208, column 85
    function label_61 () : java.lang.Object {
      return Page.getDeferredUpgradeStatus(UpgradeRow).DisplayKey
    }
    
    // 'tooltip' attribute on Link (id=NotRunning) at UpgradeInfo.pcf: line 205, column 82
    function tooltip_60 () : java.lang.String {
      return Page.getDeferredUpgradeStatus(UpgradeRow).DisplayKey.toString()
    }
    
    // 'value' attribute on DateCell (id=TotalStartTime_Cell) at UpgradeInfo.pcf: line 169, column 39
    function valueRoot_47 () : java.lang.Object {
      return UpgradeRow
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at UpgradeInfo.pcf: line 151, column 61
    function value_41 () : java.lang.String {
      return Page.getBuildLabel(UpgradeRow)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at UpgradeInfo.pcf: line 162, column 55
    function value_44 () : java.lang.String {
      return Page.getType(UpgradeRow)
    }
    
    // 'value' attribute on DateCell (id=TotalStartTime_Cell) at UpgradeInfo.pcf: line 169, column 39
    function value_46 () : java.util.Date {
      return UpgradeRow.StartTime
    }
    
    // 'value' attribute on DateCell (id=TotalEndTime_Cell) at UpgradeInfo.pcf: line 176, column 39
    function value_49 () : java.util.Date {
      return UpgradeRow.EndTime
    }
    
    // 'value' attribute on TextCell (id=DatabaseDuration_Cell) at UpgradeInfo.pcf: line 181, column 67
    function value_52 () : java.lang.String {
      return UpgradeRow.FormattedDatabaseDuration
    }
    
    // 'value' attribute on TextCell (id=TotalDuration_Cell) at UpgradeInfo.pcf: line 187, column 39
    function value_55 () : java.lang.String {
      return UpgradeRow.FormattedTotalDuration
    }
    
    // 'visible' attribute on Link (id=Completed) at UpgradeInfo.pcf: line 199, column 86
    function visible_58 () : java.lang.Boolean {
      return Page.getDeferredUpgradeStatus(UpgradeRow).Completed
    }
    
    // 'visible' attribute on Link (id=NotRunning) at UpgradeInfo.pcf: line 205, column 82
    function visible_59 () : java.lang.Boolean {
      return Page.getDeferredUpgradeStatus(UpgradeRow).Error
    }
    
    // 'visible' attribute on Link (id=View) at UpgradeInfo.pcf: line 224, column 66
    function visible_62 () : java.lang.Boolean {
      return UpgradeRow.ProfilerData != null
    }
    
    // 'visible' attribute on LinkCell (id=ViewLinkCell) at UpgradeInfo.pcf: line 215, column 71
    function visible_65 () : java.lang.Boolean {
      return gw.api.system.server.ServerModeUtil.Dev
    }
    
    property get RowCountsQuery () : gw.api.database.IQueryBeanResult<UpgradeRowCount> {
      return getVariableValue("RowCountsQuery", 1) as gw.api.database.IQueryBeanResult<UpgradeRowCount>
    }
    
    property set RowCountsQuery ($arg :  gw.api.database.IQueryBeanResult<UpgradeRowCount>) {
      setVariableValue("RowCountsQuery", 1, $arg)
    }
    
    property get StorageSetQueryBefore () : gw.api.database.IQueryBeanResult<UpgradeDBStorageSet> {
      return getVariableValue("StorageSetQueryBefore", 1) as gw.api.database.IQueryBeanResult<UpgradeDBStorageSet>
    }
    
    property set StorageSetQueryBefore ($arg :  gw.api.database.IQueryBeanResult<UpgradeDBStorageSet>) {
      setVariableValue("StorageSetQueryBefore", 1, $arg)
    }
    
    property get TableRegistryQuery () : gw.api.database.IQueryBeanResult<UpgradeTableRegistry> {
      return getVariableValue("TableRegistryQuery", 1) as gw.api.database.IQueryBeanResult<UpgradeTableRegistry>
    }
    
    property set TableRegistryQuery ($arg :  gw.api.database.IQueryBeanResult<UpgradeTableRegistry>) {
      setVariableValue("TableRegistryQuery", 1, $arg)
    }
    
    property get UpgradeRow () : entity.UpgradeInstance {
      return getIteratedValue(1) as entity.UpgradeInstance
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/UpgradeInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UpgradeInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=InitiateBackout) at UpgradeInfo.pcf: line 59, column 86
    function action_13 () : void {
      if (Page.UpgradeJustStarted) { Page.cancelRollingUpgrade() } else { InitiateBackoutConfirmPopup.push(Page) }
    }
    
    // 'action' attribute on ToolbarButton (id=ForceBackout) at UpgradeInfo.pcf: line 64, column 146
    function action_16 () : void {
      ForceBackoutConfirmPopup.push(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=StartFull) at UpgradeInfo.pcf: line 69, column 50
    function action_19 () : void {
      StartFullUpgradePopup.push(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=CancelFull) at UpgradeInfo.pcf: line 74, column 49
    function action_22 () : void {
      Page.cancelFullUpgrade()
    }
    
    // 'actionOnComplete' attribute on ProgressInput (id=BackOutProgress_Input) at UpgradeInfo.pcf: line 94, column 47
    function action_27 () : void {
      UpgradeInfo.go()
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at UpgradeInfo.pcf: line 39, column 63
    function action_3 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=StartRolling) at UpgradeInfo.pcf: line 44, column 111
    function action_5 () : void {
      StartRollingUpgradePopup.push(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=RollingComplete) at UpgradeInfo.pcf: line 52, column 88
    function action_9 () : void {
      Page.rollingUpgradeComplete()
    }
    
    // 'action' attribute on ToolbarButton (id=ForceBackout) at UpgradeInfo.pcf: line 64, column 146
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ForceBackoutConfirmPopup.createDestination(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=StartFull) at UpgradeInfo.pcf: line 69, column 50
    function action_dest_20 () : pcf.api.Destination {
      return pcf.StartFullUpgradePopup.createDestination(Page)
    }
    
    // 'actionOnComplete' attribute on ProgressInput (id=BackOutProgress_Input) at UpgradeInfo.pcf: line 94, column 47
    function action_dest_28 () : pcf.api.Destination {
      return pcf.UpgradeInfo.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=StartRolling) at UpgradeInfo.pcf: line 44, column 111
    function action_dest_6 () : pcf.api.Destination {
      return pcf.StartRollingUpgradePopup.createDestination(Page)
    }
    
    // 'afterEnter' attribute on Page (id=UpgradeInfo) at UpgradeInfo.pcf: line 11, column 81
    function afterEnter_95 () : void {
      if (Page.SomeUpgradeInProgress) { gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.RollingInProgress")) }
    }
    
    // 'available' attribute on ToolbarButton (id=InitiateBackout) at UpgradeInfo.pcf: line 59, column 86
    function available_11 () : java.lang.Boolean {
      return !Page.DatabaseWorkInProgress and !Page.BackOutInProgress
    }
    
    // 'available' attribute on ToolbarButton (id=RollingComplete) at UpgradeInfo.pcf: line 52, column 88
    function available_7 () : java.lang.Boolean {
      return Page.DatabaseWorkDone && !hasActiveServersNotEquivalentToCurrentConfiguration
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=InitiateBackout) at UpgradeInfo.pcf: line 59, column 86
    function confirmMessage_14 () : java.lang.String {
      return Page.DatabaseWorkInProgress ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.BackOutCannotStartMigrationInProgress") : Page.BackOutInProgress ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.BackOutCannotStartAnotherBackOutInProgress") : null
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 17, column 50
    function initialValue_0 () : gw.api.tools.UpgradeInfoPageHelper {
      return new gw.api.tools.UpgradeInfoPageHelper()
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 26, column 71
    function initialValue_1 () : gw.api.database.IQueryBeanResult<UpgradeInstance> {
      return Page.findAllUpgradeInstancesDateDescending()
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 31, column 23
    function initialValue_2 () : Boolean {
      return !Page.ActiveServersNotEquivalentToCurrentConfiguration.isEmpty()
    }
    
    // 'label' attribute on Verbatim at UpgradeInfo.pcf: line 78, column 48
    function label_24 () : java.lang.String {
      return Page.LatestUpgrade.UpdateStatistics ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.StatsUpdated") : (Page.hasRecentUpdateStatisticsProcessRun() ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.StatsNotUpdatedRecentRuns") : DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.StatsNotUpdatedNoRecentRuns"))
    }
    
    // 'label' attribute on Verbatim (id=CurrentVersion) at UpgradeInfo.pcf: line 83, column 124
    function label_25 () : java.lang.String {
      return DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.CurrentVersion", Page.ActiveBuildLabel)
    }
    
    // 'parent' attribute on Page (id=UpgradeInfo) at UpgradeInfo.pcf: line 11, column 81
    static function parent_96 () : pcf.api.Destination {
      return pcf.ServerTools.createDestination()
    }
    
    // 'percentage' attribute on ProgressInput (id=BackOutProgress_Input) at UpgradeInfo.pcf: line 94, column 47
    function percentage_29 () : java.lang.Double {
      return Page.BackOutInProgress ? -1 : 100
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at UpgradeInfo.pcf: line 151, column 61
    function sortValue_31 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return Page.getBuildLabel(UpgradeRow)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at UpgradeInfo.pcf: line 162, column 55
    function sortValue_32 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return Page.getType(UpgradeRow)
    }
    
    // 'value' attribute on DateCell (id=TotalStartTime_Cell) at UpgradeInfo.pcf: line 169, column 39
    function sortValue_33 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return UpgradeRow.StartTime
    }
    
    // 'value' attribute on DateCell (id=TotalEndTime_Cell) at UpgradeInfo.pcf: line 176, column 39
    function sortValue_34 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return UpgradeRow.EndTime
    }
    
    // 'value' attribute on TextCell (id=DatabaseDuration_Cell) at UpgradeInfo.pcf: line 181, column 67
    function sortValue_35 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return UpgradeRow.FormattedDatabaseDuration
    }
    
    // 'value' attribute on TextCell (id=TotalDuration_Cell) at UpgradeInfo.pcf: line 187, column 39
    function sortValue_36 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return UpgradeRow.FormattedTotalDuration
    }
    
    // 'value' attribute on TypeKeyCell (id=BatchProcess_Cell) at UpgradeInfo.pcf: line 286, column 57
    function sortValue_72 (processHistory :  entity.ProcessHistory) : java.lang.Object {
      return processHistory.ProcessType
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at UpgradeInfo.pcf: line 294, column 53
    function sortValue_73 (processHistory :  entity.ProcessHistory) : java.lang.Object {
      return processHistory.StartDate
    }
    
    // 'value' attribute on TextCell (id=OpsPerformed_Cell) at UpgradeInfo.pcf: line 306, column 50
    function sortValue_74 (processHistory :  entity.ProcessHistory) : java.lang.Object {
      return processHistory.OpsPerformed
    }
    
    // 'value' attribute on TextCell (id=FailedOps_Cell) at UpgradeInfo.pcf: line 311, column 50
    function sortValue_75 (processHistory :  entity.ProcessHistory) : java.lang.Object {
      return processHistory.FailedOps
    }
    
    // 'tooltip' attribute on ToolbarButton (id=RollingComplete) at UpgradeInfo.pcf: line 52, column 88
    function tooltip_10 () : java.lang.String {
      return hasActiveServersNotEquivalentToCurrentConfiguration ? DisplayKey.get('Java.Database.Rolling.Upgrade.RollingComplete.HasActiveSourceServers') : ''
    }
    
    // 'value' attribute on RowIterator (id=UpgradeInstanceIterator) at UpgradeInfo.pcf: line 134, column 74
    function value_71 () : java.util.List<entity.UpgradeInstance> {
      return Page.findAllUpgradeInstancesDateDescending().iterator().toList()
    }
    
    // 'value' attribute on RowIterator at UpgradeInfo.pcf: line 280, column 89
    function value_93 () : gw.api.database.IQueryBeanResult<entity.ProcessHistory> {
      return Page.findUpdateStatisticsProcessesAfterLatestUpgrade()
    }
    
    // 'visible' attribute on ToolbarButton (id=InitiateBackout) at UpgradeInfo.pcf: line 59, column 86
    function visible_12 () : java.lang.Boolean {
      return Page.RollingUpgradeInProgressAndConfigurationEquivalentToSource
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceBackout) at UpgradeInfo.pcf: line 64, column 146
    function visible_15 () : java.lang.Boolean {
      return Page.RollingUpgradeInProgressAndConfigurationEquivalentToSource and Page.DatabaseWorkInProgress and !Page.BackOutInProgress
    }
    
    // 'visible' attribute on ToolbarButton (id=StartFull) at UpgradeInfo.pcf: line 69, column 50
    function visible_18 () : java.lang.Boolean {
      return !Page.SomeUpgradeInProgress
    }
    
    // 'visible' attribute on ToolbarButton (id=CancelFull) at UpgradeInfo.pcf: line 74, column 49
    function visible_21 () : java.lang.Boolean {
      return Page.FullUpgradeInProgress
    }
    
    // 'visible' attribute on ProgressInput (id=BackOutProgress_Input) at UpgradeInfo.pcf: line 94, column 47
    function visible_26 () : java.lang.Boolean {
      return Page.BackOutInProgress
    }
    
    // 'visible' attribute on LinkCell (id=ViewLinkCell) at UpgradeInfo.pcf: line 215, column 71
    function visible_37 () : java.lang.Boolean {
      return gw.api.system.server.ServerModeUtil.Dev
    }
    
    // 'visible' attribute on ToolbarButton (id=StartRolling) at UpgradeInfo.pcf: line 44, column 111
    function visible_4 () : java.lang.Boolean {
      return !Page.SomeUpgradeInProgress and gw.api.system.PLConfigParameters.ClusteringEnabled.Value
    }
    
    // 'visible' attribute on ToolbarButton (id=RollingComplete) at UpgradeInfo.pcf: line 52, column 88
    function visible_8 () : java.lang.Boolean {
      return Page.RollingUpgradeInProgressAndConfigurationCompatibleWithSource
    }
    
    // 'visible' attribute on PanelSet (id=StatisticsPanelSet) at UpgradeInfo.pcf: line 269, column 137
    function visible_94 () : java.lang.Boolean {
      return Page.LatestUpgrade != null and not Page.LatestUpgrade.UpdateStatistics and Page.hasRecentUpdateStatisticsProcessRun()
    }
    
    override property get CurrentLocation () : pcf.UpgradeInfo {
      return super.CurrentLocation as pcf.UpgradeInfo
    }
    
    property get Page () : gw.api.tools.UpgradeInfoPageHelper {
      return getVariableValue("Page", 0) as gw.api.tools.UpgradeInfoPageHelper
    }
    
    property set Page ($arg :  gw.api.tools.UpgradeInfoPageHelper) {
      setVariableValue("Page", 0, $arg)
    }
    
    property get UpgradeRows () : gw.api.database.IQueryBeanResult<UpgradeInstance> {
      return getVariableValue("UpgradeRows", 0) as gw.api.database.IQueryBeanResult<UpgradeInstance>
    }
    
    property set UpgradeRows ($arg :  gw.api.database.IQueryBeanResult<UpgradeInstance>) {
      setVariableValue("UpgradeRows", 0, $arg)
    }
    
    property get hasActiveServersNotEquivalentToCurrentConfiguration () : Boolean {
      return getVariableValue("hasActiveServersNotEquivalentToCurrentConfiguration", 0) as Boolean
    }
    
    property set hasActiveServersNotEquivalentToCurrentConfiguration ($arg :  Boolean) {
      setVariableValue("hasActiveServersNotEquivalentToCurrentConfiguration", 0, $arg)
    }
    
    property get hideInfoMsg () : boolean {
      return getVariableValue("hideInfoMsg", 0) as java.lang.Boolean
    }
    
    property set hideInfoMsg ($arg :  boolean) {
      setVariableValue("hideInfoMsg", 0, $arg)
    }
    
    
  }
  
  
}