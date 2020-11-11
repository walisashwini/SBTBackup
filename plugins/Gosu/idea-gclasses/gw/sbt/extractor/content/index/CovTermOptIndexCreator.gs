package gw.sbt.extractor.content.index

uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.lookups.TermOptionLookup
uses gw.sbt.index.SBTUpdateEntry
uses gw.sbt.index.SBTUpdateEntryContents
uses gw.sbt.index.SBTUpdateEntryIntent
uses gw.sbt.model.Intent

class CovTermOptIndexCreator extends ProductModelIndexCreator {
  construct(adoptionDate : Date = null) {
    super(adoptionDate)
  }

  function createContents(
      covTermPatternCode : String,
      lookups : ClausePatternLookups,
      covTermIntent : Intent
  ) : SBTUpdateEntryContents {
    return lookups.CovTermOptLookups
        .where(\ child -> child.TermPatternCode == covTermPatternCode)
        .map(\ covTermOptLookup -> (new SBTUpdateEntry() {
          :ContentType = "cov-term-option",
          :ContentId = covTermOptLookup.SubjectPublicId,
          :Intent = createIntent(covTermOptLookup, covTermIntent)
        }))
        .reduce(new SBTUpdateEntryContents(), \ contents, entry -> {
          if (entry.Intent.Type != null) contents.add(entry)
          //we only want STATE_ADD or STATE_MODIFIED entries
          return contents
        })
  }

  private function createIntent(covTermOptLookup: TermOptionLookup, covTermIntent: Intent): SBTUpdateEntryIntent {
    var type: Intent = null

    if (covTermOptLookup.IsState) {
      if (covTermOptLookup.IsAvailable) {
        type = Intent.STATE_ADD
      } else {
        type = Intent.STATE_REMOVE
      }
    } else if(covTermOptLookup.IsAvailable){
      switch (covTermIntent) {
        case Intent.STATE_ADD:
            type = Intent.STATE_ADD
            break

        case Intent.STATE_MODIFIED:
            break

        case Intent.STATE_REMOVE:
            type = Intent.STATE_REMOVE
            break
      }
    }

    return new SBTUpdateEntryIntent() {
        : Type = type?.toString()
    }
  }
}
