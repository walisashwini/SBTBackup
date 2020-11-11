package gw.job.sxs

uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.SideBySideUtil
uses gw.pcf.sidebyside.SideBySideScreenCache
uses gw.pcf.sidebyside.SideBySideScreenHelper
uses gw.validation.PCValidationContext

uses java.lang.Exception

@Export
class SideBySidePolicyPeriodInfo {
  var _colIndex : int as ColumnIndex
  var _policyPeriod : PolicyPeriod as Period
  var _sxsException : Exception as SxSException
  var _jobWizardHelper : JobWizardHelper as JobWizardHelper
  var _sxsCache : SideBySideScreenCache as SxSCache

  // The validation context and whether or not the period is editable are cached because they can
  // be expensive to compute.
  var _validationContext : PCValidationContext as readonly Validation
  var _sxsEditable : boolean as readonly SxSEditable

  construct(policyPeriod : PolicyPeriod, colIndex : int, vLevel : ValidationLevel, jobWizHelper : JobWizardHelper,
            sxsCache : SideBySideScreenCache = null) {
    _policyPeriod = policyPeriod
    _colIndex = colIndex
    _jobWizardHelper = jobWizHelper

    _validationContext = new PCValidationContext(vLevel)
    _validationContext.Result = policyPeriod.JobProcess.JobProcessValidator.LastResult

    _sxsEditable = policyPeriod.AvailableForSideBySideEdit
    _sxsException = null
    _sxsCache = sxsCache ?: new SideBySideScreenCache()
  }

  property get ErrorText() : String {
    return SideBySideUtil.getPeriodWarningsMessage(Period, Validation, SxSException)
  }

  property get AssociatedPeriodRatedOrQuoted() : boolean {
    return _policyPeriod.RatedOrQuoted
  }

  property get PremiumsVisible() : boolean {
    return Period.ValidRate and Period.JobProcess.canViewQuote()
  }
  
  property set SxSException(e : Exception) {
    _sxsException = e
  }
  
  property get SxSException() : Exception {
    return _sxsException
  }
  
  property get JobWizardHelper() : JobWizardHelper {
    return _jobWizardHelper
  }

  function validateWithoutQuote() {
    _validationContext = SideBySideUtil.validatePeriodForSideBySide(_policyPeriod, _validationContext.Level)
    _policyPeriod.JobProcess.JobProcessValidator.LastResult = _validationContext.Result
  }
  
  function refreshSideBySideStep() {
    _jobWizardHelper.Wizard.refreshCurrentStep()
  }
}
