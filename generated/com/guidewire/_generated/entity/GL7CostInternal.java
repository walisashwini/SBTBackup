package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Cost.eti;GL7Cost.eix;GL7Cost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7CostInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Adds the given element to the Transactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTransactions(entity.GL7Transaction element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Cost getBasedOnValue();
  
  
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
  public entity.GL7Cost getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7Line field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7GeneralLiabilityLine getGL7Line();
  
  
  public gw.pl.persistence.core.Key getGL7LineID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7Cost getSubtype();
  
  
  /**
   * Gets the value of the Transactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Transaction[] getTransactions();
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   */
  public void removeFromTransactions(entity.GL7Transaction element);
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7Cost value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7Cost value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7Line field.
   */
  public void setGL7Line(entity.GL7GeneralLiabilityLine value);
  
  
  public void setGL7LineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7Cost value);
  
  
  /**
   * Sets the value of the Transactions field.
   */
  public void setTransactions(entity.GL7Transaction[] value);
  
  
  
}