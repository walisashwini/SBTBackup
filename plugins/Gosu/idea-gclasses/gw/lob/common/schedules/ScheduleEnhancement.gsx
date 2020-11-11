package gw.lob.common.schedules

/**
 * @deprecated This is for BP backward compatibility. Replaced by {@link gw.lob.common.sbt.schedules.ScheduleEnhancement}
*/
enhancement ScheduleEnhancement : gw.api.domain.Schedule {

  property get isComplexSchedule() : boolean {
    return not isSimpleSchedule
  }

  property get isSimpleSchedule() : boolean {
    return this.ScheduledItemMultiPatterns == null or this.ScheduledItemMultiPatterns.IsEmpty
  }
}
