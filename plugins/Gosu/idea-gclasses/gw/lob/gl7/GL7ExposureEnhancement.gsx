package gw.lob.gl7

uses gw.lang.reflect.IPropertyInfo
uses gw.lob.common.displayable.LobFieldMetaSupport
uses java.util.Date
uses gw.lob.gl7.rating.GL7ExposureUtil
uses gw.pl.persistence.core.Bundle

enhancement GL7ExposureEnhancement: entity.GL7Exposure {

  function addAndNumberUnmannedAircraft(unmannedAircraft : GL7UnmannedAircraft, line : GL7GeneralLiabilityLine) {
    initializeNumberingOfUnmannedAircrafts(unmannedAircraft.Bundle)

    this.addToUnmannedAircrafts(unmannedAircraft)
    this.UnmannedAircraftAutoNumberSeq.number(unmannedAircraft, line.GL7UnmannedAircraftsWM, UnmannedAircraftPropInfo)
  }

  function removeAndRenumberUnmannedAircrafts(unmannedAircraft : GL7UnmannedAircraft, line : GL7GeneralLiabilityLine) {
    this.removeFromUnmannedAircrafts(unmannedAircraft)
    renumberUnmannedAircrafts(line)
  }

  property get DomainModel() : GL7ExposureModel {
    return new GL7ExposureModel(this)
  }

  property get IsOnPolicyGraph() : boolean {
    return this.GL7Location != null
  }

  function fieldExists(name : String) : boolean {
    return LobFieldMetaSupport.Instance.findFieldMeta(this, name) != null
  } 

  property get ClassCodeDisplay() : String {
    return DomainModel.ClassCode
  }

  function classDescriptionDisplay(maxLength : int = -1) : String {
    if(maxLength == -1 or DomainModel.ClassDescription.length <= maxLength)
      return DomainModel.ClassDescription
    else
      return DomainModel.ClassDescription.substring(0, maxLength-1)
  }

  property get NewExposure() : boolean{
    return this.BasedOn == null
  }

  property get GL7LocationWM(): GL7Location {
    if(NewExposure){
      // we have to do this or change location out-of-sequence will show 2 versions of the same
      // location. This should return the latest version of the location because it is unsliced
      return this.GL7Location
    }else{
      return this.getSlice( this.EffectiveDate ).GL7Location.LastVersionWM
    }
  }

  property set GL7LocationWM(location: GL7Location) {
    this.assertWindowMode(location)
    this.GL7Location = location
    if(location != null) {
      var exposureDateRange = location.EffectiveDateRangeWM
          .intersect(location.Branch.EditEffectiveDateRange)
          .intersect(location.SublineType.EffectiveDateRangeWM)
          .intersect(location.SublineType.Line.EffectiveDateRangeWM)
      this.EffectiveDateRange = exposureDateRange
    }
  }

  private property get UnmannedAircraftPropInfo() : IPropertyInfo {
    return GL7UnmannedAircraft#UnmannedAircraftNumber.PropertyInfo
  }

  function splitExposureWM(splitDate: Date) {
    var versionToSplit = this.VersionList.AsOf(splitDate)
    /**
     * It doesn't make sense to proceed if there's no version effective on end date or the end date does not fall inside
     * the version effective date range
     */
    if(this.IsBasisScalable) {
      // Keep original date range of a version that will be split, it will be needed for proration
      var origDateRange = versionToSplit.EffectiveDateRange
      // Split the exposure
      this.splitWM(splitDate)
      // Delegate proration of basis in new exposure versions to GL7ExposureUtil
      GL7ExposureUtil.scaleExposureBasisAfterSplit(this, origDateRange)
    } else {
      this.splitWM(splitDate)
    }
  }

  function endExposureWM(endDate: Date) {
    var versionToEnd = this.VersionList.AsOf(endDate)
    /**
     * It doesn't make sense to proceed if there's no version effective on end date or the end date does not fall inside
     * the version effective date range
     */
    if(this.IsBasisScalable) {
      // Keep original date range of a version that will be split, it will be needed for proration
      var origDateRange = versionToEnd.EffectiveDateRange
      // Split the exposure
      this.endDateWM(endDate)
      // Delegate proration of basis in new exposure versions to GL7ExposureUtil
      GL7ExposureUtil.scaleExposureBasisAfterEnd(this.Unsliced, origDateRange)
    } else {
      this.endDateWM(endDate)
    }
  }

  function bindNumberingOfUnmannedAircrafts(line : GL7GeneralLiabilityLine) {
    if (this.UnmannedAircraftAutoNumberSeq != null) {
      this.UnmannedAircraftAutoNumberSeq.bind(line.GL7UnmannedAircraftsWM, UnmannedAircraftPropInfo)
    }
  }

  function renumberUnmannedAircrafts(line : GL7GeneralLiabilityLine) {
    if (this.UnmannedAircraftAutoNumberSeq != null) {
      this.UnmannedAircraftAutoNumberSeq.renumber(line.GL7UnmannedAircraftsWM, UnmannedAircraftPropInfo)
    }
  }

  function renumberNewUnmannedAircrafts(line : GL7GeneralLiabilityLine) {
    if (this.UnmannedAircraftAutoNumberSeq != null) {
      this.UnmannedAircraftAutoNumberSeq.renumberNewBeans(line.GL7UnmannedAircraftsWM, UnmannedAircraftPropInfo)
    }
  }

  function initializeNumberingOfUnmannedAircrafts(bundle : Bundle) {
    if (this.UnmannedAircraftAutoNumberSeq == null) {
      this.UnmannedAircraftAutoNumberSeq = new AutoNumberSequence(bundle)
    }
  }

  property get IsCurrentOrFutureSlice(): Boolean {
    if(!this.Slice) {
      throw "Entity must be sliced"
    }
    return this.EffectiveDate.afterOrEqual(this.Branch.EditEffectiveDate)
  }

}
