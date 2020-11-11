package gw.sbt.model.bureau

uses gw.sbt.model.Intent
uses gw.sbt.model.TabularRowData
uses java.util.List

class BureauCode implements TabularRowData{

  var _intent: Intent as Intent
  var _attributes: List<BureauCodeAttribute> as Attributes

  override property get SequencedRowValues(): List<String> {
    return Attributes*.DisplayValue.toList()
  }
}