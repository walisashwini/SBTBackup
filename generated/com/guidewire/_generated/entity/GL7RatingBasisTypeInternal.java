package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7RatingBasisType.eti;GL7RatingBasisType.eix;GL7RatingBasisType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7RatingBasisTypeInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the BasisType field.
   * Basis type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBasisType();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the RatingBasisType field.
   * Rating basis type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RatingBasisType getRatingBasisType();
  
  
  /**
   * Sets the value of the BasisType field.
   */
  public void setBasisType(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the RatingBasisType field.
   */
  public void setRatingBasisType(typekey.RatingBasisType value);
  
  
  
}