package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedCondItem.eti;GL7ExposureSchedCondItem.eix;GL7ExposureSchedCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureSchedCondItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExposureSchedCondItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCondItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7ExpSchedCondItemCondCost bean);
  
  
  void addToConditions(entity.GL7ExpSchedCondItemCond bean);
  
  
  void addToCoverageCosts(entity.GL7ExpSchedCondItemCovCost bean);
  
  
  void addToCoverages(entity.GL7ExpSchedCondItemCov bean);
  
  
  void addToExclusionCosts(entity.GL7ExpSchedCondItemExclCost bean);
  
  
  void addToExclusions(entity.GL7ExpSchedCondItemExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7ExpSchedCondItemCost bean);
  
  
  java.util.List<? extends entity.GL7ExposureSchedCondItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCostVersionList> getScheduleItemCosts();
  
  
  
}