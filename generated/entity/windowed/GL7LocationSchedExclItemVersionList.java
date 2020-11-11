package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedExclItem.eti;GL7LocationSchedExclItem.eix;GL7LocationSchedExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationSchedExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocationSchedExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedExclItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7LocSchedExclItemCondCost bean);
  
  
  void addToConditions(entity.GL7LocSchedExclItemCond bean);
  
  
  void addToCoverageCosts(entity.GL7LocSchedExclItemCovCost bean);
  
  
  void addToCoverages(entity.GL7LocSchedExclItemCov bean);
  
  
  void addToExclusionCosts(entity.GL7LocSchedExclItemExclCost bean);
  
  
  void addToExclusions(entity.GL7LocSchedExclItemExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7LocSchedExclItemCost bean);
  
  
  java.util.List<? extends entity.GL7LocationSchedExclItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedExclItemCostVersionList> getScheduleItemCosts();
  
  
  
}