package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7LocationPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7LocationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, theAccountLocation :  AccountLocation, location :  PolicyLocation, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=GL7LocationPopup) at GL7LocationPopup.pcf: line 14, column 105
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      gw.api.web.PebblesUtil.invalidateIterators(TopLocation, PolicyLocation)
    }
    
    // 'afterEnter' attribute on Popup (id=GL7LocationPopup) at GL7LocationPopup.pcf: line 14, column 105
    function afterEnter_5 () : void {
      initialize()
    }
    
    // 'beforeCommit' attribute on Popup (id=GL7LocationPopup) at GL7LocationPopup.pcf: line 14, column 105
    function beforeCommit_6 (pickedValue :  PolicyLocation) : void {
      presenter.removeUnselectedLocations(); presenter.syncTerritoryIndicator(); gw.lob.gl7.pcf.GL7ValidationUtil.beforeSaveLocation(location)
    }
    
    // 'canEdit' attribute on Popup (id=GL7LocationPopup) at GL7LocationPopup.pcf: line 14, column 105
    function canEdit_7 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at GL7LocationPopup.pcf: line 46, column 98
    function def_onEnter_2 (def :  pcf.GL7LocationDetailCV) : void {
      def.onEnter(policyPeriod, presenter, openForEdit, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7LocationPopup.pcf: line 46, column 98
    function def_refreshVariables_3 (def :  pcf.GL7LocationDetailCV) : void {
      def.refreshVariables(policyPeriod, presenter, openForEdit, false, jobWizardHelper)
    }
    
    // EditButtons at GL7LocationPopup.pcf: line 43, column 33
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at GL7LocationPopup.pcf: line 43, column 33
    function pickValue_0 () : PolicyLocation {
      return location
    }
    
    // 'startInEditMode' attribute on Popup (id=GL7LocationPopup) at GL7LocationPopup.pcf: line 14, column 105
    function startInEditMode_8 () : java.lang.Boolean {
      return startInEdit
    }
    
    override property get CurrentLocation () : pcf.GL7LocationPopup {
      return super.CurrentLocation as pcf.GL7LocationPopup
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get location () : PolicyLocation {
      return getVariableValue("location", 0) as PolicyLocation
    }
    
    property set location ($arg :  PolicyLocation) {
      setVariableValue("location", 0, $arg)
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
    
    property get presenter () : gw.lob.gl7.presenters.GL7LocationPresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7LocationPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7LocationPresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    property get startInEdit () : boolean {
      return getVariableValue("startInEdit", 0) as java.lang.Boolean
    }
    
    property set startInEdit ($arg :  boolean) {
      setVariableValue("startInEdit", 0, $arg)
    }
    
    property get theAccountLocation () : AccountLocation {
      return getVariableValue("theAccountLocation", 0) as AccountLocation
    }
    
    property set theAccountLocation ($arg :  AccountLocation) {
      setVariableValue("theAccountLocation", 0, $arg)
    }
    
    function initialize() {
      if (location == null) {
        location = theAccountLocation == null
            ? policyPeriod.newLocation()
            : policyPeriod.newLocation(theAccountLocation)
      }
    
      presenter = new gw.lob.gl7.presenters.GL7LocationPresenter(policyPeriod.GL7Line, location)
    }
    
    
  }
  
  
}