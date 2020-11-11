package gw.sbt.loader.reporter

uses gw.sbt.model.UpdateDecision

class DeviationsReporter {

  var _reportedBureauCodes : List<SystemTableReportContent> as ReportedBureauCodes = {}  // bureaucodes only

  function reportBureauCodes(tableName : String, fileName : String, titles : List<String>, content : List<String>, tableDecision : UpdateDecision, rowDecision : UpdateDecision, filingInstructions : String) {
    _reportedBureauCodes.add(new SystemTableReportContent(tableName, fileName, titles, content, BUREAU_CODE, tableDecision, rowDecision, filingInstructions))
  }
}