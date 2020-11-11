package gw.sbt.extractor.content.index

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.artifacts.lookups.FormLookup
uses gw.sbt.index.SBTUpdateEntry
uses gw.sbt.index.SBTUpdateEntryIntent
uses gw.sbt.index.SBTUpdateIndex
uses gw.sbt.model.Intent
uses java.util.ArrayList
uses java.util.List

class FormIndexCreator extends ProductModelIndexCreator {
  construct(adoptionDate : Date = null) {
    super(adoptionDate)
  }

  function createIndex(contents : List<PolicyFormPattern>, jurisdiction : String) : SBTUpdateIndex {
    return new SBTUpdateIndex() {
      :Forms = contents.map( \ formPattern -> {
        var formPatternCode = formPattern.Code
        var formPatternLookup = formPattern.getLookup(jurisdiction, AdoptionDate)

        var updateEntry = new SBTUpdateEntry()
        updateEntry.ContentType = "form"
        updateEntry.ContentId = formPatternCode
        updateEntry.Intent = createFormIntent(formPatternLookup, formPatternCode)

        return updateEntry
      })
      .reduce(new ArrayList<SBTUpdateEntry>(), \ contentsEntry, entry -> {
        contentsEntry.add(entry)
        return contentsEntry
      }).toTypedArray()
    }
  }

  private function createFormIntent(formPatternLookup : FormLookup, formPatternCode : String) : SBTUpdateEntryIntent {
    var intent = Intent.STATE_ADD
    var comment = "ISO adds a new form: " + formPatternCode
    if (formPatternLookup.IsUnavailable) {
      intent = Intent.STATE_REMOVE
      comment = "ISO removes a form: " + formPatternCode
    }

    return new SBTUpdateEntryIntent() {
      :Type = intent.toString(),
      :Comment = comment
    }
  }

}