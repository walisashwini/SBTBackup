package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedExclItem.eti;GL7SublineSchedExclItem.eix;GL7SublineSchedExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineSchedExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineSchedExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItmCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItmCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItmExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnSchedExclItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7SublnSchedExclItemCondCost bean);
  
  
  void addToConditions(entity.GL7SublnSchedExclItmCond bean);
  
  
  void addToCoverageCosts(entity.GL7SublnSchedExclItemCovCost bean);
  
  
  void addToCoverages(entity.GL7SublnSchedExclItmCov bean);
  
  
  void addToExclusionCosts(entity.GL7SublnSchedExclItemExclCost bean);
  
  
  void addToExclusions(entity.GL7SublnSchedExclItmExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7SublnSchedExclItemCost bean);
  
  
  java.util.List<? extends entity.GL7SublineSchedExclItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItmCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItmCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItmExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCostVersionList> getScheduleItemCosts();
  
  
  
}