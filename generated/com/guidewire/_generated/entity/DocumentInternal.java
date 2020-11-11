package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Document.eti;Document.eix;Document.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DocumentInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.OverlapTableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.document.impl.DocumentCoreExtMethods, com.guidewire.pl.domain.document.DocumentPublicMethods, com.guidewire.pl.domain.document.impl.DocumentInternalMethods, com.guidewire.pl.system.bundle.CommitCallback, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.RemoveCallback, com.guidewire.pl.system.bundle.UpdateCallback {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String DOCUMENTADDED_EVENT = "DocumentAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String DOCUMENTCHANGED_EVENT = "DocumentChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String DOCUMENTREMOVED_EVENT = "DocumentRemoved";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String DOCUMENTSTORE_EVENT = "DocumentStore";
  
  /**
   * Gets the value of the Account field.
   * Associated account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the Author field.
   * Name of the person who created the document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAuthor();
  
  
  /**
   * Gets the value of the AuthorDenorm field.
   * denorm field for Author
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAuthorDenorm();
  
  
  /**
   * Gets the value of the Contingency field.
   * Associated Contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contingency getContingency();
  
  
  public gw.pl.persistence.core.Key getContingencyID();
  
  
  /**
   * Gets the value of the DateCreated field.
   * Date and time the document was created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateCreated();
  
  
  /**
   * Gets the value of the DateModified field.
   * Date and time the document was last modified.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateModified();
  
  
  /**
   * Gets the value of the Description field.
   * Description of the document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the DocUID field.
   * The Unique Identifier (UID) for this document.     The format of this UID is specific to the deployed Document Management System (DMS), and is passed to the configured IDocumentContentSource implementation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocUID();
  
  
  /**
   * Gets the value of the DocumentIdentifier field.
   * Short human-readable identifier for the document, often used as an extra storage location for form codes, when name and documenttype are inadequate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentIdentifier();
  
  
  /**
   * Gets the value of the DocumentIdentifierDenorm field.
   * denorm field for DocumentIdentifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentIdentifierDenorm();
  
  
  /**
   * Gets the value of the DraftDocument field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DraftDocument getDraftDocument();
  
  
  public gw.pl.persistence.core.Key getDraftDocumentID();
  
  
  /**
   * Gets the value of the Job field.
   * Associated job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the Language field.
   * The language in which this document is created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the MimeType field.
   * The MIME type of this document; for example, application/msword for a Microsoft Word document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMimeType();
  
  
  /**
   * Gets the value of the Name field.
   * Human-readable name of the document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the NameDenorm field.
   * denorm field for Name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameDenorm();
  
  
  /**
   * Gets the value of the PendingDocUID field.
   * The document is pending, and it's pending storage has Unique Identifier (UID).     The format of this UID is specific to the IDCS implementation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPendingDocUID();
  
  
  /**
   * Gets the value of the Policy field.
   * Associated policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Associated Policy Period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the Recipient field.
   * Name of the intended recipient of the document (if any).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRecipient();
  
  
  /**
   * Gets the value of the Section field.
   * The section to which this document belongs, if any.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentSection getSection();
  
  
  /**
   * Gets the value of the SecurityType field.
   * Type of document used for access-restriction purposes, in conjunction with the information in security-config.xml.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentSecurityType getSecurityType();
  
  
  /**
   * Gets the value of the Status field.
   * The current status of the document, if any.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentStatusType getStatus();
  
  
  /**
   * Gets the value of the TemplateID field.
   * ID of the template used to generate the document
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTemplateID();
  
  
  /**
   * Gets the value of the Type field.
   * The specific type of the document, if any.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentType getType();
  
  
  /**
   * Gets the value of the DMS field.
   * Whether this document has content stored in a Document Management System.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDMS();
  
  
  /**
   * Gets the value of the Inbound field.
   * Whether the document is an inbound, outbound, or stationary (null) document
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInbound();
  
  
  /**
   * Gets the value of the Obsolete field.
   * If true, the information in the document can no longer be relied upon to be up-to-date and relevant. This is often used instead of deletion to preserve history.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isObsolete();
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Author field.
   */
  public void setAuthor(java.lang.String value);
  
  
  /**
   * Sets the value of the AuthorDenorm field.
   */
  public void setAuthorDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Contingency field.
   */
  public void setContingency(entity.Contingency value);
  
  
  public void setContingencyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DMS field.
   */
  public void setDMS(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DateCreated field.
   */
  public void setDateCreated(java.util.Date value);
  
  
  /**
   * Sets the value of the DateModified field.
   */
  public void setDateModified(java.util.Date value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the DocUID field.
   */
  public void setDocUID(java.lang.String value);
  
  
  /**
   * Sets the value of the DocumentIdentifier field.
   */
  public void setDocumentIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the DocumentIdentifierDenorm field.
   */
  public void setDocumentIdentifierDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the DraftDocument field.
   */
  public void setDraftDocument(entity.DraftDocument value);
  
  
  public void setDraftDocumentID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Inbound field.
   */
  public void setInbound(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the MimeType field.
   */
  public void setMimeType(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the NameDenorm field.
   */
  public void setNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Obsolete field.
   */
  public void setObsolete(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PendingDocUID field.
   */
  public void setPendingDocUID(java.lang.String value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Recipient field.
   */
  public void setRecipient(java.lang.String value);
  
  
  /**
   * Sets the value of the Section field.
   */
  public void setSection(typekey.DocumentSection value);
  
  
  /**
   * Sets the value of the SecurityType field.
   */
  public void setSecurityType(typekey.DocumentSecurityType value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.DocumentStatusType value);
  
  
  /**
   * Sets the value of the TemplateID field.
   */
  public void setTemplateID(java.lang.String value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.DocumentType value);
  
  
  
}