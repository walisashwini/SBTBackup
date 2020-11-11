package gw.sbt.config

interface ConfigContents extends
    DisplayPropertiesConfigContents,
    DataModelConfigContents,
    ProductModelConfigContents,
    RatingConfigContents,
    FileConfigContents{
  final static var GOSU_SOURCE_ROOT : String = "gsrc/"
  final static var PCF_SOURCE_ROOT : String = "config/web/pcf"
  final static var XSD_SOURCE_ROOT : String = "gsrc/gw/lob/"
  final static var PLUGIN_SOURCE_ROOT : String = "config/plugin/registry/"
  final static var SBT_COMMON_CONTENTS: String = "sbt-common-contents.xml"
}

