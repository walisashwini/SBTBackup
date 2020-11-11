package gw.lob.gl7.rating

uses com.guidewire.pl.system.entity.proxy.ScalableUtil
uses com.guidewire.pl.system.util.DateRange
uses gw.entity.IEntityPropertyInfo
uses gw.lang.reflect.IPropertyInfo
uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lob.gl7.GL7ExposureModel.PropertyType
uses gw.util.Pair

uses java.lang.Long
uses java.util.Date

class GL7ExposureUtil {

  internal final static class ExposureValueWrapper {

    var _exposure : GL7Exposure as readonly SourceExposure
    var _exposurePropertyRef : BoundPropertyReference as readonly ExposurePropertyReference
    var _exposureValue : Long as readonly ExposureValue

    private construct(exposure : GL7Exposure) {
      _exposure = exposure
      mapExposure(exposure)
    }

    static function createFor(exposure : GL7Exposure) : ExposureValueWrapper {
      return new ExposureValueWrapper(exposure)
    }

    property get ExposurePropertyInfo() : IPropertyInfo {
      if (_exposure.AuditedExposure == null)
        return _exposurePropertyRef.PropertyInfo
      else
        return _exposure#AuditedExposure.PropertyInfo

    }

    property get ProdComplOpsExposurePropertyInfo() : IPropertyInfo {

      if (_exposure.AuditedProdsCompltdOpsExposure == null)
        return _exposure#ProdsCompldOpsExposure.PropertyInfo
      else
        return _exposure#AuditedProdsCompltdOpsExposure.PropertyInfo
    }

    property get ProdComplOpsExposureValue() : Long {

      if (_exposure.AuditedProdsCompltdOpsExposure == null)
        return _exposure.ProdsCompldOpsExposure
      else
        return _exposure.AuditedProdsCompltdOpsExposure

    }

    /**
     * Set new exposure values, but only if originally the values were set
     */
    function setExposureValues(exposureValue : Long, prodComplOpsValue : Long) {
      var _exp = com.guidewire.pl.system.internal.InternalMethods.asEffDatedInternal(_exposure)

      if (ExposureValue != null) {
        _exp.setFieldValue((_exposurePropertyRef.PropertyInfo as IEntityPropertyInfo), exposureValue, false, true)
        _exposureValue = exposureValue
      }

      if (_exposure.ProdsCompldOpsExposure != null) {
        _exp.setFieldValue((_exposure#ProdsCompldOpsExposure.PropertyInfo as IEntityPropertyInfo), prodComplOpsValue, false, true)
      }
    }

    private function mapExposure(exposure : GL7Exposure) {
      var exposureProperty = exposure.DomainModel.sublineSpecificPropertyFor<Long>(PropertyType.Exposure)
      _exposurePropertyRef = new BoundPropertyReference(GL7Exposure, exposure, exposureProperty.PropertyInfo.Name)

      if (exposure.AuditedExposure == null)
        _exposureValue = exposureProperty?.get()
      else
        _exposureValue = exposure.AuditedExposure

    }

    private function matchesOther(other : ExposureValueWrapper) : Boolean {
      return this.ExposurePropertyInfo.Name == other.ExposurePropertyInfo.Name
          and this.ExposureValue == other.ExposureValue
          and this.ProdComplOpsExposurePropertyInfo.Name == other.ProdComplOpsExposurePropertyInfo.Name
          and this.ProdComplOpsExposureValue == other.ProdComplOpsExposureValue
    }

    override function toString() : String {
      return "${SourceExposure.DisplayName} [${SourceExposure.EffectiveDate}]: ${ExposurePropertyInfo.Name} -> ${ExposureValue}, ${ProdComplOpsExposurePropertyInfo.Name} -> ${ProdComplOpsExposureValue}"
    }
  }

  construct() {
  }

  static function scaleExposureBasisAfterSplit(exposure : GL7Exposure, origDateRange : DateRange) {
    if (exposure.Slice) {
      throw "Exposure must be in window mode"
    }
    // Retain only versions that originated from exposure split
    var relevantVersions = exposure.VersionList.AllVersions
        ?.where(\expV -> expV.EffectiveDate == origDateRange.Start or expV.ExpirationDate == origDateRange.End)
        ?.sortBy(\expV -> expV.EffectiveDate)

    // Typically split results in creating 2 versions from an original version. In some scenarios, like splitting on
    // version effective date there will be only 1 version. There's nothing to do in such scenario, so return.
    if (relevantVersions.Count != 2) {
      return
    }

    var firstSliceValueWrapper = ExposureValueWrapper.createFor(relevantVersions[0])
    var secondSliceValueWrapper = ExposureValueWrapper.createFor(relevantVersions[1])

    if (!secondSliceValueWrapper.matchesOther(firstSliceValueWrapper)) {
      throw "Encountered inconsistent data in split versions"
    }

    // Knowing that both versions are consistent, we can do the scaling
    var originalExposure = firstSliceValueWrapper.ExposureValue
    var originalProdComplOpsExposure = firstSliceValueWrapper.ProdComplOpsExposureValue
    // Scale exposures for the first version and use scaled values to calculate remaining values for the second version
    var firstVersionScaledValues = scaleExposureBasisToDateRange(firstSliceValueWrapper, originalExposure, originalProdComplOpsExposure, firstSliceValueWrapper.SourceExposure.EffectiveDateRange, origDateRange, true)
    secondSliceValueWrapper.setExposureValues((originalExposure?:0) - firstVersionScaledValues.First, (originalProdComplOpsExposure?:0) - firstVersionScaledValues.Second)
  }

  static function scaleExposureBasisAfterEnd(exposure : GL7Exposure, origDateRange : DateRange) {
    if (exposure.Slice) {
      throw "Exposure must be in window mode"
    }
    // Retain only version that originated from exposure end
    var versions = exposure.VersionList.AllVersions?.where(\expV -> expV.EffectiveDate == origDateRange.Start)

    // A single version effective on given slice date is expected. In some scenarios, like ending on the 1st day, no version
    // will be found. There's nothing to do in such case, so return.
    var version : GL7Exposure
    if (versions.Count == 1) {
      version = versions.single()
    } else {
      return
    }

    scaleExposureBasisToDateRange(ExposureValueWrapper.createFor(version), exposure.DomainModel.ExposureAmount, exposure.DomainModel.ProdsCompltdOpsExposureAmount, exposure.EffectiveDateRange, origDateRange, true)
  }

  static function scaleExposureToCancelledPeriodDateRange(exposure : GL7Exposure, originalExposure : Long, originalProdComplOpsExposure : Long, endOfCoverageDate : Date) {
    if (exposure.Slice) {
      throw "Exposure must be in window mode"
    }

    // Retain only version that originated from exposure end
    var version = exposure.VersionList.AllVersions
        ?.where(\expV -> expV.EffectiveDateRange.includes(endOfCoverageDate))
        ?.single()

    var targetDateRange = DateRange.allDatesBetween(exposure.EffectiveDate, endOfCoverageDate)
    scaleExposureBasisToDateRange(ExposureValueWrapper.createFor(version), originalExposure, originalProdComplOpsExposure, targetDateRange, exposure.EffectiveDateRange, true)
  }

  static function recalculateExposureAfterCancellation(exposure : GL7Exposure, originalExposure : Long, originalProdComplOpsExposure : Long, cancellationDate : Date, origDateRange : DateRange) {
    if (exposure.Slice) {
      throw "Exposure must be in window mode"
    }

   // Scale appropriately
    var valueWrapper = ExposureValueWrapper.createFor(exposure)
    scaleExposureBasisToDateRange(valueWrapper, originalExposure, originalProdComplOpsExposure, exposure.EffectiveDateRange, origDateRange, true)
  }

  static function restoreExposureAfterCancellation(exposure : GL7Exposure, originalExposure : Long, originalProdComplOpsExposure : Long) {
    if (exposure.Slice) {
      throw "Exposure must be in window mode"
    }
    ExposureValueWrapper.createFor(exposure).setExposureValues(originalExposure, originalProdComplOpsExposure)
  }

  static function scaleExposureBasisToDateRange(exposure : GL7Exposure, targetDateRange : DateRange, referenceDateRange : DateRange) {
    var valueWrapper = ExposureValueWrapper.createFor(exposure)
    scaleExposureBasisToDateRange(valueWrapper, valueWrapper.ExposureValue, valueWrapper.ProdComplOpsExposureValue, targetDateRange, referenceDateRange, true)
  }

  static function getScaledExposureBasisToDateRange(exposure : GL7Exposure, targetDateRange : DateRange, referenceDateRange : DateRange) : Pair<Long, Long> {
    var valueWrapper = ExposureValueWrapper.createFor(exposure)
    var result : Pair<Long, Long> = scaleExposureBasisToDateRange(valueWrapper, valueWrapper.ExposureValue, valueWrapper.ProdComplOpsExposureValue, targetDateRange, referenceDateRange, false)
    return result
  }

  private static function scaleExposureBasisToDateRange(valueWrapper : ExposureValueWrapper, exposureValue : Long, prodComplOpsValue : Long,
                                                        targetDateRange : DateRange, referenceDateRange : DateRange, setOnExposure : boolean) : Pair<Long, Long> {
    var scaledValue = ScalableUtil.adjustScalableColumn(valueWrapper.SourceExposure, valueWrapper.ExposurePropertyInfo, exposureValue?:0, referenceDateRange, targetDateRange).intValue() as Long
    var prodComplOpsScaledValue = ScalableUtil.adjustScalableColumn(valueWrapper.SourceExposure, valueWrapper.ProdComplOpsExposurePropertyInfo, prodComplOpsValue?:0, referenceDateRange, targetDateRange).longValue()

    if (setOnExposure) {
      valueWrapper.setExposureValues(scaledValue, prodComplOpsScaledValue)
    }

    return Pair<Long, Long>.make(scaledValue, prodComplOpsScaledValue)
  }

  public static function wrapperFor(exp : GL7Exposure) : ExposureValueWrapper {
    return wrapperFor(exp)
  }
}