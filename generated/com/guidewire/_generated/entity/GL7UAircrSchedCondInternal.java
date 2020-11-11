package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCond.eti;GL7UAircrSchedCond.eix;GL7UAircrSchedCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedCondInternal extends com.guidewire._generated.entity.GL7UnmannedAircraftCondInternal, com.guidewire._generated.entity.ScheduleAutoNumberSequenceInternal, gw.api.domain.Schedule {
  /**
   * Adds the given element to the ScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToScheduledItems(entity.GL7UAircrSchedCondItem element);
  
  
  /**
   * Gets the value of the ScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCondItem[] getScheduledItems();
  
  
  /**
   * Removes the given element from the ScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromScheduledItems(entity.GL7UAircrSchedCondItem element);
  
  
  /**
   * Removes the given element from the ScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ScheduledItems field.
   */
  public void setScheduledItems(entity.GL7UAircrSchedCondItem[] value);
  
  
  
}