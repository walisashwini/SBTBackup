package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExcl.eti;GL7UAircrSchedExcl.eix;GL7UAircrSchedExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedExclInternal extends com.guidewire._generated.entity.GL7UnmannedAircraftExclInternal, com.guidewire._generated.entity.ScheduleAutoNumberSequenceInternal, gw.api.domain.Schedule {
  /**
   * Adds the given element to the ScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToScheduledItems(entity.GL7UAircrSchedExclItem element);
  
  
  /**
   * Gets the value of the ScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedExclItem[] getScheduledItems();
  
  
  /**
   * Removes the given element from the ScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromScheduledItems(entity.GL7UAircrSchedExclItem element);
  
  
  /**
   * Removes the given element from the ScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ScheduledItems field.
   */
  public void setScheduledItems(entity.GL7UAircrSchedExclItem[] value);
  
  
  
}