package gw.lob.common.annotations

uses gw.lang.annotation.AnnotationUsage

@AnnotationUsage(TypeTarget, One)
class PremiumLevel implements IAnnotation {
  private var _premiumLevel: String as readonly PremiumLevel = ""

  construct(premiumLevel : String) {
    _premiumLevel = premiumLevel
  }
}