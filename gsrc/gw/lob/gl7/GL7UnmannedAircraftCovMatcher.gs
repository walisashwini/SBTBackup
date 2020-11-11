package gw.lob.gl7

uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class GL7UnmannedAircraftCovMatcher extends AbstractCoverageMatcher<GL7UnmannedAircraftCov> {
  construct(owner : GL7UnmannedAircraftCov) {
    super(owner)
  }

  override property get CoverableColumns() :  List<ILinkPropertyInfo> {
    return {GL7UnmannedAircraftCov#UnmannedAircraft.PropertyInfo as ILinkPropertyInfo}
  }

}