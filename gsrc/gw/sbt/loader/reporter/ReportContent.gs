package gw.sbt.loader.reporter

class ReportContent {
  var _path : List<String> as Path
  var _sourceType : MessageReporter.ReportMessageSourceType as SourceType
  var _message : String as Message

  construct(path : List<String>, sourceType : MessageReporter.ReportMessageSourceType, message : String = "") {
    _path = path
    _sourceType = sourceType
    _message = message
  }

  function asString() : String {
    return _path.join(",")
  }

  property get IsProductModel() : boolean {
    return SourceType == CLAUSE or
        SourceType == ATTRIBUTE or
        SourceType == SCRIPT or
        SourceType == COVTERM or
        SourceType == COVTERM_LIMITS or
        SourceType == COVTERM_DEFAULT or
        SourceType == OPTION or
        SourceType == COVTERMPACK or
        SourceType == PACKAGETERM
  }

  property get InitialID() : String {
    return Path.first()
  }

  /**
   * While this class is generic to all ReportContent, the following product model specific properties are added for now.
   * No need to freak out :)
   * @return
   */
  property get CovTermID() : String {
    return Path.get(1)
  }

  property get CovTermOptionCode() : String {
    return Path.get(2)
  }

  property get IsPMClauseLevel() : boolean {
    return Path.Count == 2
  }

  property get IsPMCovTermLevel() : boolean {
    return Path.Count == 3 or ((SourceType == COVTERM_LIMITS or SourceType == COVTERM_DEFAULT) and Path.Count == 4)
  }

  property get IsPMCovTermOptionLevel() : boolean {
    return Path.Count == 4 and SourceType != COVTERM_LIMITS and SourceType != COVTERM_DEFAULT
  }

}