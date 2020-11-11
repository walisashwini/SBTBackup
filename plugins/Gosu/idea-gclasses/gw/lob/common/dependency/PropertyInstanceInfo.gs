package gw.lob.common.dependency

uses entity.PolicyLine
uses gw.api.domain.Clause
uses gw.lang.reflect.IFeatureInfo
uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lang.reflect.features.PropertyReference
uses gw.lang.reflect.gs.IGosuEnhancement

class PropertyInstanceInfo {
  var _contextCoverable: Coverable
  var _typeInfo: PropertyTypeInfo as TypeInfo
  var _contextObject: Object as readonly ContextObject

  // this cache improves performance by avoiding a dynamic lookup of the policy line using type reflection
  var _line: PolicyLine as readonly PolicyLine

  protected var _value: Object as Value

  construct(propRef: BoundPropertyReference) {
    this(propRef.PropertyInfo.Name, containerType(propRef).Name, propRef.Ctx, propRef.get())
  }

  construct(propName: String, containerType: String, contextObject: Object, value: Object) {
    this(propName, containerType, contextObject, value, false)
  }

  construct(propRef : PropertyReference, ctx : Object) {
    this(propRef.PropertyInfo.Name, propRef.PropertyInfo.Container.Name, ctx, propRef.get(ctx), false)
  }

  construct(propName: String, containerType: String, contextObject: Object, value: Object, isSchedule: boolean) {
    if (isSchedule) {
      _typeInfo = new PropertyTypeInfo(propName, containerType, true)
    } else {
      _typeInfo = new PropertyTypeInfo(propName, containerType)
    }
    _contextObject = contextObject
    _value = value

    if (contextObject typeis Modifier) {
      _line = contextObject.OwningModifiable.ModifiableLine
    } else {
      if (contextObject typeis Clause) {
        _contextCoverable = contextObject.OwningCoverable
      } else {
        _contextCoverable = ContextObject as Coverable
      }
      _line = _contextCoverable.PolicyLine
    }
  }

  static function containerType(propRef : BoundPropertyReference): IFeatureInfo {
    var containerType = propRef.PropertyInfo.Container
    if (containerType.OwnersType typeis IGosuEnhancement) {
      containerType = containerType.OwnersType.EnhancedType.TypeInfo
    }

    return containerType
  }


  property get ContextCoverable(): Coverable {
    return _contextCoverable
  }

  property get ReferenceDate() : Date {
    if (TypeInfo.IsClause) {
      if (TypeInfo.IsTerm) {
        return DependencyUtil.getClauseReferenceDate(ContextCoverable, TypeInfo.ContextType.RelativeName)
      } else {
        return DependencyUtil.getClauseReferenceDate(ContextCoverable, TypeInfo.Name)
      }
    } else if(_contextObject typeis Modifier)  {
      return _contextObject.OwningModifiable.ModifiableReferenceDate
    } else {
      return DependencyUtil.getCoverableReferenceDate(ContextCoverable)
    }
  }

  property get Jurisdiction() : Jurisdiction {
    var jurisdiction = ContextCoverable.CoverableState

    if(_contextObject typeis Modifier) {
      jurisdiction = _contextObject.OwningModifiable.ModifiableState
    }

    if(jurisdiction == null){
      jurisdiction = PolicyLine.BaseState
    }
    return jurisdiction
  }

  property get GraphTraversalConstraint(): GraphTraversalConstraint {
    return DependencyUtil.getGraphTraversalConstraint(_contextCoverable)
  }

  property get EffectiveJurisdictionCriteria(): EffectiveJurisdictionCriteria {
    return new EffectiveJurisdictionCriteria (Jurisdiction, ReferenceDate)
  }
}
