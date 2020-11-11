package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedCovItem.eti;GL7SublineSchedCovItem.eix;GL7SublineSchedCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineSchedCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineSchedCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItmCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItmCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItmExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCovItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7SublnSchedCovItemCondCost bean);
  
  
  void addToConditions(entity.GL7SublnSchedCovItmCond bean);
  
  
  void addToCoverageCosts(entity.GL7SublnSchedCovItemCovCost bean);
  
  
  void addToCoverages(entity.GL7SublnSchedCovItmCov bean);
  
  
  void addToExclusionCosts(entity.GL7SublnSchedCovItemExclCost bean);
  
  
  void addToExclusions(entity.GL7SublnSchedCovItmExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7SublnSchedCovItemCost bean);
  
  
  java.util.List<? extends entity.GL7SublineSchedCovItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItmCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItmCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItmExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCostVersionList> getScheduleItemCosts();
  
  
  
}