package gw.lob.gl7

class GL7ExposureCoverable extends GL7AbstractCoverable <GL7Exposure> {

  construct(owner : GL7Exposure) {
    super(owner)
  }

  override property get SublineTypeName(): String {
    return _owner.GL7Location.SublineType.Subline
  }
}