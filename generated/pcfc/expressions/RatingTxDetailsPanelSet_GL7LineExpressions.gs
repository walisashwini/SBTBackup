package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/RatingTxDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_GL7LineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/RatingTxDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at RatingTxDetailsPanelSet.GL7Line.pcf: line 52, column 64
    function def_onEnter_5 (def :  pcf.GL7CostChangeDetailsRowSet) : void {
      def.onEnter(line, txDisplayUtil)
    }
    
    // 'def' attribute on RowSetRef at RatingTxDetailsPanelSet.GL7Line.pcf: line 52, column 64
    function def_refreshVariables_6 (def :  pcf.GL7CostChangeDetailsRowSet) : void {
      def.refreshVariables(line, txDisplayUtil)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GL7Line.pcf: line 26, column 23
    function initialValue_0 () : GL7Line {
      return thePeriod.GL7Line
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GL7Line.pcf: line 31, column 36
    function initialValue_1 () : gw.lob.gl7.financials.GL7TxDisplayUtil {
      return new gw.lob.gl7.financials.GL7TxDisplayUtil(line)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GL7Line.pcf: line 36, column 36
    function initialValue_2 () : java.util.Map<gw.lang.reflect.IType, java.util.List<entity.Coverable>> {
      return txDisplayUtil.getCoverablesWithTrxnsByType()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GL7Line.pcf: line 41, column 36
    function initialValue_3 () : java.util.List<entity.GL7Transaction> {
      return txDisplayUtil.getLineLevelTrxns()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GL7Line.pcf: line 45, column 40
    function initialValue_4 () : List<Jurisdiction> {
      return txDisplayUtil.getJurisdictions()
    }
    
    property get cblByType () : java.util.Map<gw.lang.reflect.IType, java.util.List<entity.Coverable>> {
      return getVariableValue("cblByType", 0) as java.util.Map<gw.lang.reflect.IType, java.util.List<entity.Coverable>>
    }
    
    property set cblByType ($arg :  java.util.Map<gw.lang.reflect.IType, java.util.List<entity.Coverable>>) {
      setVariableValue("cblByType", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get jurisdictions () : List<Jurisdiction> {
      return getVariableValue("jurisdictions", 0) as List<Jurisdiction>
    }
    
    property set jurisdictions ($arg :  List<Jurisdiction>) {
      setVariableValue("jurisdictions", 0, $arg)
    }
    
    property get line () : GL7Line {
      return getVariableValue("line", 0) as GL7Line
    }
    
    property set line ($arg :  GL7Line) {
      setVariableValue("line", 0, $arg)
    }
    
    property get lineLevelTrxns () : java.util.List<entity.GL7Transaction> {
      return getVariableValue("lineLevelTrxns", 0) as java.util.List<entity.GL7Transaction>
    }
    
    property set lineLevelTrxns ($arg :  java.util.List<entity.GL7Transaction>) {
      setVariableValue("lineLevelTrxns", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    property get revOpenForEdit () : boolean {
      return getRequireValue("revOpenForEdit", 0) as java.lang.Boolean
    }
    
    property set revOpenForEdit ($arg :  boolean) {
      setRequireValue("revOpenForEdit", 0, $arg)
    }
    
    property get thePeriod () : PolicyPeriod {
      return getRequireValue("thePeriod", 0) as PolicyPeriod
    }
    
    property set thePeriod ($arg :  PolicyPeriod) {
      setRequireValue("thePeriod", 0, $arg)
    }
    
    property get totalCostLabel () : String {
      return getRequireValue("totalCostLabel", 0) as String
    }
    
    property set totalCostLabel ($arg :  String) {
      setRequireValue("totalCostLabel", 0, $arg)
    }
    
    property get totalPremLabel () : String {
      return getRequireValue("totalPremLabel", 0) as String
    }
    
    property set totalPremLabel ($arg :  String) {
      setRequireValue("totalPremLabel", 0, $arg)
    }
    
    property get txDisplayUtil () : gw.lob.gl7.financials.GL7TxDisplayUtil {
      return getVariableValue("txDisplayUtil", 0) as gw.lob.gl7.financials.GL7TxDisplayUtil
    }
    
    property set txDisplayUtil ($arg :  gw.lob.gl7.financials.GL7TxDisplayUtil) {
      setVariableValue("txDisplayUtil", 0, $arg)
    }
    
    
  }
  
  
}