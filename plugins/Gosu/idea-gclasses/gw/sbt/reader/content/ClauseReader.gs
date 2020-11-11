package gw.sbt.reader.content

uses gw.sbt.config.ConfigContents
uses gw.sbt.index.SBTUpdateEntry
uses gw.sbt.index.SBTUpdateIndex
uses gw.sbt.model.clause.Clause
uses gw.sbt.reader.content.schedule.ScheduleReader
uses java.util.List

class ClauseReader {
  static final var CLAUSE_CONTENT_TYPE = "clause"

  function read(updateIndex: SBTUpdateIndex, updateContents: ConfigContents, jurisdiction : String) : List<Clause> {
    var clauseEntries = updateIndex.Clauses
    if (clauseEntries.IsEmpty) return {}
    var clauseEntriesByType = clauseEntries.partition( \ entry -> entry.ContentType)
    return readClauseEntries(clauseEntriesByType.get(CLAUSE_CONTENT_TYPE),updateContents, jurisdiction)
  }

  private function readClauseEntries(clauseEntries : List<SBTUpdateEntry>, updateContents : ConfigContents, jurisdiction : String) : List<Clause> {
    return clauseEntries.map( \ clauseEntry -> {
      var intent = new IntentReader().read(clauseEntry)

      var clausePattern = updateContents.getClausePatternFromClauses(clauseEntry.ContentId)
      var properties = updateContents.ProductModelDisplayProperties

      var description = ""
      if (clausePattern.CodeIdentifier.HasContent and clausePattern.CodeIdentifier != clauseEntry.ContentId) {
        description = properties?.getClauseDescriptionFor(clausePattern.CodeIdentifier)
      } else {
        description = properties?.getClauseDescriptionFor(clauseEntry.ContentId)
      }

      var clauseLookups = updateContents.getClauseLookups(clauseEntry.ContentId, jurisdiction)
      var availabilityReader = new ProductModelAvailabilityReader(clauseLookups)
      var clauseAvailabilities = availabilityReader.readClauseAvailabilities(clauseEntry.ContentId)

      var clause = new Clause() {
          :PublicId = clauseEntry.ContentId,
          :Intent = intent
      }
      clause.Description = description
      clause.Type = clausePattern.Type
      clause.Category = clausePattern.Category
      clause.Existence = clausePattern.Existence
      clause.Priority = clausePattern.Priority
      clause.ParentRisk = new RiskReader().read(clausePattern.OwningEntityType, updateContents)
      clause.Availabilities = clauseAvailabilities
      clause.Schedule = new ScheduleReader().read(clauseEntry.ContentId, updateContents.ScheduleConfig, updateContents.DisplayProperties)
      clause.CovTerms = new CovTermReader().read(properties, clausePattern, availabilityReader, clauseEntry.Contents)
      
      return clause
    }).where( \ clause -> not clause.Availabilities.Empty)
  }
}