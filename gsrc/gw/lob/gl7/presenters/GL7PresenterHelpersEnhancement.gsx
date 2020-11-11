package gw.lob.gl7.presenters

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.rating.CoverableWithRatingBasisType

enhancement GL7PresenterHelpersEnhancement : gw.lob.gl7.presenters.GL7PresenterHelpers {

  function showProration(cost : GL7Cost) : boolean {
    var owningCoverable  = cost.getSlice(cost.EffectiveDate).OwningCoverable
    return owningCoverable typeis CoverableWithRatingBasisType and owningCoverable.IsBasisScalable
        ? cost.ActualTermAmount != cost.ActualAmount
        : true
  }

  function getCostProration(cost : GL7Cost) : String {
    return gw.api.util.StringUtil.formatNumber(cost.Proration, "#0.0000")
  }

  function getClassCode(cost : GL7Cost) : String {
    var owningCoverable = cost.getSlice(cost.EffectiveDate).OwningCoverable
    switch(typeof owningCoverable){
      case GL7Exposure:
          return owningCoverable.DomainModel.ClassCode
      case ScheduledItem:
          return getClassCode(owningCoverable.ScheduleParent)
      case GL7UnmannedAircraft:
        return owningCoverable.Exposure.DomainModel.ClassCode
      default:
          return null
    }
  }

  function getClassCode(sched : Schedule) : String {
    if (sched typeis Clause) {
      var covrbl = sched.OwningCoverable
      if (covrbl typeis GL7Exposure) {
        return covrbl.DomainModel.ClassCode
      }
    }
    return null
  }
}
