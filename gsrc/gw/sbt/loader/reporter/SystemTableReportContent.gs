package gw.sbt.loader.reporter

uses gw.sbt.model.UpdateDecision

class SystemTableReportContent extends ReportContent {
  var _tableName : String as TableName
  var _fileName : String as FileName
  var _titles : List<String> as Titles
  var _filingInstructions : String as FilingInstructions
  var _tableDecision : UpdateDecision as TableDecision
  var _decision : UpdateDecision as Decision

  construct(tableName : String, fileName : String, titles : List<String>, values : List<String>, sourceType : MessageReporter.ReportMessageSourceType, tableDecision : UpdateDecision = null, decision : UpdateDecision = null, filingInstructions : String = null) {
    super(values, sourceType)
    _titles = titles
    _tableName = tableName
    _fileName = fileName
    _filingInstructions = filingInstructions
    _decision = decision
    _tableDecision = tableDecision
  }
}