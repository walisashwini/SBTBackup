package gw.lob.common.util

class SystemTableEffDatedParam {

  var _jurisdiction : Jurisdiction as readonly Jurisdiction
  var _referenceDate : Date as readonly ReferenceDate

  construct(jurisdiction : Jurisdiction, referenceDate : Date) {
    _jurisdiction = jurisdiction
    _referenceDate = referenceDate
  }

}