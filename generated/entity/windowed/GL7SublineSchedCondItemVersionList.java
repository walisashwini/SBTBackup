package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedCondItem.eti;GL7SublineSchedCondItem.eix;GL7SublineSchedCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineSchedCondItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineSchedCondItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItmCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItmCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItmExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedCondItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7SublnSchedCondItemCondCost bean);
  
  
  void addToConditions(entity.GL7SublnSchedCondItmCond bean);
  
  
  void addToCoverageCosts(entity.GL7SublnSchedCondItemCovCost bean);
  
  
  void addToCoverages(entity.GL7SublnSchedCondItmCov bean);
  
  
  void addToExclusionCosts(entity.GL7SublnSchedCondItemExclCost bean);
  
  
  void addToExclusions(entity.GL7SublnSchedCondItmExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7SublnSchedCondItemCost bean);
  
  
  java.util.List<? extends entity.GL7SublineSchedCondItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItmCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItmCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItmExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCostVersionList> getScheduleItemCosts();
  
  
  
}