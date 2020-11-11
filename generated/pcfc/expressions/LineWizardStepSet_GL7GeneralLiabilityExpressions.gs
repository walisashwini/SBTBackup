package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/job/LineWizardStepSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_GL7GeneralLiabilityExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/job/LineWizardStepSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=SublineSelection) at LineWizardStepSet.GL7GeneralLiability.pcf: line 25, column 76
    function beforeSave_0 () : void {
      gw.lob.gl7.pcf.GL7ValidationUtil.beforeSaveSublines(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.GL7GeneralLiability.pcf: line 44, column 73
    function beforeSave_13 () : void {
      gw.policy.PolicyLocationValidation.validateLocationsStep(policyPeriod.PolicyLocations); gw.lob.gl7.pcf.GL7ValidationUtil.beforeSaveExposures(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Exposures) at LineWizardStepSet.GL7GeneralLiability.pcf: line 50, column 69
    function beforeSave_17 () : void {
      gw.lob.gl7.pcf.GL7ValidationUtil.beforeSaveExposures(policyPeriod)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GL7GeneralLiability.pcf: line 63, column 69
    function onEnter_25 () : void {
      policyPeriod.GL7Line.syncAllModifiers()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=GeneralLiabilityCoverages) at LineWizardStepSet.GL7GeneralLiability.pcf: line 32, column 76
    function onEnter_4 () : void {
      policyPeriod.GL7Line.syncLineWizardStepOnEnter(jobWizardHelper)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GL7GeneralLiability.pcf: line 63, column 69
    function onExit_26 () : void {
      policyPeriod.GL7Line.setScheduleRatingModificationApplies()
    }
    
    // 'onExit' attribute on JobWizardStep (id=GeneralLiabilityCoverages) at LineWizardStepSet.GL7GeneralLiability.pcf: line 32, column 76
    function onExit_5 () : void {
      policyPeriod.GL7Line.syncLineWizardStepOnExit(jobWizardHelper)
    }
    
    // 'onExit' attribute on JobWizardStep (id=StateSpecificInformation) at LineWizardStepSet.GL7GeneralLiability.pcf: line 38, column 84
    function onExit_9 () : void {
      policyPeriod.GL7Line.syncLocationAddressFields()
    }
    
    // 'save' attribute on JobWizardStep (id=SublineSelection) at LineWizardStepSet.GL7GeneralLiability.pcf: line 25, column 76
    function save_1 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=StateSpecificInformation) at LineWizardStepSet.GL7GeneralLiability.pcf: line 38, column 84
    function screen_onEnter_11 (def :  pcf.GL7StateSpecificInfoScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.GL7GeneralLiability.pcf: line 44, column 73
    function screen_onEnter_15 (def :  pcf.GL7LocationsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.GL7Line.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=Exposures) at LineWizardStepSet.GL7GeneralLiability.pcf: line 50, column 69
    function screen_onEnter_19 (def :  pcf.GL7ExposuresScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=SublineSelection) at LineWizardStepSet.GL7GeneralLiability.pcf: line 25, column 76
    function screen_onEnter_2 (def :  pcf.GL7SublineSelectionScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=UnmannedAircrafts) at LineWizardStepSet.GL7GeneralLiability.pcf: line 56, column 67
    function screen_onEnter_23 (def :  pcf.GL7UnmannedAircraftsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GL7GeneralLiability.pcf: line 63, column 69
    function screen_onEnter_28 (def :  pcf.GL7ModifiersScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=GeneralLiabilityCoverages) at LineWizardStepSet.GL7GeneralLiability.pcf: line 32, column 76
    function screen_onEnter_7 (def :  pcf.GL7GeneralLiabilityCoveragesScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=StateSpecificInformation) at LineWizardStepSet.GL7GeneralLiability.pcf: line 38, column 84
    function screen_refreshVariables_12 (def :  pcf.GL7StateSpecificInfoScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.GL7GeneralLiability.pcf: line 44, column 73
    function screen_refreshVariables_16 (def :  pcf.GL7LocationsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.GL7Line.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=Exposures) at LineWizardStepSet.GL7GeneralLiability.pcf: line 50, column 69
    function screen_refreshVariables_20 (def :  pcf.GL7ExposuresScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=UnmannedAircrafts) at LineWizardStepSet.GL7GeneralLiability.pcf: line 56, column 67
    function screen_refreshVariables_24 (def :  pcf.GL7UnmannedAircraftsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GL7GeneralLiability.pcf: line 63, column 69
    function screen_refreshVariables_29 (def :  pcf.GL7ModifiersScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=SublineSelection) at LineWizardStepSet.GL7GeneralLiability.pcf: line 25, column 76
    function screen_refreshVariables_3 (def :  pcf.GL7SublineSelectionScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=GeneralLiabilityCoverages) at LineWizardStepSet.GL7GeneralLiability.pcf: line 32, column 76
    function screen_refreshVariables_8 (def :  pcf.GL7GeneralLiabilityCoveragesScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'visible' attribute on JobWizardStep (id=UnmannedAircrafts) at LineWizardStepSet.GL7GeneralLiability.pcf: line 56, column 67
    function visible_21 () : java.lang.Boolean {
      return policyPeriod.GL7Line.isUnmannedAircraftAvailable
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
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}