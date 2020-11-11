package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7CostChangeDetailsRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7CostChangeDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 17, column 40
    function initialValue_0 () : List<Jurisdiction> {
      return txDisplayUtil.getJurisdictions()
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 21, column 56
    function initialValue_1 () : java.util.List<entity.GL7Location> {
      return txDisplayUtil.LocationsFromUnmannedAircrafts
    }
    
    // 'value' attribute on RowIterator (id=qualifier) at GL7CostChangeDetailsRowSet.pcf: line 29, column 52
    function value_75 () : java.util.List<productmodel.GL7Line> {
      return java.util.Arrays.asList({line})
    }
    
    // 'visible' attribute on RowIterator (id=qualifier) at GL7CostChangeDetailsRowSet.pcf: line 29, column 52
    function visible_2 () : java.lang.Boolean {
      return txDisplayUtil.HasCostChangeDetails
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
    
    property get locationsForUA () : java.util.List<entity.GL7Location> {
      return getVariableValue("locationsForUA", 0) as java.util.List<entity.GL7Location>
    }
    
    property set locationsForUA ($arg :  java.util.List<entity.GL7Location>) {
      setVariableValue("locationsForUA", 0, $arg)
    }
    
    property get txDisplayUtil () : gw.lob.gl7.financials.GL7TxDisplayUtil {
      return getRequireValue("txDisplayUtil", 0) as gw.lob.gl7.financials.GL7TxDisplayUtil
    }
    
    property set txDisplayUtil ($arg :  gw.lob.gl7.financials.GL7TxDisplayUtil) {
      setRequireValue("txDisplayUtil", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry10ExpressionsImpl extends IteratorEntry9ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 338, column 158
    function def_onEnter_69 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.onEnter(null, null, unmannedaircraftTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(unmannedaircraft))
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 338, column 158
    function def_refreshVariables_70 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.refreshVariables(null, null, unmannedaircraftTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(unmannedaircraft))
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 326, column 48
    function initialValue_66 () : List<GL7Transaction> {
      return txDisplayUtil.getSortedTransactionsByUnmannedAircraft(unmannedaircraft)
    }
    
    // RowIterator (id=UnmannedAircraft) at GL7CostChangeDetailsRowSet.pcf: line 322, column 72
    function initializeVariables_71 () : void {
        unmannedaircraftTrxns = txDisplayUtil.getSortedTransactionsByUnmannedAircraft(unmannedaircraft);

    }
    
    // 'value' attribute on TextCell (id=UnmannedAircraftHeader_Cell) at GL7CostChangeDetailsRowSet.pcf: line 335, column 124
    function value_67 () : java.lang.String {
      return gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(unmannedaircraft)
    }
    
    property get unmannedaircraft () : entity.GL7UnmannedAircraft {
      return getIteratedValue(3) as entity.GL7UnmannedAircraft
    }
    
    property get unmannedaircraftTrxns () : List<GL7Transaction> {
      return getVariableValue("unmannedaircraftTrxns", 3) as List<GL7Transaction>
    }
    
    property set unmannedaircraftTrxns ($arg :  List<GL7Transaction>) {
      setVariableValue("unmannedaircraftTrxns", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 106, column 169
    function def_onEnter_10 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.onEnter(sublineType.SublineTypeName, null, sublineTypeTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(sublineType))
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 106, column 169
    function def_refreshVariables_11 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.refreshVariables(sublineType.SublineTypeName, null, sublineTypeTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(sublineType))
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 94, column 46
    function initialValue_5 () : List<GL7Transaction> {
      return txDisplayUtil.getSortedTransactionsBySublineType(sublineType)
    }
    
    // RowIterator (id=SublineTypeIterator) at GL7CostChangeDetailsRowSet.pcf: line 90, column 65
    function initializeVariables_12 () : void {
        sublineTypeTrxns = txDisplayUtil.getSortedTransactionsBySublineType(sublineType);

    }
    
    // 'value' attribute on TextCell (id=SublineTypeLabel_Cell) at GL7CostChangeDetailsRowSet.pcf: line 103, column 50
    function valueRoot_7 () : java.lang.Object {
      return sublineType
    }
    
    // 'value' attribute on TextCell (id=SublineTypeLabel_Cell) at GL7CostChangeDetailsRowSet.pcf: line 103, column 50
    function value_6 () : java.lang.String {
      return sublineType.SublineTypeName
    }
    
    // 'visible' attribute on Row at GL7CostChangeDetailsRowSet.pcf: line 96, column 50
    function visible_9 () : java.lang.Boolean {
      return sublineTypeTrxns.HasElements
    }
    
    property get sublineType () : entity.GL7SublineType {
      return getIteratedValue(2) as entity.GL7SublineType
    }
    
    property get sublineTypeTrxns () : List<GL7Transaction> {
      return getVariableValue("sublineTypeTrxns", 2) as List<GL7Transaction>
    }
    
    property set sublineTypeTrxns ($arg :  List<GL7Transaction>) {
      setVariableValue("sublineTypeTrxns", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=StateSpecificInformationStateLabel_Cell) at GL7CostChangeDetailsRowSet.pcf: line 130, column 47
    function valueRoot_17 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TextCell (id=StateSpecificInformationStateLabel_Cell) at GL7CostChangeDetailsRowSet.pcf: line 130, column 47
    function value_16 () : java.lang.String {
      return jurisdiction.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=SublineIterator) at GL7CostChangeDetailsRowSet.pcf: line 138, column 63
    function value_28 () : java.util.List<entity.GL7Subline> {
      return txDisplayUtil.getSublinesByJurisdiction(jurisdiction)
    }
    
    // 'visible' attribute on Row at GL7CostChangeDetailsRowSet.pcf: line 125, column 77
    function visible_19 () : java.lang.Boolean {
      return txDisplayUtil.sublineTrxnsForJurisdiction(jurisdiction)
    }
    
    property get jurisdiction () : typekey.Jurisdiction {
      return getIteratedValue(2) as typekey.Jurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 154, column 159
    function def_onEnter_25 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.onEnter(subline.SublineTypeName, null, sublineTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(subline))
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 154, column 159
    function def_refreshVariables_26 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.refreshVariables(subline.SublineTypeName, null, sublineTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(subline))
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 142, column 48
    function initialValue_20 () : List<GL7Transaction> {
      return txDisplayUtil.getSortedTransactionsBySubline(subline)
    }
    
    // RowIterator (id=SublineIterator) at GL7CostChangeDetailsRowSet.pcf: line 138, column 63
    function initializeVariables_27 () : void {
        sublineTrxns = txDisplayUtil.getSortedTransactionsBySubline(subline);

    }
    
    // 'value' attribute on TextCell (id=SublineLabel_Cell) at GL7CostChangeDetailsRowSet.pcf: line 151, column 48
    function valueRoot_22 () : java.lang.Object {
      return subline
    }
    
    // 'value' attribute on TextCell (id=SublineLabel_Cell) at GL7CostChangeDetailsRowSet.pcf: line 151, column 48
    function value_21 () : java.lang.String {
      return subline.SublineTypeName
    }
    
    // 'visible' attribute on Row at GL7CostChangeDetailsRowSet.pcf: line 144, column 48
    function visible_24 () : java.lang.Boolean {
      return sublineTrxns.HasElements
    }
    
    property get subline () : entity.GL7Subline {
      return getIteratedValue(3) as entity.GL7Subline
    }
    
    property get sublineTrxns () : List<GL7Transaction> {
      return getVariableValue("sublineTrxns", 3) as List<GL7Transaction>
    }
    
    property set sublineTrxns ($arg :  List<GL7Transaction>) {
      setVariableValue("sublineTrxns", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 190, column 38
    function initialValue_34 () : java.lang.String[] {
      return txDisplayUtil.getSublinesByJurisdiction(jurisdiction)*.SublineTypeName
    }
    
    // RowIterator (id=Jurisdictions) at GL7CostChangeDetailsRowSet.pcf: line 186, column 64
    function initializeVariables_59 () : void {
        sublines = txDisplayUtil.getSublinesByJurisdiction(jurisdiction)*.SublineTypeName;

    }
    
    // 'value' attribute on TextCell (id=jurisdictionName_Cell) at GL7CostChangeDetailsRowSet.pcf: line 196, column 47
    function valueRoot_36 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TextCell (id=jurisdictionName_Cell) at GL7CostChangeDetailsRowSet.pcf: line 196, column 47
    function value_35 () : java.lang.String {
      return jurisdiction.DisplayName
    }
    
    // 'value' attribute on RowIterator at GL7CostChangeDetailsRowSet.pcf: line 203, column 42
    function value_56 () : java.lang.String[] {
      return sublines
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StateAmount_Cell) at GL7CostChangeDetailsRowSet.pcf: line 282, column 71
    function value_57 () : gw.pl.currency.MonetaryAmount {
      return txDisplayUtil.sumTxForJurisdiction(jurisdiction)
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
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends IteratorEntry5ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 207, column 62
    function initialValue_38 () : java.util.List<entity.GL7Location> {
      return txDisplayUtil.getLocationsByJurisdictionAndSubline(jurisdiction, subline)
    }
    
    // RowIterator at GL7CostChangeDetailsRowSet.pcf: line 203, column 42
    function initializeVariables_55 () : void {
        locations = txDisplayUtil.getLocationsByJurisdictionAndSubline(jurisdiction, subline);

    }
    
    // 'value' attribute on TextCell (id=SublineHeader_Cell) at GL7CostChangeDetailsRowSet.pcf: line 215, column 32
    function value_39 () : java.lang.String {
      return subline
    }
    
    // 'value' attribute on RowIterator (id=Location) at GL7CostChangeDetailsRowSet.pcf: line 223, column 66
    function value_54 () : java.util.List<entity.GL7Location> {
      return locations
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
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry7ExpressionsImpl extends IteratorEntry6ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 243, column 160
    function def_onEnter_46 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.onEnter(location.DisplayName, null, locationTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(location))
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 243, column 160
    function def_refreshVariables_47 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.refreshVariables(location.DisplayName, null, locationTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(location))
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 227, column 47
    function initialValue_41 () : List<GL7Exposure> {
      return txDisplayUtil.getExposuresByLocation(location)
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 231, column 50
    function initialValue_42 () : List<GL7Transaction> {
      return txDisplayUtil.getSortedTransactionsByLocation(location)
    }
    
    // RowIterator (id=Location) at GL7CostChangeDetailsRowSet.pcf: line 223, column 66
    function initializeVariables_53 () : void {
        exposures = txDisplayUtil.getExposuresByLocation(location);
  locationTrxns = txDisplayUtil.getSortedTransactionsByLocation(location);

    }
    
    // 'value' attribute on TextCell (id=LocationHeader_Cell) at GL7CostChangeDetailsRowSet.pcf: line 240, column 62
    function valueRoot_44 () : java.lang.Object {
      return location.PolicyLocation
    }
    
    // 'value' attribute on TextCell (id=LocationHeader_Cell) at GL7CostChangeDetailsRowSet.pcf: line 240, column 62
    function value_43 () : java.lang.String {
      return location.PolicyLocation.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=Exposure) at GL7CostChangeDetailsRowSet.pcf: line 260, column 68
    function value_52 () : java.util.List<entity.GL7Exposure> {
      return exposures
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
    
    property get locationTrxns () : List<GL7Transaction> {
      return getVariableValue("locationTrxns", 4) as List<GL7Transaction>
    }
    
    property set locationTrxns ($arg :  List<GL7Transaction>) {
      setVariableValue("locationTrxns", 4, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry8ExpressionsImpl extends IteratorEntry7ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 5)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 266, column 162
    function def_onEnter_49 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.onEnter(location.DisplayName, null, exposureTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(exposure))
    }
    
    // 'def' attribute on RowSetRef at GL7CostChangeDetailsRowSet.pcf: line 266, column 162
    function def_refreshVariables_50 (def :  pcf.GL7TxDetailsRowSet) : void {
      def.refreshVariables(location.DisplayName, null, exposureTrxns, null, txDisplayUtil, txDisplayUtil.getScheduledItemsForCoverable(exposure))
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 264, column 52
    function initialValue_48 () : List<GL7Transaction> {
      return txDisplayUtil.getSortedTransactionsByExposure(exposure)
    }
    
    // RowIterator (id=Exposure) at GL7CostChangeDetailsRowSet.pcf: line 260, column 68
    function initializeVariables_51 () : void {
        exposureTrxns = txDisplayUtil.getSortedTransactionsByExposure(exposure);

    }
    
    property get exposure () : entity.GL7Exposure {
      return getIteratedValue(5) as entity.GL7Exposure
    }
    
    property get exposureTrxns () : List<GL7Transaction> {
      return getVariableValue("exposureTrxns", 5) as List<GL7Transaction>
    }
    
    property set exposureTrxns ($arg :  List<GL7Transaction>) {
      setVariableValue("exposureTrxns", 5, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry9ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7CostChangeDetailsRowSet.pcf: line 305, column 51
    function initialValue_62 () : List<GL7UnmannedAircraft> {
      return txDisplayUtil.getUnmannedAircraftsByLocation(locationForUA)
    }
    
    // RowIterator (id=LocationForUA) at GL7CostChangeDetailsRowSet.pcf: line 301, column 62
    function initializeVariables_73 () : void {
        unmannedaircrafts = txDisplayUtil.getUnmannedAircraftsByLocation(locationForUA);

    }
    
    // 'value' attribute on TextCell (id=LocationHeader_Cell) at GL7CostChangeDetailsRowSet.pcf: line 314, column 63
    function valueRoot_64 () : java.lang.Object {
      return locationForUA.PolicyLocation
    }
    
    // 'value' attribute on TextCell (id=LocationHeader_Cell) at GL7CostChangeDetailsRowSet.pcf: line 314, column 63
    function value_63 () : java.lang.String {
      return locationForUA.PolicyLocation.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=UnmannedAircraft) at GL7CostChangeDetailsRowSet.pcf: line 322, column 72
    function value_72 () : java.util.List<entity.GL7UnmannedAircraft> {
      return unmannedaircrafts
    }
    
    property get locationForUA () : entity.GL7Location {
      return getIteratedValue(2) as entity.GL7Location
    }
    
    property get unmannedaircrafts () : List<GL7UnmannedAircraft> {
      return getVariableValue("unmannedaircrafts", 2) as List<GL7UnmannedAircraft>
    }
    
    property set unmannedaircrafts ($arg :  List<GL7UnmannedAircraft>) {
      setVariableValue("unmannedaircrafts", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7CostChangeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator (id=SublineTypeIterator) at GL7CostChangeDetailsRowSet.pcf: line 90, column 65
    function value_13 () : java.util.List<entity.GL7SublineType> {
      return gw.lob.gl7.presenters.GL7PresenterUtil.sortSublineTypes(txDisplayUtil.SublineTypes)
    }
    
    // 'value' attribute on RowIterator (id=JurisdictionIterator) at GL7CostChangeDetailsRowSet.pcf: line 123, column 49
    function value_29 () : java.util.List<typekey.Jurisdiction> {
      return jurisdictions
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StateAmount_Cell) at GL7CostChangeDetailsRowSet.pcf: line 170, column 53
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return txDisplayUtil.sumTxForSublines()
    }
    
    // 'value' attribute on RowIterator (id=LocationForUA) at GL7CostChangeDetailsRowSet.pcf: line 301, column 62
    function value_74 () : java.util.List<entity.GL7Location> {
      return locationsForUA
    }
    
    // 'visible' attribute on Row at GL7CostChangeDetailsRowSet.pcf: line 109, column 49
    function visible_14 () : java.lang.Boolean {
      return txDisplayUtil.HasSublineTrxns
    }
    
    // 'visible' attribute on TextCell (id=SublineSectionHeaderLabel_Cell) at GL7CostChangeDetailsRowSet.pcf: line 82, column 91
    function visible_3 () : java.lang.Boolean {
      return txDisplayUtil.SublineTypes.HasElements
    }
    
    // 'visible' attribute on Row at GL7CostChangeDetailsRowSet.pcf: line 173, column 50
    function visible_33 () : java.lang.Boolean {
      return txDisplayUtil.HasExposureTrxns
    }
    
    // 'visible' attribute on Row at GL7CostChangeDetailsRowSet.pcf: line 76, column 53
    function visible_4 () : java.lang.Boolean {
      return txDisplayUtil.HasSublineTypeTrxns
    }
    
    // 'visible' attribute on Row at GL7CostChangeDetailsRowSet.pcf: line 287, column 58
    function visible_61 () : java.lang.Boolean {
      return txDisplayUtil.HasUnmannedAircraftTrxns
    }
    
    property get qualifier () : productmodel.GL7Line {
      return getIteratedValue(1) as productmodel.GL7Line
    }
    
    
  }
  
  
}