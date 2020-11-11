package gw.lob.gl7

class GL7SublineCoverable extends GL7AbstractCoverable <GL7Subline> {

  construct(owner : GL7Subline) {
    super(owner)
  }

  override property get SublineTypeName(): String {
    return _owner.SublineType.Subline
  }
}