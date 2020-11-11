package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposurePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7ExposurePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposurePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7ExposurePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, presenter :  gw.lob.gl7.presenters.GL7ExposurePresenter, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=GL7ExposurePopup) at GL7ExposurePopup.pcf: line 10, column 91
    function beforeCommit_3 (pickedValue :  java.lang.Object) : void {
      gw.lob.gl7.pcf.GL7ValidationUtil.beforeSaveExposures(policyPeriod)
    }
    
    // 'canEdit' attribute on Popup (id=GL7ExposurePopup) at GL7ExposurePopup.pcf: line 10, column 91
    function canEdit_4 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at GL7ExposurePopup.pcf: line 30, column 124
    function def_onEnter_1 (def :  pcf.GL7ExposureCV) : void {
      def.onEnter(policyPeriod, presenter, true, jobWizardHelper, gw.lob.gl7.GL7Category.CategoriesForExposure)
    }
    
    // 'def' attribute on PanelRef at GL7ExposurePopup.pcf: line 30, column 124
    function def_refreshVariables_2 (def :  pcf.GL7ExposureCV) : void {
      def.refreshVariables(policyPeriod, presenter, true, jobWizardHelper, gw.lob.gl7.GL7Category.CategoriesForExposure)
    }
    
    // EditButtons at GL7ExposurePopup.pcf: line 27, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.GL7ExposurePopup {
      return super.CurrentLocation as pcf.GL7ExposurePopup
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7ExposurePresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7ExposurePresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7ExposurePresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    
  }
  
  
}