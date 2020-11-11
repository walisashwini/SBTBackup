package gw.sbt.extractor.content.index

uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.artifacts.lookups.Lookups
uses gw.sbt.content.Content
uses gw.sbt.index.SBTUpdateEntry
uses gw.sbt.index.SBTUpdateEntryIntent
uses gw.sbt.index.SBTUpdateIndex
uses gw.sbt.model.Intent
uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.reader.content.ProductModelAvailabilityReader
uses org.slf4j.LoggerFactory

uses java.io.File
uses java.util.ArrayList
uses java.util.List

class ClauseIndexCreator extends ProductModelIndexCreator {
  construct(adoptionDate : Date = null) {
    super(adoptionDate)
  }

  function createIndex(contents: Set<Content>, jurisdiction : String): SBTUpdateIndex {
    return new SBTUpdateIndex() {
        : Clauses = createClausesIndexJsonFromLookups(
              contents.where(\content -> content.Name.startsWith("clauses")
              and content.Name.endsWith("-lookups.xml")), jurisdiction)
    }
  }

  private function createClausesIndexJsonFromLookups(clauseLookupContents: List<Content>, jurisdiction : String): SBTUpdateEntry[] {
    var updateEntries = createClauseEntries(clauseLookupContents, jurisdiction)

    return updateEntries
        .where(\entry -> entry.ContentType == "clause")
        .reduce(new ArrayList<SBTUpdateEntry>(), \contentsEntry, clauseEntry -> {
          contentsEntry.add(clauseEntry)
          return contentsEntry
        }).toTypedArray()
  }

  private function createClauseEntries(clauseLookupsContents: List<Content>, jurisdiction : String): List<SBTUpdateEntry> {
    return clauseLookupsContents.map(\clauseLookupsContent -> {
      var lookups = ClausePatternLookups.fromBytes(clauseLookupsContent.Bytes)
      var clauseIntent = createClauseIntent(clauseLookupsContent.Name, lookups, jurisdiction)
      return new SBTUpdateEntry() {
          : ContentType = "clause",
          : ContentId = getPublicIdFromLookupsPath(clauseLookupsContent.Name),
          : Intent = clauseIntent,
          : Contents = new CovTermIndexCreator(AdoptionDate).createContents(lookups, Intent.fromString(clauseIntent.Type))
      }
    })
  }

  function deriveClauseIntent(availabilities: List<ProductModelAvailability>, pid: String, jurisdiction: String) : Intent {
    var stateClauseAvailability = findProductModelAvailability(availabilities, jurisdiction)
    var type: Intent = null

    if(stateClauseAvailability != null) {
      // Determine intent of the state clause based on the state lookup alone
      if(stateClauseAvailability.Availability == Lookup.AVAILABLE) {
        type = Intent.STATE_ADD
      } else {
        type = Intent.STATE_REMOVE
      }
    } else  {
      // Infer intent of the state based on the CW lookup
      var cwClauseAvailability = findProductModelAvailability(availabilities, null)
      if(cwClauseAvailability.Availability == Lookup.AVAILABLE) {
        type = Intent.STATE_MODIFIED
      } else if(cwClauseAvailability.Availability == Lookup.UNAVAILABLE) {
        type = Intent.STATE_REMOVE
      } else {
        // No lookup found for this clause from either State or CW - this case shouldn't be possible in new update
        LoggerFactory.getLogger("PCA").warn("No CW or state lookup found for clause ${pid}")

        type = Intent.STATE_REMOVE
      }
    }

    return type
  }

  protected function createClauseIntent(
      clauseLookupContentName : String,
      lookups : ClausePatternLookups,
      jurisdiction : String
  ): SBTUpdateEntryIntent {
    var clausePattern = getPublicIdFromLookupsPath(clauseLookupContentName)
    var intent = deriveClauseIntent(
        new ProductModelAvailabilityReader(lookups).readClauseAvailabilities(clausePattern),
        clausePattern,
        jurisdiction)

    return new SBTUpdateEntryIntent() {
        : Type = intent.toString(),
        : Comment = deriveUpdateEntryIntentComment(intent, clausePattern)
    }
  }

  private function deriveUpdateEntryIntentComment(clauseIntent : Intent, clausePattern : String) : String {
    switch (clauseIntent) {
      case Intent.STATE_ADD:
        return "ISO adds clause: " + clausePattern
      case Intent.STATE_MODIFIED:
        return "ISO modifies clause: " + clausePattern
      case Intent.STATE_REMOVE:
        return "ISO removes clause: " + clausePattern
      default:
        return ""
    }
  }

  private function getPublicIdFromLookupsPath(lookupsPath: String): String {
    return new File(lookupsPath).Name.replaceAll("-lookups.xml", "")
  }
}