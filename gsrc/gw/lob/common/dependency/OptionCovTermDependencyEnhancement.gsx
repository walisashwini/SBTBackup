package gw.lob.common.dependency

uses gw.api.domain.covterm.OptionCovTerm
uses gw.api.productmodel.CovTermOpt
uses gw.lob.common.LobPropertyService

enhancement OptionCovTermDependencyEnhancement : OptionCovTerm {

  function isOptionAvailable(option : CovTermOpt): boolean {
    return LobPropertyService.Instance.isCovTermOptionAvailable(this, option)
  }

}