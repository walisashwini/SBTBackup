package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedCondItem.eti;GL7LocationSchedCondItem.eix;GL7LocationSchedCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7LocationSchedCondItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7LocationSchedCondItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7LocSchedCondItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7LocSchedCondItemCondCost bean);
  
  
  void addToConditions(entity.GL7LocSchedCondItemCond bean);
  
  
  void addToCoverageCosts(entity.GL7LocSchedCondItemCovCost bean);
  
  
  void addToCoverages(entity.GL7LocSchedCondItemCov bean);
  
  
  void addToExclusionCosts(entity.GL7LocSchedCondItemExclCost bean);
  
  
  void addToExclusions(entity.GL7LocSchedCondItemExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7LocSchedCondItemCost bean);
  
  
  java.util.List<? extends entity.GL7LocationSchedCondItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7LocSchedCondItemCostVersionList> getScheduleItemCosts();
  
  
  
}