package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchExclItem.eti;GL7SublineTypeSchExclItem.eix;GL7SublineTypeSchExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeSchExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineTypeSchExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItmCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItmCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItmExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchExclItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7SublnTypSchExclItemCondCost bean);
  
  
  void addToConditions(entity.GL7SublnTypSchExclItmCond bean);
  
  
  void addToCoverageCosts(entity.GL7SublnTypSchExclItemCovCost bean);
  
  
  void addToCoverages(entity.GL7SublnTypSchExclItmCov bean);
  
  
  void addToExclusionCosts(entity.GL7SublnTypSchExclItemExclCost bean);
  
  
  void addToExclusions(entity.GL7SublnTypSchExclItmExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7SublnTypSchExclItemCost bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeSchExclItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItmCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItmCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItmExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCostVersionList> getScheduleItemCosts();
  
  
  
}