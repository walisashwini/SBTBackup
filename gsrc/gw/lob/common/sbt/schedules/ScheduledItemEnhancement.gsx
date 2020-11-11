package gw.lob.common.sbt.schedules

uses gw.api.domain.Clause
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.SchedulePropertyValueProvider
uses gw.lob.common.service.sbt.ServiceLocator

uses java.lang.Integer
uses java.math.BigDecimal
uses java.util.Date

enhancement ScheduledItemEnhancement : entity.ScheduledItem {
  property get DescriptionV2() : String{
    return this.ScheduleParent?.getScheduledItemDescription(this)
  }

  private function getScheduledItemValueProvider<T>(name : String, scheduleItem : ScheduledItem) : SchedulePropertyValueProvider<T> {
    return ServiceLocator.get(ScheduleConfigSource).getScheduledItemValueProvider<T>(name, scheduleItem)
  }

  public function setIntegerProperty(name: String, value: Integer) {
    getScheduledItemValueProvider<Integer>(name, this)?.setValue(value)
  }

  public function getIntegerProperty(name: String) : Integer {
    return getScheduledItemValueProvider<Integer>(name, this)?.Value
  }

  public function setStringProperty(name: String, value: String) {
    getScheduledItemValueProvider<String>(name, this)?.setValue(value)
  }

  public function getStringProperty(name: String) : String {
    return getScheduledItemValueProvider<String>(name, this)?.Value
  }

  public function setBooleanProperty(name : String, value: Boolean) {
    getScheduledItemValueProvider<Boolean>(name, this)?.setValue(value)
  }

  public function getBooleanProperty(name: String) : Boolean {
    return getScheduledItemValueProvider<Boolean>(name, this)?.Value
  }

  public function setOptionProperty(name : String, value: String) {
    getScheduledItemValueProvider<String>(name, this)?.setValue(value)
  }

  public function getOptionProperty(name: String) : String {
    return getScheduledItemValueProvider<String>(name, this)?.Value
  }

  public function setReadOnlyProperty(name: String, value: Object) {
    // Do nothing. It's read-only filed.
    // ServiceLocator.get(ScheduleConfigSource).getScheduledItemValueProvider<String>(columnName, this).setValue(value)
  }

  public function getReadOnlyProperty<Object>(name: String) : Object {
    return getScheduledItemValueProvider<Object>(name, this)?.Value
  }

  public function getDateProperty(name : String) : Date {
    return getScheduledItemValueProvider<Date>(name, this)?.Value
  }

  function isAvailableForItemV2(pattern : ClausePattern) : boolean {
    var schedule = this.ScheduleParent as Clause & gw.api.domain.Schedule
    var amendedClause = ServiceLocator.get(ScheduleConfigSource).getAmendedClause(schedule, pattern)
    var whenClause = ServiceLocator.get(ScheduleConfigSource).getWhenClause(schedule, pattern)

    return this.ScheduleParent.ScheduledItemMultiPatterns?.contains(pattern)
        and (amendedClause == null or (this as Coverable).getCoverageConditionOrExclusion(amendedClause) != null)
        and (whenClause == null or schedule.OwningCoverable.getCoverageConditionOrExclusion(whenClause) != null)
  }

  public function getAdditionalInsuredProperty(name: String = "NameID") : PolicyAddlInsuredDetail {
    return getScheduledItemValueProvider<PolicyAddlInsuredDetail>(name, this)?.Value
  }

  public function setAdditionalInsuredProperty(name: String, value: PolicyAddlInsuredDetail) {
    getScheduledItemValueProvider<PolicyAddlInsuredDetail>(name, this)?.setValue(value)
  }

  public function getAdditionalInterestProperty(name: String = "AdditionalInterest") : AddlInterestDetail {
    return getScheduledItemValueProvider<AddlInterestDetail>(name, this)?.Value
  }

  public function setAdditionalInterestProperty(name: String, value: AddlInterestDetail) {
    getScheduledItemValueProvider<AddlInterestDetail>(name, this)?.setValue(value)
  }

  public function getDecimalProperty(name: String) : BigDecimal {
    return getScheduledItemValueProvider<BigDecimal>(name, this)?.Value
  }

  public function getPercentProperty(name: String) : BigDecimal {
    return getDecimalProperty(name)
  }

  public function getForeignKeyProperty<T>(name: String) : T {
    return getScheduledItemValueProvider<T>(name, this)?.Value
  }

  public function setForeignKeyProperty<T>(name: String, value: T) {
    getScheduledItemValueProvider<T>(name, this)?.setValue(value)
  }

  public function getProperty(name: String) : Object{
    return getScheduledItemValueProvider(name, this)?.Value;
  }
}
