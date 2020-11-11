package gw.apd.model.generate.generators

uses entity.APDCoverable
uses gw.apd.model.generate.GenerationContext
uses gw.apd.model.generate.templates.Templates

@Export
class ScheduleCovItemCovMatcherCompositeGenerator extends CompositeTemplateBasedGenerator {

  construct(context : GenerationContext, coverable : APDCoverable) {
    var subPackage : String[] = {coverable.LinePrefixLowerCase}
    var filePrefix = coverable.QualifiedName
    _generators = {
        new APDCoverableBasedGenerator(context, coverable, Templates.SCH_COV_ITEM_COV_MATCHER,
            BASE_GOSU_LOB_DIR.concat(subPackage), "${filePrefix}SchCovItemCovMatcherBase.gs"
        ),
        new APDCoverableBasedGenerator(context, coverable, Templates.SCH_COV_ITEM_COV_MATCHER_EXT,
            EXT_GOSU_LOB_DIR.concat(subPackage), "${filePrefix}SchCovItemCovMatcher.gs"
        )
    }
  }

}