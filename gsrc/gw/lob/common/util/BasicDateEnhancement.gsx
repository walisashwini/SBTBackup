package gw.lob.common.util

uses java.util.Date

enhancement BasicDateEnhancement : Date {

  /**
   * If the fromDate is null it's treated as "the beginning of times" so any date is after it.
   * If the toDate is null it's treated as "infinity times" so any date is before it.
   */
  function isBetweenDates(fromDate : Date, toDate : Date, inclusiveFrom : boolean, inclusiveTo : boolean) : boolean {
    return isAfter(fromDate, inclusiveFrom) && isBefore(toDate, inclusiveTo)
  }

  /**
   * Overloaded method assuming from is inclusive and to is exclusive
   */
  function isBetweenDates(fromDate : Date, toDate : Date) : boolean {
    return isBetweenDates(fromDate, toDate, true, false)
  }

  private function isAfter(fromDate : Date, inclusiveFrom : boolean) : boolean {
    var after = true
    if (fromDate != null) {
      after = inclusiveFrom ? this.afterOrEqual(fromDate) : this.after(fromDate)
    }
    return after
  }

  private function isBefore(toDate : Date, inclusiveTo : boolean) : boolean {
    var before = true
    if (toDate != null) {
      before = inclusiveTo ? this.beforeOrEqual(toDate) : this.before(toDate)
    }
    return before
  }

}
