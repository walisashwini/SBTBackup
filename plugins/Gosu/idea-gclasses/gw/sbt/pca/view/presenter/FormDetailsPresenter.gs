package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.model.form.inference.FormInferenceCovTermValue
uses gw.sbt.model.form.inference.FormInference.FormInferenceType
uses gw.sbt.util.DisplayDescriptionHelper
uses gw.sbt.util.Serializer
uses gw.api.locale.DisplayKey

class FormDetailsPresenter {
  protected var _policyForm : PolicyForm
  var _originalPolicyForm : PolicyForm
  var _readOnly : boolean

  construct(form: PolicyForm) {
    _policyForm = form
    _originalPolicyForm = Serializer.makeCopy(form)
  }

  property set ReadOnly(readOnly: boolean) {
    _readOnly = readOnly
  }

  property get ReadOnly() : boolean {
    return _readOnly
  }

  property get InferenceMethod() : String {
    return _policyForm.Inference.Type.toString()
  }

  property get InferenceDetails() : String {
    var details : String

    if (_policyForm.Inference.Clauses != null) {
      details = createClauseInferenceDescription()
    } else if (_policyForm.Inference.CovTermValues != null) {
      details = createCovTermInferenceDescription()
    } else if (_policyForm.Inference.TypeKeys != null) {
      details = createTypeKeyInferenceDescription()
    } else if(_policyForm.Inference.Type == FormInferenceType.CUSTOM) {
      details = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CustomFormInferenceDetails")
    }

    return details
  }

  function createClauseInferenceDescription() : String {
    var details : String
    var formInferenceClauses = _policyForm.Inference.Clauses
    var numberOfFormInferenceClauses = formInferenceClauses.Count

    var clauseDescription = formInferenceClauses.map(\c ->
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferenceQualifiedName", c.Description, c.ParentRisk.Name))
    if (numberOfFormInferenceClauses == 1) {
      details = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferredByClause", "    " + clauseDescription.first())
    } else if (numberOfFormInferenceClauses > 1) {
      var clauseDescriptions = clauseDescription.join("\n    ")
      details = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferredByClauses", "    " + clauseDescriptions)
    }
    return details
  }

  function createCovTermInferenceDescription() : String {
    var details = ""
    var covTermValuesByCovTerm = _policyForm.Inference.CovTermValues.partition( \ ctv -> ctv.CovTerm.PublicId)

    covTermValuesByCovTerm.eachKey( \ clausePublicId -> {
      var formInferenceCovTermValues = covTermValuesByCovTerm.get(clausePublicId)
      if(details.HasContent) {
        details += "\n"
      }

      var numberOfFormInferenceCovTermValues = formInferenceCovTermValues.Count
      var clause = formInferenceCovTermValues.first().CovTerm.Clause
      var clauseDescription = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferenceQualifiedName", clause.Description, clause.ParentRisk.Name)
      var formInferenceCovTermValue = formInferenceCovTermValues.first()

      if(numberOfFormInferenceCovTermValues == 1) {
        details += createCovTermInferenceDescriptionForSingleCovTermValue(formInferenceCovTermValue, clauseDescription)
      } else if (numberOfFormInferenceCovTermValues > 1) {
        details += DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferredByCovTermValues", formInferenceCovTermValue.CovTerm.Description,
                clauseDescription,
                "    " + formInferenceCovTermValues*.Description.join("\n    "))
      }
    })

    return details
  }

  function createCovTermInferenceDescriptionForSingleCovTermValue(formInferenceCovTermValue: FormInferenceCovTermValue, clauseDescription: String) : String {
    var details : String
    if(formInferenceCovTermValue.Description == null) {
      details = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferredByCovTermBeingAvailable", formInferenceCovTermValue.CovTerm.Description,
              clauseDescription)
    } else {
      details = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferredByCovTermValue", formInferenceCovTermValue.CovTerm.Description,
              clauseDescription,
              formInferenceCovTermValue.Description)
    }
    return details
  }

  function createTypeKeyInferenceDescription() : String {
    var details = ""

    var partitionedByField = _policyForm.Inference.TypeKeys.partition( \ t -> t.TypeList.Field.Description)

    partitionedByField.eachKey( \ fieldName -> {
      var formInferenceTypekeys = partitionedByField.get(fieldName)
      if(details.HasContent) {
        details += "\n"
      }

      var numberOfFormInferenceValues = formInferenceTypekeys.Count
      var coverable = formInferenceTypekeys.first().TypeList.Field.Coverable
      var fieldDescription = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferenceQualifiedName", fieldName, coverable.DisplayName)
      var formInferenceTypekeyValue = formInferenceTypekeys.first()

      if(numberOfFormInferenceValues == 1) {
        details += DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferredByTypeKeyValue", formInferenceTypekeyValue.TypeList.Description,
                fieldDescription,
                formInferenceTypekeyValue.Description)
      } else if (numberOfFormInferenceValues > 1) {
        details += DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InferredByTypeKeyValues", formInferenceTypekeyValue.TypeList.Description,
                fieldDescription,
                "    " + formInferenceTypekeys*.Description.join("\n    "))
      }
    })

    return details
  }

  property get DecisionAndInstructions(): DecisionAndInstructions {
    return _policyForm.DecisionAndInstructions
  }

  property get DecisionLabel() : String {
    return DisplayDescriptionHelper.getUpdateDecisionDescription(_policyForm.DecisionAndInstructions.Decision)
  }

  property set DecisionLabel(label : String) {
    _policyForm.DecisionAndInstructions.Decision = DisplayDescriptionHelper.getUpdateDecisionFromDescription(label)
  }

  property get Description() : String {
    return "${_policyForm.Number} ${_policyForm.Edition} ${_policyForm.Description}"
  }

  property get FormDescription() : String {
    return _policyForm.Description
  }

  property get DiffType(): UpdateDiffType {
    return UpdateDiffType.from(_policyForm.Intent)
  }

  property get InternalGroupCode() : String {
    return _policyForm.InternalGroupCode
  }

  property get cwFormNumberAndDescription() : String {
    return _policyForm.UseInsteadOfCWForm == null ? null : _policyForm.UseInsteadOfCWForm.Code + " " +  _policyForm.UseInsteadOfCWForm.Description
  }

  property get Edition() : String {
    return _policyForm.Edition
  }

  property get IsAvailable() : boolean {
    return not _policyForm.Intent.IsRemove
  }

  function revertChanges() {
    PresenterUtil.revertChanges(_originalPolicyForm, _policyForm)
  }

}