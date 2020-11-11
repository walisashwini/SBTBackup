package entity;

/**
 * APDRule
 * A data rule within the product model
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRule.eti;APDRule.eix;APDRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class APDRule extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.APDRule> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.APDRule>("entity.APDRule");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTBITVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultBitValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> DEFAULTCODEVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "DefaultCodeValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTDATEVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultDateValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTDECIMALVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultDecimalValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DEFAULTEXISTENCE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DefaultExistence");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTINTEGERVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultIntegerValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTSTRINGVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultStringValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DEFAULTTAGVALUE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DefaultTagValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RULEELEMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RuleElements");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RULETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RuleType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TAGTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TagType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.APDRuleInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  protected APDRule(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.APDRuleInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.APDRuleInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the RuleElements array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRuleElements(entity.APDRuleElement element) {
    __getInternalInterface().addArrayElement(RULEELEMENTS_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultCodeValue field.
   * The dropdown list entry if this field is a dropdown
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownEntry getDefaultCodeValue() {
    return (entity.APDDropdownEntry)__getInternalInterface().getFieldValue(DEFAULTCODEVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultDateValue field.
   * The value if a date/time
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDefaultDateValue() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DEFAULTDATEVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultDecimalValue field.
   * The value if a number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDefaultDecimalValue() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEFAULTDECIMALVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultExistence field.
   * The default for an existence rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDataExistenceType getDefaultExistence() {
    return (typekey.APDDataExistenceType)__getInternalInterface().getFieldValue(DEFAULTEXISTENCE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultIntegerValue field.
   * The value if an integer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDefaultIntegerValue() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(DEFAULTINTEGERVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultStringValue field.
   * The value if text or a dropdown entry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDefaultStringValue() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DEFAULTSTRINGVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultTagValue field.
   * The value if a tag
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDTagApplicability getDefaultTagValue() {
    return (typekey.APDTagApplicability)__getInternalInterface().getFieldValue(DEFAULTTAGVALUE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the RuleElements field.
   * The full list of rule elements belonging to this rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRuleElement[] getRuleElements() {
    return (entity.APDRuleElement[])__getInternalInterface().getFieldValue(RULEELEMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the RuleType field.
   * The type of rule being implemented
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRuleType getRuleType() {
    return (typekey.APDRuleType)__getInternalInterface().getFieldValue(RULETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRule getSubtype() {
    return (typekey.APDRule)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the TagType field.
   * The type of tag for a tag rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDTagType getTagType() {
    return (typekey.APDTagType)__getInternalInterface().getFieldValue(TAGTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultBitValue field.
   * The value if a true/false
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDefaultBitValue() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEFAULTBITVALUE_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given element from the RuleElements array. This is achieved by marking the element for removal.
   */
  public void removeFromRuleElements(entity.APDRuleElement element) {
    __getInternalInterface().removeArrayElement(RULEELEMENTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the RuleElements array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRuleElements(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(RULEELEMENTS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultBitValue field.
   */
  public void setDefaultBitValue(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DEFAULTBITVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultCodeValue field.
   */
  public void setDefaultCodeValue(entity.APDDropdownEntry value) {
    __getInternalInterface().setFieldValue(DEFAULTCODEVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultDateValue field.
   */
  public void setDefaultDateValue(java.util.Date value) {
    __getInternalInterface().setFieldValue(DEFAULTDATEVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultDecimalValue field.
   */
  public void setDefaultDecimalValue(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEFAULTDECIMALVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultExistence field.
   */
  public void setDefaultExistence(typekey.APDDataExistenceType value) {
    __getInternalInterface().setFieldValue(DEFAULTEXISTENCE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultIntegerValue field.
   */
  public void setDefaultIntegerValue(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(DEFAULTINTEGERVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultStringValue field.
   */
  public void setDefaultStringValue(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DEFAULTSTRINGVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultTagValue field.
   */
  public void setDefaultTagValue(typekey.APDTagApplicability value) {
    __getInternalInterface().setFieldValue(DEFAULTTAGVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RuleElements field.
   */
  public void setRuleElements(entity.APDRuleElement[] value) {
    __getInternalInterface().setFieldValue(RULEELEMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RuleType field.
   */
  public void setRuleType(typekey.APDRuleType value) {
    __getInternalInterface().setFieldValue(RULETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.APDRule value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TagType field.
   */
  public void setTagType(typekey.APDTagType value) {
    __getInternalInterface().setFieldValue(TAGTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  static {
    com.guidewire._generated.entity.APDRuleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.APDRule, com.guidewire._generated.entity.APDRuleInternal>() {
      public java.lang.Object getImplementation(entity.APDRule bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.APDRuleInternal getInternalInterface(entity.APDRule bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}