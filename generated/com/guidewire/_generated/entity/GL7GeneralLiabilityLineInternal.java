package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7GeneralLiabilityLine.eti;GL7GeneralLiabilityLine.eix;GL7GeneralLiabilityLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7GeneralLiabilityLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.CoverableFieldAvailabilityInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.GL7LineCond element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.GL7LineCov element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.GL7LineExcl element);
  
  
  /**
   * Adds the given element to the GL7Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7Costs(entity.GL7Cost element);
  
  
  /**
   * Adds the given element to the GL7SublineTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7SublineTypes(entity.GL7SublineType element);
  
  
  /**
   * Adds the given element to the Modifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToModifiers(entity.GL7LineMod element);
  
  
  /**
   * Gets the value of the Conditions field.
   * Line level conditions for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineCond[] getConditions();
  
  
  /**
   * Gets the value of the Coverages field.
   * Line level coverages for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineCov[] getCoverages();
  
  
  /**
   * Gets the value of the Exclusions field.
   * Line level exclusions for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineExcl[] getExclusions();
  
  
  /**
   * Gets the value of the GL7Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Cost[] getGL7Costs();
  
  
  /**
   * Gets the value of the GL7StatRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getGL7StatRecord();
  
  
  public gw.pl.persistence.core.Key getGL7StatRecordID();
  
  
  /**
   * Gets the value of the GL7SublineTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineType[] getGL7SublineTypes();
  
  
  /**
   * Gets the value of the Modifiers field.
   * Line level modifiers for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineMod[] getModifiers();
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.GL7LineCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.GL7LineCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.GL7LineExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GL7Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7Costs(entity.GL7Cost element);
  
  
  /**
   * Removes the given element from the GL7Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7Costs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GL7SublineTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7SublineTypes(entity.GL7SublineType element);
  
  
  /**
   * Removes the given element from the GL7SublineTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7SublineTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Modifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromModifiers(entity.GL7LineMod element);
  
  
  /**
   * Removes the given element from the Modifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.GL7LineCond[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.GL7LineCov[] value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.GL7LineExcl[] value);
  
  
  /**
   * Sets the value of the GL7Costs field.
   */
  public void setGL7Costs(entity.GL7Cost[] value);
  
  
  /**
   * Sets the value of the GL7StatRecord field.
   */
  public void setGL7StatRecord(entity.GL7StatRecord value);
  
  
  public void setGL7StatRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublineTypes field.
   */
  public void setGL7SublineTypes(entity.GL7SublineType[] value);
  
  
  /**
   * Sets the value of the Modifiers field.
   */
  public void setModifiers(entity.GL7LineMod[] value);
  
  
  
}