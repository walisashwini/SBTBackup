package gw.lob.common.dependency

uses gw.validation.PCValidationContext
uses gw.api.web.job.JobWizardHelper
uses gw.api.diff.DiffItem

@Deprecated("Use new dependency framework instead")
interface FieldDependency {
  function updateDependentFields()
  function updateDependentFields(dependenciesContext : DependenciesContext)
  function updateDependentFields(dependenciesContext : DependenciesContext, wizard : JobWizardHelper)
  function validateDependentFields(valContext : PCValidationContext)
  function validateDependentFields(valContext : PCValidationContext, dependenciesContext : DependenciesContext)
  function shouldSuppressOOSConflict(diffItem : DiffItem) : boolean
}
