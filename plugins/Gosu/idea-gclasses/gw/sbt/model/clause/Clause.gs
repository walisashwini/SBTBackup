package gw.sbt.model.clause

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.model.ProductModelObject
uses gw.sbt.model.Risk
uses gw.sbt.model.schedule.Schedule
uses java.lang.Integer
uses java.util.List

class Clause implements ProductModelObject {
  var _pid : String as PublicId
  var _intent : Intent
  var _effectiveAvailability: ProductModelAvailability
  var _descriptionAttribute : ClauseAttribute<String> as readonly DescriptionAttribute
  var _typeAttribute : ClauseAttribute<ClauseType> as readonly TypeAttribute
  var _categoryAttribute : ClauseAttribute<String> as readonly CategoryAttribute
  var _existenceAttribute : ClauseAttribute<ClauseExistenceType> as readonly ExistenceAttribute
  var _priorityAttribute : ClauseAttribute<Integer> as readonly PriorityAttribute

  var _availabilities: List<ProductModelAvailability> as Availabilities = {}
  var _parentRisk : Risk as ParentRisk
  var _schedule : Schedule as Schedule
  var _covTerms : List<CovTerm> as CovTerms = {}
  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions = new DecisionAndInstructions()

  override property get Intent() : Intent {
    return _intent
  }

  override property set Intent(intent : Intent) {
    _intent = intent
  }

  override property set EffectiveAvailability(availability : ProductModelAvailability) {
    _effectiveAvailability = availability
  }

  override property get EffectiveAvailability() : ProductModelAvailability {
    return _effectiveAvailability
  }

  property get IsSchedule() : boolean {
    return _schedule != null
  }

  property get Description() : String {
    return DescriptionAttribute.Value
  }

  property get FileName(): String {
    // for a mercury-generated Clause, its public-id is always identical to its codeIdentifier and is always the same as the name, so the following shortcut can be used instead of going through the actual list of files and retrieve the name
    return PublicId + ".xml"
  }

  property set Description(value : String) {
    _descriptionAttribute = attribute("Description", value)
  }

  property get Type() : ClauseType {
    return TypeAttribute.Value
  }

  property set Type(value : ClauseType) {
    _typeAttribute = attribute("Type", value)
  }

  property get Category() : String {
    return CategoryAttribute.Value
  }

  property set Category(value : String) {
    _categoryAttribute = attribute("Category", value)
  }

  property get Existence() : ClauseExistenceType {
    return ExistenceAttribute.Value
  }

  property set Existence(value : ClauseExistenceType) {
    _existenceAttribute = attribute("Existence", value)
  }

  property get Priority() : int {
    return PriorityAttribute.Value
  }

  property set Priority(value : int) {
    _priorityAttribute = attribute("Priority", value)
  }

  property set Schedule(schedule : Schedule) {
    _schedule = schedule
    _schedule?.Properties?.each( \ scheduleProperty -> {
      scheduleProperty.Intent = Intent
    })
  }

  reified private function attribute<T>(name : String, value : T) : ClauseAttribute<T> {
    return value == null ? null : ClauseAttribute.with(name, value, Intent)
  }

  override property get ChildrenWithAvailability() : List<ProductModelObject> {
    return CovTerms
  }
}