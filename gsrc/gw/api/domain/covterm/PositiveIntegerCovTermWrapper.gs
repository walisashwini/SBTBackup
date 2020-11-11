package gw.api.domain.covterm

uses com.guidewire.pl.web.controller.UserDisplayableException
uses java.lang.Integer
uses java.lang.Exception
uses gw.api.locale.DisplayKey

class PositiveIntegerCovTermWrapper {

  var _term : GenericCovTerm<Integer>

  construct(term : GenericCovTerm<Integer>) {
    _term = term
  }

  property get PositiveIntegerValue() : String {
    return _term.Value as String
  }

  property set PositiveIntegerValue(value : String) {
    try {
      var intValue : Integer = null
      if (not isEmpty(value)) {
        if (isPositive(value)) {
          intValue = value.toInt()
        } else {
          throw new UserDisplayableException(DisplayKey.get("Web.Policy.Validation.PositiveInteger"))
        }
      }
      _term.Value = intValue
    } catch (e : Exception) {
      throw new UserDisplayableException(DisplayKey.get("Web.Policy.Validation.PositiveInteger"))
    }
  }

  private function isEmpty(str : String) : boolean {
    return str == null
        or str.Empty
  }

  private function isPositive(val : String) : boolean {
    return val.toInt() >= 1
  }
}