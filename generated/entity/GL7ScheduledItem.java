package entity;

/**
 * GL7ScheduledItem
 * A GL7 scheduled item
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ScheduledItem.eti;GL7ScheduledItem.eix;GL7ScheduledItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface GL7ScheduledItem extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.GL7ScheduledItem> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.GL7ScheduledItem>("entity.GL7ScheduledItem");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ADDITIONALINSURED_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("AdditionalInsured", "AdditionalInsured");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATECOL2_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DateCol2", "DateCol2");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DECIMALCOL1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DecimalCol1", "DecimalCol1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LONGSTRINGCOL1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("LongStringCol1", "LongStringCol1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LONGSTRINGCOL2_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("LongStringCol2", "LongStringCol2");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LONGSTRINGCOL3_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("LongStringCol3", "LongStringCol3");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LONGSTRINGCOL4_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("LongStringCol4", "LongStringCol4");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LONGSTRINGCOL5_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("LongStringCol5", "LongStringCol5");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPTIONCOL1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OptionCol1", "OptionCol1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPTIONCOL2_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OptionCol2", "OptionCol2");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPTIONCOL3_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OptionCol3", "OptionCol3");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL5_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StringCol5", "StringCol5");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL6_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StringCol6", "StringCol6");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL7_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StringCol7", "StringCol7");
  
  /**
   * Gets the value of the AdditionalInsured field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddlInsuredDetail getAdditionalInsured();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateCol2();
  
  
  /**
   * Gets the value of the DecimalCol1 field.
   * Decimal field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDecimalCol1();
  
  
  /**
   * Gets the value of the LongStringCol1 field.
   * String field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLongStringCol1();
  
  
  /**
   * Gets the value of the LongStringCol2 field.
   * String field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLongStringCol2();
  
  
  /**
   * Gets the value of the LongStringCol3 field.
   * String field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLongStringCol3();
  
  
  /**
   * Gets the value of the LongStringCol4 field.
   * String field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLongStringCol4();
  
  
  /**
   * Gets the value of the LongStringCol5 field.
   * String field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLongStringCol5();
  
  
  /**
   * Gets the value of the OptionCol1 field.
   * Option field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOptionCol1();
  
  
  /**
   * Gets the value of the OptionCol2 field.
   * Option field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOptionCol2();
  
  
  /**
   * Gets the value of the OptionCol3 field.
   * Option field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOptionCol3();
  
  
  /**
   * Gets the value of the StringCol5 field.
   * String field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol5();
  
  
  /**
   * Gets the value of the StringCol6 field.
   * String field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol6();
  
  
  /**
   * Gets the value of the StringCol7 field.
   * String field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol7();
  
  
  /**
   * Sets the value of the AdditionalInsured field.
   */
  public void setAdditionalInsured(entity.PolicyAddlInsuredDetail value);
  
  
  /**
   * Sets the value of the DecimalCol1 field.
   */
  public void setDecimalCol1(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the LongStringCol1 field.
   */
  public void setLongStringCol1(java.lang.String value);
  
  
  /**
   * Sets the value of the LongStringCol2 field.
   */
  public void setLongStringCol2(java.lang.String value);
  
  
  /**
   * Sets the value of the LongStringCol3 field.
   */
  public void setLongStringCol3(java.lang.String value);
  
  
  /**
   * Sets the value of the LongStringCol4 field.
   */
  public void setLongStringCol4(java.lang.String value);
  
  
  /**
   * Sets the value of the LongStringCol5 field.
   */
  public void setLongStringCol5(java.lang.String value);
  
  
  /**
   * Sets the value of the OptionCol1 field.
   */
  public void setOptionCol1(java.lang.String value);
  
  
  /**
   * Sets the value of the OptionCol2 field.
   */
  public void setOptionCol2(java.lang.String value);
  
  
  /**
   * Sets the value of the OptionCol3 field.
   */
  public void setOptionCol3(java.lang.String value);
  
  
  /**
   * Sets the value of the StringCol5 field.
   */
  public void setStringCol5(java.lang.String value);
  
  
  /**
   * Sets the value of the StringCol6 field.
   */
  public void setStringCol6(java.lang.String value);
  
  
  /**
   * Sets the value of the StringCol7 field.
   */
  public void setStringCol7(java.lang.String value);
  
  
  
}