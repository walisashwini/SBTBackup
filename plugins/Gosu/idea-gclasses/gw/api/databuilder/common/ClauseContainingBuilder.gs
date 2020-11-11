package gw.api.databuilder.common

uses gw.api.builder.CoverageBuilder
uses gw.api.builder.ExclusionBuilder
uses gw.api.builder.PolicyConditionBuilder
uses gw.api.databuilder.DataBuilder
uses gw.entity.TypeKey

uses java.math.BigDecimal

interface ClauseContainingBuilder<T extends DataBuilder> {

  function withCoverage(coverage : CoverageBuilder) : T

  function withExclusion(exclusion : ExclusionBuilder) : T

  function withCondition(condition : PolicyConditionBuilder) : T
}
