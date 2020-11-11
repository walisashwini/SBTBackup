package gw.sbt.reader.content

uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.index.SBTUpdateEntryContents
uses gw.sbt.model.clause.CovTerm
uses java.util.List

class CovTermReader {

  function read(properties: ProductModelDisplayProperties, clausePattern: PolicyClausePattern,
                availabilityReader: ProductModelAvailabilityReader,
                covTermEntries: SBTUpdateEntryContents): List<CovTerm> {

    final var covTerms = clausePattern.CovTerms
    return covTerms == null
        ? {}
        : covTerms.map(\covTerm -> {
            var pid = covTerm.PublicId

            var covTermDescription = ""
            if (covTerm.CodeIdentifier.HasContent and covTerm.CodeIdentifier != pid) {
              covTermDescription = properties?.getCovTermDescriptionFor(covTerm.CodeIdentifier)
            } else {
              covTermDescription = properties?.getCovTermDescriptionFor(pid)
            }

            var covTermAvailabilities = availabilityReader.readCovTermAvailabilities(pid)
            var covTermEntry = covTermEntries?.getContent(pid)
            var covTermCreated = new CovTerm()  {
                :PublicId = pid,
                :Intent = new IntentReader().read(covTermEntry)
            }
            covTermCreated.Description = covTermDescription
            covTermCreated.Required = Boolean.valueOf(covTerm.Required)
            covTermCreated.DataType = covTerm.CovTermDataType
            covTermCreated.ValueType = covTerm.CovTermValueType
            covTermCreated.DefaultValue = covTerm.Default
            covTermCreated.Priority = covTerm.Priority
            covTermCreated.Availabilities = covTermAvailabilities
            covTermCreated.CovTermOptions = new CovTermOptionReader().read(properties, covTerm, availabilityReader, covTermEntry.Contents)
            covTermCreated.MinValue = covTerm.MinVal
            covTermCreated.MaxValue = covTerm.MaxVal
          
            return covTermCreated
        }).where(\covTerm -> not covTerm.Availabilities.Empty)
  }
}