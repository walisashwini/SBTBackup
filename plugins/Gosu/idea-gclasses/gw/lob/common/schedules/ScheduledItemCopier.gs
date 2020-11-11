package gw.lob.common.schedules

uses gw.api.copier.EffDatedCopier

/**
 *  @deprecated This is for BP backward compatibility. Replaced by {@link gw.lob.common.sbt.schedules.ScheduledItemCopier}
 */
class ScheduledItemCopier extends EffDatedCopier {

  construct(scheduledItem : EffDated){
    super(scheduledItem)
  }

  override function shouldExclude(colName: String): boolean {
    return super.shouldExclude(colName) or colName == "ScheduleNumber"
  }
}
