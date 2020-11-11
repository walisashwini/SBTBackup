package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedCovItem.eti;GL7SublineSchedCovItem.eix;GL7SublineSchedCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineSchedCovItemInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ScheduledItemInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.CoverableFieldAvailabilityInternal, com.guidewire._generated.entity.GL7ScheduledItemInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.productmodel.ScheduledItemAdapter {
  /**
   * Adds the given element to the ConditionCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditionCosts(entity.GL7SublnSchedCovItemCondCost element);
  
  
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.GL7SublnSchedCovItmCond element);
  
  
  /**
   * Adds the given element to the CoverageCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverageCosts(entity.GL7SublnSchedCovItemCovCost element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.GL7SublnSchedCovItmCov element);
  
  
  /**
   * Adds the given element to the ExclusionCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusionCosts(entity.GL7SublnSchedCovItemExclCost element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.GL7SublnSchedCovItmExcl element);
  
  
  /**
   * Adds the given element to the ScheduleItemCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToScheduleItemCosts(entity.GL7SublnSchedCovItemCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineSchedCovItem getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ConditionCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItemCondCost[] getConditionCosts();
  
  
  /**
   * Gets the value of the Conditions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItmCond[] getConditions();
  
  
  /**
   * Gets the value of the CoverageCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItemCovCost[] getCoverageCosts();
  
  
  /**
   * Gets the value of the Coverages field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItmCov[] getCoverages();
  
  
  /**
   * Gets the value of the ExclusionCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItemExclCost[] getExclusionCosts();
  
  
  /**
   * Gets the value of the Exclusions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItmExcl[] getExclusions();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineSchedCovItem getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the ScheduleCoverage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineSchedCov getScheduleCoverage();
  
  
  public gw.pl.persistence.core.Key getScheduleCoverageID();
  
  
  /**
   * Gets the value of the ScheduleItemCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItemCost[] getScheduleItemCosts();
  
  
  /**
   * Gets the value of the StatRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getStatRecord();
  
  
  public gw.pl.persistence.core.Key getStatRecordID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublineSchedCovItem getSubtype();
  
  
  /**
   * Removes the given element from the ConditionCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromConditionCosts(entity.GL7SublnSchedCovItemCondCost element);
  
  
  /**
   * Removes the given element from the ConditionCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditionCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.GL7SublnSchedCovItmCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CoverageCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverageCosts(entity.GL7SublnSchedCovItemCovCost element);
  
  
  /**
   * Removes the given element from the CoverageCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverageCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.GL7SublnSchedCovItmCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ExclusionCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusionCosts(entity.GL7SublnSchedCovItemExclCost element);
  
  
  /**
   * Removes the given element from the ExclusionCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusionCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.GL7SublnSchedCovItmExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ScheduleItemCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromScheduleItemCosts(entity.GL7SublnSchedCovItemCost element);
  
  
  /**
   * Removes the given element from the ScheduleItemCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromScheduleItemCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublineSchedCovItem value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ConditionCosts field.
   */
  public void setConditionCosts(entity.GL7SublnSchedCovItemCondCost[] value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.GL7SublnSchedCovItmCond[] value);
  
  
  /**
   * Sets the value of the CoverageCosts field.
   */
  public void setCoverageCosts(entity.GL7SublnSchedCovItemCovCost[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.GL7SublnSchedCovItmCov[] value);
  
  
  /**
   * Sets the value of the ExclusionCosts field.
   */
  public void setExclusionCosts(entity.GL7SublnSchedCovItemExclCost[] value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.GL7SublnSchedCovItmExcl[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublineSchedCovItem value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ScheduleCoverage field.
   */
  public void setScheduleCoverage(entity.GL7SublineSchedCov value);
  
  
  public void setScheduleCoverageID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ScheduleItemCosts field.
   */
  public void setScheduleItemCosts(entity.GL7SublnSchedCovItemCost[] value);
  
  
  /**
   * Sets the value of the StatRecord field.
   */
  public void setStatRecord(entity.GL7StatRecord value);
  
  
  public void setStatRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublineSchedCovItem value);
  
  
  
}