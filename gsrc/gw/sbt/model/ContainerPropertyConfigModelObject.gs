package gw.sbt.model

uses gw.sbt.artifacts.versioned.ContainerKey
/**
 * a base model class for all POGOs which created from ContainerPropertyConfig files.
 * ie. Risk is created from Lob-Field-Meta
 */
abstract class ContainerPropertyConfigModelObject implements IntentAndDecision {
  var _instructions : DecisionAndInstructions as DecisionAndInstructions
  var _intent: Intent as Intent
  var _containerKey: ContainerKey as ContainerKey

  construct() {
    _instructions = new DecisionAndInstructions()
  }
}