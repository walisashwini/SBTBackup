package gw.sbt.extractor.content.index

uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.lookups.TermLookup
uses gw.sbt.index.SBTUpdateEntry
uses gw.sbt.index.SBTUpdateEntryContents
uses gw.sbt.index.SBTUpdateEntryIntent
uses gw.sbt.model.Intent

class CovTermIndexCreator extends ProductModelIndexCreator {
  construct(adoptionDate : Date = null) {
    super(adoptionDate)
  }

  function createContents(lookups: ClausePatternLookups, clauseIntent: Intent): SBTUpdateEntryContents {
    return lookups.CovTermLookups
      .map(\covTermLookup -> {
        var covTermIntent = createIntent(covTermLookup, lookups, clauseIntent)
        return new SBTUpdateEntry()
          {
            :ContentType = "cov-term",
            :ContentId = covTermLookup.SubjectPublicId,
            :Intent = covTermIntent,
            :Contents = new CovTermOptIndexCreator(AdoptionDate)
                .createContents(covTermLookup.SubjectPublicId, lookups, Intent.fromString(covTermIntent.Type))
          }
      })
      .reduce(new SBTUpdateEntryContents(), \contents, entry -> {
        if (entry.Intent.Type != null) {
          contents.add(entry)
        }
        return contents
      })
  }

  private function createIntent(covTermLookup: TermLookup,
                                lookups: ClausePatternLookups, clauseIntent: Intent): SBTUpdateEntryIntent {
    var type: Intent = null

    if (covTermLookup.IsState) {
      if (covTermLookup.IsAvailable) {
        type = Intent.STATE_ADD
      } else {
        type = Intent.STATE_REMOVE
      }
    } else {
      switch (clauseIntent) {
        case Intent.STATE_ADD:
            type = Intent.STATE_ADD
            break

        case Intent.STATE_MODIFIED:
            var stateCovTermOptLookups = lookups.CovTermOptLookups.where(\ covTermOptLookup ->
                covTermOptLookup.IsState and covTermOptLookup.TermPatternCode == covTermLookup.SubjectPublicId)
            if (!stateCovTermOptLookups.Empty and covTermLookup.IsAvailable) {
              type = Intent.STATE_MODIFIED
            }
            break

        case Intent.STATE_REMOVE:
            type = Intent.STATE_REMOVE
            break
      }
    }

    return new SBTUpdateEntryIntent() {
      :Type = type?.toString()
    }
  }

}
