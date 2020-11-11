package entity;

/**
 * LobCost
 * Lob Cost Data
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LobCost.eti;LobCost.eix;LobCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface LobCost extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.LobCost> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.LobCost>("entity.LobCost");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COSTID_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CostId", "CostId");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DETAILS_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Details", "Details");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HASPARENT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("HasParent", "HasParent");
  
  /**
   * Gets the value of the CostId field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCostId();
  
  
  /**
   * Gets the value of the Details field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDetails();
  
  
  /**
   * Gets the value of the HasParent field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHasParent();
  
  
  /**
   * Sets the value of the CostId field.
   */
  public void setCostId(java.lang.String value);
  
  
  /**
   * Sets the value of the Details field.
   */
  public void setDetails(java.lang.String value);
  
  
  /**
   * Sets the value of the HasParent field.
   */
  public void setHasParent(java.lang.Boolean value);
  
  
  
}