package gw.lob.common.sbt.schedules

uses gw.api.upgrade.Coercions
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.BasePropertyInfoType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.PropertyInfoVersionType

enhancement BasePropertyInfoTypeEnhancement: BasePropertyInfoType {

  property get Available(): boolean {
    if (this typeis PropertyInfoVersionType) {
      return this.Available
    }
    return true
  }

  property get EffectiveDate(): Date {
    if (this typeis PropertyInfoVersionType) {
      return Coercions.makeDateFrom(this.EffectiveDate)
    }
    return null
  }

  property get ExpirationDate(): Date {
    if (this typeis PropertyInfoVersionType) {
      return Coercions.makeDateFrom(this.ExpirationDate)
    }
    return null
  }

  property get Jurisdiction(): String {
    if (this typeis PropertyInfoVersionType) {
      return this.Jurisdiction
    }
    return null
  }
}
