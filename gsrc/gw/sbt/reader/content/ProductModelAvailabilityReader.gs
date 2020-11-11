package gw.sbt.reader.content

uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.ProductModelAvailability

class ProductModelAvailabilityReader {

  var _lookups : ClausePatternLookups

  construct(lookups : ClausePatternLookups) {
    _lookups = lookups ?: ClausePatternLookups.Empty
  }

  function readClauseAvailabilities(publicId: String) : List<ProductModelAvailability> {
    var clauseLookups = _lookups.getClauseLookups(publicId)
    return clauseLookups.map(\clauseLookup -> readProductModelAvailability(clauseLookup))
  }

  function readCovTermAvailabilities(publicId: String) : List<ProductModelAvailability> {
    var covTermLookups = _lookups.CovTermLookups
        .where( \ covTermLookup -> covTermLookup.SubjectPublicId == publicId and
                                  (covTermLookup.IsState or covTermLookup.IsAvailable))
    return covTermLookups.map( \ covTermLookup -> readProductModelAvailability(covTermLookup))
  }

  function readCovTermOptionAvailabilities(optionPublicId: String) : List<ProductModelAvailability> {
    var covTermOptLookups = _lookups.CovTermOptLookups
        .where( \ termOptionLookup -> termOptionLookup.SubjectPublicId == optionPublicId and
                                     (termOptionLookup.IsState or termOptionLookup.IsAvailable))

    return covTermOptLookups.map(\ covTermOptLookup -> readProductModelAvailability(covTermOptLookup))
  }

  private function readProductModelAvailability(lookup: Lookup) : ProductModelAvailability {
    if (lookup == null) return null

    var availability = lookup.Availability
    var effDate = lookup.StartEffectiveDate
    var expDate = lookup.EndEffectiveDate
    var state = lookup.State.Empty or lookup.State == null ? null : lookup.State

    return new ProductModelAvailability(availability, effDate, expDate, state)
  }
}