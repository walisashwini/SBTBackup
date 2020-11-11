package gw.sbt.reader.content

uses gw.sbt.artifacts.clauses.PolicyCovTermPattern
uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.index.SBTUpdateEntryContents
uses gw.sbt.model.clause.CovTermOption
uses java.util.List

class CovTermOptionReader {
  function read(properties: ProductModelDisplayProperties, covTerm: PolicyCovTermPattern,
                availabilityReader: ProductModelAvailabilityReader,
                covTermOptionEntries: SBTUpdateEntryContents): List<CovTermOption> {
    final var options = covTerm.Options
    return options == null
        ? {}
        : options.map(\option -> {
            var pid = option.PublicId
            return new CovTermOption() {
                : PublicId = pid,
                : Priority = option.Priority,
                : OptionCode = option.OptionCode,
                : Intent = new IntentReader().read(covTermOptionEntries?.getContent(pid)),
                : Availabilities = availabilityReader.readCovTermOptionAvailabilities(pid),
                : Description = properties?.getOptionDescriptionFor(pid)
            }
        }).where(\covTermOption -> not covTermOption.Availabilities.Empty)
  }
}