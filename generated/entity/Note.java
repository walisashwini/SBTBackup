package entity;

/**
 * Note
 * Notes added by users
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Note.eti;Note.eix;Note.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "Note")
public class Note extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.OverlapTable, entity.FrozenSetMember, entity.EventAware {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Note> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Note>("entity.Note");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACCOUNT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Account");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACTIVITY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Activity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> AUTHOR_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Author");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUTHORINGDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AuthoringDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BODY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Body");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONFIDENTIAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Confidential");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CONTINGENCY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Contingency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JOB_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Job");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LANGUAGE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Language");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOADCOMMANDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LoadCommandID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYPERIOD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SECURITYTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SecurityType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SUBJECT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Subject");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SUBJECTDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SubjectDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOPIC_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Topic");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.NoteInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final java.lang.String NOTEADDED_EVENT = "NoteAdded";
  
  public static final java.lang.String NOTECHANGED_EVENT = "NoteChanged";
  
  public static final java.lang.String NOTEREMOVED_EVENT = "NoteRemoved";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public Note()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public Note(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected Note(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.NoteInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.NoteInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  public gw.api.domain.linkedobject.LinkedObjectContainer[] generateLevels(entity.Account acct, entity.Policy policy, entity.Job job) {
    return ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).generateLevels(acct, policy, job);
  }
  
  public gw.api.domain.linkedobject.LinkedObjectContainer[] generateLevels(entity.Account acct, entity.Policy policy, entity.Job job, entity.Contingency contingency) {
    return ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).generateLevels(acct, policy, job, contingency);
  }
  
  /**
   * Gets the value of the Account field.
   * Associated account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount() {
    return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the Activity field.
   * The activity associated with the note.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Activity getActivity() {
    return (entity.Activity)__getInternalInterface().getFieldValue(ACTIVITY_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  /**
   * Gets the value of the Author field.
   * User who wrote the note.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getAuthor() {
    return ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).getAuthor();
  }
  
  /**
   * Gets the value of the AuthoringDate field.
   * Date on which the note was originally authored.  If null, the CreateTime seves this purpose.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAuthoringDate() {
    return ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).getAuthoringDate();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the Body field.
   * Body of the note.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBody() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BODY_PROP.get());
  }
  
  /**
   * Gets the value of the Contingency field.
   * Associated Contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contingency getContingency() {
    return (entity.Contingency)__getInternalInterface().getFieldValue(CONTINGENCY_PROP.get());
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
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Job field.
   * Associated job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob() {
    return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
  }
  
  /**
   * Gets the value of the Language field.
   * The language in which this note is created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage() {
    return (typekey.LanguageType)__getInternalInterface().getFieldValue(LANGUAGE_PROP.get());
  }
  
  public gw.api.domain.linkedobject.LinkedObjectContainer getLevel() {
    return ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).getLevel();
  }
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
  }
  
  /**
   * Returns what the note's related to: either a Contact, an Exposure,
   * or the whole claim.
   * @return the string representation of the related to object for this note.
   */
  public java.lang.String getNoteRelatedTo() {
    return ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).getNoteRelatedTo();
  }
  
  /**
   * Gets the value of the Policy field.
   * Associated policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy() {
    return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Associated Policy Period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
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
   * Gets the value of the SecurityType field.
   * Type of note; used for access-restriction purposes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NoteSecurityType getSecurityType() {
    return (typekey.NoteSecurityType)__getInternalInterface().getFieldValue(SECURITYTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the Subject field.
   * Subject or summary of the note.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubject() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBJECT_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubjectDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBJECTDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the Topic field.
   * Topic to which the note belongs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NoteTopicType getTopic() {
    return (typekey.NoteTopicType)__getInternalInterface().getFieldValue(TOPIC_PROP.get());
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
   * Gets the value of the Confidential field.
   * Whether the note is confidential.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isConfidential() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CONFIDENTIAL_PROP.get());
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
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
   * This will return true if the current user can create
   * a note of type requested.
   * @param type the security type
   * @return true if they user can create the note of this security type
   */
  public boolean isSecurityTypeCreatableByUser(typekey.NoteSecurityType type) {
    return ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).isSecurityTypeCreatableByUser(type);
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
  
  public void removeFromContainers() {
    ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).removeFromContainers();
  }
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value) {
    __getInternalInterface().setFieldValue(ACCOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Activity field.
   */
  public void setActivity(entity.Activity value) {
    __getInternalInterface().setFieldValue(ACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Author field.
   */
  public void setAuthor(entity.User value) {
    __getInternalInterface().setFieldValue(AUTHOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuthoringDate field.
   */
  public void setAuthoringDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(AUTHORINGDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Body field.
   */
  public void setBody(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BODY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Confidential field.
   */
  public void setConfidential(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CONFIDENTIAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Contingency field.
   */
  public void setContingency(entity.Contingency value) {
    __getInternalInterface().setFieldValue(CONTINGENCY_PROP.get(), value);
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
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value) {
    __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value) {
    __getInternalInterface().setFieldValue(LANGUAGE_PROP.get(), value);
  }
  
  public void setLevel(gw.api.domain.linkedobject.LinkedObjectContainer container) {
    ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).setLevel(container);
  }
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  private void setLoadCommandID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
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
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value) {
    __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
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
   * Sets the value of the SecurityType field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setSecurityType(typekey.NoteSecurityType value) {
    ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).setSecurityType(value);
  }
  
  /**
   * Sets the value of the Subject field.
   */
  public void setSubject(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SUBJECT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SubjectDenorm field.
   */
  private void setSubjectDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SUBJECTDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Topic field.
   */
  public void setTopic(typekey.NoteTopicType value) {
    __getInternalInterface().setFieldValue(TOPIC_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.NoteInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.Note.this.__getDelegateManager();
    }
    
    public void addEvent(com.guidewire.pl.system.entity.BeanEvent event) {
      ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).addEvent(event);
    }
    
    /**
     * Associates an event with the bean, which will be fired when the bean is
     * committed. A bean with an event is considered changed.
     * @param strEventId The event id.
     */
    public void addEvent(java.lang.String strEventId) {
      ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
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
    
    public java.util.List generateInsertEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateInsertEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public gw.api.domain.linkedobject.LinkedObjectContainer[] generateLevels(entity.Account acct, entity.Policy policy, entity.Job job) {
      return ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).generateLevels(acct, policy, job);
    }
    
    public gw.api.domain.linkedobject.LinkedObjectContainer[] generateLevels(entity.Account acct, entity.Policy policy, entity.Job job, entity.Contingency contingency) {
      return ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).generateLevels(acct, policy, job, contingency);
    }
    
    public java.util.List generateRemoveEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateRemoveEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List generateUpdateEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateUpdateEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the Account field.
     * Associated account
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Account getAccount() {
      return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAccountID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACCOUNT_PROP.get());
    }
    
    /**
     * Gets the value of the Activity field.
     * The activity associated with the note.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Activity getActivity() {
      return (entity.Activity)__getInternalInterface().getFieldValue(ACTIVITY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getActivityID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    /**
     * Gets the value of the Author field.
     * User who wrote the note.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getAuthor() {
      return ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).getAuthor();
    }
    
    public gw.pl.persistence.core.Key getAuthorID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(AUTHOR_PROP.get());
    }
    
    /**
     * Gets the value of the AuthoringDate field.
     * Date on which the note was originally authored.  If null, the CreateTime seves this purpose.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAuthoringDate() {
      return ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).getAuthoringDate();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the Body field.
     * Body of the note.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBody() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BODY_PROP.get());
    }
    
    public java.lang.Object getContainer() {
      return ((com.guidewire.pl.domain.note.impl.NoteInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.impl.NoteInternalMethods")).getContainer();
    }
    
    /**
     * Gets the value of the Contingency field.
     * Associated Contingency
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Contingency getContingency() {
      return (entity.Contingency)__getInternalInterface().getFieldValue(CONTINGENCY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getContingencyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CONTINGENCY_PROP.get());
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
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    /**
     * Gets the value of the FrozenSet field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FrozenSet getFrozenSet() {
      return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFrozenSetID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FROZENSET_PROP.get());
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
     * Gets the value of the Job field.
     * Associated job.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Job getJob() {
      return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getJobID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(JOB_PROP.get());
    }
    
    /**
     * Gets the value of the Language field.
     * The language in which this note is created.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LanguageType getLanguage() {
      return (typekey.LanguageType)__getInternalInterface().getFieldValue(LANGUAGE_PROP.get());
    }
    
    public gw.api.domain.linkedobject.LinkedObjectContainer getLevel() {
      return ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).getLevel();
    }
    
    public java.lang.String getLevelDisplayExpression() {
      return ((com.guidewire.pc.domain.note.impl.NoteCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtInternalMethods")).getLevelDisplayExpression();
    }
    
    /**
     * Gets the value of the LoadCommandID field.
     * LoadCommand for load where row was created. If not null this object was loaded via the loader.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getLoadCommandID() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
    }
    
    /**
     * Returns what the note's related to: either a Contact, an Exposure,
     * or the whole claim.
     * @return the string representation of the related to object for this note.
     */
    public java.lang.String getNoteRelatedTo() {
      return ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).getNoteRelatedTo();
    }
    
    /**
     * Gets the value of the Policy field.
     * Associated policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Policy getPolicy() {
      return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICY_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyPeriod field.
     * Associated Policy Period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getPolicyPeriod() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyPeriodID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYPERIOD_PROP.get());
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
     * Gets the value of the SecurityType field.
     * Type of note; used for access-restriction purposes
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.NoteSecurityType getSecurityType() {
      return (typekey.NoteSecurityType)__getInternalInterface().getFieldValue(SECURITYTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Subject field.
     * Subject or summary of the note.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSubject() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBJECT_PROP.get());
    }
    
    /**
     * Gets the value of the SubjectDenorm field.
     * denorm field for Subject
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSubjectDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBJECTDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the Topic field.
     * Topic to which the note belongs.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.NoteTopicType getTopic() {
      return (typekey.NoteTopicType)__getInternalInterface().getFieldValue(TOPIC_PROP.get());
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
     * Gets the value of the Confidential field.
     * Whether the note is confidential.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isConfidential() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CONFIDENTIAL_PROP.get());
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
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
     * This will return true if the current user can create
     * a note of type requested.
     * @param type the security type
     * @return true if they user can create the note of this security type
     */
    public boolean isSecurityTypeCreatableByUser(typekey.NoteSecurityType type) {
      return ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).isSecurityTypeCreatableByUser(type);
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
    
    public void removeFromContainers() {
      ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).removeFromContainers();
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the Account field.
     */
    public void setAccount(entity.Account value) {
      __getInternalInterface().setFieldValue(ACCOUNT_PROP.get(), value);
    }
    
    public void setAccountID(gw.pl.persistence.core.Key value) {
      setFieldValue(ACCOUNT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Activity field.
     */
    public void setActivity(entity.Activity value) {
      __getInternalInterface().setFieldValue(ACTIVITY_PROP.get(), value);
    }
    
    public void setActivityID(gw.pl.persistence.core.Key value) {
      setFieldValue(ACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Author field.
     */
    public void setAuthor(entity.User value) {
      __getInternalInterface().setFieldValue(AUTHOR_PROP.get(), value);
    }
    
    public void setAuthorID(gw.pl.persistence.core.Key value) {
      setFieldValue(AUTHOR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuthoringDate field.
     */
    public void setAuthoringDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(AUTHORINGDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Body field.
     */
    public void setBody(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BODY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Confidential field.
     */
    public void setConfidential(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CONFIDENTIAL_PROP.get(), value);
    }
    
    public void setContainer(java.lang.Object container) {
      ((com.guidewire.pl.domain.note.impl.NoteInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.impl.NoteInternalMethods")).setContainer(container);
    }
    
    /**
     * Sets the value of the Contingency field.
     */
    public void setContingency(entity.Contingency value) {
      __getInternalInterface().setFieldValue(CONTINGENCY_PROP.get(), value);
    }
    
    public void setContingencyID(gw.pl.persistence.core.Key value) {
      setFieldValue(CONTINGENCY_PROP.get(), value);
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
     * Sets the value of the FrozenSet field.
     */
    public void setFrozenSet(entity.FrozenSet value) {
      __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    public void setFrozenSetID(gw.pl.persistence.core.Key value) {
      setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Job field.
     */
    public void setJob(entity.Job value) {
      __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
    }
    
    public void setJobID(gw.pl.persistence.core.Key value) {
      setFieldValue(JOB_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Language field.
     */
    public void setLanguage(typekey.LanguageType value) {
      __getInternalInterface().setFieldValue(LANGUAGE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    public void setLevel(gw.api.domain.linkedobject.LinkedObjectContainer container) {
      ((com.guidewire.pc.domain.note.impl.NoteCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods")).setLevel(container);
    }
    
    /**
     * Sets the value of the LoadCommandID field.
     */
    public void setLoadCommandID(java.lang.Long value) {
      __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
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
     * Sets the value of the Policy field.
     */
    public void setPolicy(entity.Policy value) {
      __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
    }
    
    public void setPolicyID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyPeriod field.
     */
    public void setPolicyPeriod(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
    }
    
    public void setPolicyPeriodID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICYPERIOD_PROP.get(), value);
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
     * Sets the value of the SecurityType field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setSecurityType(typekey.NoteSecurityType value) {
      ((com.guidewire.pl.domain.note.NotePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.note.NotePublicMethods")).setSecurityType(value);
    }
    
    /**
     * Sets the value of the Subject field.
     */
    public void setSubject(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SUBJECT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SubjectDenorm field.
     */
    public void setSubjectDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SUBJECTDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Topic field.
     */
    public void setTopic(typekey.NoteTopicType value) {
      __getInternalInterface().setFieldValue(TOPIC_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.note.impl.NoteCoreExtInternalMethods", "com.guidewire.pc.domain.note.impl.NoteCoreExtMethodsImpl");
    config.put("com.guidewire.pc.domain.note.impl.NoteCoreExtMethods", "com.guidewire.pc.domain.note.impl.NoteCoreExtMethodsImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.note.NotePublicMethods", "com.guidewire.pl.domain.note.impl.NoteImpl");
    config.put("com.guidewire.pl.domain.note.impl.NoteInternalMethods", "com.guidewire.pl.domain.note.impl.NoteImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.Note.class, config);
    com.guidewire._generated.entity.NoteInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.Note, com.guidewire._generated.entity.NoteInternal>() {
      public java.lang.Object getImplementation(entity.Note bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.NoteInternal getInternalInterface(entity.Note bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.Note newEmptyInstance() {
        return new entity.Note((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}