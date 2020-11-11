package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternTypeKey.eti;FormPatternTypeKey.eix;FormPatternTypeKey.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternTypeKeyInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Code field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the FormPattern field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}