package gw.lob.gl7

class GL7GeneralLiabilityLineCoverable extends GL7AbstractCoverable <GL7GeneralLiabilityLine> {

  construct(owner : GL7GeneralLiabilityLine) {
    super(owner)
  }

  override property get SublineTypeName(): String {
    return null
  }
}
