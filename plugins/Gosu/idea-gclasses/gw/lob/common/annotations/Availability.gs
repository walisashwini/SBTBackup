package gw.lob.common.annotations

uses gw.lang.annotation.AnnotationUsage

@AnnotationUsage(MethodTarget, One)
class Availability implements IAnnotation {

  private var _clausePattern : String as readonly ClausePattern
  private var _covTermPattern : String as readonly CovTermPattern

  construct(clausePattern : String, covTermPattern : String) {
    _clausePattern = clausePattern
    _covTermPattern = covTermPattern
  }

  function isApplicable(clausePattern : String, covTermPattern : String) : boolean {
    return _clausePattern == clausePattern and _covTermPattern == covTermPattern
  }
}