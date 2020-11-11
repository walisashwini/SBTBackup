package gw.lob.gl7

uses gw.api.diff.DiffAdd
uses gw.api.diff.DiffItem
uses gw.api.diff.DiffRemove
uses gw.lob.common.displayable.LobDisplayable
uses gw.lob.common.displayable.LobDisplayableFactory
uses gw.plugin.diff.impl.DiffHelper
uses entity.GL7SublineCond
uses entity.GL7SublineCov
uses entity.GL7ExposureCov
uses entity.GL7LocationCov
uses entity.GL7LocationExcl
uses entity.GL7LocationCond
uses entity.GL7ExposureExcl
uses entity.GL7SublineExcl
uses entity.GL7ExposureCond

class GL7DiffHelper extends DiffHelper<entity.GL7GeneralLiabilityLine>{
  private enum DiffType {
    DiffAdd,
    DiffRemove
  }

  construct(reason : DiffReason, polLine1 : entity.GL7GeneralLiabilityLine, polLine2 : entity.GL7GeneralLiabilityLine) {
    super(reason, polLine1, polLine2)
  }

  /**
   * Should be used to add diff items that apply to this LOB, e.g. line-level coverages
   * @param diffItems - list of diff items to add to
   * @return List<DiffItem> - returns the list of diff items that we've modified
   */
  override function addDiffItems(diffItems : List<DiffItem>) : List<DiffItem> {
    diffItems = super.addDiffItems(diffItems)

    // Add line-specific data model items to the comparison set, such as line-level coverages, coverables, line-specific Cost entities, etc.
    //Required to display diffs between jobs and multiversion, especially diffs involving adding/removing entities
    diffItems.addAll(compareEffectiveDatedFields("PrimaryLocation", 0))
    diffItems.addAll(compareLineField("GL7SublineTypes", 5))
    addSublineDiffItems(diffItems)
    addLocationDiffItems(diffItems)

    return diffItems 
  }

  private function addDiffItem(diffItems: List<DiffItem>, bean: KeyableBean, diffType: DiffType): List<DiffItem> {
    switch(diffType){
      case DiffAdd:
          diffItems.add(new DiffAdd(bean))
          break
      case DiffRemove:
          diffItems.add(new DiffRemove(bean))
          break
    }

    return diffItems
  }

  private function addSublineDiffItems(diffItems : List<DiffItem>) : List<DiffItem> {
    var line1Sublines = Line1.GL7SublineTypes.flatMap( \ s -> s.Sublines)
    var line2Sublines = Line2.GL7SublineTypes.flatMap( \ s -> s.Sublines)
    var subline1IDs = line1Sublines.map( \ l -> l.FixedId)
    var subline2IDs = line2Sublines.map( \ l -> l.FixedId)

    line1Sublines.each( \subline1 -> {
      line2Sublines.each( \subline2 -> {
        var diffType : DiffType
        if(!subline1IDs.contains(subline2.FixedId)){
          addSublineClausesDiffItem(diffItems, subline2, DiffAdd)
        }

        if(!subline2IDs.contains(subline1.FixedId)){
          addSublineClausesDiffItem(diffItems, subline1, DiffRemove)        }
      })
    })

    return diffItems
  }

  private function addSublineClausesDiffItem(diffItems: List<DiffItem>, subline : GL7Subline, diffType : DiffType) : List<DiffItem> {
    subline.Coverages.each( \ cov -> addSublineCovDiffItems(diffItems, cov, diffType))
    subline.Conditions.each( \ cond -> addSublineCondDiffItems(diffItems, cond, diffType))
    subline.Exclusions.each( \ excl -> addSublineExclDiffItems(diffItems, excl, diffType))
    return diffItems
  }

  private function addSublineCovDiffItems(diffItems: List<DiffItem>, cov: GL7SublineCov, diffType : DiffType) : List<DiffItem> {
    addDiffItem(diffItems, cov, diffType)
    if(cov.Subtype == typekey.GL7SublineCov.TC_GL7SUBLINESCHEDCOV){
      (cov as GL7SublineSchedCov).GL7ScheduledItems.each( \ item -> addDiffItem(diffItems, item, diffType))
    }
    return diffItems
  }

  private function addSublineCondDiffItems(diffItems: List<DiffItem>, cond: GL7SublineCond, diffType : DiffType) : List<DiffItem> {
    addDiffItem(diffItems, cond, diffType)
    if(cond.Subtype == typekey.GL7SublineCond.TC_GL7SUBLINESCHEDCOND){
      (cond as GL7SublineSchedCond).GL7ScheduledItems.each( \ item -> addDiffItem(diffItems, item, diffType))
    }
    return diffItems
  }

  private function addSublineExclDiffItems(diffItems: List<DiffItem>, excl: GL7SublineExcl, diffType : DiffType) : List<DiffItem> {
    addDiffItem(diffItems, excl, diffType)
    if(excl.Subtype == typekey.GL7SublineExcl.TC_GL7SUBLINESCHEDEXCL){
      (excl as GL7SublineSchedExcl).GL7ScheduledItems.each( \ item -> addDiffItem(diffItems, item, diffType))
    }
    return diffItems
  }

  private function addLocationDiffItems(diffItems : List<DiffItem>) : List<DiffItem> {
    var line1Locations = Line1.GL7SublineTypes.flatMap( \ s -> s.Locations)
    var line2Locations = Line2.GL7SublineTypes.flatMap( \ s -> s.Locations)
    var location1IDs = line1Locations.map( \ l -> l.FixedId)
    var location2IDs = line2Locations.map( \ l -> l.FixedId)

    line1Locations.each( \ loc1 -> {
      line2Locations.each( \ loc2 -> {
        var diffType : DiffType
        if(!location1IDs.contains(loc2.FixedId)){
          addLocationClausesDiffItem(diffItems, loc2, DiffAdd)
          addExposureDiffItems(diffItems, loc2, DiffAdd)
        }

        if(!location2IDs.contains(loc1.FixedId)){
          addLocationClausesDiffItem(diffItems, loc1, DiffRemove)
          addExposureDiffItems(diffItems, loc1, DiffRemove)
        }
      })
    })

    return diffItems
  }

  private function addLocationClausesDiffItem(diffItems: List<DiffItem>, location : GL7Location, diffType : DiffType) : List<DiffItem> {
    location.Coverages.each( \ cov -> addLocationCovDiffItems(diffItems, cov, diffType))
    location.Conditions.each( \ cond -> addLocationCondDiffItems(diffItems, cond, diffType))
    location.Exclusions.each( \ excl -> addLocationExclDiffItems(diffItems, excl, diffType))
    return diffItems
  }

  private function addLocationCovDiffItems(diffItems: List<DiffItem>, cov: GL7LocationCov, diffType : DiffType) : List<DiffItem> {
    addDiffItem(diffItems, cov, diffType)
    if(cov.Subtype == typekey.GL7LocationCov.TC_GL7LOCATIONSCHEDCOV){
      (cov as GL7LocationSchedCov).GL7ScheduledItems.each( \ item -> addDiffItem(diffItems, item, diffType))
    }
    return diffItems
  }

  private function addLocationCondDiffItems(diffItems: List<DiffItem>, cond: GL7LocationCond, diffType : DiffType) : List<DiffItem> {
    addDiffItem(diffItems, cond, diffType)
    if(cond.Subtype == typekey.GL7LocationCond.TC_GL7LOCATIONSCHEDCOND){
      (cond as GL7LocationSchedCond).GL7ScheduledItems.each( \ item -> addDiffItem(diffItems, item, diffType))
    }
    return diffItems
  }

  private function addLocationExclDiffItems(diffItems: List<DiffItem>, excl: GL7LocationExcl, diffType : DiffType) : List<DiffItem> {
    addDiffItem(diffItems, excl, diffType)
    if(excl.Subtype == typekey.GL7LocationExcl.TC_GL7LOCATIONSCHEDEXCL){
      (excl as GL7LocationSchedExcl).GL7ScheduledItems.each( \ item -> addDiffItem(diffItems, item, diffType))
    }
    return diffItems
  }

  private function addExposureDiffItems(diffItems : List<DiffItem>, location : GL7Location, diffType : DiffType) : List<DiffItem> {
    location.GL7Exposures.each( \ exp -> {
      addDiffItem(diffItems, exp, diffType)
      exp.Coverages.each( \ cov -> addExposureCovDiffItems(diffItems, cov, diffType))
      exp.Conditions.each( \ cond -> addExposureCondDiffItems(diffItems, cond, diffType))
      exp.Exclusions.each( \ excl -> addExposureExclDiffItems(diffItems, excl, diffType))

    })
    return diffItems
  }

  private function addExposureCovDiffItems(diffItems: List<DiffItem>, cov: GL7ExposureCov, diffType : DiffType) : List<DiffItem> {
    addDiffItem(diffItems, cov, diffType)
    if(cov.Subtype == typekey.GL7ExposureCov.TC_GL7EXPOSURESCHEDCOV){
      (cov as GL7ExposureSchedCov).GL7ScheduledItems.each( \ item -> addDiffItem(diffItems, item, diffType))
    }
    return diffItems
  }

  private function addExposureCondDiffItems(diffItems: List<DiffItem>, cond: GL7ExposureCond, diffType : DiffType) : List<DiffItem> {
    addDiffItem(diffItems, cond, diffType)
    if(cond.Subtype == typekey.GL7ExposureCond.TC_GL7EXPOSURESCHEDCOND){
      (cond as GL7ExposureSchedCond).GL7ScheduledItems.each( \ item -> addDiffItem(diffItems, item, diffType))
    }
    return diffItems
  }

  private function addExposureExclDiffItems(diffItems: List<DiffItem>, excl: GL7ExposureExcl, diffType : DiffType) : List<DiffItem> {
    addDiffItem(diffItems, excl, diffType)
    if(excl.Subtype == typekey.GL7ExposureExcl.TC_GL7EXPOSURESCHEDEXCL){
      (excl as GL7ExposureSchedExcl).GL7ScheduledItems.each( \ item -> addDiffItem(diffItems, item, diffType))
    }
    return diffItems
  }  

  /**
   * Filters diff items that apply to this LOB
   * @param diffItems - list of diff items to filter
   * @return List<DiffItem> - returns the list of diff items that we've modified
   */   
  override function filterDiffItems(diffItems : List<DiffItem>) : List<DiffItem> {
    diffItems = super.filterDiffItems(diffItems)
    diffItems.removeAll(sublineTypeDiffItemsForRemoval(diffItems))
    diffItems.removeAll(sublineDiffItemsForRemoval(diffItems))
    diffItems.removeAll(locationDiffItemsForRemoval(diffItems))
    diffItems.removeAll(exposureDiffItemsForRemoval(diffItems))
    return diffItems
  }

  private function sublineTypeDiffItemsForRemoval(diffItems: List<DiffItem>) : List<DiffItem>{
    var sublineTypeDiffItems = diffItems.where( \ item -> item.Bean typeis GL7SublineType)
    var removeFields = hiddenFields(sublineTypeDiffItems.first().Bean as Coverable)
    return sublineTypeDiffItems.where( \ item -> item.Property and removeFields.contains(item.asProperty().PropertyInfo.Name)) ?: {}
  }

  private function sublineDiffItemsForRemoval(diffItems: List<DiffItem>) : List<DiffItem>{
    var sublineDiffItems = diffItems.where( \ item -> item.Bean typeis GL7Subline)
    var removeFields = hiddenFields(sublineDiffItems.first().Bean as Coverable)
    return sublineDiffItems.where( \ item -> item.Property and removeFields.contains(item.asProperty().PropertyInfo.Name)) ?: {}
  }

  private function locationDiffItemsForRemoval(diffItems: List<DiffItem>) : List<DiffItem>{
    var locationDiffItems = diffItems.where( \ item -> item.Bean typeis GL7Location)
    var removeFields = hiddenFields(locationDiffItems.first().Bean as Coverable)
    removeFields.add("LocationNumber")
    return locationDiffItems.where( \ item -> item.Property and removeFields.contains(item.asProperty().PropertyInfo.Name)) ?: {}
  }

  private function exposureDiffItemsForRemoval(diffItems: List<DiffItem>) : List<DiffItem>{
    var exposureDiffItems = diffItems.where( \ item -> item.Bean typeis GL7Exposure)
    var removeFields = hiddenFields(exposureDiffItems.first().Bean as Coverable)
    return exposureDiffItems.where( \ item -> item.Property and removeFields.contains(item.asProperty().PropertyInfo.Name)) ?: {}
  }

  private function hiddenFields(coverable: Coverable) : List<String> {
    var hiddenDisplayables = LobDisplayableFactory.getEntityDisplayables<LobDisplayable>(coverable, LobDisplayable, null, false)
      .where( \ displayable -> !displayable.FieldMeta.Visible)
    var fields = hiddenDisplayables.map( \ d -> d.PropertyInfo.Name).toList()
    fields.add("FieldAvailabilities")
    return fields
  }
}
