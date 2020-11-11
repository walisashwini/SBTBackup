package gw.sbt.loader.io

uses gw.sbt.artifacts.clauses.ClauseProductModel
uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.forms.FormPatternModel
uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.util.LoaderUtil
uses org.slf4j.LoggerFactory

class LoadGenerator {
  var _messageReporter : MessageReporter

  construct(messageReporter : MessageReporter) {
    _messageReporter = messageReporter
  }

  //form
  function generateLoad(policyForm : PolicyForm, resultFormPatternModel : FormPatternModel,
                        currentFormPatternModel: FormPatternModel,
                        currentContents : CurrentConfigContents,
                        updateConfigContents : SBTUpdateContents,
                        policyLine: String, jurisdiction: String, processedDate: Date) : Load {

    var load = new Load<PolicyForm>(policyForm)

    if (currentFormPatternModel.IsChanged) {
      // Happens only when
      // 1). a new edition is introduced
      // 2). and its availablity is different from existing edition,
      // 3). and user accepts it
      // The current form pattern's lookup need to be end-dated
      // thus a form pattern load ops need to be created to end-date the corresponding lookup
      load.add(new FormPatternAddition(policyLine, jurisdiction, processedDate, currentFormPatternModel.FormPattern))
    }

    if (resultFormPatternModel.FormPattern != null) {
      load.add(new FormPatternAddition(policyLine, jurisdiction, processedDate, resultFormPatternModel.FormPattern))
    }

    if (resultFormPatternModel.FormInference != null) {
      //inference only, gosu is handled by GosuFilesLoadGenerator
      load.add(new CustomFormInferenceAddition(resultFormPatternModel.FormInference))
    }

    return load
  }


  //clause
  function generateLoad(clause : Clause, resultProductModel : ClauseProductModel, updateConfigContents : SBTUpdateContents, policyLine : String) : List<Load> {
    LoggerFactory.getLogger("PCA").info("[Clause loading] - generate load for " + clause.PublicId)
    var loads= new ArrayList<Load> ()
    var load = new Load<Clause>(clause)
    loads.add (load)
    var publicId = clause.PublicId
    processLookups(resultProductModel.Lookups, policyLine, publicId, load)
    processClausePattern(resultProductModel.ClausePattern, policyLine, publicId, load)
    processClauseEntityExtension(resultProductModel.ClauseEntityExtension, loads)
    return loads
  }

  private function processLookups(lookups : ClausePatternLookups, policyLine: String, publicId : String, load : Load) {
    // Lookups should exist for either a single state or none.
    lookups.AllLookups
        .where(\ lookup -> not LoaderUtil.isJurisdictionCW(lookup.State))
        .partition(\ lookup -> lookup.State)
        .eachKeyAndValue(\ state, stateLookups ->
          load.add(new ClausePatternLookupsFileAddition(
              policyLine,
              state,
              publicId,
              ClausePatternLookups.fromLookupList(stateLookups))))
  }

  private function processClausePattern(clausePattern : PolicyClausePattern,
                                        policyLine : String,
                                        publicId : String,
                                        load : Load) {
    if(clausePattern != null) {
      load.add(new ClausePatternFileAddition(policyLine, publicId, clausePattern))
    }
  }

  private function processClauseEntityExtension(clauseEntityExtension : EntityExtension, loads : List<Load>) {
    if (clauseEntityExtension != null) {
      var load= new Load<Entity> ()
      load.add(new EntityExtensionModification(clauseEntityExtension))
      loads.add (load)
    }
  }
}