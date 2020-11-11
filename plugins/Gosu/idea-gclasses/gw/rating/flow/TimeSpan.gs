package gw.rating.flow

class TimeSpan {
  var _days: int as Days
  var _months: int as Months
  var _years: int as Years

  construct(days: int, months: int, years: int) {
    _days = days
    _months = months
    _years = years
  }
}