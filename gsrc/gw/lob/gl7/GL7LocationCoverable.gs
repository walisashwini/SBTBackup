package gw.lob.gl7

class GL7LocationCoverable extends GL7AbstractCoverable <GL7Location> {

  construct(owner : GL7Location) {
    super(owner)
  }

  override property get SublineTypeName(): String {
    return _owner.SublineType.Subline
  }
}