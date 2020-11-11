package gw.sbt.model

uses java.util.List

interface ProductModelObject extends HasPublicId, IntentAndDecision {
  property get ChildrenWithAvailability() : List<ProductModelObject>
  property get Availabilities() : List<ProductModelAvailability>
  property set Availabilities(availabilities : List<ProductModelAvailability>)
  property set Intent(intent : Intent)
  property set EffectiveAvailability(availability : ProductModelAvailability)
  property get EffectiveAvailability() : ProductModelAvailability

}