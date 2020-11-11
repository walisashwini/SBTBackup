package gw.lob.common.sbt.schedules

uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.PropertyInfoVersionType

enhancement PropertyInfoVersionTypeEnhancement: PropertyInfoVersionType {
  property get IsForeignKey(): boolean {
    return this.Type == ForeignKey or
        this.Type == PolicyLocation or
        this.Type == ForeignKeyWithOptionLabels or
        this.Type == NamedInsured
  }
}
