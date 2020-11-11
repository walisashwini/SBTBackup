package gw.lob.common.modelmapping

uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.ContainerType
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria

/**
 * Interface for model mapping configuration
 */
interface ModelMappingConfiguration {

  /**
   * File suffix for model mapping configuration
   */
  public static final var CONFIG_SUFFIX : String = "-model-mapping-config.xml"

  /**
   * Default jurisdiction if it is not specified for a specific version
   */
  public static final var DEFAULT_JURISDICTION : String = ConfigResource.COUNTRY_WIDE

  /**
   * Default availability if it is not specified for a specific version
   */
  public static final var DEFAULT_AVAILABILITY : boolean = true

  /**
   * Function to find container model path with container type, container name
   * and EffectiveJurisdictionCriteria
   *
   * @param containerType Type of the container
   * @param containerName Name of the container
   * @param criteria      EffectiveJurisdiction criteria
   * @return String       This returns the container model path if it exists with the given criteria
   */
  function findContainerModelPath(containerType : ContainerType, containerName : String, criteria : EffectiveJurisdictionCriteria) : String

  /**
   * Function to find property model path with the containing container type and name,
   * property name and EffectiveJurisdictionCriteria
   *
   * @param containerType Type of the container
   * @param containerName Name of the container containing the property
   * @param propertyName  Name of the property
   * @param criteria      EffectiveJurisdiction criteria
   * @return String       This returns the property model path if it exists with the given criteria
   */
  function findPropertyModelPath(containerType : ContainerType, containerName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : String

}