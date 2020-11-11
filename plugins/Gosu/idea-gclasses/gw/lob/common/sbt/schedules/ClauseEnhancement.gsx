package gw.lob.common.sbt.schedules

uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.AutoNumberPropertyInfoType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.BasePropertyInfoType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.PropertyInfoType
uses java.util.Collections
uses java.util.List

enhancement ClauseEnhancement: gw.lob.common.sbt.schedules.schemas.schedule_config.Clause {
  property get PropertyInfos(): VersionedPropertyInfoType [] {
    var infos: List<VersionedPropertyInfoType> = {}

    for (c in this.$Children) {
      var typeInstance = c.$TypeInstance
      var name: String
      var propInfos: List<BasePropertyInfoType> = {}

      if (typeInstance typeis AutoNumberPropertyInfoType) {
        propInfos = Collections.singletonList(typeInstance)
        name = typeInstance.Name
      } else if (typeInstance typeis PropertyInfoType) {
        propInfos = typeInstance.PropertyInfoVersions
        name = typeInstance.Name
      }
      if (name != null and propInfos.HasElements){
        var namedPropertyInfoType = new VersionedPropertyInfoType(name, propInfos)
        infos.add(namedPropertyInfoType)
      }
    }

    return infos.toTypedArray()
  }
}
