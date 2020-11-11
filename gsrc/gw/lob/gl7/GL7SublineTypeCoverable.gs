package gw.lob.gl7

class GL7SublineTypeCoverable extends GL7AbstractCoverable <GL7SublineType> {

  construct(owner : GL7SublineType) {
    super(owner)
  }

  override property get SublineTypeName(): String {
    return _owner.Subline
  }
}