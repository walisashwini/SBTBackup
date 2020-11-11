package gw.apd.model.generate

uses entity.APDClause
uses entity.APDCoverable
uses gw.apd.model.generate.generators.ConditionAdapterCompositeGenerator
uses gw.apd.model.generate.generators.ConditionMatcherCompositeGenerator
uses gw.apd.model.generate.generators.CoverableAdapterCompositeGenerator
uses gw.apd.model.generate.generators.CoverableCostDataCompositeGenerator
uses gw.apd.model.generate.generators.CoverableCostMethodsImplCompositeGenerator
uses gw.apd.model.generate.generators.CoverageAdapterCompositeGenerator
uses gw.apd.model.generate.generators.CoverageCostDataCompositeGenerator
uses gw.apd.model.generate.generators.CoverageCostMethodsImplCompositeGenerator
uses gw.apd.model.generate.generators.CoverageMatcherCompositeGenerator
uses gw.apd.model.generate.generators.ExclusionAdapterCompositeGenerator
uses gw.apd.model.generate.generators.ExclusionMatcherCompositeGenerator
uses gw.apd.model.generate.generators.ScheduleCovImplCompositeGenerator
uses gw.apd.model.generate.generators.ScheduleCovItemCovCoverageAdapterCompositeGenerator
uses gw.apd.model.generate.generators.ScheduleCovItemCovMatcherCompositeGenerator
uses gw.apd.model.generate.generators.ScheduleCovItemCoverableAdapterCompositeGenerator
uses gw.apd.model.generate.generators.ScheduleCovItemMatcherCompositeGenerator
uses gw.apd.model.generate.generators.SplitCoverableImplCompositeGenerator
uses gw.apd.model.generate.generators.SplitExposureImplCompositeGenerator
uses gw.apd.model.generate.templates.coverable.ClauseName
uses gw.apd.model.generate.templates.coverable.ConditionEntity
uses gw.apd.model.generate.templates.coverable.ConditionLookupDefinitions
uses gw.apd.model.generate.templates.coverable.ConditionLookupEntity
uses gw.apd.model.generate.templates.coverable.ConditionLookups
uses gw.apd.model.generate.templates.coverable.Condition_Existing
uses gw.apd.model.generate.templates.coverable.Condition_New
uses gw.apd.model.generate.templates.coverable.CostEntity
uses gw.apd.model.generate.templates.coverable.CovTermLookupEntity
uses gw.apd.model.generate.templates.coverable.CovTermOptLookupEntity
uses gw.apd.model.generate.templates.coverable.CovTermPackLookupEntity
uses gw.apd.model.generate.templates.coverable.CoverableEnhancement
uses gw.apd.model.generate.templates.coverable.CoverableList
uses gw.apd.model.generate.templates.coverable.CoverableLookupDefinitions
uses gw.apd.model.generate.templates.coverable.CoverableModifiableAdapter
uses gw.apd.model.generate.templates.coverable.CoverablePanelSet
uses gw.apd.model.generate.templates.coverable.CoverablePopup
uses gw.apd.model.generate.templates.coverable.CoverableScheduleCovEntity
uses gw.apd.model.generate.templates.coverable.CoverableScheduleCovItemCovEntity
uses gw.apd.model.generate.templates.coverable.CoverableScheduleCovItemEntity
uses gw.apd.model.generate.templates.coverable.CoverableScheduledItemName
uses gw.apd.model.generate.templates.coverable.CoverableUIDisplayProperties
uses gw.apd.model.generate.templates.coverable.CoverageEntity
uses gw.apd.model.generate.templates.coverable.CoverageLookupDefinitions
uses gw.apd.model.generate.templates.coverable.CoverageLookupEntity
uses gw.apd.model.generate.templates.coverable.CoverageLookups
uses gw.apd.model.generate.templates.coverable.Coverage_Existing
uses gw.apd.model.generate.templates.coverable.Coverage_New
uses gw.apd.model.generate.templates.coverable.ExclusionEntity
uses gw.apd.model.generate.templates.coverable.ExclusionLookupDefinitions
uses gw.apd.model.generate.templates.coverable.ExclusionLookupEntity
uses gw.apd.model.generate.templates.coverable.ExclusionLookups
uses gw.apd.model.generate.templates.coverable.Exclusion_Existing
uses gw.apd.model.generate.templates.coverable.Exclusion_New
uses gw.apd.model.generate.templates.coverable.ExposureEnhancement
uses gw.apd.model.generate.templates.coverable.ExposureEntity
uses gw.apd.model.generate.templates.coverable.ExposureList
uses gw.apd.model.generate.templates.coverable.ModifiableAdapter
uses gw.apd.model.generate.templates.coverable.ModifierFactorLookupEntity
uses gw.apd.model.generate.templates.coverable.ModifierLookupDefinitions
uses gw.apd.model.generate.templates.coverable.ModifierLookupEntity
uses gw.apd.model.generate.templates.coverable.ScheduledItemCoverageLookups
uses gw.apd.model.generate.templates.coverable.ScheduledItemCoverage_New
uses gw.apd.model.generate.templates.coverable.SplittableCoverableList
uses gw.apd.model.generate.templates.coverable.SplittableExposureList
uses gw.apd.model.generate.templates.coverable.TermLookup
uses gw.apd.model.generate.xsd.clausemodel.ConditionPattern
uses gw.apd.model.generate.xsd.clausemodel.CoveragePattern
uses gw.apd.model.generate.xsd.clausemodel.ExclusionPattern
uses gw.xml.XmlElement

uses java.nio.file.Path

@Export
class CoverableGenerator extends TrackedFileGenerator {

  var _cbl : APDCoverable

  construct(context : GenerationContext, cbl : APDCoverable) {
    super(context)
    _cbl = cbl
  }

  function generateConfig() {
    var file : Path

    // add splittable implementation files for coverable
    if (_cbl.HasSplittableFields) {
      new SplitCoverableImplCompositeGenerator(Context, _cbl).generate()
    }

    // add lookups only if clauses are defined for this coverable
    if (_cbl.IsACoverable) {
      new CoverableAdapterCompositeGenerator(Context, _cbl).generate()

      // add section for this coverable to lookuptables.xml if it does not exist
      file = createPath((LOOKUPDIRECTORY.concat(new String[]{"lookuptables.xml"})))
      if (not this.startTagExists(file, _cbl.LookupCblStartTag)) {
        insertContents(file, \-> CoverableLookupDefinitions.renderToString(_cbl), _cbl.ProductLine.LookupLineEndTag, false)
      }
      // add covterm lookup entities
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("TermLookup.eti")}))
      if (fileDoesNotExist(file)) { // only add, to preserve any custom changes
        addOrReplaceFile(file, \-> CovTermLookupEntity.renderToString(_cbl))
      }
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("OptLookup.eti")}))
      if (fileDoesNotExist(file)) { // only add, to preserve any custom changes
        addOrReplaceFile(file, \-> CovTermOptLookupEntity.renderToString(_cbl))
      }
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("PackLookup.eti")}))
      if (fileDoesNotExist(file)) { // only add, to preserve any custom changes
        addOrReplaceFile(file, \-> CovTermPackLookupEntity.renderToString(_cbl))
      }
    }

    // add coverages
    if (_cbl.Coverages.HasElements) {
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("Cov.eti")}))
      var covEntityHelper = new ClauseEntityHelper(_cbl, APDCoverage, file)
      covEntityHelper.initialise()
      addOrReplaceFile(file, \-> CoverageEntity.renderToString(_cbl, covEntityHelper))
      file = createPath(ENTITYNAMESDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("Cov.en")}))
      addOrReplaceFile(file, \-> ClauseName.renderToString(_cbl, "Cov"))

      new CoverageAdapterCompositeGenerator(Context, _cbl).generate()

      new CoverageMatcherCompositeGenerator(Context, _cbl).generate()

      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("CovLookup.eti")}))
      if (fileDoesNotExist(file)) { // only add, to preserve any custom changes
        addOrReplaceFile(file, \-> CoverageLookupEntity.renderToString(_cbl))
      }
      // add availability lookup definitions if they do not exist
      file = createPath((LOOKUPDIRECTORY.concat(new String[]{"lookuptables.xml"})))
      if (not this.startTagExists(file, _cbl.LookupCovStartTag)) {
        insertContents(file, \-> CoverageLookupDefinitions.renderToString(_cbl), _cbl.LookupCblEndTag, false)
      }

      if (_cbl.Coverages.hasMatch(\cov -> cov.HasSchedule)) {
        generateScheduleDataModel()
      }

      for (cov in _cbl.Coverages) {
        generateCoverageProductModel(cov)
        if (cov.ScheduleLinkedClauseTerms.HasElements) {
          generateScheduledItemCoverageProductModel(cov)
        }
      }

      // determine any extra foreign keys needed for coverage costs
      var expCosts = new HashSet<APDExposure>()
      var cblCosts = new HashSet<APDCoverable>()
      _cbl.Coverages.each(\cov -> {
        var costMap = cov.CostDefinitions.where(\c -> c.Basis != null)*.Basis.partition(\a -> typeof a)
        costMap.eachKeyAndValue(\k, val -> {
          switch (k) {
            case APDExposureField: // exposure cost
              expCosts.addAll(val.map<APDExposureField>(\elt -> elt as APDExposureField)*.Exposure.toSet())
              break
            case APDField: // coverage cost (using coverable details)
              cblCosts.addAll(val.map<APDField>(\elt -> elt as APDField)*.Coverable.toSet().where(\elt -> cov.Coverable != elt)) // don't need parent
              break
            case APDTerm: // coverage cost
              break
          }
        })
      })

      // add coverage cost entity
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("CovCost.eti")}))
      addOrReplaceFile(file, \-> CostEntity.renderToString(_cbl, true, expCosts, cblCosts))

      // add coverage cost methods implementation
      new CoverageCostMethodsImplCompositeGenerator(Context, _cbl, cblCosts, expCosts).generate()

      // add coverage costData
      new CoverageCostDataCompositeGenerator(Context, _cbl, cblCosts, expCosts).generate()
    }

    // add exclusions
    if (_cbl.Exclusions.HasElements) {
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("Excl.eti")}))
      var exclEntityHelper = new ClauseEntityHelper(_cbl, APDExclusion, file)
      exclEntityHelper.initialise()
      addOrReplaceFile(file, \-> ExclusionEntity.renderToString(_cbl, exclEntityHelper))
      file = createPath(ENTITYNAMESDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("Excl.en")}))
      addOrReplaceFile(file, \-> ClauseName.renderToString(_cbl, "Excl"))

      new ExclusionAdapterCompositeGenerator(Context, _cbl).generate()

      new ExclusionMatcherCompositeGenerator(Context, _cbl).generate()

      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("ExclLookup.eti")}))
      if (fileDoesNotExist(file)) { // only add, to preserve any custom changes
        addOrReplaceFile(file, \-> ExclusionLookupEntity.renderToString(_cbl))
      }
      // add availability lookup definitions if they do not exist
      file = createPath((LOOKUPDIRECTORY.concat(new String[]{"lookuptables.xml"})))
      if (not this.startTagExists(file, _cbl.LookupExclStartTag)) {
        insertContents(file, \-> ExclusionLookupDefinitions.renderToString(_cbl), _cbl.LookupCblEndTag, false)
      }
      for (excl in _cbl.Exclusions) {
        var pmExclusion : ExclusionPattern
        // create or update coverage product model exclusion definition
        file = createPath((PRODUCTLINESDIRECTORY.concat(new String[]{_cbl.ProductLine.CodeIdentifier, "coveragepatterns", _cbl.LinePrefix.concat(excl.CodeIdentifier.concat(".xml"))})))
        if (fileDoesNotExist(file)) {
          addOrReplaceFile(file, \-> Exclusion_New.renderToString(excl), false)
        } else {
          pmExclusion = parseExclusionPattern(file)
          addOrReplaceFile(file, \-> Exclusion_Existing.renderToString(excl, pmExclusion), false)
        }
        // only write the lookup file if the coverage does not exist; this preserves any availability logic added afer generation
        file = createPath((PRODUCTLINESDIRECTORY.concat(new String[]{_cbl.ProductLine.CodeIdentifier, "coveragepatterns", _cbl.LinePrefix.concat(excl.CodeIdentifier.concat("-lookups.xml"))})))
        if (fileDoesNotExist(file)) {
          addOrReplaceFile(file, \-> ExclusionLookups.renderToString(excl), false)
        } else { // add new terms (that are not schedule terms!)
          excl.StandardTerms.each(\t -> {
            var genTerm = pmExclusion.CovTerms.GenericCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + excl.CodeIdentifier + t.Name)
            var dirTerm = pmExclusion.CovTerms.DirectCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + excl.CodeIdentifier + t.Name)
            var tkTerm = pmExclusion.CovTerms.TypekeyCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + excl.CodeIdentifier + t.Name)
            var optTerm = pmExclusion.CovTerms.OptionCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + excl.CodeIdentifier + t.Name)
            var pkgTerm = pmExclusion.CovTerms.PackageCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + excl.CodeIdentifier + t.Name)
            if (dirTerm == null and genTerm == null and tkTerm == null and optTerm == null and pkgTerm == null)
              insertContents(file, \-> TermLookup.renderToString(excl, t), "</import>", false)
          })

          //remove availability lookups for terms that no longer exist
          deleteRemovedTermsFromLookups(file, excl, pmExclusion)
        }
      }
    }

    // add conditions
    if (_cbl.Conditions.HasElements) {
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("Cond.eti")}))
      var condEntityHelper = new ClauseEntityHelper(_cbl, APDCondition, file)
      condEntityHelper.initialise()
      addOrReplaceFile(file, \-> ConditionEntity.renderToString(_cbl, condEntityHelper))
      file = createPath(ENTITYNAMESDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("Cond.en")}))
      addOrReplaceFile(file, \-> ClauseName.renderToString(_cbl, "Cond"))

      new ConditionAdapterCompositeGenerator(Context, _cbl).generate()

      new ConditionMatcherCompositeGenerator(Context, _cbl).generate()

      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("CondLookup.eti")}))
      if (fileDoesNotExist(file)) { // only add, to preserve any custom changes
        addOrReplaceFile(file, \-> ConditionLookupEntity.renderToString(_cbl))
      }
      // add availability lookup definitions if they do not exist
      file = createPath((LOOKUPDIRECTORY.concat(new String[]{"lookuptables.xml"})))
      if (not this.startTagExists(file, _cbl.LookupCondStartTag)) {
        insertContents(file, \-> ConditionLookupDefinitions.renderToString(_cbl), _cbl.LookupCblEndTag, false)
      }
      for (cond in _cbl.Conditions) {
        var pmCondition : ConditionPattern
        // create or update coverage product model condition definition
        file = createPath((PRODUCTLINESDIRECTORY.concat(new String[]{_cbl.ProductLine.CodeIdentifier, "coveragepatterns", _cbl.LinePrefix.concat(cond.CodeIdentifier.concat(".xml"))})))
        if (fileDoesNotExist(file)) {
          addOrReplaceFile(file, \-> Condition_New.renderToString(cond), false)
        } else {
          pmCondition = parseConditionPattern(file)
          addOrReplaceFile(file, \-> Condition_Existing.renderToString(cond, pmCondition), false)
        }
        // only write the lookup file if the condition does not exist; this preserves any availability logic added afer generation
        file = createPath((PRODUCTLINESDIRECTORY.concat(new String[]{_cbl.ProductLine.CodeIdentifier, "coveragepatterns", _cbl.LinePrefix.concat(cond.CodeIdentifier.concat("-lookups.xml"))})))
        if (fileDoesNotExist(file)) {
          addOrReplaceFile(file, \-> ConditionLookups.renderToString(cond), false)
        } else { // add new terms (that are not schedule terms!)
          cond.StandardTerms.each(\t -> {
            var genTerm = pmCondition.CovTerms.GenericCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cond.CodeIdentifier + t.Name)
            var dirTerm = pmCondition.CovTerms.DirectCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cond.CodeIdentifier + t.Name)
            var tkTerm = pmCondition.CovTerms.TypekeyCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cond.CodeIdentifier + t.Name)
            var optTerm = pmCondition.CovTerms.OptionCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cond.CodeIdentifier + t.Name)
            var pkgTerm = pmCondition.CovTerms.PackageCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cond.CodeIdentifier + t.Name)
            if (dirTerm == null and genTerm == null and tkTerm == null and optTerm == null and pkgTerm == null)
              insertContents(file, \-> TermLookup.renderToString(cond, t), "</import>", false)
          })

          //remove availability lookups for terms that no longer exist
          deleteRemovedTermsFromLookups(file, cond, pmCondition)
        }
      }
    }

    // add modifiers
    if (_cbl.HasModifiers) {
      // add adapter classes
      if (_cbl.IsACoverable) {
        file = createPath(GOSULOBDIRECTORY.concat(new String[]{_cbl.LinePrefix.toLowerCase(), _cbl.LinePrefix.concat(_cbl.TypeName).concat("CoverableModifiableAdapter.gs")}))
        addOrReplaceFile(file, \-> CoverableModifiableAdapter.renderToString(_cbl))
      } else {
        file = createPath(GOSULOBDIRECTORY.concat(new String[]{_cbl.LinePrefix.toLowerCase(), _cbl.LinePrefix.concat(_cbl.TypeName).concat("ModifiableAdapter.gs")}))
        addOrReplaceFile(file, \-> ModifiableAdapter.renderToString(_cbl))
      }
      // add lookup entities
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("ModLookup.eti")}))
      if (fileDoesNotExist(file)) { // only add, to preserve any custom changes
        addOrReplaceFile(file, \-> ModifierLookupEntity.renderToString(_cbl))
      }
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(_cbl.TypeName).concat("MFLookup.eti")}))
      if (fileDoesNotExist(file)) { // only add, to preserve any custom changes
        addOrReplaceFile(file, \-> ModifierFactorLookupEntity.renderToString(_cbl))
      }
      // add availability lookup definitions if they do not exist
      file = createPath((LOOKUPDIRECTORY.concat(new String[]{"lookuptables.xml"})))
      if (not this.startTagExists(file, _cbl.LookupModStartTag)) {
        insertContents(file, \-> ModifierLookupDefinitions.renderToString(_cbl), _cbl.LookupCblEndTag, false)
      }
    }

    // add coverable enhancement to manage child coverables, exposures, location fields, splittable fields or coverables without clauses
    if (_cbl.ChildCoverables.HasElements
        or _cbl.Exposures.HasElements
        or _cbl.Fields.hasMatch(\f -> f.Type == APDFieldType.TC_LOCATION)
        or _cbl.HasSplittableFields
        or !_cbl.IsACoverable) {
      file = createPath(DEFAULTGOSULOBDIRECTORY.concat(new String[]{_cbl.LinePrefix.toLowerCase(), _cbl.LinePrefix.concat(_cbl.TypeName).concat("Enhancement.gsx")}))
      addOrReplaceFile(file, \-> CoverableEnhancement.renderToString(_cbl))
    }

    // add exposures, if any
    for (exposure in _cbl.Exposures) {
      file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.LinePrefix.concat(exposure.TypeName).concat(".eti")}))
      addOrReplaceFile(file, \-> ExposureEntity.renderToString(exposure))

      file = createPath(DEFAULTGOSULOBDIRECTORY.concat(new String[]{_cbl.LinePrefix.toLowerCase(), _cbl.LinePrefix.concat(exposure.TypeName).concat("Enhancement.gsx")}))
      addOrReplaceFile(file, \-> ExposureEnhancement.renderToString(exposure))

      // add splittable implementation files for exposure
      if (exposure.HasSplittableFields) {
        new SplitExposureImplCompositeGenerator(Context, exposure).generate()
      }
    }

    // add coverable cost entity
    // no extra foreign keys needed - coverable level costs should not have a basis that is not an accumulation of its children or some other number
    file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.QualifiedName.concat("Cost.eti")}))
    addOrReplaceFile(file, \-> CostEntity.renderToString(_cbl, false, {}, {}))

    // add coverable cost methods implementation
    new CoverableCostMethodsImplCompositeGenerator(Context, _cbl).generate()

    // add coverable costData
    new CoverableCostDataCompositeGenerator(Context, _cbl, {}, {}).generate()

    // and finally, add any children (especially if this is not really a coverable itself)
    _cbl.ChildCoverables.each(\cbl -> new CoverableEntityGenerator(Context, cbl, new CoverableGenerator(Context, cbl)).generateConfig())

    // add the UI
    // coverable details
    file = createPath(LINEUIDIRECTORY.concat(new String[]{_cbl.LinePrefix.toLowerCase(), POLICY, _cbl.LinePrefix.concat(_cbl.TypeName + "PanelSet.pcf")}))
    addOrReplaceFile(file, \-> CoverablePanelSet.renderToString(_cbl, FIELDMAX))
    // exposure lists per coverable
    for (exposure in _cbl.Exposures) {
      file = createPath(LINEUIDIRECTORY.concat(new String[]{_cbl.LinePrefix.toLowerCase(), POLICY, _cbl.LinePrefix.concat(exposure.TypeName + "ListPanelSet.pcf")}))
      if (exposure.HasSplittableFields) {
        addOrReplaceFile(file, \-> SplittableExposureList.renderToString(_cbl, exposure))
      } else {
        addOrReplaceFile(file, \-> ExposureList.renderToString(_cbl, exposure))
      }
    }
    // coverable lists and pop-ups for all coverables except the line
    if (_cbl.Parent != null) {
      file = createPath(LINEUIDIRECTORY.concat(new String[]{_cbl.LinePrefix.toLowerCase(), POLICY, _cbl.LinePrefix.concat(_cbl.TypeName + "ListPanelSet.pcf")}))
      if (_cbl.HasSplittableFields) {
        addOrReplaceFile(file, \-> SplittableCoverableList.renderToString(_cbl.Parent, _cbl))
      } else {
        addOrReplaceFile(file, \-> CoverableList.renderToString(_cbl.Parent, _cbl))
      }
      file = createPath(LINEUIDIRECTORY.concat(new String[]{_cbl.LinePrefix.toLowerCase(), POLICY, _cbl.LinePrefix.concat(_cbl.TypeName + "Popup.pcf")}))
      addOrReplaceFile(file, \-> CoverablePopup.renderToString(_cbl))
    }
    // add UI display properties for each language
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      file = createPath(APDLanguageResolver.resolveDisplayPropertiesFilePaths(language))
      if (fileExists(file)) {
        // add the display literals to the end
        appendToFile(file, \-> CoverableUIDisplayProperties.renderToString(_cbl, language), false)
      } else {
        addOrReplaceFile(file, \-> CoverableUIDisplayProperties.renderToString(_cbl, language), false)
      }
    })

  }

  /**
   * Generates the data model files required for this coverable to support schedules.
   */
  protected function generateScheduleDataModel() {
    // XXCoverableScheduleCov.eti
    var file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.QualifiedName + "ScheduleCov.eti"}))
    addOrReplaceFile(file, \-> CoverableScheduleCovEntity.renderToString(_cbl))

    new ScheduleCovImplCompositeGenerator(Context, _cbl).generate()

    // XXCoverableScheduleCovItem.eti
    file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.QualifiedName + "ScheduleCovItem.eti"}))
    addOrReplaceFile(file, \-> CoverableScheduleCovItemEntity.renderToString(_cbl))

    new ScheduleCovItemCoverableAdapterCompositeGenerator(Context, _cbl).generate()
    new ScheduleCovItemMatcherCompositeGenerator(Context, _cbl).generate()

    // XXCoverableSchCovItemCov.eti
    file = createPath(ENTITYDIRECTORY.concat(new String[]{_cbl.QualifiedName + "SchCovItemCov.eti"}))
    addOrReplaceFile(file, \-> CoverableScheduleCovItemCovEntity.renderToString(_cbl))

    new ScheduleCovItemCovCoverageAdapterCompositeGenerator(Context, _cbl).generate()
    new ScheduleCovItemCovMatcherCompositeGenerator(Context, _cbl).generate()

    // XXCoverableScheduleCovItem.en
    file = createPath(ENTITYNAMESDIRECTORY.concat(new String[]{_cbl.QualifiedName + "ScheduleCovItem.en"}))
    addOrReplaceFile(file, \-> CoverableScheduledItemName.renderToString(_cbl))
  }

  /**
   * Generates the product model files for this coverage.
   *
   * @param cov
   */
  protected function generateCoverageProductModel(cov : APDCoverage) {
    var pmCoverage : CoveragePattern
    // create or update coverage product model coverage definition
    var file = createPath((PRODUCTLINESDIRECTORY.concat(new String[]{_cbl.ProductLine.CodeIdentifier, "coveragepatterns", _cbl.LinePrefix + cov.CodeIdentifier + ".xml"})))
    if (fileDoesNotExist(file)) {
      addOrReplaceFile(file, \-> Coverage_New.renderToString(cov), false)
    } else {
      pmCoverage = parseCoveragePattern(file)
      addOrReplaceFile(file, \-> Coverage_Existing.renderToString(cov, pmCoverage), false)
    }

    // only write the lookup file if the coverage does not exist; this preserves any availability logic added afer generation
    file = createPath((PRODUCTLINESDIRECTORY.concat(new String[]{_cbl.ProductLine.CodeIdentifier, "coveragepatterns", _cbl.LinePrefix + cov.CodeIdentifier + "-lookups.xml"})))
    if (fileDoesNotExist(file)) {
      addOrReplaceFile(file, \-> CoverageLookups.renderToString(cov), false)
    } else {
      cov.StandardTerms.each(\t -> {
        var genTerm = pmCoverage.CovTerms.GenericCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + t.Name)
        var dirTerm = pmCoverage.CovTerms.DirectCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + t.Name)
        var tkTerm = pmCoverage.CovTerms.TypekeyCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + t.Name)
        var optTerm = pmCoverage.CovTerms.OptionCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + t.Name)
        var pkgTerm = pmCoverage.CovTerms.PackageCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + t.Name)
        if (dirTerm == null and genTerm == null and tkTerm == null and optTerm == null and pkgTerm == null)
          insertContents(file, \-> TermLookup.renderToString(cov, t), "</import>", false)
      })
      //remove availability lookups for terms that no longer exist
      deleteRemovedTermsFromLookups(file, cov, pmCoverage)
    }
  }

  private function deleteRemovedTermsFromLookups(file : Path, apdClause : APDClause, pmClause : XmlElement) {
    var termsInNewModel = apdClause.StandardTerms.map(\elt -> _cbl.LinePrefix + apdClause.CodeIdentifier + elt.Name).toSet()

    var termsInCurrentFile = pmClause.getChild("CovTerms").getChildren("GenericCovTermPattern")*.getAttributeValue("codeIdentifier").toSet()
    termsInCurrentFile.addAll(pmClause.getChild("CovTerms").getChildren("DirectCovTermPattern")*.getAttributeValue("codeIdentifier").toList())
    termsInCurrentFile.addAll(pmClause.getChild("CovTerms").getChildren("TypekeyCovTermPattern")*.getAttributeValue("codeIdentifier").toList())
    termsInCurrentFile.addAll(pmClause.getChild("CovTerms").getChildren("OptionCovTermPattern")*.getAttributeValue("codeIdentifier").toList())
    termsInCurrentFile.addAll(pmClause.getChild("CovTerms").getChildren("PackageCovTermPattern")*.getAttributeValue("codeIdentifier").toList())

    var termsToRemove = termsInCurrentFile.disjunction(termsInNewModel)
    for (termCodeId in termsToRemove) {
      removeLookupsForTerm(file, "${_cbl.LinePrefix}${_cbl.TypeName}TermLookup", termCodeId, false)
    }
  }

  /**
   * Generates the product model files for a linked coverage of the given schedule coverage.
   */
  protected function generateScheduledItemCoverageProductModel(cov : APDCoverage) {
    var pmCoverage : CoveragePattern
    // create or update schedule item coverage product model coverage definition
    var file = createPath((PRODUCTLINESDIRECTORY.concat(new String[]{_cbl.ProductLine.CodeIdentifier, "coveragepatterns", _cbl.LinePrefix + cov.CodeIdentifier + "ItemCov.xml"})))
    if (fileDoesNotExist(file)) {
      addOrReplaceFile(file, \ -> ScheduledItemCoverage_New.renderToString(cov))
    } else {
      pmCoverage = parseCoveragePattern(file) // TODO - SCHEDULE
      addOrReplaceFile(file, \ -> Coverage_Existing.renderToString(cov, pmCoverage))  // TODO - SCHEDULE
    }

    // only write the lookup file if the coverage does not exist; this preserves any availability logic added afer generation
    file = createPath((PRODUCTLINESDIRECTORY.concat(new String[]{_cbl.ProductLine.CodeIdentifier, "coveragepatterns", _cbl.LinePrefix + cov.CodeIdentifier + "ItemCov-lookups.xml"})))
    if (fileDoesNotExist(file)) {
      addOrReplaceFile(file, \ -> ScheduledItemCoverageLookups.renderToString(cov))
    } else {
      cov.ScheduleLinkedClauseTerms.each(\t -> {
        var genTerm = pmCoverage.CovTerms.GenericCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + "ItemCov" + t.Name)
        var dirTerm = pmCoverage.CovTerms.DirectCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + "ItemCov" + t.Name)
        var tkTerm = pmCoverage.CovTerms.TypekeyCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + "ItemCov" + t.Name)
        var optTerm = pmCoverage.CovTerms.OptionCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + "ItemCov" + t.Name)
        var pkgTerm = pmCoverage.CovTerms.PackageCovTermPattern.firstWhere(\pmT -> pmT.CodeIdentifier == _cbl.LinePrefix + cov.CodeIdentifier + "ItemCov" + t.Name)
        if (dirTerm == null and genTerm == null and tkTerm == null and optTerm == null and pkgTerm == null)
          insertContents(file, \ -> TermLookup.renderToString(cov, t), "</import>", false)
      })
      //remove availability lookups for terms that no longer exist
      deleteRemovedScheduledItemTermsFromLookups(file, cov, pmCoverage)
    }
  }

  private function deleteRemovedScheduledItemTermsFromLookups(file : Path, apdClause : APDClause, pmClause : XmlElement) {
    var termsInNewModel = apdClause.ScheduleLinkedClauseTerms.map(\elt -> _cbl.LinePrefix + apdClause.CodeIdentifier + "ItemCov" + elt.Name).toSet()

    var termsInCurrentFile = pmClause.getChild("CovTerms").getChildren("GenericCovTermPattern")*.getAttributeValue("codeIdentifier").toSet()
    termsInCurrentFile.addAll(pmClause.getChild("CovTerms").getChildren("DirectCovTermPattern")*.getAttributeValue("codeIdentifier").toList())
    termsInCurrentFile.addAll(pmClause.getChild("CovTerms").getChildren("TypekeyCovTermPattern")*.getAttributeValue("codeIdentifier").toList())
    termsInCurrentFile.addAll(pmClause.getChild("CovTerms").getChildren("OptionCovTermPattern")*.getAttributeValue("codeIdentifier").toList())
    termsInCurrentFile.addAll(pmClause.getChild("CovTerms").getChildren("PackageCovTermPattern")*.getAttributeValue("codeIdentifier").toList())

    var termsToRemove = termsInCurrentFile.disjunction(termsInNewModel)
    for (termCodeId in termsToRemove) {
      removeLookupsForTerm(file, "${_cbl.LinePrefix}${_cbl.TypeName}TermLookup", termCodeId, false)
    }
  }
}