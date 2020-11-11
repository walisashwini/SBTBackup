package gw.lob.gl7.presenters

uses gw.lang.reflect.IPropertyInfo
uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lob.common.dependency.AvailabilitySupport
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.displayable.LobFieldMetaSupport

class GL7SublinePropertyFinder<CoverableT extends Coverable, PropertyT> {

  var _description : String

  reified static function forDescription<R extends Coverable, T>(description : String) : GL7SublinePropertyFinder<R, T> {
    return new GL7SublinePropertyFinder<R, T>(description)
  }

  private construct(description : String) {
    _description = description
  }

  function findAllFor(coverable : CoverableT) : List<BoundPropertyReference<CoverableT, PropertyT>> {
    return coverable.IntrinsicType.EntityProperties.toList()
        .where(\ propertyInfo -> propertyInfo.Description_Entity == _description)
        .map(\ propertyInfo -> boundPropertyReferenceFor<CoverableT, PropertyT>(propertyInfo, coverable))
        .where(\ propertyRef -> isAvailableBasedOnDependencies(propertyRef) and canBeVisible(propertyRef))
  }

  private function boundPropertyReferenceFor<R, T>(propertyInfo : IPropertyInfo, context : R)
      : BoundPropertyReference<R, T> {
    return new BoundPropertyReference<R, T>(propertyInfo.OwnersType, context, propertyInfo.Name)
  }

  private function isAvailableBasedOnDependencies(propertyRef : BoundPropertyReference) : boolean {
    return AvailabilitySupport.Instance.isEntityColumnAvailable(propertyRef)
  }

  private function canBeVisible(propertyRef : BoundPropertyReference) : boolean {
    return LobFieldMetaSupport.Instance.findFieldMeta(new PropertyInstanceInfo(propertyRef)).Visible
  }

}