package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/RatingCumulDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_GL7LineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/RatingCumulDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.GL7Line.pcf: line 28, column 36
    function def_onEnter_2 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, line, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on RowSetRef at RatingCumulDetailsPanelSet.GL7Line.pcf: line 36, column 75
    function def_onEnter_4 (def :  pcf.GL7RatingDetailsRowSet) : void {
      def.onEnter(line, quoteDisplayUtil, true)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.GL7Line.pcf: line 28, column 36
    function def_refreshVariables_3 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, line, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on RowSetRef at RatingCumulDetailsPanelSet.GL7Line.pcf: line 36, column 75
    function def_refreshVariables_5 (def :  pcf.GL7RatingDetailsRowSet) : void {
      def.refreshVariables(line, quoteDisplayUtil, true)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.GL7Line.pcf: line 20, column 23
    function initialValue_0 () : GL7Line {
      return period.GL7Line
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.GL7Line.pcf: line 25, column 36
    function initialValue_1 () : gw.lob.gl7.financials.GL7QuoteDisplayUtil {
      return new gw.lob.gl7.financials.GL7QuoteDisplayUtil(line)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : GL7Line {
      return getVariableValue("line", 0) as GL7Line
    }
    
    property set line ($arg :  GL7Line) {
      setVariableValue("line", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.lob.gl7.financials.GL7QuoteDisplayUtil {
      return getVariableValue("quoteDisplayUtil", 0) as gw.lob.gl7.financials.GL7QuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.gl7.financials.GL7QuoteDisplayUtil) {
      setVariableValue("quoteDisplayUtil", 0, $arg)
    }
    
    
  }
  
  
}