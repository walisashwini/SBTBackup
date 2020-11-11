package gw.lob.gl7

uses gw.api.productmodel.CovTermPattern
uses gw.lang.reflect.IPropertyInfo
uses gw.pl.persistence.core.Bundle

enhancement GL7SublineTypeEnhancement: entity.GL7SublineType {

  function createAndAddLocation() : GL7Location {
    var location = new GL7Location(this.Branch)
    addAndNumberLocation(location)
    return location
  }

  function addAndNumberLocation(location : GL7Location) {
    initializeNumberingOfLocations(location.Bundle)

    this.addToLocations(location)
    this.LocationAutoNumberSeq.number(location, this.Locations, LocationNumberPropInfo)
  }

  function removeAndRenumberLocation(location : GL7Location) {
    this.removeFromLocations(location)
    renumberLocations()
  }

  function renumberLocations() {
    this.LocationAutoNumberSeq.renumber(this.Locations, LocationNumberPropInfo)
  }

  function initializeNumberingOfLocations(bundle : Bundle) {
    if (this.LocationAutoNumberSeq == null) {
      this.LocationAutoNumberSeq = new AutoNumberSequence(bundle)
    }

  }

  private property get LocationNumberPropInfo() : IPropertyInfo {
    return GL7Location#LocationNumber.PropertyInfo
  }

  protected function resetAutoNumberSequences() {
    initializeNumberingOfLocations(this.Bundle)
    this.LocationAutoNumberSeq.reset()
    renumberAutoNumberSequences()
  }

  private function renumberAutoNumberSequences() {
    renumberNewLocations()
  }

  function bindNumberingOfLocations() {
    renumberLocations()
    this.LocationAutoNumberSeq.bind(this.Locations, LocationNumberPropInfo)
  }

  function renumberNewLocations() {
    this.LocationAutoNumberSeq.renumberNewBeans(this.Locations, LocationNumberPropInfo)
  }

  function sublineForJurisdiction(jurisdiction : Jurisdiction) : GL7Subline {
    return this.Sublines.singleWhere(\ subline -> subline.Jurisdiction == jurisdiction)
  }

  function gL7ExposuresWM(jurisdiction: Jurisdiction): GL7Exposure[] {
    var exposuresVLs = this.VersionList.Locations*.GL7Exposures.toList().flatten()
    var exposures = exposuresVLs.map( \ g -> g.AllVersions).toList().flatten().toTypedArray()
    return exposures.where( \ elt -> elt.GL7Location.Jurisdiction == jurisdiction)
  }

  function removeGL7Subline(subline: GL7Subline) {
    // All exposures have to be ended, because there's no data model deletion cascading in this case
    var exposuresForSubline = this.Locations.where( \ elt -> elt.Jurisdiction == subline.Jurisdiction )*.GL7Exposures
    exposuresForSubline.each( \ exp -> { exp.endExposureWM(this.Branch.EditEffectiveDate) })
    this.removeFromSublines(subline)
  }

  function removeGL7Location(location: GL7Location) {
    var exposuresForLocation = location.BasisScalableGL7Exposures
    exposuresForLocation.each( \ exp -> { exp.endExposureWM(this.Branch.EditEffectiveDate) })
    this.removeFromLocations(location)
  }

  property get GL7LimitsCovTermsChangedFromBasedOn(): Set<CovTermPattern> {
    var changedTerms = new HashSet<CovTermPattern>()
    var limitCov = this.GL7Lmts
    limitCov.CovTerms?.each(\covTerm -> {
      if (limitCov.isCovTermChangedFromBasedOn(covTerm.Pattern)) {
        changedTerms.add(covTerm.Pattern)
      }
    })
    return changedTerms
  }

  property get GL7MedPayCovTermsChangedFromBasedOn(): Set<CovTermPattern> {
    var changedTerms = new HashSet<CovTermPattern>()
    var medPayCov = this.GL7MedPay
    medPayCov.CovTerms?.each(\covTerm -> {
      if (medPayCov.isCovTermChangedFromBasedOn(covTerm.Pattern)) {
        changedTerms.add(covTerm.Pattern)
      }
    })
    return changedTerms
  }

}
