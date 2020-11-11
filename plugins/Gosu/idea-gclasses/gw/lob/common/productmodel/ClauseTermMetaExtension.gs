package gw.lob.common.productmodel

uses gw.lob.common.productmodel.scheme.clause_extension_config.anonymous.elements.TermType_Version
uses java.math.BigInteger
uses java.util.Date
uses gw.api.upgrade.Coercions

class ClauseTermMetaExtension {

  static final var JURISDICTION = "Jurisdiction"
  static final var EFF_DATE = "EffectiveDate"
  static final var EXP_DATE = "ExpiryDate"
  static final var PRIORITY = "Priority"
  static final var EDITABLE = "Editable"
  static final var VISIBLE = "Visible"
  static final var MIN = "Min"
  static final var MAX = "Max"

  var _clausePattern : String as readonly ClausePattern
  var _termPattern : String as readonly TermPattern
  var _jurisdiction : String as readonly Jurisdiction
  var _effDate : Date as readonly EffDate
  var _expDate : Date as readonly ExpDate
  var _visible : Boolean as readonly Visible
  var _editable : Boolean as readonly Editable
  var _priority : BigInteger as readonly Priority
  var _min : String as readonly Min
  var _max : String as readonly Max

  construct(verValues : TermType_Version, clausePattern : String, termPattern : String) {
    _clausePattern = clausePattern
    _termPattern = termPattern
    init(verValues)
  }

  private function init(verValues : TermType_Version) {
    _jurisdiction = getFieldMeta(JURISDICTION, verValues) as String
    _effDate = Coercions.makeDateFrom(getFieldMeta(EFF_DATE, verValues))
    _expDate = Coercions.makeDateFrom(getFieldMeta(EXP_DATE, verValues))
    _visible = Coercions.makeBooleanFrom(getFieldMeta(VISIBLE, verValues))
    _editable = Coercions.makeBooleanFrom(getFieldMeta(EDITABLE, verValues))
    _priority = getFieldMeta(PRIORITY, verValues) as BigInteger
    _min = getFieldMeta(MIN, verValues) as String
    _max = getFieldMeta(MAX, verValues) as String
  }

  private function getFieldMeta(fieldName : String, termVersion : TermType_Version) : Object {
    return termVersion.getChild(fieldName).$SimpleValue.GosuValue
  }
}