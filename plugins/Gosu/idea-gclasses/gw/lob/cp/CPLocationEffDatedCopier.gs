package gw.lob.cp
uses gw.api.copier.ReferenceDateInternalEffDatedCopyable

@Export
class CPLocationEffDatedCopier extends ReferenceDateInternalEffDatedCopyable<CPLocation> {

  construct(loc : CPLocation) {
    super(loc)
  }

  override function copyBasicFieldsFromBean(location : CPLocation) {
    super.copyBasicFieldsFromBean(location)
    _bean.PrincipalOpsDesc = location.PrincipalOpsDesc
  }
  
  override function copyFromBean(location : CPLocation) {
    copyBasicFieldsFromBean(location)
    _bean.PolicyLocation.copyFromBeanUntyped(location.PolicyLocation)
  }

}
