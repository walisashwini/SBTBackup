package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchCondItem.eti;GL7SublineTypeSchCondItem.eix;GL7SublineTypeSchCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GL7SublineTypeSchCondItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GL7SublineTypeSchCondItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItemCondCost> ConditionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItmCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItemCovCost> CoverageCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItmCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItemExclCost> ExclusionCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItmExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GL7SublnTypSchCondItemCost> ScheduleItemCostsAsOf(java.util.Date date);
  
  
  void addToConditionCosts(entity.GL7SublnTypSchCondItemCondCost bean);
  
  
  void addToConditions(entity.GL7SublnTypSchCondItmCond bean);
  
  
  void addToCoverageCosts(entity.GL7SublnTypSchCondItemCovCost bean);
  
  
  void addToCoverages(entity.GL7SublnTypSchCondItmCov bean);
  
  
  void addToExclusionCosts(entity.GL7SublnTypSchCondItemExclCost bean);
  
  
  void addToExclusions(entity.GL7SublnTypSchCondItmExcl bean);
  
  
  void addToScheduleItemCosts(entity.GL7SublnTypSchCondItemCost bean);
  
  
  java.util.List<? extends entity.GL7SublineTypeSchCondItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemCondCostVersionList> getConditionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItmCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemCovCostVersionList> getCoverageCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItmCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemExclCostVersionList> getExclusionCosts();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItmExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemCostVersionList> getScheduleItemCosts();
  
  
  
}