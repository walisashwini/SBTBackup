package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedExclItem.eti;GL7ExposureSchedExclItem.eix;GL7ExposureSchedExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7ExposureSchedExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7ExposureSchedExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7ExpSchedExclItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7ExpSchedExclItemCondCost bean);
  
  
  void addToConditions(entity.GL7ExpSchedExclItemCond bean);
  
  
  void addToCoverageCosts(entity.GL7ExpSchedExclItemCovCost bean);
  
  
  void addToCoverages(entity.GL7ExpSchedExclItemCov bean);
  
  
  void addToExclusionCosts(entity.GL7ExpSchedExclItemExclCost bean);
  
  
  void addToExclusions(entity.GL7ExpSchedExclItemExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7ExpSchedExclItemCost bean);
  
  
  java.util.List<? extends entity.GL7ExposureSchedExclItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCostVersionList> getScheduleItemCosts();
  
  
  
}