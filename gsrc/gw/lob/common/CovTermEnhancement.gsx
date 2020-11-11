package gw.lob.common

enhancement CovTermEnhancement: gw.api.domain.covterm.CovTerm {

  function syncOptionTermToTheOnlyOption() {
    if (this.Pattern typeis gw.api.productmodel.OptionCovTermPattern) {
      var availableOptions = this.Pattern.getAvailableValues(this)
      if (availableOptions.Count == 1 && this.ValueAsString != availableOptions.first().OptionCode) {
        this.setValueFromString(availableOptions.first().OptionCode)
      }
    }
  }
}