package entity;

/**
 * OutboundFileS3Config
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundFileS3Config.eti;OutboundFileS3Config.eix;OutboundFileS3Config.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "OutboundFileS3Config")
public class OutboundFileS3Config extends entity.OutboundFileConfig implements com.guidewire.outboundfile.config.OutboundFileConfigMethods {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.OutboundFileS3Config> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.OutboundFileS3Config>("entity.OutboundFileS3Config");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESTINATIONS3BUCKET_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DestinationS3Bucket");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESTINATIONS3PREFIX_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DestinationS3Prefix");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PROFILENAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProfileName");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public OutboundFileS3Config()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public OutboundFileS3Config(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected OutboundFileS3Config(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.OutboundFileS3ConfigInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.OutboundFileS3ConfigInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.OutboundFileS3ConfigInternal)super.__getInternalInterface();
  }
  
  /**
   * Gets the value of the DestinationS3Bucket field.
   * Amazon S3 bucket ARN address for permanent destination
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDestinationS3Bucket() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESTINATIONS3BUCKET_PROP.get());
  }
  
  /**
   * Gets the value of the DestinationS3Prefix field.
   * The full path name inside Amazon S3 bucket for permanent destination.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDestinationS3Prefix() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESTINATIONS3PREFIX_PROP.get());
  }
  
  /**
   * Gets the value of the ProfileName field.
   * Amazon S3 user profile for credentials
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProfileName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PROFILENAME_PROP.get());
  }
  
  /**
   * Sets the value of the DestinationS3Bucket field.
   */
  public void setDestinationS3Bucket(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESTINATIONS3BUCKET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DestinationS3Prefix field.
   */
  public void setDestinationS3Prefix(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESTINATIONS3PREFIX_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProfileName field.
   */
  public void setProfileName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PROFILENAME_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.OutboundFileS3ConfigInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.OutboundFileS3Config.this.__getDelegateManager();
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
    
    public java.lang.String generateBatchProcessID() {
      return ((com.guidewire.outboundfile.config.OutboundFileConfigMethods)__getDelegateManager().getImplementation("com.guidewire.outboundfile.config.OutboundFileConfigMethods")).generateBatchProcessID();
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
    
    /**
     * Gets the value of the DaysTillPurge field.
     * The number of days to wait before purging outbound files.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getDaysTillPurge() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(DAYSTILLPURGE_PROP.get());
    }
    
    /**
     * Gets the value of the DestinationS3Bucket field.
     * Amazon S3 bucket ARN address for permanent destination
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDestinationS3Bucket() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESTINATIONS3BUCKET_PROP.get());
    }
    
    /**
     * Gets the value of the DestinationS3Prefix field.
     * The full path name inside Amazon S3 bucket for permanent destination.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDestinationS3Prefix() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESTINATIONS3PREFIX_PROP.get());
    }
    
    /**
     * Gets the value of the Extension field.
     * Extension for the output file.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExtension() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXTENSION_PROP.get());
    }
    
    /**
     * Gets the value of the FileHandlerClass field.
     * Fully qualified class name of the outbound file handler.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFileHandlerClass() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FILEHANDLERCLASS_PROP.get());
    }
    
    public java.lang.String getFullPermanentFilePath(java.lang.String arg0) {
      return ((com.guidewire.outboundfile.config.OutboundFileConfigMethods)__getDelegateManager().getImplementation("com.guidewire.outboundfile.config.OutboundFileConfigMethods")).getFullPermanentFilePath(arg0);
    }
    
    public java.lang.String getFullTemporaryFilePath(java.lang.String arg0) {
      return ((com.guidewire.outboundfile.config.OutboundFileConfigMethods)__getDelegateManager().getImplementation("com.guidewire.outboundfile.config.OutboundFileConfigMethods")).getFullTemporaryFilePath(arg0);
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
     * Gets the value of the Name field.
     * Name of the outbound file handler source.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the Prefix field.
     * Prefix used for the batch identifier and the output file name.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrefix() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREFIX_PROP.get());
    }
    
    /**
     * Gets the value of the ProfileName field.
     * Amazon S3 user profile for credentials
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProfileName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PROFILENAME_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.OutboundFileConfig getSubtype() {
      return (typekey.OutboundFileConfig)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TemporaryDirectory field.
     * Valid file path to the temporary directory.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTemporaryDirectory() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TEMPORARYDIRECTORY_PROP.get());
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
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
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
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public void moveTempFileToFinalDestination(java.lang.String arg0) {
      ((com.guidewire.outboundfile.config.OutboundFileConfigMethods)__getDelegateManager().getImplementation("com.guidewire.outboundfile.config.OutboundFileConfigMethods")).moveTempFileToFinalDestination(arg0);
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
     * Sets the value of the DaysTillPurge field.
     */
    public void setDaysTillPurge(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(DAYSTILLPURGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DestinationS3Bucket field.
     */
    public void setDestinationS3Bucket(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESTINATIONS3BUCKET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DestinationS3Prefix field.
     */
    public void setDestinationS3Prefix(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESTINATIONS3PREFIX_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Extension field.
     */
    public void setExtension(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXTENSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FileHandlerClass field.
     */
    public void setFileHandlerClass(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FILEHANDLERCLASS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the Name field.
     */
    public void setName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
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
     * Sets the value of the Prefix field.
     */
    public void setPrefix(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PREFIX_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProfileName field.
     */
    public void setProfileName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PROFILENAME_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.OutboundFileConfig value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TemporaryDirectory field.
     */
    public void setTemporaryDirectory(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TEMPORARYDIRECTORY_PROP.get(), value);
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
    config.put("com.guidewire.outboundfile.config.OutboundFileConfigMethods", "com.guidewire.outboundfile.config.OutboundFileS3ConfigImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.OutboundFileS3Config.class, config);
    com.guidewire._generated.entity.OutboundFileS3ConfigInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.OutboundFileS3Config, com.guidewire._generated.entity.OutboundFileS3ConfigInternal>() {
      public java.lang.Object getImplementation(entity.OutboundFileS3Config bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.OutboundFileS3ConfigInternal getInternalInterface(entity.OutboundFileS3Config bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.OutboundFileS3Config newEmptyInstance() {
        return new entity.OutboundFileS3Config((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}