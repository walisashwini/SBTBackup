package gw.lob.gl7

uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lob.gl7.presenters.GL7SublinePropertyFinder

uses java.lang.Long
uses java.util.Set

class GL7ExposureModel {

  // Properties that should not be taken into account
  private final static var EXCLUDED_PROPERTY_NAMES = {
    GL7Exposure#ProdsCompldOpsExposure.PropertyInfo.Name,
    GL7Exposure#IfAnyBasisProdsCompldOps.PropertyInfo.Name
  }

  // Properties that should be treated as secondary to other properties in the same exposure. They will be skipped
  // if primary property is in place
  private final static var SECONDARY_PROPERTY_NAMES = {
    GL7Exposure#ProdsCompldOpsPremiumBasis.PropertyInfo.Name
  }

  enum PropertyType {
    ClassCode("Class Code"),
    ClassDescription("Class Description"),
    Exposure("Exposure"),
    PremiumBasis("Premium Basis"),
    IfAnyBasis("'If Any' Basis")

    var _description : String as readonly Description

    private construct(description : String) {
      _description = description
    }
  }

  var _exposure : GL7Exposure

  construct(exposure : GL7Exposure) {
    _exposure = exposure
  }

  property get ClassCode() : String {
    return sublineSpecificValueFor<String>(PropertyType.ClassCode)
  }

  property get ClassDescription() : String {
    return sublineSpecificValueFor<String>(PropertyType.ClassDescription)
  }

  property get PremiumBasis() : String {
    return sublineSpecificValueFor<String>(PropertyType.PremiumBasis)
  }

  property get ExposureAmount() : Long {
    return sublineSpecificValueFor<Long>(PropertyType.Exposure)
  }

  property set ExposureAmount(amount: Long) {
    setSublineSpecificValueFor<Long>(PropertyType.Exposure, amount)
  }

  property get ProdsCompltdOpsExposureAmount() : Long {
    return _exposure.ProdsCompldOpsExposure
  }

  property get IfAnyBasis() : String {
    return sublineSpecificValueFor<String>(PropertyType.IfAnyBasis)
  }

  property get IfAnyBasisProdsCompldOps() : String {
    return _exposure.IfAnyBasisProdsCompldOps
  }

  reified private function sublineSpecificValueFor<T>(propertyType : PropertyType) : T {
    return sublineSpecificPropertyFor<T>(propertyType)?.get()
  }

  reified function sublineSpecificPropertyFor<T>(propertyType : PropertyType) : BoundPropertyReference<GL7Exposure, T> {
    if (!_exposure.IsOnPolicyGraph) return null

    var values = sublineSpecificPropertiesFor<T>(propertyType)
    // If there are multiple matches, they should have the same value (e.g., Premium Basis for CGL)
    return values.HasElements ? values.single() : null
  }

  reified function sublineSpecificPropertiesFor<T>(propertyType : PropertyType) : Set<BoundPropertyReference<GL7Exposure, T>> {
    var properties = GL7SublinePropertyFinder.forDescription<GL7Exposure, T>(propertyType.Description)
                          .findAllFor(_exposure)
                          .where( \ prop -> not EXCLUDED_PROPERTY_NAMES.contains(prop.PropertyInfo.Name))

    if(properties.Count > 1) {
      return properties.where(\ prop -> not SECONDARY_PROPERTY_NAMES.contains(prop.PropertyInfo.Name)).toSet()
    } else {
      return properties.toSet()
    }
  }

  reified private function setSublineSpecificValueFor<T>(propertyType : PropertyType, value: T) {
    if (!_exposure.IsOnPolicyGraph) return

    var values = sublineSpecificPropertiesFor<T>(propertyType)
    if(values.Count == 1) {
      var elem = values.first()
      elem.set(value)
    }
  }


}