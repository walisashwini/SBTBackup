package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7GeneralLiabilityLine.eti;GL7GeneralLiabilityLine.eix;GL7GeneralLiabilityLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7GeneralLiabilityLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7GeneralLiabilityLineVersionList {
  public GL7GeneralLiabilityLineVersionListImpl(entity.GL7GeneralLiabilityLine base)  {
    super(base);
  }
  
  public GL7GeneralLiabilityLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.GL7GeneralLiabilityLine AsOf(java.util.Date date) {
    return (entity.GL7GeneralLiabilityLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Cost> GL7CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.GL7COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineType> GL7SublineTypesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.GL7SUBLINETYPES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineMod> ModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7GeneralLiabilityLine.MODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.GL7GeneralLiabilityLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7LineCond bean) {
    addToArray(entity.GL7GeneralLiabilityLine.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.GL7GeneralLiabilityLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7LineCov bean) {
    addToArray(entity.GL7GeneralLiabilityLine.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.GL7GeneralLiabilityLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7LineExcl bean) {
    addToArray(entity.GL7GeneralLiabilityLine.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7Costs(entity.GL7Cost bean) {
    addToArray(entity.GL7GeneralLiabilityLine.GL7COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7SublineTypes(entity.GL7SublineType bean) {
    addToArray(entity.GL7GeneralLiabilityLine.GL7SUBLINETYPES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.GL7GeneralLiabilityLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToModifiers(entity.GL7LineMod bean) {
    addToArray(entity.GL7GeneralLiabilityLine.MODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7GeneralLiabilityLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7CostVersionList> getGL7Costs() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.GL7COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeVersionList> getGL7SublineTypes() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.GL7SUBLINETYPES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.LINEANSWERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineModVersionList> getModifiers() {
    return (java.util.List)getArray(entity.GL7GeneralLiabilityLine.MODIFIERS_PROP.get());
  }
  
  
}