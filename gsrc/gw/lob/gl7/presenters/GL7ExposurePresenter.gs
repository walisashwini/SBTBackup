package gw.lob.gl7.presenters

uses gw.lob.common.LobPropertyReference
uses gw.lob.common.LobPropertyService
uses gw.lob.common.dependency.v2.ValueDependencySupport
uses gw.lob.gl7.GL7ExposureModel
uses gw.lob.gl7.GL7SublineTypeName

uses java.lang.Long
uses java.util.Date

class GL7ExposurePresenter {

  // Until we have a better way to provide deviations for fields defined in lob-field-meta.xml
  // See https://confluence.guidewire.com/display/USC/Lob+Field+Meta+Deviation+Design
  static final var PRODUCT_COVERAGE_FIELD_NAME = "ProductCoverage"

  var _policyPeriod : PolicyPeriod
  var _exposure : GL7Exposure
  var _sublineType : GL7SublineType as SublineType

  private construct(policyPeriod: PolicyPeriod, exposure: GL7Exposure, sublineType: GL7SublineType) {
    _policyPeriod = policyPeriod
    _exposure = exposure
    _sublineType = sublineType
  }

  static function create(exposure : GL7Exposure) : GL7ExposurePresenter {
    return new GL7ExposurePresenter(exposure.Branch, exposure, exposure.GL7Location.SublineType)  }

  static function createWithNewExposure(policyPeriod : PolicyPeriod, subline : GL7SublineType) : GL7ExposurePresenter {
    return new GL7ExposurePresenter(policyPeriod, null, subline)
  }

  private property get Exposure(): GL7Exposure {
    if (_exposure == null) {
      _exposure = new GL7Exposure(_policyPeriod)
    }
    return _exposure
  }

  property get ExposureWM() : GL7Exposure {
    return Exposure.Unsliced
  }

  property get ExposureSliced() : GL7Exposure {
    return Exposure.getSlice(Exposure.EffectiveDate)
  }

  property get ValidLocations() : PolicyLocation[] {
    return _policyPeriod.PolicyLocationsWM.where( \ loc -> _sublineType.Locations.hasMatch( \ gl7location -> gl7location.PolicyLocation.FixedId == loc.FixedId))
  }

  property get LocationWM() : PolicyLocation {
    return ExposureWM.GL7LocationWM?.Location
  }

  property set LocationWM(policyLocation : PolicyLocation) {
    var gl7location = GL7CoverablePerSubline.forLocation(Line, policyLocation)
        .SublineSortedCoverables
        .firstWhere(\location -> location.SublineType.FixedId == SublineType.FixedId)

    if(gl7location != null) {
      ExposureWM.GL7LocationWM = gl7location.Unsliced

      LobPropertyService.Instance.syncCoverableProperties(ExposureSliced)
      defaultProductCoverage()
    }
  }

  private function defaultProductCoverage() {
    ExposureSliced.ProductCoverage = ValueDependencySupport.Instance.valueRange(
        new LobPropertyReference(_exposure, PRODUCT_COVERAGE_FIELD_NAME)
    ).first()
  }

  private property get Line() : GL7Line {
    return _policyPeriod.GL7Line
  }

  property get EffectiveDate() : Date {
    return ExposureSliced.EffectiveDate
  }

  property set EffectiveDate(value : Date) {
    ExposureSliced.EffectiveDate = value
  }

  property get ExpirationDate() : Date {
    return ExposureSliced.EffectiveDate.after(ExposureSliced.EndOfCoverageDate)
        ? ExposureSliced.EffectiveDate
        : ExposureSliced.ExpirationDate.after(ExposureSliced.EndOfCoverageDate)
            ? ExposureSliced.EndOfCoverageDate
            : ExposureSliced.ExpirationDate
  }

  property get ClassCode() : String {
    return DomainModel.ClassCode
  }

  property get ClassDescription() : String {
    return DomainModel.ClassDescription
  }

  property get ExposureAmount() : Long {
    return DomainModel.ExposureAmount
  }

  property get ProdsCompltdOpsExposureAmount() : Long {
    return DomainModel.ProdsCompltdOpsExposureAmount
  }

  property get PremiumBasis() : String {
    return DomainModel.PremiumBasis
  }

  property get AuditedExposureAmount() : Long {
    return ExposureSliced.AuditedExposure
  }
  
  property set AuditedExposureAmount(value : Long) {
    ExposureSliced.AuditedExposure = value
  }
  
  property get AuditedProdsCompltdOpsExposureAmount() : Long {
    return ExposureSliced.AuditedProdsCompltdOpsExposure
  }
   
  property set AuditedProdsCompltdOpsExposureAmount(value : Long) {
    ExposureSliced.AuditedProdsCompltdOpsExposure = value
  }
     
  private property get DomainModel() : GL7ExposureModel {
    return ExposureSliced.DomainModel
  }

  property get IsLocationSet() : boolean {
    return LocationWM != null
  }

  function removeFromPolicy() {
    ExposureWM.removeWM()
  }

  function splitExposureWM() {
    ExposureWM.splitExposureWM(_policyPeriod.EditEffectiveDate)
  }

  function endExposureWM() {
    ExposureWM.endExposureWM(_policyPeriod.EditEffectiveDate)
  }

  property get CanEditClausesForSlice(): Boolean {
    return ExposureSliced.IsCurrentOrFutureSlice
  }

  property get CanEditAuditedProductsCompletedOpsExposure() : boolean {
    return (Exposure.SublineTypeName == GL7SublineTypeName.PRODS_COMPLETED_OPERATION.Description)  or
        ((Exposure.SublineTypeName == GL7SublineTypeName.CGL.Description or Exposure.SublineTypeName == GL7SublineTypeName.PREMISE_OPERATIONS.Description) and
            Exposure.OtherThanProdsCompldOpsCov != "Premises/Operations Including Prods/CompldOps")
  }

  override function equals(other: Object) : boolean {
    return other typeis GL7ExposurePresenter and ExposureWM == other.ExposureWM
  }

  override function hashCode() : int {
    return ExposureSliced?.hashCode()
  }

  property get IsEditEffective() : boolean {
    return this.ExposureSliced.isEffective( Exposure.Branch.EditEffectiveDate )
  }

}
