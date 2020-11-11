package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedCovItem.eti;GL7ExposureSchedCovItem.eix;GL7ExposureSchedCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureSchedCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExposureSchedCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedCovItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7ExpSchedCovItemCondCost bean);
  
  
  void addToConditions(entity.GL7ExpSchedCovItemCond bean);
  
  
  void addToCoverageCosts(entity.GL7ExpSchedCovItemCovCost bean);
  
  
  void addToCoverages(entity.GL7ExpSchedCovItemCov bean);
  
  
  void addToExclusionCosts(entity.GL7ExpSchedCovItemExclCost bean);
  
  
  void addToExclusions(entity.GL7ExpSchedCovItemExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7ExpSchedCovItemCost bean);
  
  
  java.util.List<? extends entity.GL7ExposureSchedCovItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedCovItemCostVersionList> getScheduleItemCosts();
  
  
  
}