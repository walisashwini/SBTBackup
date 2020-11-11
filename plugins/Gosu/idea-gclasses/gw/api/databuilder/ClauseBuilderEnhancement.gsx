package gw.api.databuilder

uses gw.api.databuilder.populator.BeanPopulator
uses gw.api.productmodel.CovTermPatternLookup
uses gw.api.productmodel.GenericCovTermPattern
uses gw.api.productmodel.DirectCovTermPattern
uses gw.api.productmodel.CovTermPattern

uses java.lang.Integer
uses java.math.BigDecimal
uses java.util.Date

enhancement ClauseBuilderEnhancement<T extends gw.pl.persistence.core.Bean,
    P extends gw.api.productmodel.ClausePattern,
    B extends gw.api.builder.ClauseBuilder<T, B, P>> :
  gw.api.builder.ClauseBuilder<T, B, P> {

  reified function withGenericTermValue(termCode : String, value : String) : B {
    var covTermPattern = CovTermPatternLookup.getByCodeIdentifier(termCode)
    this.set(covTermPattern.CoverageColumnProperty, value)
    return this as B
  }

  reified function withGenericTermValue(termCode : String, dateValue : Date) : B {
    var covTermPattern = CovTermPatternLookup.getByCodeIdentifier(termCode)
    this.set(covTermPattern.CoverageColumnProperty, dateValue)
    return this as B
  }

  reified function withGenericTermValue(termCode : String, value : Boolean) : B {
    var covTermPattern = CovTermPatternLookup.getByCodeIdentifier(termCode)
    this.set(covTermPattern.CoverageColumnProperty, value)
    return this as B
  }

  reified function withGenericTermValue(termCode : String, value : Integer) : B {
    var covTermPattern = CovTermPatternLookup.getByCodeIdentifier(termCode)
    this.set(covTermPattern.CoverageColumnProperty, value)
    return this as B
  }

  reified function withDirectTermValue(termCode : String, value : BigDecimal) : B {
    var covTermPattern = CovTermPatternLookup.getByCodeIdentifier(termCode)
    this.set(covTermPattern.CoverageColumnProperty, value)
    return this as B
  }

  reified function addBeanPopulator(populator : gw.api.databuilder.populator.BeanPopulator<T>) : B {
    this.addPopulator(populator)
    return this as B
  }
  
  reified function withGenericTermValue(pattern : GenericCovTermPattern, value : Integer) : B {
    return withTermValue(pattern, value)
  }

  reified function withGenericTermValue(pattern : GenericCovTermPattern, value : String) : B {
    return withTermValue(pattern, value)
  }
  
  reified function withGenericTermValue(pattern : GenericCovTermPattern, dateValue : Date) : B {
    return withTermValue(pattern, dateValue)
  }

  reified function withGenericTermValue(pattern : GenericCovTermPattern, value : Boolean) : B {
    return withTermValue(pattern, value)
  }

  reified function withDirectTermValue(pattern : DirectCovTermPattern, value : BigDecimal) : B {
    return withTermValue(pattern, value)
  }

  reified private function withTermValue(pattern : CovTermPattern, value : Object) : B {
    var covTermPattern = CovTermPatternLookup.getByCodeIdentifier(pattern.CodeIdentifier)
    this.set(covTermPattern.CoverageColumnProperty, value)
    return this as B    
  }
}
