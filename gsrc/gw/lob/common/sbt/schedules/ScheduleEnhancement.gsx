package gw.lob.common.sbt.schedules

uses gw.api.domain.Clause
uses gw.lob.common.AbstractAdditionalInsuredHelper

enhancement ScheduleEnhancement : gw.api.domain.Schedule {

  property get IsComplexSchedule() : boolean {
    return not IsSimpleSchedule
  }

  property get IsSimpleSchedule() : boolean {
    return this.ScheduledItemMultiPatterns == null or this.ScheduledItemMultiPatterns.IsEmpty
  }

  function addScheduledItem(policyAddlInsured: PolicyAddlInsuredDetail) : ScheduledItem {
    if (policyAddlInsured == null) {
      return null
    }
    var scheduledItem = this.createAndAddScheduledItem()
    scheduledItem.setAdditionalInsuredProperty("NameID", policyAddlInsured)
    return scheduledItem
  }

  function modifyAndAddScheduledItem(policyAddlInsured: PolicyAddlInsuredDetail, clause : Clause,
                                     helper : AbstractAdditionalInsuredHelper) : ScheduledItem {
    if (helper == null) {
      return null
    }
    policyAddlInsured.AdditionalInsuredType = helper.getAdditionalInsuredType(clause)
    var scheduledItem = this.createAndAddScheduledItem()
    scheduledItem.setAdditionalInsuredProperty("NameID", policyAddlInsured)
    return scheduledItem
  }

  function removeScheduledItemWithReferences(item: ScheduledItem) {
    if (IsAdditionalInsuredScheduleV2 && canRemoveAddlInsuredProp(item)) {
      item.getAdditionalInsuredProperty().remove()
    }
    this.removeScheduledItem(item)
  }

  private function canRemoveAddlInsuredProp(itemToRemove : ScheduledItem) : boolean {
    return !this.ScheduledItems.hasMatch( \ item -> item != itemToRemove && item.getAdditionalInsuredProperty() == itemToRemove.getAdditionalInsuredProperty())
  }

  property get IsAdditionalInsuredScheduleV2() : boolean {
    return this.PropertyInfos.hasMatch( \ propertyInfo -> propertyInfo.ValueType == "AdditionalInsured")
  }

  property get IsPolicyContactSchedule() : boolean {
    return this.PropertyInfos.hasMatch( \ propertyInfo -> propertyInfo.ValueType == "PolicyContact")
  }
}