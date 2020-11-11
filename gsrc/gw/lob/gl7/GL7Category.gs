package gw.lob.gl7

uses gw.api.productmodel.CoverageCategory
uses gw.api.productmodel.CoverageCategoryLookup

enum GL7Category {
  SUBLINE_TYPE_STANDARD_COVERAGE("GL7SublineTypeStdGrp"),
  SUBLINE_TYPE_ADDITIONAL_COVERAGE("GL7SublineTypeAddlGrp"),
  SUBLINE_TYPE_ADDITIONAL_INSURED("GL7SublineTypeAddlInsdGrp"),
  SUBLINE_TYPE_CONDITION("GL7SublineTypeCondGrp"),
  SUBLINE_TYPE_EXCLUSION("GL7SublineTypeExclGrp"),

  SUBLINE_STANDARD_COVERAGE("GL7SublineStdGrp"),
  SUBLINE_ADDITIONAL_COVERAGE("GL7SublineAddlGrp"),
  SUBLINE_ADDITIONAL_INSURED("GL7SublineAddlInsdGrp"),
  SUBLINE_CONDITION("GL7SublineCondGrp"),
  SUBLINE_EXCLUSION("GL7SublineExclGrp"),

  LOCATION_STANDARD_COVERAGE("GL7LocationStdGrp"),
  LOCATION_ADDITIONAL_COVERAGE("GL7LocationAddlGrp"),
  LOCATION_ADDITIONAL_INSURED("GL7LocationAddlInsdGrp"),
  LOCATION_CONDITION("GL7LocationCondGrp"),
  LOCATION_EXCLUSION("GL7LocationExclGrp"),

  EXPOSURE_STANDARD_COVERAGE("GL7ExposureStdGrp"),
  EXPOSURE_ADDITIONAL_COVERAGE("GL7ExposureAddlGrp"),
  EXPOSURE_ADDITIONAL_INSURED("GL7ExposureAddlInsdGrp"),
  EXPOSURE_CONDITION("GL7ExposureCondGrp"),
  EXPOSURE_EXCLUSION("GL7ExposureExclGrp"),

  UNMANNED_AIRCRAFT_STANDARD_COVERAGE("GL7UnmannedAircraftStdGrp")

  var _publicID : String as readonly PublicID

  private construct(publicID : String) {
    _publicID = publicID
  }

  static property get CategoriesForSublineTypes() : CoverableCoverageCategories {
    return new CoverableCoverageCategories(
        :standardCoverage = SUBLINE_TYPE_STANDARD_COVERAGE,
        :additionalCoverage = SUBLINE_TYPE_ADDITIONAL_COVERAGE,
        :condition = SUBLINE_TYPE_CONDITION,
        :exclusion = SUBLINE_TYPE_EXCLUSION,
        :additionalInsured = SUBLINE_TYPE_ADDITIONAL_INSURED
    )
  }
  
  static property get CategoriesForSublines() : CoverableCoverageCategories {
    return new CoverableCoverageCategories(
        :standardCoverage = SUBLINE_STANDARD_COVERAGE,
        :additionalCoverage = SUBLINE_ADDITIONAL_COVERAGE,
        :condition = SUBLINE_CONDITION,
        :exclusion = SUBLINE_EXCLUSION,
        :additionalInsured = SUBLINE_ADDITIONAL_INSURED
    )
  }

  static property get CategoriesForLocation() : CoverableCoverageCategories {
    return new CoverableCoverageCategories(
        :standardCoverage = LOCATION_STANDARD_COVERAGE,
        :additionalCoverage = LOCATION_ADDITIONAL_COVERAGE,
        :condition = LOCATION_CONDITION,
        :exclusion = LOCATION_EXCLUSION,
        :additionalInsured = LOCATION_ADDITIONAL_INSURED
    )
  }

  static property get CategoriesForExposure() : CoverableCoverageCategories {
    return new CoverableCoverageCategories(
        :standardCoverage = EXPOSURE_STANDARD_COVERAGE,
        :additionalCoverage = EXPOSURE_ADDITIONAL_COVERAGE,
        :condition = EXPOSURE_CONDITION,
        :exclusion = EXPOSURE_EXCLUSION,
        :additionalInsured = EXPOSURE_ADDITIONAL_INSURED
    )
  }

  static property get CategoriesForUnmannedAircraft() : CoverableCoverageCategories {
    return new CoverableCoverageCategories(
        :standardCoverage = UNMANNED_AIRCRAFT_STANDARD_COVERAGE,
        :additionalCoverage = null,
        :condition = null,
        :exclusion = null,
        :additionalInsured = null
    )
  }
  
  property get CoverageCategory() : CoverageCategory {
    return CoverageCategoryLookup.getByPublicID(_publicID)
  }     


  public static class CoverableCoverageCategories {
    var _standardCoverage : CoverageCategory as readonly StandardCoverage
    var _additionalCoverage : CoverageCategory as readonly AdditionalCoverage
    var _condition : CoverageCategory as readonly Condition
    var _exclusion : CoverageCategory as readonly Exclusion
    var _additionalInsured : CoverageCategory as readonly AdditionalInsured
    
    construct(
        standardCoverage : GL7Category,
        additionalCoverage : GL7Category,
        condition : GL7Category,
        exclusion : GL7Category,
        additionalInsured : GL7Category
    ) {
      _standardCoverage = standardCoverage.CoverageCategory
      _additionalCoverage = additionalCoverage.CoverageCategory
      _condition = condition.CoverageCategory
      _exclusion = exclusion.CoverageCategory
      _additionalInsured = additionalInsured.CoverageCategory
    }
  }
}