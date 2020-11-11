package gw.sbt.loader.reporter

class ConfigurationFileReportContent {
  var _container : String as readonly ContainerName
  var _containerProperties : List<String> as readonly ContainerProperties

  construct(container : String, containerProperties : List<String> ) {
    _container= container
    _containerProperties = containerProperties
  }

}