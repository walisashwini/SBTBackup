package gw.sbt.model.builder

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.artifacts.lookups.FormLookup
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.reader.content.FormInferenceReader

uses java.text.ParseException
uses java.util.Map
uses java.util.List
uses gw.sbt.util.Formatter

class CurrentFormBuilder {

  var _policyLinePatternCode : String
  var _productAbbreviation : String
  var _jurisdiction : String
  var _currentConfigContents : CurrentConfigContents
  var _targetConfiguration : TargetConfiguration
  var _adoptionDate : Date
  var _entityReader: LoaderEntityReader

  construct(policyLinePatternCode : String,
            productAbbreviation : String,
            jurisdiction : String,
            currentConfigContents : CurrentConfigContents = null,
            targetConfiguration : TargetConfiguration = null,
            adoptionDate : Date = null,
            entityReader: LoaderEntityReader = null){
    _policyLinePatternCode = policyLinePatternCode
    _productAbbreviation = productAbbreviation
    _jurisdiction = jurisdiction
    _targetConfiguration = targetConfiguration
    _adoptionDate = adoptionDate ?: Date.Now
    _entityReader = entityReader
    if (_entityReader == null) {
      _entityReader = new LoaderEntityReader()
    }

    if(currentConfigContents != null) {
      _currentConfigContents = currentConfigContents
    } else {
      _currentConfigContents = new CurrentConfigContents(_policyLinePatternCode, _productAbbreviation, _targetConfiguration)
    }
  }

  function toFormModel(formNumber : String) : PolicyForm {
    // Find the form pattern with the latest edition
    var mostCurrentFormPattern = getMostCurrentFormPattern(formNumber)
    if (mostCurrentFormPattern == null) {
      return null
    }
    return existingPolicyForm(mostCurrentFormPattern, _currentConfigContents)
  }

  function toFormModel(formPattern : PolicyFormPattern) : PolicyForm {
    return existingPolicyForm(formPattern, _currentConfigContents)
  }

  private function findFormPatternsForJurisdictionAndCountryWide(formNumber : String) : List<PolicyFormPattern> {
    var formPatterns = _entityReader.findFormPatterns(formNumber, _policyLinePatternCode)
    if(formPatterns == null) return null
    var formPatternsForJurisdictionAndCountryWide : List<PolicyFormPattern> = {}

    formPatterns.each( \ f -> {
      var lookupForJurisdiction = f.getLookup(_jurisdiction)
      if(lookupForJurisdiction != null) {
        formPatternsForJurisdictionAndCountryWide.add(f)
      } else {
        var lookupForCountryWide = f.getLookupForCW()    //also include the form if country wide lookup exists
        if (lookupForCountryWide != null) {  // cleanup lookup for other state, only keep country wide lookup
          var fCopy = f.copy()
          fCopy.removeLookups()
          fCopy.addLookup(lookupForCountryWide)
          formPatternsForJurisdictionAndCountryWide.add(fCopy)
        }
      }
    })
    return formPatternsForJurisdictionAndCountryWide.HasElements ?  formPatternsForJurisdictionAndCountryWide : null
  }

  function getMostCurrentFormPattern(formNumber : String) : PolicyFormPattern {
    var formPatterns = findFormPatternsForJurisdictionAndCountryWide(formNumber) //include countrywide forms
    if (formPatterns == null) {
      return null
    }
    if(formPatterns.Count == 1) {
      return formPatterns.first()
    }

    var editionDates : List<Date> = {}
    var formPatternMapByDate : Map<Date, PolicyFormPattern> = {}

    var isAltFormPresent= formPatterns.firstWhere(\ f -> f.UseInsteadOfCode != null and f.UseInsteadOfCode != "") != null

    formPatterns.each( \ f -> {
      // if the "UseInsteadOf" value is non-empty, the current form will be used instead of the "UseInsteadOf" form
      // therefore, the "UseInsteadOf" form should not be considered at the candidate when we look for the most current version
      if (not isAltFormPresent or (isAltFormPresent and f.UseInsteadOfCode != null and f.UseInsteadOfCode != "")) {
        // Support multiple date formats separated by a space, slash, or hyphen
        if (!f.Edition.matches("\\d{2}[-/ ]{1}\\d{2}")) {
          throw new ParseException("Cannot parse form edition date: ${f.Edition} on form: ${f.Code} (${f.PublicId})", 0)
        }
        var sepChar = f.Edition[2]
        var editionDate = Formatter.stringToDate(f.Edition, "MM${sepChar}yy")
        editionDates.add(editionDate)
        formPatternMapByDate.put(editionDate, f)
      }
    })

    editionDates.sortDescending()
    var mostCurrentEdition = editionDates.first()
    return formPatternMapByDate.get(mostCurrentEdition)
  }

  private function existingPolicyForm(formPattern: PolicyFormPattern, existingConfigContents: CurrentConfigContents) : PolicyForm {
    var policyForm = createPolicyForm(formPattern, existingConfigContents)

    if(formPattern.UseInsteadOfCode.HasContent){
      policyForm.UseInsteadOfCWForm =
          createPolicyForm(_entityReader.findFormPattern(formPattern.UseInsteadOfCode), existingConfigContents)
    }

    return policyForm
  }

  private function createPolicyForm(formPattern : PolicyFormPattern, existingConfigContents : CurrentConfigContents) : PolicyForm {
    var availability = formPatternAvailability(formPattern)

    return new PolicyForm() {
        :Priority = formPattern.Priority,
        :Number = formPattern.FormNumber,
        :Code = formPattern.Code,
        :Edition = formPattern.Edition,
        :Description = formPattern.Description,
        :EffectiveAvailability = availability,
        :Availabilities = formPattern.Availabilities,
        :Inference = new FormInferenceReader().read(formPattern, existingConfigContents.CustomFormInferences, existingConfigContents),
        :InternalGroupCode = formPattern.InternalGroupCode,
        :Intent = availability.Availability == Lookup.UNAVAILABLE ? STATE_REMOVE : STATE_ADD
    }
  }

  private function formPatternAvailability(formPattern : PolicyFormPattern) : ProductModelAvailability {
    var lookups = formPattern.availabilityLookupsForJurisdiction(_jurisdiction)
    var validLookup : FormLookup

    var lookupsWithNullEndDates = lookups.where( \ l -> l.EndEffectiveDate == null)
    if(lookupsWithNullEndDates.HasElements){
      //Return the most current lookup without an EndDate that is <= now
      validLookup = lookupsWithNullEndDates.orderByDescending(\l -> l.StartEffectiveDate).firstWhere( \ l -> _adoptionDate >= l.StartEffectiveDate)
    } else {
      validLookup =  lookups.orderByDescending(\l -> l.StartEffectiveDate)
          .firstWhere(\l -> _adoptionDate >= l.StartEffectiveDate and _adoptionDate <= l.EndEffectiveDate)
    }

    if(validLookup == null){
      return new ProductModelAvailability(Lookup.UNAVAILABLE, _adoptionDate, null, _jurisdiction)
    }

    return new ProductModelAvailability(validLookup.Availability, validLookup.StartEffectiveDate, validLookup.EndEffectiveDate, validLookup.Jurisdiction)
  }
}