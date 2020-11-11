package gw.rating

uses gw.api.domain.Clause
uses gw.api.rating.flow.VisibleInRateflow
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.util.CommonFunctions
uses gw.lob.common.util.ReflectionPropertyUtil

uses java.math.BigDecimal

abstract class LineModelObject {

  var _jurisdictionTypeKey : Jurisdiction
  var _initializedJurisdiction = false

  @VisibleInRateflow(false)
  protected var _dataModel: Object as readonly DataModel

  @VisibleInRateflow(false)
  protected static final var _cf: CommonFunctions as readonly CF = new CommonFunctions()

  @VisibleInRateflow(false)
  property get JurisdictionTypekey(): Jurisdiction {
    if (!_initializedJurisdiction) {
      if (DataModel == null) {
        _jurisdictionTypeKey = null
      } else {
        if (DataModel typeis Coverable) {
          _jurisdictionTypeKey = typekey.Jurisdiction.get(DependencyUtil.getJurisdiction(DataModel))
        } else if (DataModel typeis Clause) {
          _jurisdictionTypeKey = typekey.Jurisdiction.get(DependencyUtil.getJurisdiction(DataModel.OwningCoverable))
        } else if (DataModel typeis Modifier) {
          _jurisdictionTypeKey = null // modifier Jurisdiction cannot be considered in rating
        } else {
          throw new RuntimeException("Unsupported PC object type: " + (typeof DataModel).DisplayName)
        }
      }
      _initializedJurisdiction = true
    }

    return _jurisdictionTypeKey
  }

  @VisibleInRateflow(false)
  property get ParentLineModelObject() : LineModelObject {
    return null
  }

  @VisibleInRateflow(false)
  property get CurrentJurisdiction() : Jurisdiction {
    return ParentLineModelObject.CurrentJurisdiction
  }

  /*
    "Self" is added here as a workaround to get rid of the limitation of PC runtime validation.
    Without this workaround, "itrElement.null" will be generated in ratebook, RTM will throw exception.
  */
  @VisibleInRateflow
  property get Self(): Object {
    return this
  }


  function hasProperty(propertyName: String): boolean {
    return ReflectionPropertyUtil.hasProperty(this, propertyName)
  }

  function isClause(): boolean {
    return this.Clause != null
  }

  private function hasCoverableField(coverable : Coverable, fieldName : String) : boolean {
    return coverable.IntrinsicType.EntityProperties.toList()?.hasMatch(\prop -> prop.Name == fieldName)
  }

  private function getFieldValueIfExistsOrNull(coverable : Coverable, fieldName : String) : Object {
    return hasCoverableField(coverable, fieldName)
        ? coverable.getFieldValue(fieldName)
        : null
  }

  protected function getFieldDateValueIfExistsOrNull(coverable : Coverable, fieldName : String) : Date {
    return getFieldValueIfExistsOrNull(coverable, fieldName) as Date
  }

  protected function getFieldIntegerValueIfExistsOrNull(coverable : Coverable, fieldName : String) : Integer {
    return getFieldValueIfExistsOrNull(coverable, fieldName) as Integer
  }

  protected function getFieldBigDecimalValueIfExistsOrNull(coverable : Coverable, fieldName : String) : BigDecimal {
    return getFieldValueIfExistsOrNull(coverable, fieldName) as BigDecimal
  }

  protected function getFieldStringValueIfExistsOrNull(coverable : Coverable, fieldName : String) : String {
    return getFieldValueIfExistsOrNull(coverable, fieldName) as String
  }

  @VisibleInRateflow(false)
  property get Clause(): Clause {
    if (DataModel typeis Clause){
      return DataModel
    }
    return null
  }

  function isCoverable(): boolean {
    return this.Coverable != null
  }

  @VisibleInRateflow(false)
  property get Coverable(): Coverable {
    if (DataModel typeis Coverable){
      return DataModel
    }
    return null
  }

  function isEffDated(): boolean {
    return this.EffDated != null
  }

  @VisibleInRateflow(false)
  property get EffDated(): EffDated {
    if (DataModel typeis EffDated){
      return DataModel
    }
    return null
  }

  @VisibleInRateflow
  property get DisplayName(): String {
    return ""
  }

  @VisibleInRateflow(false)
  property get ClauseCode(): String {
    // Backward compatibility
    return DisplayName
  }

  function getChild(childLineModelObjectName: String): LineModelObject {
    if (hasProperty(childLineModelObjectName)){
      return this[childLineModelObjectName] as LineModelObject
    }
    return null
  }

  function resolveChildDtos(): List<LineModelObject> {
    if (this typeis Groupable) {
      return this.All
    }
    return {this}
  }

  function handleCurrent(dto: LineModelObject) {
    if (this typeis Groupable){
      this.updateCurrent(dto)
    }
  }

  function initShortNames() {

  }

  @VisibleInRateflow(false)
  property get ClassName(): String {
    return DataModel.Class.Name
  }

  function isSelected(): boolean {
    return DataModel != null
  }

  @VisibleInRateflow(false)
  property get WorksheetAttachmentEntity(): EffDated {
    return EffDated
  }
}