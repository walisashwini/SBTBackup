package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternClauseCode.eti;FormPatternClauseCode.eix;FormPatternClauseCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternClauseCodeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the FormPatternClauseCovTerms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternClauseCovTerms(entity.FormPatternClauseCovTerm element);
  
  
  /**
   * Gets the value of the Code field.
   * The class code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the FormPattern field.
   * The form pattern associated with this coverable property.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  /**
   * Gets the value of the FormPatternClauseCovTerms field.
   * Cov terms associated with this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternClauseCovTerm[] getFormPatternClauseCovTerms();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Removes the given element from the FormPatternClauseCovTerms array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternClauseCovTerms(entity.FormPatternClauseCovTerm element);
  
  
  /**
   * Removes the given element from the FormPatternClauseCovTerms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternClauseCovTerms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  /**
   * Sets the value of the FormPatternClauseCovTerms field.
   */
  public void setFormPatternClauseCovTerms(entity.FormPatternClauseCovTerm[] value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  
}