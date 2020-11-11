package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/JobWizardToolbarButtonSet.Submission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolbarButtonSet_SubmissionExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/JobWizardToolbarButtonSet.Submission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Submission.pcf: line 79, column 120
    function action_13 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Submission.pcf: line 91, column 51
    function action_31 () : void {
      submissionProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.Submission.pcf: line 98, column 56
    function action_34 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on ToolbarButton (id=ConvertToFullApp) at JobWizardToolbarButtonSet.Submission.pcf: line 104, column 63
    function action_36 () : void {
      jobWizardHelper.convertQuickQuoteToFullApp(submissionProcess, policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.Submission.pcf: line 115, column 41
    function action_38 () : void {
      jobWizardHelper.attemptNewVersion(policyPeriod, job)
    }
    
    // 'action' attribute on MenuItem (id=SideBySide) at JobWizardToolbarButtonSet.Submission.pcf: line 121, column 41
    function action_41 () : void {
      sideBySideHelper.attemptSideBySide(2)
    }
    
    // 'action' attribute on MenuItem (id=ViewSideBySide) at JobWizardToolbarButtonSet.Submission.pcf: line 126, column 38
    function action_43 () : void {
      jobWizardHelper.goToStep("SideBySide")
    }
    
    // 'action' attribute on MenuItem (id=BindOnly) at JobWizardToolbarButtonSet.Submission.pcf: line 138, column 28
    function action_46 () : void {
      jobWizardHelper.invalidateIterators(); jobWizardHelper.requestIssueJob(policyPeriod, false, true)
    }
    
    // 'action' attribute on MenuItem (id=BindAndIssue) at JobWizardToolbarButtonSet.Submission.pcf: line 144, column 29
    function action_48 () : void {
      jobWizardHelper.invalidateIterators(); jobWizardHelper.requestIssueJob(policyPeriod, true, true)
    }
    
    // 'action' attribute on MenuItem (id=WithdrawJob) at JobWizardToolbarButtonSet.Submission.pcf: line 157, column 60
    function action_51 () : void {
      jobWizardHelper.withdraw(policyPeriod); JobComplete.go(submission, policyPeriod);
    }
    
    // 'action' attribute on MenuItem (id=Decline) at JobWizardToolbarButtonSet.Submission.pcf: line 163, column 59
    function action_53 () : void {
      wizard.saveDraft(); DeclineReasonPopup.push(submission, policyPeriod, wizard)
    }
    
    // 'action' attribute on MenuItem (id=NotTakenJob) at JobWizardToolbarButtonSet.Submission.pcf: line 169, column 59
    function action_55 () : void {
      wizard.saveDraft(); NotTakenReasonPopup.push(submission, policyPeriod, wizard)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Submission.pcf: line 79, column 120
    function action_dest_14 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 20, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 24, column 26
    function initialValue_1 () : Submission {
      return job as Submission
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 66, column 23
    function initialValue_10 () : boolean {
      return gw.web.job.JobUIHelper.showPostRateButton(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 71, column 48
    function initialValue_11 () : gw.web.job.JobUIHelper.QuoteType {
      return gw.web.job.JobUIHelper.getQuoteTypeForSubmission(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 28, column 40
    function initialValue_2 () : gw.job.SubmissionProcess {
      return policyPeriod.SubmissionProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 32, column 48
    function initialValue_3 () : gw.lob.common.SideBySideUIHelper {
      return new gw.lob.common.SideBySideUIHelper(policyPeriod, wizard, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 37, column 23
    function initialValue_4 () : boolean {
      return (not policyPeriod.UWLockedAndNoOverride) and submissionProcess.canMakeNewVersion().Okay 
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 42, column 23
    function initialValue_5 () : boolean {
      return sideBySideHelper.canAttemptSideBySide()
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 46, column 23
    function initialValue_6 () : boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.hasMultiplePeriods()and policyPeriod.Job.SideBySide
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 51, column 23
    function initialValue_7 () : boolean {
      return policyPeriod.mustInvalidateQuoteBeforeReleasingUWEditLock(User.util.CurrentUser.UWAuthorityProfiles)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 56, column 23
    function initialValue_8 () : boolean {
      return submissionProcess.canBind().Okay
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Submission.pcf: line 61, column 23
    function initialValue_9 () : boolean {
      return submissionProcess.canIssue().Okay
    }
    
    // 'label' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.Submission.pcf: line 115, column 41
    function label_39 () : java.lang.Object {
      return sideBySideHelper.getVersionLabel()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function mode_17 () : java.lang.Object {
      return quoteType
    }
    
    // 'showConfirmMessage' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Submission.pcf: line 79, column 120
    function showConfirmMessage_15 () : java.lang.Boolean {
      return releaseLockShowConfirmMessage
    }
    
    // 'showConfirmMessage' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Submission.pcf: line 91, column 51
    function showConfirmMessage_32 () : java.lang.Boolean {
      return canBind or canFinishQuote or policyPeriod.Submission.QuickMode
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_onEnter_18 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_onEnter_20 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_onEnter_22 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_onEnter_24 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_onEnter_26 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_onEnter_28 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_refreshVariables_21 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_refreshVariables_23 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_refreshVariables_25 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_refreshVariables_27 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function toolbarButtonSet_refreshVariables_29 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Submission.pcf: line 79, column 120
    function visible_12 () : java.lang.Boolean {
      return submissionProcess.canReleaseLock() and !gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Submission.pcf: line 83, column 35
    function visible_16 () : java.lang.Boolean {
      return quoteType != null
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Submission.pcf: line 91, column 51
    function visible_30 () : java.lang.Boolean {
      return submissionProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.Submission.pcf: line 98, column 56
    function visible_33 () : java.lang.Boolean {
      return submissionProcess.canSaveDraft().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=ConvertToFullApp) at JobWizardToolbarButtonSet.Submission.pcf: line 104, column 63
    function visible_35 () : java.lang.Boolean {
      return submissionProcess.canConvertToFullApp().Okay
    }
    
    // 'visible' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.Submission.pcf: line 115, column 41
    function visible_37 () : java.lang.Boolean {
      return canPerformNewVersion
    }
    
    // 'visible' attribute on MenuItem (id=SideBySide) at JobWizardToolbarButtonSet.Submission.pcf: line 121, column 41
    function visible_40 () : java.lang.Boolean {
      return canPerformSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=ViewSideBySide) at JobWizardToolbarButtonSet.Submission.pcf: line 126, column 38
    function visible_42 () : java.lang.Boolean {
      return canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=Versions) at JobWizardToolbarButtonSet.Submission.pcf: line 109, column 83
    function visible_44 () : java.lang.Boolean {
      return canPerformNewVersion or canPerformSideBySide or canViewSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=BindOnly) at JobWizardToolbarButtonSet.Submission.pcf: line 138, column 28
    function visible_45 () : java.lang.Boolean {
      return canBind
    }
    
    // 'visible' attribute on MenuItem (id=BindAndIssue) at JobWizardToolbarButtonSet.Submission.pcf: line 144, column 29
    function visible_47 () : java.lang.Boolean {
      return canIssue
    }
    
    // 'visible' attribute on ToolbarButton (id=BindOptions) at JobWizardToolbarButtonSet.Submission.pcf: line 132, column 87
    function visible_49 () : java.lang.Boolean {
      return submissionProcess.canBind().Okay or submissionProcess.canIssue().Okay
    }
    
    // 'visible' attribute on MenuItem (id=WithdrawJob) at JobWizardToolbarButtonSet.Submission.pcf: line 157, column 60
    function visible_50 () : java.lang.Boolean {
      return submissionProcess.canWithdrawJob().Okay
    }
    
    // 'visible' attribute on MenuItem (id=Decline) at JobWizardToolbarButtonSet.Submission.pcf: line 163, column 59
    function visible_52 () : java.lang.Boolean {
      return submissionProcess.canDeclineJob().Okay
    }
    
    // 'visible' attribute on MenuItem (id=NotTakenJob) at JobWizardToolbarButtonSet.Submission.pcf: line 169, column 59
    function visible_54 () : java.lang.Boolean {
      return submissionProcess.canNotTakeJob().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=CloseOptions) at JobWizardToolbarButtonSet.Submission.pcf: line 150, column 210
    function visible_56 () : java.lang.Boolean {
      return !gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod) and (submissionProcess.canWithdrawJob().Okay or submissionProcess.canDeclineJob().Okay or submissionProcess.canNotTakeJob().Okay)
    }
    
    property get canBind () : boolean {
      return getVariableValue("canBind", 0) as java.lang.Boolean
    }
    
    property set canBind ($arg :  boolean) {
      setVariableValue("canBind", 0, $arg)
    }
    
    property get canFinishQuote () : boolean {
      return getVariableValue("canFinishQuote", 0) as java.lang.Boolean
    }
    
    property set canFinishQuote ($arg :  boolean) {
      setVariableValue("canFinishQuote", 0, $arg)
    }
    
    property get canIssue () : boolean {
      return getVariableValue("canIssue", 0) as java.lang.Boolean
    }
    
    property set canIssue ($arg :  boolean) {
      setVariableValue("canIssue", 0, $arg)
    }
    
    property get canPerformNewVersion () : boolean {
      return getVariableValue("canPerformNewVersion", 0) as java.lang.Boolean
    }
    
    property set canPerformNewVersion ($arg :  boolean) {
      setVariableValue("canPerformNewVersion", 0, $arg)
    }
    
    property get canPerformSideBySide () : boolean {
      return getVariableValue("canPerformSideBySide", 0) as java.lang.Boolean
    }
    
    property set canPerformSideBySide ($arg :  boolean) {
      setVariableValue("canPerformSideBySide", 0, $arg)
    }
    
    property get canViewSideBySide () : boolean {
      return getVariableValue("canViewSideBySide", 0) as java.lang.Boolean
    }
    
    property set canViewSideBySide ($arg :  boolean) {
      setVariableValue("canViewSideBySide", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get quoteType () : gw.web.job.JobUIHelper.QuoteType {
      return getVariableValue("quoteType", 0) as gw.web.job.JobUIHelper.QuoteType
    }
    
    property set quoteType ($arg :  gw.web.job.JobUIHelper.QuoteType) {
      setVariableValue("quoteType", 0, $arg)
    }
    
    property get releaseLockShowConfirmMessage () : boolean {
      return getVariableValue("releaseLockShowConfirmMessage", 0) as java.lang.Boolean
    }
    
    property set releaseLockShowConfirmMessage ($arg :  boolean) {
      setVariableValue("releaseLockShowConfirmMessage", 0, $arg)
    }
    
    property get sideBySideHelper () : gw.lob.common.SideBySideUIHelper {
      return getVariableValue("sideBySideHelper", 0) as gw.lob.common.SideBySideUIHelper
    }
    
    property set sideBySideHelper ($arg :  gw.lob.common.SideBySideUIHelper) {
      setVariableValue("sideBySideHelper", 0, $arg)
    }
    
    property get submission () : Submission {
      return getVariableValue("submission", 0) as Submission
    }
    
    property set submission ($arg :  Submission) {
      setVariableValue("submission", 0, $arg)
    }
    
    property get submissionProcess () : gw.job.SubmissionProcess {
      return getVariableValue("submissionProcess", 0) as gw.job.SubmissionProcess
    }
    
    property set submissionProcess ($arg :  gw.job.SubmissionProcess) {
      setVariableValue("submissionProcess", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}