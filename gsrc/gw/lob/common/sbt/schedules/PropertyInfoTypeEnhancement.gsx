package gw.lob.common.sbt.schedules

uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.PropertyInfoType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.PropertyInfoVersionType
uses java.util.List

enhancement PropertyInfoTypeEnhancement: PropertyInfoType {
  property get PropertyInfoVersions(): List<PropertyInfoVersionType> {
    return this.$Children.map(\c -> c.$TypeInstance as PropertyInfoVersionType).toList()
  }
}