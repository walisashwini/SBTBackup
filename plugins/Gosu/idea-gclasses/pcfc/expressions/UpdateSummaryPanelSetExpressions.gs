package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/UpdateSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UpdateSummaryPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/UpdateSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UpdateSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=NumberAdded_Cell) at UpdateSummaryPanelSet.pcf: line 173, column 42
    function label_63 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getSummaryStatisticsLabel(metaDataPresenter.HasLatestAdoptedSBTUpdateEdition, UpdateDiffType.TC_NEW)
    }
    
    // 'label' attribute on TextCell (id=NumberUpdated_Cell) at UpdateSummaryPanelSet.pcf: line 178, column 42
    function label_68 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getSummaryStatisticsLabel(metaDataPresenter.HasLatestAdoptedSBTUpdateEdition, UpdateDiffType.TC_CHANGED)
    }
    
    // 'label' attribute on TextCell (id=NumberDeleted_Cell) at UpdateSummaryPanelSet.pcf: line 183, column 42
    function label_73 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getSummaryStatisticsLabel(metaDataPresenter.HasLatestAdoptedSBTUpdateEdition, UpdateDiffType.TC_DELETED)
    }
    
    // 'value' attribute on TextCell (id=artifactTypeColumn_Cell) at UpdateSummaryPanelSet.pcf: line 168, column 43
    function valueRoot_61 () : java.lang.Object {
      return artifactStatistics
    }
    
    // 'value' attribute on TextCell (id=artifactTypeColumn_Cell) at UpdateSummaryPanelSet.pcf: line 168, column 43
    function value_60 () : java.lang.String {
      return artifactStatistics.Description
    }
    
    // 'value' attribute on TextCell (id=NumberAdded_Cell) at UpdateSummaryPanelSet.pcf: line 173, column 42
    function value_64 () : int {
      return artifactStatistics.NumberAdded
    }
    
    // 'value' attribute on TextCell (id=NumberUpdated_Cell) at UpdateSummaryPanelSet.pcf: line 178, column 42
    function value_69 () : int {
      return artifactStatistics.NumberUpdated
    }
    
    // 'value' attribute on TextCell (id=NumberDeleted_Cell) at UpdateSummaryPanelSet.pcf: line 183, column 42
    function value_74 () : int {
      return artifactStatistics.NumberDeleted
    }
    
    property get artifactStatistics () : gw.sbt.pca.view.ArtifactStatistics {
      return getIteratedValue(1) as gw.sbt.pca.view.ArtifactStatistics
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/UpdateSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UpdateSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=RCRNStateLink) at UpdateSummaryPanelSet.pcf: line 65, column 35
    function action_32 () : void {
      metaDataPresenter.downloadStateRCRN(repo)
    }
    
    // 'action' attribute on Link (id=RCRNCWLink) at UpdateSummaryPanelSet.pcf: line 75, column 32
    function action_34 () : void {
      metaDataPresenter.downloadCWRCRN(repo)
    }
    
    // 'action' attribute on Link (id=loadReportLink) at UpdateSummaryPanelSet.pcf: line 89, column 36
    function action_38 () : void {
      metaDataPresenter.downloadLoadReport(repo)
    }
    
    // 'action' attribute on Link (id=configurationReportLink) at UpdateSummaryPanelSet.pcf: line 99, column 45
    function action_40 () : void {
      metaDataPresenter.downloadConfigurationReport(repo)
    }
    
    // 'action' attribute on Link (id=auditReportLink) at UpdateSummaryPanelSet.pcf: line 108, column 37
    function action_42 () : void {
      metaDataPresenter.downloadAuditReport(repo)
    }
    
    // 'action' attribute on Link (id=deviationsReportLink) at UpdateSummaryPanelSet.pcf: line 118, column 42
    function action_44 () : void {
      metaDataPresenter.downloadDeviationsReport(repo)
    }
    
    // 'action' attribute on Link (id=ratingReportLink) at UpdateSummaryPanelSet.pcf: line 127, column 38
    function action_46 () : void {
      metaDataPresenter.downloadRatingReport(repo)
    }
    
    // 'action' attribute on Link (id=conflictsZipLink) at UpdateSummaryPanelSet.pcf: line 141, column 38
    function action_50 () : void {
      metaDataPresenter.downloadConflictFilesZip(repo)
    }
    
    // 'action' attribute on Link (id=mergedFilesZipLink) at UpdateSummaryPanelSet.pcf: line 150, column 40
    function action_52 () : void {
      metaDataPresenter.downloadMergedFilesZip(repo)
    }
    
    // 'icon' attribute on TitleBar (id=UpdateSummaryTitle) at UpdateSummaryPanelSet.pcf: line 22, column 141
    function icon_2 () : java.lang.String {
      return metaDataPresenter.Icon
    }
    
    // 'initialValue' attribute on Variable at UpdateSummaryPanelSet.pcf: line 16, column 46
    function initialValue_0 () : gw.sbt.model.SBTUpdateMetaData {
      return metaDataPresenter.AvailableSBTUpdate
    }
    
    // 'label' attribute on TextInput (id=CwEffDateAndVersion_Input) at UpdateSummaryPanelSet.pcf: line 52, column 79
    function label_24 () : java.lang.Object {
      return metaDataPresenter.CwEditionLabel
    }
    
    // 'label' attribute on TextCell (id=NumberAdded_Cell) at UpdateSummaryPanelSet.pcf: line 173, column 42
    function label_54 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getSummaryStatisticsLabel(metaDataPresenter.HasLatestAdoptedSBTUpdateEdition, UpdateDiffType.TC_NEW)
    }
    
    // 'label' attribute on TextCell (id=NumberUpdated_Cell) at UpdateSummaryPanelSet.pcf: line 178, column 42
    function label_56 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getSummaryStatisticsLabel(metaDataPresenter.HasLatestAdoptedSBTUpdateEdition, UpdateDiffType.TC_CHANGED)
    }
    
    // 'label' attribute on TextCell (id=NumberDeleted_Cell) at UpdateSummaryPanelSet.pcf: line 183, column 42
    function label_58 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getSummaryStatisticsLabel(metaDataPresenter.HasLatestAdoptedSBTUpdateEdition, UpdateDiffType.TC_DELETED)
    }
    
    // 'value' attribute on TextCell (id=NumberAdded_Cell) at UpdateSummaryPanelSet.pcf: line 173, column 42
    function sortValue_55 (artifactStatistics :  gw.sbt.pca.view.ArtifactStatistics) : java.lang.Object {
      return artifactStatistics.NumberAdded
    }
    
    // 'value' attribute on TextCell (id=NumberUpdated_Cell) at UpdateSummaryPanelSet.pcf: line 178, column 42
    function sortValue_57 (artifactStatistics :  gw.sbt.pca.view.ArtifactStatistics) : java.lang.Object {
      return artifactStatistics.NumberUpdated
    }
    
    // 'value' attribute on TextCell (id=NumberDeleted_Cell) at UpdateSummaryPanelSet.pcf: line 183, column 42
    function sortValue_59 (artifactStatistics :  gw.sbt.pca.view.ArtifactStatistics) : java.lang.Object {
      return artifactStatistics.NumberDeleted
    }
    
    // 'title' attribute on TitleBar (id=UpdateSummaryTitle) at UpdateSummaryPanelSet.pcf: line 22, column 141
    function title_1 () : java.lang.String {
      return getUpdateSummaryTitle(metaDataPresenter.Line, metaDataPresenter.Jurisdiction, metaDataPresenter.AvailableSBTUpdateEdition)
    }
    
    // 'value' attribute on TextInput (id=Line_Input) at UpdateSummaryPanelSet.pcf: line 29, column 74
    function valueRoot_4 () : java.lang.Object {
      return metaDataPresenter
    }
    
    // 'value' attribute on TextInput (id=LatestAdoptedSBTEffDateAndVersion_Input) at UpdateSummaryPanelSet.pcf: line 38, column 104
    function value_10 () : java.lang.String {
      return metaDataPresenter.LatestAdoptedSBTUpdateEdition
    }
    
    // 'value' attribute on TextInput (id=LatestAdoptedSBTCwEffDateAndVersion_Input) at UpdateSummaryPanelSet.pcf: line 43, column 104
    function value_15 () : java.lang.String {
      return metaDataPresenter.LatestAdoptedSBTUpdateCwEdition
    }
    
    // 'value' attribute on TextInput (id=NewSBTEffDateAndVersion_Input) at UpdateSummaryPanelSet.pcf: line 48, column 100
    function value_20 () : java.lang.String {
      return metaDataPresenter.AvailableSBTUpdateEdition
    }
    
    // 'value' attribute on TextInput (id=CwEffDateAndVersion_Input) at UpdateSummaryPanelSet.pcf: line 52, column 79
    function value_25 () : java.lang.String {
      return metaDataPresenter.CwEdition
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at UpdateSummaryPanelSet.pcf: line 56, column 83
    function value_29 () : java.lang.String {
      return metaDataPresenter.DisplayStatus
    }
    
    // 'value' attribute on TextInput (id=Line_Input) at UpdateSummaryPanelSet.pcf: line 29, column 74
    function value_3 () : java.lang.String {
      return metaDataPresenter.Line
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at UpdateSummaryPanelSet.pcf: line 33, column 82
    function value_6 () : java.lang.String {
      return metaDataPresenter.Jurisdiction
    }
    
    // 'value' attribute on RowIterator at UpdateSummaryPanelSet.pcf: line 161, column 132
    function value_78 () : java.util.List<gw.sbt.pca.view.ArtifactStatistics> {
      return metaDataPresenter.getArtifactStatistics(repo)
    }
    
    // 'visible' attribute on TextInput (id=NewSBTEffDateAndVersion_Input) at UpdateSummaryPanelSet.pcf: line 48, column 100
    function visible_19 () : java.lang.Boolean {
      return metaDataPresenter.HasAvailableSBTUpdateEdition
    }
    
    // 'visible' attribute on ContentInput at UpdateSummaryPanelSet.pcf: line 59, column 57
    function visible_33 () : java.lang.Boolean {
      return metaDataPresenter.hasCWRCRN(repo)
    }
    
    // 'visible' attribute on ContentInput at UpdateSummaryPanelSet.pcf: line 69, column 60
    function visible_35 () : java.lang.Boolean {
      return metaDataPresenter.hasStateRCRN(repo)
    }
    
    // 'visible' attribute on TextInput (id=spacer_Input) at UpdateSummaryPanelSet.pcf: line 80, column 90
    function visible_36 () : java.lang.Boolean {
      return metaDataPresenter.hasAnyReport(repo)
    }
    
    // 'visible' attribute on ContentInput at UpdateSummaryPanelSet.pcf: line 83, column 61
    function visible_39 () : java.lang.Boolean {
      return metaDataPresenter.hasLoadReport(repo)
    }
    
    // 'visible' attribute on ContentInput at UpdateSummaryPanelSet.pcf: line 93, column 70
    function visible_41 () : java.lang.Boolean {
      return metaDataPresenter.hasConfigurationReport(repo)
    }
    
    // 'visible' attribute on ContentInput at UpdateSummaryPanelSet.pcf: line 103, column 62
    function visible_43 () : java.lang.Boolean {
      return metaDataPresenter.hasAuditReport(repo)
    }
    
    // 'visible' attribute on ContentInput at UpdateSummaryPanelSet.pcf: line 112, column 67
    function visible_45 () : java.lang.Boolean {
      return metaDataPresenter.hasDeviationsReport(repo)
    }
    
    // 'visible' attribute on ContentInput at UpdateSummaryPanelSet.pcf: line 122, column 63
    function visible_47 () : java.lang.Boolean {
      return metaDataPresenter.hasRatingReport(repo)
    }
    
    // 'visible' attribute on TextInput (id=spacer2_Input) at UpdateSummaryPanelSet.pcf: line 133, column 43
    function visible_48 () : java.lang.Boolean {
      return metaDataPresenter.hasConflictFilesZip(repo) or metaDataPresenter.hasMergedFilesZip(repo)
    }
    
    // 'visible' attribute on ContentInput at UpdateSummaryPanelSet.pcf: line 136, column 67
    function visible_51 () : java.lang.Boolean {
      return metaDataPresenter.hasConflictFilesZip(repo)
    }
    
    // 'visible' attribute on ContentInput at UpdateSummaryPanelSet.pcf: line 145, column 65
    function visible_53 () : java.lang.Boolean {
      return metaDataPresenter.hasMergedFilesZip(repo)
    }
    
    // 'visible' attribute on ListViewPanel at UpdateSummaryPanelSet.pcf: line 156, column 56
    function visible_79 () : java.lang.Boolean {
      return metaDataPresenter.ValidUpdatesSelected
    }
    
    // 'visible' attribute on TextInput (id=LatestAdoptedSBTEffDateAndVersion_Input) at UpdateSummaryPanelSet.pcf: line 38, column 104
    function visible_9 () : java.lang.Boolean {
      return metaDataPresenter.HasLatestAdoptedSBTUpdateEdition
    }
    
    property get metaDataPresenter () : gw.sbt.pca.view.presenter.MetaDataPresenter {
      return getRequireValue("metaDataPresenter", 0) as gw.sbt.pca.view.presenter.MetaDataPresenter
    }
    
    property set metaDataPresenter ($arg :  gw.sbt.pca.view.presenter.MetaDataPresenter) {
      setRequireValue("metaDataPresenter", 0, $arg)
    }
    
    property get repo () : gw.sbt.pca.repository.ContentRepository {
      return getRequireValue("repo", 0) as gw.sbt.pca.repository.ContentRepository
    }
    
    property set repo ($arg :  gw.sbt.pca.repository.ContentRepository) {
      setRequireValue("repo", 0, $arg)
    }
    
    property get selectedSBTUpdateMetadata () : gw.sbt.model.SBTUpdateMetaData {
      return getVariableValue("selectedSBTUpdateMetadata", 0) as gw.sbt.model.SBTUpdateMetaData
    }
    
    property set selectedSBTUpdateMetadata ($arg :  gw.sbt.model.SBTUpdateMetaData) {
      setVariableValue("selectedSBTUpdateMetadata", 0, $arg)
    }
    
    function getUpdateSummaryTitle(line: String, formattedJurisdiction: String, edition: String) : String {
      var title = line +" - " + formattedJurisdiction
      if(edition.HasContent){
        title += " - "+edition
      }
      return title
    }
    
    
  }
  
  
}