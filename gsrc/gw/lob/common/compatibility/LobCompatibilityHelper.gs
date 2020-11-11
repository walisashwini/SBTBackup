package gw.lob.common.compatibility

uses gw.api.domain.covterm.CovTerm
uses gw.api.domain.covterm.OptionCovTerm
uses gw.api.productmodel.CovTermOpt
uses gw.api.productmodel.CovTermPattern
uses gw.api.productmodel.CoveragePattern
uses gw.api.productmodel.OptionCovTermPattern
uses gw.api.upgrade.PCCoercions
uses gw.entity.IEntityType
uses gw.lang.reflect.TypeSystem
uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lang.reflect.features.PropertyReference

class LobCompatibilityHelper {

  // Data Model
  static function getEntityType(entityTypeName : String) : IEntityType {
    return TypeSystem.getByFullName("entity." + entityTypeName) as IEntityType
  }

  reified static function getArrayFieldValues<T extends KeyableBean>(coverable : Coverable, propertyName : String) : T[] {
    return coverable.getFieldValue(propertyName) as T[]
  }

  static function hasField(coverable : Coverable, propertyName : String) : boolean {
    return coverable.IntrinsicType.EntityProperties.toList()?.hasMatch(\prop -> prop.Name == propertyName)
  }

  static function hasField(entityType : IEntityType, propertyName : String) : boolean {
    return entityType.EntityProperties.toList()?.hasMatch(\prop -> prop.Name == propertyName)
  }

  static function setFieldValue(coverable : Coverable, propertyName : String, value : Object) {
    coverable.setFieldValueForChunk(propertyName, value, coverable.EffectiveDate, coverable.ExpirationDate)
  }

  static function getFieldValue(coverable : Coverable, propertyName : String) : Object {
    return coverable.getFieldValue(propertyName)
  }

  reified static function getBoundPropertyReference<R, T>(coverable : Coverable, propertyName: String): BoundPropertyReference<R, T> {
    return new BoundPropertyReference(coverable.IntrinsicType, coverable, propertyName) as BoundPropertyReference<R, T>
  }

  reified static function getPropertyReference<R, T>(propertyName: String): PropertyReference<R, T> {
    return new PropertyReference(R, propertyName) as PropertyReference<R, T>
  }

  // Product Model
  reified static function getClauses<T extends Clause>(coverable: Coverable, patternCode : String) : T[] {
    return coverable != null ? getArrayFieldValues<T>(coverable, patternCode) : {}
  }

  static function createCoverage(coverable : Coverable, covPatternCode: String) : Coverage {
    var pattern = PCCoercions.makeProductModel<CoveragePattern>(covPatternCode)
    return coverable.createCoverage(pattern)
  }

  static function hasCoverage(coverable : Coverable, covPatternCode: String) : boolean {
    var pattern = PCCoercions.makeProductModel<CoveragePattern>(covPatternCode)
    return coverable.hasCoverage(pattern)
  }

  static function getCoverage(coverable : Coverable, covPatternCode : String) : Coverage {
    var pattern = PCCoercions.makeProductModel<CoveragePattern>(covPatternCode)
    return coverable.getCoverage(pattern)
  }

  static function removeCoverage(coverable : Coverable, covPatternCode : String) {
    coverable.removeCoverageFromCoverable(getCoverage(coverable, covPatternCode))
  }

  static function hasCovTerm(clause : Clause, covTermPatternCode : String) : boolean {
    var pattern = PCCoercions.makeProductModel<CovTermPattern>(covTermPatternCode)
    return clause.hasCovTerm(pattern)
  }

  static function getCovTerm(clause : Clause, covTermPatternCode : String) : CovTerm {
    var pattern = PCCoercions.makeProductModel<CovTermPattern>(covTermPatternCode)
    return clause.getCovTerm(pattern)
  }

  static function getCovTermOption(covPatternCode : String, covTermPatternCode : String, optionCode : String) : CovTermOpt {
    var covTermPattern = PCCoercions.makeProductModel<CovTermPattern>(covTermPatternCode)
    var coveragePattern = PCCoercions.makeProductModel<CoveragePattern>(covPatternCode)
    var optionCovTermPattern = coveragePattern.CovTerms.firstWhere(\ct -> ct == covTermPattern) as OptionCovTermPattern

    return getCovTermOption(optionCovTermPattern, optionCode)
  }

  static function getCovTermOption(optionCovTerm : OptionCovTerm, optionCode : String) : CovTermOpt {
    return getCovTermOption(optionCovTerm.Pattern, optionCode)
  }

  static function getCovTermOption(optionCovTermPattern : OptionCovTermPattern, optionCode : String) : CovTermOpt {
    return optionCovTermPattern.Options.firstWhere(\cto -> cto.OptionCode == optionCode)
  }

}