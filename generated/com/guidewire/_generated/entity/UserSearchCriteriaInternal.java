package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserSearchCriteria.eti;UserSearchCriteria.eix;UserSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserSearchCriteriaInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pl.domain.community.UserSearchCriteriaPublicMethods, com.guidewire.pl.domain.community.impl.UserSearchCriteriaInternalMethods, java.io.Serializable {
  /**
   * Gets the value of the Contact field.
   * The user's contact information.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContactSearchCriteria getContact();
  
  
  public gw.pl.persistence.core.Key getContactID();
  
  
  /**
   * Gets the value of the GroupName field.
   * Name of group the user belongs to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getGroupName();
  
  
  /**
   * Gets the value of the GroupNameKanji field.
   * Name of group the user belongs to in Kanji. Used only for Japanese.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getGroupNameKanji();
  
  
  /**
   * Gets the value of the GroupType field.
   * Type of group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GroupType getGroupType();
  
  
  /**
   * Gets the value of the Organization field.
   * The organization the user belongs to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getOrganization();
  
  
  public gw.pl.persistence.core.Key getOrganizationID();
  
  
  /**
   * Gets the value of the ParentGroup field.
   * Parent of the group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getParentGroup();
  
  
  public gw.pl.persistence.core.Key getParentGroupID();
  
  
  /**
   * Gets the value of the ProducerCode field.
   * The code that identifies an internal carrier group as a branch.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProducerCode();
  
  
  /**
   * Gets the value of the Role field.
   * The role which the user has.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Role getRole();
  
  
  public gw.pl.persistence.core.Key getRoleID();
  
  
  /**
   * Gets the value of the UserType field.
   * Indicates type of the user.  Primarily used for assignments.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UserType getUserType();
  
  
  /**
   * Gets the value of the Username field.
   * Username
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUsername();
  
  
  /**
   * Gets the value of the IncludeDefaultOwner field.
   * Include in search users who might be the default owner.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIncludeDefaultOwner();
  
  
  /**
   * Gets the value of the IncludeSystemUsers field.
   * Include in search system users.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIncludeSystemUsers();
  
  
  /**
   * Gets the value of the NotInAnyGroup field.
   * Include in the search users not in any group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isNotInAnyGroup();
  
  
  /**
   * Sets the value of the Contact field.
   */
  public void setContact(entity.ContactSearchCriteria value);
  
  
  public void setContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GroupName field.
   */
  public void setGroupName(java.lang.String value);
  
  
  /**
   * Sets the value of the GroupNameKanji field.
   */
  public void setGroupNameKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the GroupType field.
   */
  public void setGroupType(typekey.GroupType value);
  
  
  /**
   * Sets the value of the IncludeDefaultOwner field.
   */
  public void setIncludeDefaultOwner(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the IncludeSystemUsers field.
   */
  public void setIncludeSystemUsers(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the NotInAnyGroup field.
   */
  public void setNotInAnyGroup(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Organization field.
   */
  public void setOrganization(entity.Organization value);
  
  
  public void setOrganizationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ParentGroup field.
   */
  public void setParentGroup(entity.Group value);
  
  
  public void setParentGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProducerCode field.
   */
  public void setProducerCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Role field.
   */
  public void setRole(entity.Role value);
  
  
  public void setRoleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the UserType field.
   */
  public void setUserType(typekey.UserType value);
  
  
  /**
   * Sets the value of the Username field.
   */
  public void setUsername(java.lang.String value);
  
  
  
}