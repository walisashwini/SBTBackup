package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedCovItem.eti;GL7LocationSchedCovItem.eix;GL7LocationSchedCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationSchedCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocationSchedCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCovItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7LocSchedCovItemCondCost bean);
  
  
  void addToConditions(entity.GL7LocSchedCovItemCond bean);
  
  
  void addToCoverageCosts(entity.GL7LocSchedCovItemCovCost bean);
  
  
  void addToCoverages(entity.GL7LocSchedCovItemCov bean);
  
  
  void addToExclusionCosts(entity.GL7LocSchedCovItemExclCost bean);
  
  
  void addToExclusions(entity.GL7LocSchedCovItemExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7LocSchedCovItemCost bean);
  
  
  java.util.List<? extends entity.GL7LocationSchedCovItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCovItemCostVersionList> getScheduleItemCosts();
  
  
  
}