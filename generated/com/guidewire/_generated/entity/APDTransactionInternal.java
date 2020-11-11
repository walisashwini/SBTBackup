package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDTransaction.eti;APDTransaction.eix;APDTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDTransactionInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.TransactionInternal, gw.api.domain.financials.TransactionAdapter {
  /**
   * Gets the value of the APDCost field.
   * The cost this transaction modifies.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCost getAPDCost();
  
  
  public gw.pl.persistence.core.Key getAPDCostID();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDTransaction getBasedOnValue();
  
  
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
  public entity.APDTransaction getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Sets the value of the APDCost field.
   */
  public void setAPDCost(entity.APDCost value);
  
  
  public void setAPDCostID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.APDTransaction value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.APDTransaction value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  
}