package gw.apd.model.generate.generators

uses entity.APDCoverable
uses gw.apd.model.generate.GenerationContext
uses gw.apd.model.generate.templates.Templates

@Export
class CoverageAdapterCompositeGenerator extends CompositeTemplateBasedGenerator {

  construct(context : GenerationContext, coverable : APDCoverable) {
    var subPackage : String[] = {coverable.LinePrefixLowerCase}
    var filePrefix = coverable.QualifiedName
    _generators = {
        new APDCoverableBasedGenerator(context, coverable, Templates.COVERAGE_ADAPTER,
            BASE_GOSU_LOB_DIR.concat(subPackage), "${filePrefix}CoverageAdapterBase.gs"
        ),
        new APDCoverableBasedGenerator(context, coverable, Templates.COVERAGE_ADAPTER_EXT,
            EXT_GOSU_LOB_DIR.concat(subPackage), "${filePrefix}CoverageAdapter.gs"
        )
    }
  }

}