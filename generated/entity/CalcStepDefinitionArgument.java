package entity;

/**
 * CalcStepDefinitionArgument
 * holds argument value
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcStepDefinitionArgument.eti;CalcStepDefinitionArgument.eix;CalcStepDefinitionArgument.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "CalcStepDefinitionArgument")
public class CalcStepDefinitionArgument extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.CalcStepValueDelegate {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.CalcStepDefinitionArgument> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.CalcStepDefinitionArgument>("entity.CalcStepDefinitionArgument");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONSTANTVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ConstantValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVTERMCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CovTermCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> INSCOPEPARAM_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "InScopeParam");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INSCOPEVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InScopeValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INSCOPEVALUEISMODIFIER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InScopeValueIsModifier");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INSCOPEVALUETYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InScopeValueType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> OPERAND_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Operand");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OPERANDTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "OperandType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDESOURCE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverrideSource");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PARAMETER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Parameter");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PARAMETERTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ParameterType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VARIABLEFIELDNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "VariableFieldName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VARIABLENAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "VariableName");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.CalcStepDefinitionArgumentInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public CalcStepDefinitionArgument()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public CalcStepDefinitionArgument(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected CalcStepDefinitionArgument(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.CalcStepDefinitionArgumentInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.CalcStepDefinitionArgumentInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public void changeToOperandType(typekey.CalcStepOperandType operandType) {
    ((com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter")).changeToOperandType(operandType);
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
   * Gets the value of the ConstantValue field.
   * Represents constant value 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConstantValue() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONSTANTVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the CovTermCode field.
   * Cov term pattern code if value represents a cov term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovTermCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVTERMCODE_PROP.get());
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the InScopeParam field.
   * The rate routine param that forms the first part of the in scope value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalcRoutineParamName getInScopeParam() {
    return (typekey.CalcRoutineParamName)__getInternalInterface().getFieldValue(INSCOPEPARAM_PROP.get());
  }
  
  /**
   * Gets the value of the InScopeValue field.
   * A gosu expression ('dot path') that describes how to access the desired value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInScopeValue() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INSCOPEVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the InScopeValueType field.
   * The desired data type for an in-scope value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInScopeValueType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INSCOPEVALUETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the Operand field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcStepDefinitionOperand getOperand() {
    return (entity.CalcStepDefinitionOperand)__getInternalInterface().getFieldValue(OPERAND_PROP.get());
  }
  
  /**
   * Gets the value of the OperandType field.
   * Type of operand
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalcStepOperandType getOperandType() {
    return (typekey.CalcStepOperandType)__getInternalInterface().getFieldValue(OPERANDTYPE_PROP.get());
  }
  
  public entity.CalcStepDefinition getOwningStep() {
    return ((com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter")).getOwningStep();
  }
  
  /**
   * Gets the value of the Parameter field.
   * The value of this argument
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParameter() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PARAMETER_PROP.get());
  }
  
  /**
   * Gets the value of the ParameterType field.
   * The type of this argument
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParameterType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PARAMETERTYPE_PROP.get());
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
   * Gets the value of the VariableFieldName field.
   * Used to denote field selection for a complex variable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVariableFieldName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VARIABLEFIELDNAME_PROP.get());
  }
  
  /**
   * Gets the value of the VariableName field.
   * Local Variable Name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVariableName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VARIABLENAME_PROP.get());
  }
  
  /**
   * Gets the value of the InScopeValueIsModifier field.
   * A flag to indicate if the in scope value is a modifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInScopeValueIsModifier() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INSCOPEVALUEISMODIFIER_PROP.get());
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
   * Gets the value of the OverrideSource field.
   * If true, take argument source from here instead of rate table definition.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOverrideSource() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(OVERRIDESOURCE_PROP.get());
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
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ConstantValue field.
   */
  public void setConstantValue(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONSTANTVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CovTermCode field.
   */
  public void setCovTermCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COVTERMCODE_PROP.get(), value);
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
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InScopeParam field.
   */
  public void setInScopeParam(typekey.CalcRoutineParamName value) {
    __getInternalInterface().setFieldValue(INSCOPEPARAM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InScopeValue field.
   */
  public void setInScopeValue(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(INSCOPEVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InScopeValueIsModifier field.
   */
  public void setInScopeValueIsModifier(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INSCOPEVALUEISMODIFIER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InScopeValueType field.
   */
  public void setInScopeValueType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(INSCOPEVALUETYPE_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the Operand field.
   */
  public void setOperand(entity.CalcStepDefinitionOperand value) {
    __getInternalInterface().setFieldValue(OPERAND_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OperandType field.
   */
  public void setOperandType(typekey.CalcStepOperandType value) {
    __getInternalInterface().setFieldValue(OPERANDTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideSource field.
   */
  public void setOverrideSource(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(OVERRIDESOURCE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Parameter field.
   */
  public void setParameter(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PARAMETER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ParameterType field.
   */
  public void setParameterType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PARAMETERTYPE_PROP.get(), value);
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
   * Sets the value of the VariableFieldName field.
   */
  public void setVariableFieldName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(VARIABLEFIELDNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the VariableName field.
   */
  public void setVariableName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(VARIABLENAME_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.CalcStepDefinitionArgumentInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.CalcStepDefinitionArgument.this.__getDelegateManager();
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public void changeToOperandType(typekey.CalcStepOperandType operandType) {
      ((com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter")).changeToOperandType(operandType);
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the ConstantValue field.
     * Represents constant value 
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getConstantValue() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONSTANTVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the CovTermCode field.
     * Cov term pattern code if value represents a cov term.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCovTermCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVTERMCODE_PROP.get());
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
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the InScopeParam field.
     * The rate routine param that forms the first part of the in scope value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.CalcRoutineParamName getInScopeParam() {
      return (typekey.CalcRoutineParamName)__getInternalInterface().getFieldValue(INSCOPEPARAM_PROP.get());
    }
    
    /**
     * Gets the value of the InScopeValue field.
     * A gosu expression ('dot path') that describes how to access the desired value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getInScopeValue() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INSCOPEVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the InScopeValueType field.
     * The desired data type for an in-scope value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getInScopeValueType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INSCOPEVALUETYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Operand field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.CalcStepDefinitionOperand getOperand() {
      return (entity.CalcStepDefinitionOperand)__getInternalInterface().getFieldValue(OPERAND_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getOperandID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(OPERAND_PROP.get());
    }
    
    /**
     * Gets the value of the OperandType field.
     * Type of operand
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.CalcStepOperandType getOperandType() {
      return (typekey.CalcStepOperandType)__getInternalInterface().getFieldValue(OPERANDTYPE_PROP.get());
    }
    
    public entity.CalcStepDefinition getOwningStep() {
      return ((com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter")).getOwningStep();
    }
    
    /**
     * Gets the value of the Parameter field.
     * The value of this argument
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getParameter() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PARAMETER_PROP.get());
    }
    
    /**
     * Gets the value of the ParameterType field.
     * The type of this argument
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getParameterType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PARAMETERTYPE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
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
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the VariableFieldName field.
     * Used to denote field selection for a complex variable
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getVariableFieldName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VARIABLEFIELDNAME_PROP.get());
    }
    
    /**
     * Gets the value of the VariableName field.
     * Local Variable Name
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getVariableName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VARIABLENAME_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the InScopeValueIsModifier field.
     * A flag to indicate if the in scope value is a modifier
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInScopeValueIsModifier() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INSCOPEVALUEISMODIFIER_PROP.get());
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
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * Gets the value of the OverrideSource field.
     * If true, take argument source from here instead of rate table definition.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isOverrideSource() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(OVERRIDESOURCE_PROP.get());
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
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
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
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
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
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ConstantValue field.
     */
    public void setConstantValue(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONSTANTVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CovTermCode field.
     */
    public void setCovTermCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVTERMCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InScopeParam field.
     */
    public void setInScopeParam(typekey.CalcRoutineParamName value) {
      __getInternalInterface().setFieldValue(INSCOPEPARAM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InScopeValue field.
     */
    public void setInScopeValue(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(INSCOPEVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InScopeValueIsModifier field.
     */
    public void setInScopeValueIsModifier(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INSCOPEVALUEISMODIFIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InScopeValueType field.
     */
    public void setInScopeValueType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(INSCOPEVALUETYPE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the Operand field.
     */
    public void setOperand(entity.CalcStepDefinitionOperand value) {
      __getInternalInterface().setFieldValue(OPERAND_PROP.get(), value);
    }
    
    public void setOperandID(gw.pl.persistence.core.Key value) {
      setFieldValue(OPERAND_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OperandType field.
     */
    public void setOperandType(typekey.CalcStepOperandType value) {
      __getInternalInterface().setFieldValue(OPERANDTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OverrideSource field.
     */
    public void setOverrideSource(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(OVERRIDESOURCE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Parameter field.
     */
    public void setParameter(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PARAMETER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ParameterType field.
     */
    public void setParameterType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PARAMETERTYPE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VariableFieldName field.
     */
    public void setVariableFieldName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(VARIABLEFIELDNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VariableName field.
     */
    public void setVariableName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(VARIABLENAME_PROP.get(), value);
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
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter", "gw.rating.flow.CalcStepDefinitionArgumentAdapter");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.CalcStepDefinitionArgument.class, config);
    com.guidewire._generated.entity.CalcStepDefinitionArgumentInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.CalcStepDefinitionArgument, com.guidewire._generated.entity.CalcStepDefinitionArgumentInternal>() {
      public java.lang.Object getImplementation(entity.CalcStepDefinitionArgument bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.CalcStepDefinitionArgumentInternal getInternalInterface(entity.CalcStepDefinitionArgument bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.CalcStepDefinitionArgument newEmptyInstance() {
        return new entity.CalcStepDefinitionArgument((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}