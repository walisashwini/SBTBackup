package entity;

/**
 * CoverableFieldAvailability
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoverableFieldAvailability.eti;CoverableFieldAvailability.eix;CoverableFieldAvailability.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface CoverableFieldAvailability extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.CoverableFieldAvailability> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.CoverableFieldAvailability>("entity.CoverableFieldAvailability");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIELDAVAILABILITIES_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("FieldAvailabilities", "FieldAvailabilities");
  
  /**
   * Gets the value of the FieldAvailabilities field.
   * List of field availiabilities
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFieldAvailabilities();
  
  
  /**
   * Sets the value of the FieldAvailabilities field.
   */
  public void setFieldAvailabilities(java.lang.String value);
  
  
  
}