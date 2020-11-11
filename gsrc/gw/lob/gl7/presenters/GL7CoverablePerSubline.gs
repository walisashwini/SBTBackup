package gw.lob.gl7.presenters

class GL7CoverablePerSubline<T extends Coverable> {
  var _line : GL7GeneralLiabilityLine as readonly Line
  var _entries : Entry[] as readonly Entries

  construct(line : GL7GeneralLiabilityLine, coverables : T[], getSubline(coverable : T) : GL7SublineType) {
    _line = line
    _entries = entriesFrom(coverables, getSubline)
  }

  static function forSublinesOn(line : GL7GeneralLiabilityLine) : GL7CoverablePerSubline<GL7SublineType> {
    return new GL7CoverablePerSubline<GL7SublineType>(
        line,
        line.GL7SublineTypes,
        \ subline -> subline)
  }

  static function forSublines(line : GL7GeneralLiabilityLine, jurisdiction : Jurisdiction) : GL7CoverablePerSubline<GL7Subline> {
    return new GL7CoverablePerSubline<GL7Subline>(
        line,
        line.GL7SublineTypes*.Sublines.where(\ subline -> subline.Jurisdiction == jurisdiction),
        \ subline -> subline.SublineType)
  }

  static function forLocation(line : GL7GeneralLiabilityLine, policyLocation : PolicyLocation) : GL7CoverablePerSubline<GL7Location> {
    return new GL7CoverablePerSubline<GL7Location>(
        line,
        line.GL7SublineTypes*.Locations.where(\ location -> location.Location.FixedId == policyLocation.FixedId),
        \ location -> location.SublineType)
  }

  property get SublineSortedCoverables() : T[] {
    return _entries*.Coverable
  }

  private function entriesFrom(coverables : T[], getSubline(coverable : T) : GL7SublineType) : Entry[] {
    return orderBySubline(coverables.map(\ coverable -> new Entry(coverable, getSubline(coverable))))
  }

  private function orderBySubline(entries : Entry[]) : Entry[] {
    return GL7PresenterUtil.orderBySubline(entries.toList(), \ entry -> entry.SublineType.Subline).toTypedArray()
  }


  class Entry {
    var _coverable : T as readonly Coverable
    var _sublineType : GL7SublineType as readonly SublineType

    construct(coverable : T, sublineType : GL7SublineType) {
      _coverable = coverable
      _sublineType = sublineType
    }
  }
}