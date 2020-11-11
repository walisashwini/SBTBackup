package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Transaction.eti;GL7Transaction.eix;GL7Transaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7TransactionInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.TransactionInternal, gw.api.domain.financials.TransactionAdapter {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Transaction getBasedOnValue();
  
  
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
  public entity.GL7Transaction getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7Cost field.
   * The cost this transaction modifies.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Cost getGL7Cost();
  
  
  public gw.pl.persistence.core.Key getGL7CostID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7Transaction value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7Transaction value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7Cost field.
   */
  public void setGL7Cost(entity.GL7Cost value);
  
  
  public void setGL7CostID(gw.pl.persistence.core.Key value);
  
  
  
}