package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchCovItem.eti;GL7SublineTypeSchCovItem.eix;GL7SublineTypeSchCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeSchCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineTypeSchCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItmCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItmCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItmExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCovItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7SublnTypSchCovItemCondCost bean);
  
  
  void addToConditions(entity.GL7SublnTypSchCovItmCond bean);
  
  
  void addToCoverageCosts(entity.GL7SublnTypSchCovItemCovCost bean);
  
  
  void addToCoverages(entity.GL7SublnTypSchCovItmCov bean);
  
  
  void addToExclusionCosts(entity.GL7SublnTypSchCovItemExclCost bean);
  
  
  void addToExclusions(entity.GL7SublnTypSchCovItmExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7SublnTypSchCovItemCost bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeSchCovItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItmCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItmCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItmExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCostVersionList> getScheduleItemCosts();
  
  
  
}