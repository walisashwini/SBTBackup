package gw.sbt.loader.reporter

class MessageReporterUtil {

  //create map, with SystemTable Name as Key, List of SystemTableReportContent as value
  static function getReportedSystemTables(systemTables : List<SystemTableReportContent>, sourceType : MessageReporter.ReportMessageSourceType) : Map<String, List<SystemTableReportContent>> {
    var systemTableMap : Map<String, List<SystemTableReportContent>> = {}
    if (systemTables.HasElements) {
      var systemTableContentList = systemTables.where(\content -> content.SourceType == sourceType)
      systemTableContentList.each(\content -> {
        var tableName = content.TableName
        if (not systemTableMap.containsKey(tableName)) {
          systemTableMap.put(tableName, {})
        }
        systemTableMap.get(tableName).add(content)
      })
    }
    return systemTableMap
  }

  static function getContainerPropertyContentToReport(reportContentList : List<ReportContent>) : Map<String, List<String>> {
    var resultMap : Map<String, List<String>> = {}
    reportContentList.each(\reportContent -> {
      var key = reportContent.Path.first()
      if (not resultMap.containsKey(key)) {
        resultMap.put(key, {})
      }
      if (reportContent.Path.size() > 1) {
        resultMap.get(key).add(reportContent.Path.get(1))
      }
    })
    return resultMap
  }
}