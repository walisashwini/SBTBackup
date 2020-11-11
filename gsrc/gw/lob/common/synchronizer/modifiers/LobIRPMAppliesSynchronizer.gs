package gw.lob.common.synchronizer.modifiers

uses gw.api.locale.DisplayKey

class LobIRPMAppliesSynchronizer {

  static function synchronize(entity : Modifiable, ratingModAppliesPropName : String) {
    var modifiers = entity.Modifiers.where(\ mod -> mod.ScheduleRate)
    synchronize(modifiers, entity, ratingModAppliesPropName)
  }

  static function synchronize(modifiers : Modifier[], entity : EffDated, ratingModAppliesPropName : String) {
    var hasRateFactorWithValue = modifiers*.RateFactors.hasMatch(\ rf -> rf.AssessmentWithinLimits != null and rf.AssessmentWithinLimits != 0)
    entity[ratingModAppliesPropName] = hasRateFactorWithValue ? DisplayKey.get("Web.Policy.Common.Yes") : DisplayKey.get("Web.Policy.Common.No")
  }
}