package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ConfigUpdateSelection.eti;ConfigUpdateSelection.eix;ConfigUpdateSelection.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ConfigUpdateSelectionInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the AdoptedEffectiveDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAdoptedEffectiveDate();
  
  
  /**
   * Gets the value of the AdoptedVersion field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdoptedVersion();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the Line field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLine();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the NewEffectiveDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNewEffectiveDate();
  
  
  /**
   * Gets the value of the NewVersion field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNewVersion();
  
  
  /**
   * Sets the value of the AdoptedEffectiveDate field.
   */
  public void setAdoptedEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the AdoptedVersion field.
   */
  public void setAdoptedVersion(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Line field.
   */
  public void setLine(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the NewEffectiveDate field.
   */
  public void setNewEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the NewVersion field.
   */
  public void setNewVersion(java.lang.String value);
  
  
  
}