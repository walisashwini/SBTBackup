package gw.lob.gl7

uses entity.GL7SublineMod

enhancement GL7SublineEnhancement : entity.GL7Subline {

  property get Name() : String {
    return this.SublineType.Subline
  }

  property get Locations() : List<GL7Location> {
    return this.SublineType.Locations.toList().where(\ location -> location.Jurisdiction == this.Jurisdiction)
  }

  property get Exposures() : List<GL7Exposure> {
    return this.Locations*.GL7Exposures.toList()
  }

  property get GL7ScheduleRatingModification1() : GL7SublineMod {
    var defaultModifier = this.Modifiers.firstWhere(\ m -> m.PatternCode == "GL7ScheduleRatingModification1")
    return defaultModifier != null? defaultModifier : this.Modifiers.firstWhere(\ m -> m.PatternCode == ("GL7ScheduleRatingModification_" + this.Jurisdiction.Code))
  }

  // Helper functions to access modifer from subline by unique name for states with state-specific rate factors.
  property get GL7ScheduleRatingModification_AK() : GL7SublineMod {
    return this.Modifiers.firstWhere(\ m -> m.PatternCode == "GL7ScheduleRatingModification_AK")
  }

  property get GL7ScheduleRatingModification_MO() : GL7SublineMod {
    return this.Modifiers.firstWhere(\ m -> m.PatternCode == "GL7ScheduleRatingModification_MO")
  }

  property get GL7ScheduleRatingModification_NY() : GL7SublineMod {
    return this.Modifiers.firstWhere(\ m -> m.PatternCode == "GL7ScheduleRatingModification_NY")
  }

  property get GL7ScheduleRatingModification_NE() : GL7SublineMod {
    return this.Modifiers.firstWhere(\ m -> m.PatternCode == "GL7ScheduleRatingModification_NE")
  }
}