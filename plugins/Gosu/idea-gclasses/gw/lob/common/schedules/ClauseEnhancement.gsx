package gw.lob.common.schedules

uses gw.lob.common.schedules.schemas.schedule_config.types.complex.PropertyInfoType
uses java.util.List

/**
 * @deprecated This is for BP backward compatibility. Replaced by {@link gw.lob.common.sbt.schedules.ClauseEnhancement}
*/
enhancement ClauseEnhancement : gw.lob.common.schedules.schemas.schedule_config.Clause {
  
  property get PropertyInfos() : PropertyInfoType[] {
    
    var infos : List<PropertyInfoType> = {}
    
    this.$Children.each(\ c -> {
      if (PropertyInfoType.Type.isAssignableFrom((typeof c.$TypeInstance))) {
        infos.add(c.$TypeInstance as PropertyInfoType)
      }
    })
    
    return infos.toTypedArray()
  }
}
