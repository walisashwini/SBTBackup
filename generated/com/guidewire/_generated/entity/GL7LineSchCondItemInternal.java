package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchCondItem.eti;GL7LineSchCondItem.eix;GL7LineSchCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LineSchCondItemInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ScheduledItemInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.CoverableFieldAvailabilityInternal, com.guidewire._generated.entity.GL7ScheduledItemInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.productmodel.ScheduledItemAdapter {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineSchCondItem getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineSchCondItem getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the ScheduleCondition field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineSchedCond getScheduleCondition();
  
  
  public gw.pl.persistence.core.Key getScheduleConditionID();
  
  
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
  public typekey.GL7LineSchCondItem getSubtype();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7LineSchCondItem value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7LineSchCondItem value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ScheduleCondition field.
   */
  public void setScheduleCondition(entity.GL7LineSchedCond value);
  
  
  public void setScheduleConditionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StatRecord field.
   */
  public void setStatRecord(entity.GL7StatRecord value);
  
  
  public void setStatRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7LineSchCondItem value);
  
  
  
}