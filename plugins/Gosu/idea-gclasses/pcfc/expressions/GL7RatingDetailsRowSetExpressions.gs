package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7RatingDetailsRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7RatingDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 19, column 40
    function initialValue_0 () : List<Jurisdiction> {
      return quoteDisplayUtil.JurisdictionsWithLocations.sortBy(\ jur -> jur.DisplayName)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 23, column 59
    function initialValue_1 () : java.util.List<entity.PolicyLocation> {
      return quoteDisplayUtil.LocationsFromUnmannedAircrafts
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 27, column 86
    function initialValue_2 () : java.util.List<gw.util.Pair<String, java.math.BigDecimal>> {
      return quoteDisplayUtil.UnmannedAircraftCostByCoverage
    }
    
    // 'value' attribute on RowIterator (id=qualifier) at GL7RatingDetailsRowSet.pcf: line 34, column 62
    function value_92 () : java.util.List<productmodel.GL7Line> {
      return java.util.Arrays.asList({line})
    }
    
    // 'visible' attribute on TextCell (id=CostTermAmount_Cell) at GL7RatingDetailsRowSet.pcf: line 59, column 31
    function visible_3 () : java.lang.Boolean {
      return prorated
    }
    
    property get jurisdictions () : List<Jurisdiction> {
      return getVariableValue("jurisdictions", 0) as List<Jurisdiction>
    }
    
    property set jurisdictions ($arg :  List<Jurisdiction>) {
      setVariableValue("jurisdictions", 0, $arg)
    }
    
    property get line () : GL7Line {
      return getRequireValue("line", 0) as GL7Line
    }
    
    property set line ($arg :  GL7Line) {
      setRequireValue("line", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getRequireValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setRequireValue("prorated", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.lob.gl7.financials.GL7QuoteDisplayUtil {
      return getRequireValue("quoteDisplayUtil", 0) as gw.lob.gl7.financials.GL7QuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.gl7.financials.GL7QuoteDisplayUtil) {
      setRequireValue("quoteDisplayUtil", 0, $arg)
    }
    
    property get unmannedAircraftCostsByCoverage () : java.util.List<gw.util.Pair<String, java.math.BigDecimal>> {
      return getVariableValue("unmannedAircraftCostsByCoverage", 0) as java.util.List<gw.util.Pair<String, java.math.BigDecimal>>
    }
    
    property set unmannedAircraftCostsByCoverage ($arg :  java.util.List<gw.util.Pair<String, java.math.BigDecimal>>) {
      setVariableValue("unmannedAircraftCostsByCoverage", 0, $arg)
    }
    
    property get unmannedAircraftsLocations () : java.util.List<entity.PolicyLocation> {
      return getVariableValue("unmannedAircraftsLocations", 0) as java.util.List<entity.PolicyLocation>
    }
    
    property set unmannedAircraftsLocations ($arg :  java.util.List<entity.PolicyLocation>) {
      setVariableValue("unmannedAircraftsLocations", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry10ExpressionsImpl extends IteratorEntry9ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 351, column 140
    function def_onEnter_75 (def :  pcf.GL7CostRowSet) : void {
      def.onEnter(unmannedAirCraftCosts, null, quoteDisplayUtil, quoteDisplayUtil.getSchedules(unmannedAircraft), true)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 351, column 140
    function def_refreshVariables_76 (def :  pcf.GL7CostRowSet) : void {
      def.refreshVariables(unmannedAirCraftCosts, null, quoteDisplayUtil, quoteDisplayUtil.getSchedules(unmannedAircraft), true)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 339, column 43
    function initialValue_72 () : List<GL7Cost> {
      return quoteDisplayUtil.getSortedCostsByUnmannedAircraft(unmannedAircraft)
    }
    
    // RowIterator (id=UnmannedAircraft) at GL7RatingDetailsRowSet.pcf: line 335, column 74
    function initializeVariables_77 () : void {
        unmannedAirCraftCosts = quoteDisplayUtil.getSortedCostsByUnmannedAircraft(unmannedAircraft);

    }
    
    // 'value' attribute on TextCell (id=desc_Cell) at GL7RatingDetailsRowSet.pcf: line 348, column 92
    function value_73 () : java.lang.String {
      return quoteDisplayUtil.getUnmannedAircraftDescription(unmannedAircraft)
    }
    
    property get unmannedAirCraftCosts () : List<GL7Cost> {
      return getVariableValue("unmannedAirCraftCosts", 3) as List<GL7Cost>
    }
    
    property set unmannedAirCraftCosts ($arg :  List<GL7Cost>) {
      setVariableValue("unmannedAirCraftCosts", 3, $arg)
    }
    
    property get unmannedAircraft () : entity.GL7UnmannedAircraft {
      return getIteratedValue(3) as entity.GL7UnmannedAircraft
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry11ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=UnmannedAircraftTotalAmount_Cell) at GL7RatingDetailsRowSet.pcf: line 376, column 47
    function valueRoot_85 () : java.lang.Object {
      return costByCoverage
    }
    
    // 'value' attribute on TextCell (id=CoverageSubTotal_Cell) at GL7RatingDetailsRowSet.pcf: line 371, column 43
    function value_82 () : java.lang.String {
      return costByCoverage.First+' ' + DisplayKey.get("Web.Policy.GL7.Financials.Subtotal")
    }
    
    // 'value' attribute on TextCell (id=UnmannedAircraftTotalAmount_Cell) at GL7RatingDetailsRowSet.pcf: line 376, column 47
    function value_84 () : java.math.BigDecimal {
      return costByCoverage.Second
    }
    
    property get costByCoverage () : gw.util.Pair<String, java.math.BigDecimal> {
      return getIteratedValue(2) as gw.util.Pair<String, java.math.BigDecimal>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 108, column 124
    function def_onEnter_16 (def :  pcf.GL7CostRowSet) : void {
      def.onEnter(sublineTypeCosts, null, quoteDisplayUtil, quoteDisplayUtil.getSchedules(sublineType), true)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 108, column 124
    function def_refreshVariables_17 (def :  pcf.GL7CostRowSet) : void {
      def.refreshVariables(sublineTypeCosts, null, quoteDisplayUtil, quoteDisplayUtil.getSchedules(sublineType), true)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 96, column 39
    function initialValue_11 () : List<GL7Cost> {
      return quoteDisplayUtil.getSortedCostsBySublineType(sublineType)
    }
    
    // RowIterator (id=SublineTypeIterator) at GL7RatingDetailsRowSet.pcf: line 92, column 65
    function initializeVariables_18 () : void {
        sublineTypeCosts = quoteDisplayUtil.getSortedCostsBySublineType(sublineType);

    }
    
    // 'value' attribute on TextCell (id=SublineTypeLabel_Cell) at GL7RatingDetailsRowSet.pcf: line 105, column 50
    function valueRoot_13 () : java.lang.Object {
      return sublineType
    }
    
    // 'value' attribute on TextCell (id=SublineTypeLabel_Cell) at GL7RatingDetailsRowSet.pcf: line 105, column 50
    function value_12 () : java.lang.String {
      return sublineType.SublineTypeName
    }
    
    // 'visible' attribute on Row at GL7RatingDetailsRowSet.pcf: line 98, column 63
    function visible_15 () : java.lang.Boolean {
      return quoteDisplayUtil.hasAnyCosts(sublineType)
    }
    
    property get sublineType () : entity.GL7SublineType {
      return getIteratedValue(2) as entity.GL7SublineType
    }
    
    property get sublineTypeCosts () : List<GL7Cost> {
      return getVariableValue("sublineTypeCosts", 2) as List<GL7Cost>
    }
    
    property set sublineTypeCosts ($arg :  List<GL7Cost>) {
      setVariableValue("sublineTypeCosts", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=StateSpecificInformationStateLabel_Cell) at GL7RatingDetailsRowSet.pcf: line 131, column 47
    function valueRoot_23 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TextCell (id=StateSpecificInformationStateLabel_Cell) at GL7RatingDetailsRowSet.pcf: line 131, column 47
    function value_22 () : java.lang.String {
      return jurisdiction.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=SublineIterator) at GL7RatingDetailsRowSet.pcf: line 139, column 63
    function value_32 () : java.util.List<entity.GL7Subline> {
      return quoteDisplayUtil.getSublinesByJurisdiction(jurisdiction)
    }
    
    property get jurisdiction () : typekey.Jurisdiction {
      return getIteratedValue(2) as typekey.Jurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 154, column 118
    function def_onEnter_29 (def :  pcf.GL7CostRowSet) : void {
      def.onEnter(sublineCosts, null, quoteDisplayUtil, quoteDisplayUtil.getSchedules(subline), true)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 154, column 118
    function def_refreshVariables_30 (def :  pcf.GL7CostRowSet) : void {
      def.refreshVariables(sublineCosts, null, quoteDisplayUtil, quoteDisplayUtil.getSchedules(subline), true)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 143, column 41
    function initialValue_25 () : List<GL7Cost> {
      return quoteDisplayUtil.getSortedCostsBySubline(subline)
    }
    
    // RowIterator (id=SublineIterator) at GL7RatingDetailsRowSet.pcf: line 139, column 63
    function initializeVariables_31 () : void {
        sublineCosts = quoteDisplayUtil.getSortedCostsBySubline(subline);

    }
    
    // 'value' attribute on TextCell (id=SublineLabel_Cell) at GL7RatingDetailsRowSet.pcf: line 151, column 48
    function valueRoot_27 () : java.lang.Object {
      return subline
    }
    
    // 'value' attribute on TextCell (id=SublineLabel_Cell) at GL7RatingDetailsRowSet.pcf: line 151, column 48
    function value_26 () : java.lang.String {
      return subline.SublineTypeName
    }
    
    property get subline () : entity.GL7Subline {
      return getIteratedValue(3) as entity.GL7Subline
    }
    
    property get sublineCosts () : List<GL7Cost> {
      return getVariableValue("sublineCosts", 3) as List<GL7Cost>
    }
    
    property set sublineCosts ($arg :  List<GL7Cost>) {
      setVariableValue("sublineCosts", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 189, column 38
    function initialValue_36 () : java.lang.String[] {
      return quoteDisplayUtil.getSublinesByJurisdiction(jurisdiction)*.SublineTypeName
    }
    
    // RowIterator (id=Jurisdictions) at GL7RatingDetailsRowSet.pcf: line 185, column 64
    function initializeVariables_64 () : void {
        sublines = quoteDisplayUtil.getSublinesByJurisdiction(jurisdiction)*.SublineTypeName;

    }
    
    // 'value' attribute on TextCell (id=jurisdictionName_Cell) at GL7RatingDetailsRowSet.pcf: line 195, column 47
    function valueRoot_38 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TextCell (id=jurisdictionName_Cell) at GL7RatingDetailsRowSet.pcf: line 195, column 47
    function value_37 () : java.lang.String {
      return jurisdiction.DisplayName
    }
    
    // 'value' attribute on RowIterator at GL7RatingDetailsRowSet.pcf: line 202, column 42
    function value_61 () : java.lang.String[] {
      return sublines
    }
    
    // 'value' attribute on TextCell (id=StateAmount_Cell) at GL7RatingDetailsRowSet.pcf: line 298, column 47
    function value_62 () : java.math.BigDecimal {
      return quoteDisplayUtil.sumCostForJurisdiction(jurisdiction)
    }
    
    property get jurisdiction () : typekey.Jurisdiction {
      return getIteratedValue(2) as typekey.Jurisdiction
    }
    
    property get sublines () : java.lang.String[] {
      return getVariableValue("sublines", 2) as java.lang.String[]
    }
    
    property set sublines ($arg :  java.lang.String[]) {
      setVariableValue("sublines", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends IteratorEntry5ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 206, column 62
    function initialValue_40 () : java.util.List<entity.GL7Location> {
      return quoteDisplayUtil.getLocationsByJurisdictionAndSubline(jurisdiction, subline)
    }
    
    // RowIterator at GL7RatingDetailsRowSet.pcf: line 202, column 42
    function initializeVariables_60 () : void {
        locations = quoteDisplayUtil.getLocationsByJurisdictionAndSubline(jurisdiction, subline);

    }
    
    // 'value' attribute on TextCell (id=SublineHeader_Cell) at GL7RatingDetailsRowSet.pcf: line 215, column 32
    function value_41 () : java.lang.String {
      return subline
    }
    
    // 'value' attribute on RowIterator (id=Location) at GL7RatingDetailsRowSet.pcf: line 223, column 66
    function value_59 () : java.util.List<entity.GL7Location> {
      return locations
    }
    
    // 'visible' attribute on Row at GL7RatingDetailsRowSet.pcf: line 208, column 73
    function visible_43 () : java.lang.Boolean {
      return quoteDisplayUtil.sublineHasExposureCosts(subline)
    }
    
    property get locations () : java.util.List<entity.GL7Location> {
      return getVariableValue("locations", 3) as java.util.List<entity.GL7Location>
    }
    
    property set locations ($arg :  java.util.List<entity.GL7Location>) {
      setVariableValue("locations", 3, $arg)
    }
    
    property get subline () : java.lang.String {
      return getIteratedValue(3) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry7ExpressionsImpl extends IteratorEntry6ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 243, column 122
    function def_onEnter_49 (def :  pcf.GL7CostRowSet) : void {
      def.onEnter(locationCosts, null, quoteDisplayUtil, quoteDisplayUtil.getSchedules(location), true)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 243, column 122
    function def_refreshVariables_50 (def :  pcf.GL7CostRowSet) : void {
      def.refreshVariables(locationCosts, null, quoteDisplayUtil, quoteDisplayUtil.getSchedules(location), true)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 227, column 47
    function initialValue_44 () : List<GL7Exposure> {
      return quoteDisplayUtil.getExposuresByLocation(location)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 231, column 43
    function initialValue_45 () : List<GL7Cost> {
      return quoteDisplayUtil.getSortedCostsByLocation(location)
    }
    
    // RowIterator (id=Location) at GL7RatingDetailsRowSet.pcf: line 223, column 66
    function initializeVariables_58 () : void {
        exposures = quoteDisplayUtil.getExposuresByLocation(location);
  locationCosts = quoteDisplayUtil.getSortedCostsByLocation(location);

    }
    
    // 'value' attribute on TextCell (id=LocationHeader_Cell) at GL7RatingDetailsRowSet.pcf: line 240, column 62
    function valueRoot_47 () : java.lang.Object {
      return location.PolicyLocation
    }
    
    // 'value' attribute on TextCell (id=LocationHeader_Cell) at GL7RatingDetailsRowSet.pcf: line 240, column 62
    function value_46 () : java.lang.String {
      return location.PolicyLocation.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=Exposure) at GL7RatingDetailsRowSet.pcf: line 260, column 68
    function value_55 () : java.util.List<entity.GL7Exposure> {
      return exposures
    }
    
    // 'value' attribute on TextCell (id=SubtotalAmount_Cell) at GL7RatingDetailsRowSet.pcf: line 281, column 51
    function value_56 () : java.math.BigDecimal {
      return quoteDisplayUtil.sumExposureCostsForLocation(location)
    }
    
    property get exposures () : List<GL7Exposure> {
      return getVariableValue("exposures", 4) as List<GL7Exposure>
    }
    
    property set exposures ($arg :  List<GL7Exposure>) {
      setVariableValue("exposures", 4, $arg)
    }
    
    property get location () : entity.GL7Location {
      return getIteratedValue(4) as entity.GL7Location
    }
    
    property get locationCosts () : List<GL7Cost> {
      return getVariableValue("locationCosts", 4) as List<GL7Cost>
    }
    
    property set locationCosts ($arg :  List<GL7Cost>) {
      setVariableValue("locationCosts", 4, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry8ExpressionsImpl extends IteratorEntry7ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 5)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 266, column 153
    function def_onEnter_52 (def :  pcf.GL7CostRowSet) : void {
      def.onEnter(exposureCosts, location.SublineType.DisplayName, quoteDisplayUtil, quoteDisplayUtil.getSchedules(exposure), false)
    }
    
    // 'def' attribute on RowSetRef at GL7RatingDetailsRowSet.pcf: line 266, column 153
    function def_refreshVariables_53 (def :  pcf.GL7CostRowSet) : void {
      def.refreshVariables(exposureCosts, location.SublineType.DisplayName, quoteDisplayUtil, quoteDisplayUtil.getSchedules(exposure), false)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 264, column 45
    function initialValue_51 () : List<GL7Cost> {
      return quoteDisplayUtil.getSortedCostsByExposure(exposure)
    }
    
    // RowIterator (id=Exposure) at GL7RatingDetailsRowSet.pcf: line 260, column 68
    function initializeVariables_54 () : void {
        exposureCosts = quoteDisplayUtil.getSortedCostsByExposure(exposure);

    }
    
    property get exposure () : entity.GL7Exposure {
      return getIteratedValue(5) as entity.GL7Exposure
    }
    
    property get exposureCosts () : List<GL7Cost> {
      return getVariableValue("exposureCosts", 5) as List<GL7Cost>
    }
    
    property set exposureCosts ($arg :  List<GL7Cost>) {
      setVariableValue("exposureCosts", 5, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry9ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7RatingDetailsRowSet.pcf: line 318, column 51
    function initialValue_68 () : List<GL7UnmannedAircraft> {
      return quoteDisplayUtil.getUnmannedAircraftsByLocation(location)
    }
    
    // RowIterator (id=Location) at GL7RatingDetailsRowSet.pcf: line 314, column 65
    function initializeVariables_79 () : void {
        unmannedAircrafts = quoteDisplayUtil.getUnmannedAircraftsByLocation(location);

    }
    
    // 'value' attribute on TextCell (id=LocationHeader_Cell) at GL7RatingDetailsRowSet.pcf: line 327, column 43
    function valueRoot_70 () : java.lang.Object {
      return location
    }
    
    // 'value' attribute on TextCell (id=LocationHeader_Cell) at GL7RatingDetailsRowSet.pcf: line 327, column 43
    function value_69 () : java.lang.String {
      return location.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=UnmannedAircraft) at GL7RatingDetailsRowSet.pcf: line 335, column 74
    function value_78 () : java.util.List<entity.GL7UnmannedAircraft> {
      return unmannedAircrafts
    }
    
    property get location () : entity.PolicyLocation {
      return getIteratedValue(2) as entity.PolicyLocation
    }
    
    property get unmannedAircrafts () : List<GL7UnmannedAircraft> {
      return getVariableValue("unmannedAircrafts", 2) as List<GL7UnmannedAircraft>
    }
    
    property set unmannedAircrafts ($arg :  List<GL7UnmannedAircraft>) {
      setVariableValue("unmannedAircrafts", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7RatingDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=UnmannedAircraftTotalAmount_Cell) at GL7RatingDetailsRowSet.pcf: line 393, column 45
    function valueRoot_89 () : java.lang.Object {
      return quoteDisplayUtil
    }
    
    // 'value' attribute on RowIterator (id=SublineTypeIterator) at GL7RatingDetailsRowSet.pcf: line 92, column 65
    function value_19 () : java.util.List<entity.GL7SublineType> {
      return quoteDisplayUtil.SortedSublineTypes
    }
    
    // 'value' attribute on RowIterator (id=JurisdictionIterator) at GL7RatingDetailsRowSet.pcf: line 125, column 52
    function value_33 () : java.util.List<typekey.Jurisdiction> {
      return jurisdictions
    }
    
    // 'value' attribute on TextCell (id=StateAmount_Cell) at GL7RatingDetailsRowSet.pcf: line 170, column 45
    function value_34 () : java.math.BigDecimal {
      return quoteDisplayUtil.sumCostForSublines()
    }
    
    // 'value' attribute on RowIterator (id=Location) at GL7RatingDetailsRowSet.pcf: line 314, column 65
    function value_80 () : java.util.List<entity.PolicyLocation> {
      return unmannedAircraftsLocations
    }
    
    // 'value' attribute on RowIterator (id=UnmannedAircraftCostByCoverage) at GL7RatingDetailsRowSet.pcf: line 360, column 92
    function value_87 () : java.util.List<gw.util.Pair<String, java.math.BigDecimal>> {
      return unmannedAircraftCostsByCoverage
    }
    
    // 'value' attribute on TextCell (id=UnmannedAircraftTotalAmount_Cell) at GL7RatingDetailsRowSet.pcf: line 393, column 45
    function value_88 () : java.math.BigDecimal {
      return quoteDisplayUtil.SumUnmannedAircraftCosts
    }
    
    // 'visible' attribute on Row at GL7RatingDetailsRowSet.pcf: line 111, column 52
    function visible_20 () : java.lang.Boolean {
      return quoteDisplayUtil.HasSublineCosts
    }
    
    // 'visible' attribute on Row at GL7RatingDetailsRowSet.pcf: line 301, column 59
    function visible_66 () : java.lang.Boolean {
      return quoteDisplayUtil.hasUnmannedAircraft
    }
    
    // 'visible' attribute on TextCell (id=CostTermAmount_Cell) at GL7RatingDetailsRowSet.pcf: line 59, column 31
    function visible_7 () : java.lang.Boolean {
      return prorated
    }
    
    property get qualifier () : productmodel.GL7Line {
      return getIteratedValue(1) as productmodel.GL7Line
    }
    
    
  }
  
  
}