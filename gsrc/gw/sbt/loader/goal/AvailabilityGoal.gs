package gw.sbt.loader.goal

uses gw.lang.reflect.features.PropertyReference
uses gw.sbt.artifacts.ArtifactId
uses gw.sbt.pca.ValueObject
uses java.util.List

class AvailabilityGoal extends ValueObject<AvailabilityGoal> {

  enum Outcome { AVAILABLE, UNAVAILABLE, NO_CHANGE }

  var _subject : ArtifactId as readonly Subject
  var _outcome : Outcome as readonly Outcome
  var _children : List<AvailabilityGoal> as readonly Children
  var _parent : AvailabilityGoal as Parent

  static function make(subject : ArtifactId, outcome : Outcome, children : List<AvailabilityGoal> = null)
      : AvailabilityGoal{
    return new AvailabilityGoal(subject, outcome, children)
  }

  construct(subject : ArtifactId, outcome : Outcome, children : List<AvailabilityGoal> = null) {
    _subject = subject
    _outcome = outcome
    _children = children ?: {}

    _children.each(\child -> {child._parent = this})
  }

  override property get ValueProperties() : List<PropertyReference<AvailabilityGoal, Object>> {
    return {#Subject, #Outcome, #Children}
  }

  property get HasChanges() : boolean {
    return Outcome != NO_CHANGE or not Children.Empty
  }

}