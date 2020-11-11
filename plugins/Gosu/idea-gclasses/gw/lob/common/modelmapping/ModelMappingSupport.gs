package gw.lob.common.modelmapping

uses gw.lob.common.dependency.EffectiveJurisdictionCriteria

/**
 * Interface for model mapping support
 */
interface ModelMappingSupport {

  static property get Instance() : ModelMappingSupport {
    return ModelMappingSupportImpl.Instance // default implementation of model mapping framework
  }

  /**
   * Function to check whether coverable with the given criteria has model path defined in the
   * model mapping configuration
   *
   * @param coverableName Name of the coverable
   * @param criteria      EffectiveJurisdiction criteria
   * @return boolean      true if the model path of the coverable is found with the given criteria
   */
  function isCoverableAvailable(coverableName : String, criteria : EffectiveJurisdictionCriteria) : boolean

  /**
   * Function to check whether property with the given criteria has model path defined in the
   * model mapping configuration
   *
   * @param coverableName Name of the coverable
   * @param propertyName  Name of the property
   * @param criteria      EffectiveJurisdiction criteria
   * @return boolean      true if the model path of the property is found with the given criteria
   */
  function isPropertyAvailable(coverableName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : boolean

  /**
   * Function to check whether clause with the given criteria has model path defined in the
   * model mapping configuration
   *
   * @param clauseName Name of the clause
   * @param criteria   EffectiveJurisdiction criteria
   * @return boolean   true if the model path of the clause is found with the given criteria
   */
  function isClauseAvailable(clauseName : String, criteria : EffectiveJurisdictionCriteria) : boolean

  /**
   * Function to check whether covTerm with the given criteria has model path defined in the
   * model mapping configuration
   *
   * @param clauseName  Name of the clause
   * @param covTermName Name of the covTerm
   * @param criteria    EffectiveJurisdiction criteria
   * @return boolean    true if the model path of the covTerm is found with the given criteria
   */
  function isCovTermAvailable(clauseName : String, covTermName : String, criteria : EffectiveJurisdictionCriteria) : boolean

  /**
   * Function to check whether schedule with the given criteria has model path defined in the
   * model mapping configuration
   *
   * @param scheduleName Name of the schedule
   * @param criteria     EffectiveJurisdiction criteria
   * @return boolean     true if the model path of the schedule is found with the given criteria
   */
  function isScheduleAvailable(scheduleName : String, criteria : EffectiveJurisdictionCriteria) : boolean

  /**
   * Function to check whether scheduleItem with the given criteria has model path defined in the
   * model mapping configuration
   *
   * @param scheduleName     Name of the schedule
   * @param scheduleItemName Name of the scheduleItem
   * @param criteria         EffectiveJurisdiction criteria
   * @return boolean         true if the model path of the scheduleItem is found with the given criteria
   */
  function isScheduleItemAvailable(scheduleName : String, scheduleItemName : String, criteria : EffectiveJurisdictionCriteria) : boolean

  /**
   * Function to find coverable model path with coverable name
   * and EffectiveJurisdictionCriteria
   *
   * @param coverableName Name of the coverable
   * @param criteria      EffectiveJurisdiction criteria
   * @return String       This returns the coverable model path if it exists with the given criteria
   */
  function getCoverablePath(coverableName : String, criteria : EffectiveJurisdictionCriteria) : String

  /**
   * Function to find property model path with the containing coverable name,
   * property name and EffectiveJurisdictionCriteria
   *
   * @param coverableName Name of the coverable
   * @param propertyName  Name of the property
   * @param criteria      EffectiveJurisdiction criteria
   * @return String       This returns the property model path if it exists with the given criteria
   */
  function getPropertyPath(coverableName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : String

  /**
   * Function to find clause model path with clause name
   * and EffectiveJurisdictionCriteria
   *
   * @param clauseName Name of the clause
   * @param criteria   EffectiveJurisdiction criteria
   * @return String    This returns the clause model path if it exists with the given criteria
   */
  function getClausePath(clauseName : String, criteria : EffectiveJurisdictionCriteria) : String

  /**
   * Function to find covTerm model path with the containing clause name,
   * covTerm name and EffectiveJurisdictionCriteria
   *
   * @param clauseName  Name of the clause
   * @param covTermName Name of the covTerm
   * @param criteria    EffectiveJurisdiction criteria
   * @return String     This returns the covTerm model path if it exists with the given criteria
   */
  function getCovTermPath(clauseName : String, covTermName : String, criteria : EffectiveJurisdictionCriteria) : String

  /**
   * Function to find schedule model path with schedule name
   * and EffectiveJurisdictionCriteria
   *
   * @param scheduleName Name of the schedule
   * @param criteria     EffectiveJurisdiction criteria
   * @return String      This returns the schedule model path if it exists with the given criteria
   */
  function getSchedulePath(scheduleName : String, criteria : EffectiveJurisdictionCriteria) : String

  /**
   * Function to find scheduleItem model path with the containing schedule name,
   * scheduleItem name and EffectiveJurisdictionCriteria
   *
   * @param scheduleName     Name of the schedule
   * @param scheduleItemName Name of the scheduleItem
   * @param criteria         EffectiveJurisdiction criteria
   * @return String          This returns the scheduleItem model path if it exists with the given criteria
   */
  function getScheduleItemPath(scheduleName : String, scheduleItemName : String, criteria : EffectiveJurisdictionCriteria) : String
}