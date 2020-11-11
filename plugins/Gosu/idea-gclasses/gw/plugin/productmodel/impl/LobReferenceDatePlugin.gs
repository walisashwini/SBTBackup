package gw.plugin.productmodel.impl

uses gw.lob.common.LobCoverable
uses gw.pl.util.ArgCheck

class LobReferenceDatePlugin extends ReferenceDatePlugin {

  override function getPeriodReferenceDate(period : PolicyPeriod, dateType : ReferenceDateType, state : Jurisdiction) : Date {
    ArgCheck.nonNull(period, "period")
    ArgCheck.nonNull(dateType, "dateType")

    if (dateType == TC_RATINGPERIODDATE) {
      // We use rating period date option as the backdoor to get the Policy Term Date
      // Because there is no option to get the policy term date
      if (periodContainsLobLines(period)) {
        return period.FirstPeriodInTerm.EditEffectiveDate.trimToMidnight()
      }
    }

    return super.getPeriodReferenceDate(period, dateType, state)
  }

  protected function periodContainsLobLines(period : PolicyPeriod) : boolean {
    return period.Lines.hasMatch(\line -> line typeis LobCoverable)
  }

}