package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchedExcl.eti;GL7SublineTypeSchedExcl.eix;GL7SublineTypeSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineTypeSchedExclInternal extends com.guidewire._generated.entity.GL7SublineTypeExclInternal, com.guidewire._generated.entity.ScheduleAutoNumberSequenceInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.Schedule, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the GL7ScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7ScheduledItems(entity.GL7SublineTypeSchExclItem element);
  
  
  /**
   * Gets the value of the GL7ScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeSchExclItem[] getGL7ScheduledItems();
  
  
  /**
   * Removes the given element from the GL7ScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7ScheduledItems(entity.GL7SublineTypeSchExclItem element);
  
  
  /**
   * Removes the given element from the GL7ScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7ScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the GL7ScheduledItems field.
   */
  public void setGL7ScheduledItems(entity.GL7SublineTypeSchExclItem[] value);
  
  
  
}