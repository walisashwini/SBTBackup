package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternClauseCovTerm.eti;FormPatternClauseCovTerm.eix;FormPatternClauseCovTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternClauseCovTermInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CovTermPatternCode field.
   * The code of the cov term associated with a CR7FormPatternClauseCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovTermPatternCode();
  
  
  /**
   * Gets the value of the FormPatternClauseCode field.
   * The FormPatternClauseCode containing this cov term
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternClauseCode getFormPatternClauseCode();
  
  
  public gw.pl.persistence.core.Key getFormPatternClauseCodeID();
  
  
  /**
   * Sets the value of the CovTermPatternCode field.
   */
  public void setCovTermPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the FormPatternClauseCode field.
   */
  public void setFormPatternClauseCode(entity.FormPatternClauseCode value);
  
  
  public void setFormPatternClauseCodeID(gw.pl.persistence.core.Key value);
  
  
  
}