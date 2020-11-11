package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7GeneralLiabilityLine.eti;GL7GeneralLiabilityLine.eix;GL7GeneralLiabilityLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7GeneralLiabilityLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.GL7GeneralLiabilityLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7Cost> GL7CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublineType> GL7SublineTypesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LineMod> ModifiersAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToConditions(entity.GL7LineCond bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToCoverages(entity.GL7LineCov bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToExclusions(entity.GL7LineExcl bean);
  
  
  void addToGL7Costs(entity.GL7Cost bean);
  
  
  void addToGL7SublineTypes(entity.GL7SublineType bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  void addToModifiers(entity.GL7LineMod bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.GL7GeneralLiabilityLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LineCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.GL7LineCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.GL7LineExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7CostVersionList> getGL7Costs();
  
  
  java.util.List<? extends entity.windowed.GL7SublineTypeVersionList> getGL7SublineTypes();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  java.util.List<? extends entity.windowed.GL7LineModVersionList> getModifiers();
  
  
  
}