package gw.sbt.model.comparisons

uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.clause.ClauseAttribute
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.schedule.ScheduleProperty
uses gw.sbt.util.Serializer
uses java.util.ArrayList
uses java.util.List

class ClauseComparison extends Comparison<Clause> {
  var _attributes : List<Comparison<ClauseAttribute>> as readonly Attributes
  var _scheduleProperties : List<Comparison<ScheduleProperty>> as readonly ScheduleProperties
  var _covTerms : List<CovTermComparison> as readonly CovTerms

  protected construct(currentVersion : Clause, newVersion : Clause, adoptedVersion : Clause,
                      comparisonDeicsionSource : ComparisonDecisionSource,
                      parent : Comparison) {
    super(currentVersion, newVersion, adoptedVersion, comparisonDeicsionSource, parent)
    _attributes = createAttributes()
    _scheduleProperties = createScheduleProperties()
    _covTerms = createCovTerms()
  }

  private function createAttributes() : List<Comparison<ClauseAttribute>> {
    var attributeProps = {Clause#DescriptionAttribute, Clause#CategoryAttribute, Clause#ExistenceAttribute}
    return attributeProps
        .map(\ prop -> newForAttributeProperty(prop))
        .where(\ comparison -> comparison.HasValue)
  }

  private function createScheduleProperties() : List<Comparison<ScheduleProperty>> {
    return new PluggableChildComparisonFactory<Clause, ScheduleProperty>(
        \ clause -> clause.Schedule?.Properties,
        \ scheduleProperty -> scheduleProperty.Description,
        \ currentProp, newProp, adoptedProp ->
            Comparison.forScheduleProperty(currentProp, newProp, adoptedProp, _comparisonDecisionSource, this))
        .createChildComparisonsFor(this)
  }

  private function createCovTerms(): List<CovTermComparison> {
    return new PluggableChildComparisonFactory<Clause, CovTerm>(
        \ clause -> clause.CovTerms,
        \ covTerm -> covTerm.PublicId,
        \ currentTerm, newTerm, adoptedTerm ->
            Comparison.forCovTerm(currentTerm, newTerm, adoptedTerm, _comparisonDecisionSource, this))
        .createChildComparisonsFor(this)
        .cast(CovTermComparison)
  }

  override property get Children(): List<Comparison> {
    var children = new ArrayList<Comparison<Object>>()
    children.addAll(Attributes)
    children.addAll(_scheduleProperties)
    children.addAll(CovTerms)
    return children
  }

  override function cloneForRevert(): ClauseComparison {
    var clonedClauseComparison = ClauseComparison.forClause(
        Serializer.makeCopy(Current),
        Serializer.makeCopy(New),
        Serializer.makeCopy(Adopted), Serializer.makeCopy(_comparisonDecisionSource))
    clonedClauseComparison.DecisionAndInstructions = Serializer.makeCopy(this.DecisionAndInstructions)
    return clonedClauseComparison
  }

  function copyDecisionsAndInstructionsFrom(templateComparison: ClauseComparison) {
    DecisionAndInstructions.updateFrom(templateComparison.DecisionAndInstructions)

    CovTerms.each(\covTermComparison -> {
      var backingCovTerm = getDefiningSubject(covTermComparison)
      var templateCovTerm = templateComparison.CovTerms.firstWhere(\templateCovTermComparison -> getDefiningSubject(templateCovTermComparison).PublicId == backingCovTerm.PublicId)

      covTermComparison.copyDecisionsAndInstructionsFrom(templateCovTerm)

      covTermComparison.Options.each( \ optionComparison -> {
        var backingCovTermOption = getDefiningSubject(optionComparison)
        var templateCovTermOption = templateCovTerm.Options.firstWhere( \templateOptionComparison -> getDefiningSubject(templateOptionComparison).PublicId == backingCovTermOption.PublicId)
        optionComparison.copyDecisionsAndInstructionsFrom(templateCovTermOption)
      })
    })

    Attributes.each( \ attributeComparison -> {
      var backingAttribute = getDefiningSubject(attributeComparison)
      var templateAttribute = templateComparison.Attributes.firstWhere(\templateAttributeComparison -> getDefiningSubject(templateAttributeComparison).Name == backingAttribute.Name)

      attributeComparison.copyDecisionsAndInstructionsFrom(templateAttribute)
    })

    ScheduleProperties.each( \scheduleComparison -> {
      var backingScheduleProperty = getDefiningSubject(scheduleComparison)
      var templateScheduleComparison = templateComparison.ScheduleProperties.firstWhere(\templateScheduleComparison -> getDefiningSubject(templateScheduleComparison).Name == backingScheduleProperty.Name)

      scheduleComparison.copyDecisionsAndInstructionsFrom(templateScheduleComparison)
    })

    New.DecisionAndInstructions?.updateFrom(templateComparison.New.DecisionAndInstructions)
    Adopted.DecisionAndInstructions?.updateFrom(templateComparison.Adopted.DecisionAndInstructions)
    Current.DecisionAndInstructions?.updateFrom(templateComparison.Current.DecisionAndInstructions)
  }

  private function getDefiningSubject<T>(comparison: Comparison<T>): T {
    return comparison.New?:comparison.Adopted?:comparison.Current
  }
}