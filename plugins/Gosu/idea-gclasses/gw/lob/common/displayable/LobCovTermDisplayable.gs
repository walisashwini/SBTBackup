package gw.lob.common.displayable

uses gw.api.domain.covterm.CovTerm
uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.LobPropertyService

class LobCovTermDisplayable {

  protected var _jobWizardHelper: JobWizardHelper as readonly JobWizardHelper
  var _isScreenEditable: boolean as ScreenEditable
  var _covTerm: CovTerm as CovTerm
  protected var _lobPropertyService: LobPropertyService

  construct(covTerm: CovTerm, jobWizardHelper: JobWizardHelper, isScreenEditable: boolean) {
    _covTerm = covTerm
    _jobWizardHelper = jobWizardHelper
    _isScreenEditable = isScreenEditable
    _lobPropertyService = LobPropertyService.Instance
  }

  property get Visible(): boolean {return true}

  property get Required(): boolean {return false}

  property get Editable(): boolean {
    return _isScreenEditable and not isReadOnlyPropertyWithRangeValue()
  }

  property get Available(): boolean {return true}

  private function isReadOnlyPropertyWithRangeValue() : boolean {
    return _lobPropertyService.getCovTermRangeDefaultValue(_covTerm) != null
  }
}