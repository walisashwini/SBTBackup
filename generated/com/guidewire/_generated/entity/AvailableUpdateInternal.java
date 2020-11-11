package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AvailableUpdate.eti;AvailableUpdate.eix;AvailableUpdate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AvailableUpdateInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Content field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.lang.Blob getContent();
  
  
  /**
   * Gets the value of the EffectiveDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate();
  
  
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
   * Gets the value of the Qualifier field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getQualifier();
  
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SBTUpdateStatus getStatus();
  
  
  /**
   * Gets the value of the Version field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVersion();
  
  
  /**
   * Gets the value of the Adopted field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAdopted();
  
  
  /**
   * Gets the value of the EligibleForRevert field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEligibleForRevert();
  
  
  /**
   * Sets the value of the Adopted field.
   */
  public void setAdopted(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Content field.
   */
  public void setContent(gw.lang.Blob value);
  
  
  /**
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the EligibleForRevert field.
   */
  public void setEligibleForRevert(java.lang.Boolean value);
  
  
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
   * Sets the value of the Qualifier field.
   */
  public void setQualifier(java.lang.String value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.SBTUpdateStatus value);
  
  
  /**
   * Sets the value of the Version field.
   */
  public void setVersion(java.lang.String value);
  
  
  
}