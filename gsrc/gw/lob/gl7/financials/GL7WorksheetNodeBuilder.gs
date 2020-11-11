package gw.lob.gl7.financials

uses entity.GL7SublineTypeSchCovItem
uses gw.api.locale.DisplayKey
uses gw.api.domain.Schedule
uses gw.lob.gl7.GL7SublineTypeName
uses gw.lob.gl7.compatibility.GL7CompatibilityConstants
uses gw.lob.common.compatibility.LobCompatibilityHelper
uses gw.lob.gl7.presenters.GL7PresenterUtil
uses gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter
uses gw.rating.worksheet.treenode.WorksheetTreeNodeContainer
uses gw.rating.worksheet.treenode.WorksheetTreeNodeUtil

class GL7WorksheetNodeBuilder {
  var _line : entity.GL7GeneralLiabilityLine
  var _showConditionals : boolean
  var _util : GL7QuoteDisplayUtil

  construct(line : entity.GL7GeneralLiabilityLine, showConditionals : boolean) {
    _line = line
    _showConditionals = showConditionals
    _util = new GL7QuoteDisplayUtil(_line)
  }

  property get WorksheetNodes() : List<WorksheetTreeNodeContainer> {
    var treeNodes : List<WorksheetTreeNodeContainer> = {}

    var rootNode = new WorksheetTreeNodeContainer(_line.Branch.Policy.Product.Name)
    rootNode.ExpandByDefault = true

    var lineContainer = buildLineLevelNode()
    rootNode.addChild(lineContainer)
    treeNodes.add(rootNode)

    var orderedSublineTypes = GL7PresenterUtil.orderBySubline(_line.GL7SublineTypes.toList(), \sublineType -> sublineType.SublineTypeName)
    orderedSublineTypes.each(\sublineType -> {
      var sublineTypeContainer = buildSublineTypeLevelNode(sublineType)
      if (sublineTypeContainer != null) {
        lineContainer.addChild(sublineTypeContainer)
      }

      var sublineContainer = buildSublineLevelNode(sublineType)
      if (sublineContainer != null) {
        sublineTypeContainer.addChildren(sublineContainer)
      }

      var locationContainer = buildLocationLevelNode(sublineType)
      if (locationContainer != null) {
        sublineTypeContainer.addChildren(locationContainer)
      }

      var exposureContainer = buildExposureLevelNode(sublineType)
      if (exposureContainer != null) {
        sublineTypeContainer.addChildren(exposureContainer)
      }

      var unmannedAircraftContainer = buildUnmannedAircraftLevelNode(sublineType)
      if (unmannedAircraftContainer.HasElements) {
        var sublineTypeUnmannedAircraftContainer = new WorksheetTreeNodeContainer(DisplayKey.get("Web.Policy.GL7.Worksheet.UnmannedAircraft"))
        sublineTypeContainer.addChild(sublineTypeUnmannedAircraftContainer)
        sublineTypeUnmannedAircraftContainer.addChildren(unmannedAircraftContainer)
      }
    })

    return treeNodes
  }

  private function buildLineLevelNode() : WorksheetTreeNodeContainer {
    var lineContainer = new WorksheetTreeNodeContainer(_line.DisplayName)
    lineContainer.ExpandByDefault = true

    // Line-level worksheet
    buildWorksheetEntry(_line.Branch, _line, lineContainer)

    // Line-level costs
    var lineLevelCosts = _util.CostByCoverable.get(_line)
    buildCostsEntries(lineLevelCosts, lineContainer)

    return lineContainer
  }

  private function buildSublineTypeLevelNode(sublineType : GL7SublineType) : WorksheetTreeNodeContainer {
    var sublineTypeContainer = new WorksheetTreeNodeContainer(sublineType.DisplayName)
    var sublineTypeCommonContainer = new WorksheetTreeNodeContainer(DisplayKey.get("Web.Policy.GL7.Worksheet.Common"))

    var worksheetsAdded = buildWorksheetEntry(sublineType.Branch, sublineType, sublineTypeCommonContainer)

    var experienceRatingModificationWorksheetsAdded = buildExperienceRatingModificationNode(sublineType, sublineTypeCommonContainer)
    worksheetsAdded = worksheetsAdded or experienceRatingModificationWorksheetsAdded

    if (!sublineType.Modifiers.IsEmpty) {
      for (modifier in sublineType.Modifiers) {
        var modifierWorksheetsAdded = buildWorksheetEntry(sublineType.Branch, modifier, sublineTypeCommonContainer, DisplayKey.get("Web.Policy.GL7.Worksheet.ScheduleRating"))
        worksheetsAdded = worksheetsAdded || modifierWorksheetsAdded
      }
    }
    if (worksheetsAdded) {
      sublineTypeContainer.addChild(sublineTypeCommonContainer)
    }

    var sublineTypeCosts = _util.CostByCoverable.get(sublineType)

    buildCostsEntries(sublineTypeCosts, sublineTypeContainer)
    buildStatCodeNodeForNonCostClauses(sublineType, sublineTypeContainer)
    sublineTypeContainer.addChildren(buildScheduleNodesForCoverable(sublineType))
    buildModifierNodesForSublineType(sublineType, sublineTypeContainer)
    return sublineTypeContainer
  }

  private function buildExperienceRatingModificationNode(sublineType : GL7SublineType, parentContainer : WorksheetTreeNodeContainer) : boolean {
    var experienceRatingModificationWorksheetsAdded = false
    if (sublineType.GL7ExperienceRatingModification != null) {
      var experienceRatingContainer = new WorksheetTreeNodeContainer(DisplayKey.get("Web.Policy.GL7.Worksheet.ExperienceRating"))
      experienceRatingModificationWorksheetsAdded = buildWorksheetEntry(sublineType.Branch, sublineType.GL7ExperienceRatingModification, experienceRatingContainer, DisplayKey.get("Web.Policy.GL7.Worksheet.ExperienceRatingModification"))

      if (experienceRatingModificationWorksheetsAdded) {
        parentContainer.addChild(experienceRatingContainer)
      }

      if (LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_ExperienceRatingModificationYear1)) {
        var cov = LobCompatibilityHelper.getCoverage(sublineType, GL7CompatibilityConstants.COV_ExperienceRatingModificationYear1) as Schedule
        var scheduledItems = cov.ScheduledItems.toList()
        buildExperienceRatingModificationYearNode(1, experienceRatingContainer, scheduledItems)
      }

      if (LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_ExperienceRatingModificationYear2)) {
        var cov = LobCompatibilityHelper.getCoverage(sublineType, GL7CompatibilityConstants.COV_ExperienceRatingModificationYear2) as Schedule
        var scheduledItems = cov.ScheduledItems.toList()
        buildExperienceRatingModificationYearNode(2, experienceRatingContainer, scheduledItems)
      }

      if (LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_ExperienceRatingModificationYear3)) {
        var cov = LobCompatibilityHelper.getCoverage(sublineType, GL7CompatibilityConstants.COV_ExperienceRatingModificationYear3) as Schedule
        var scheduledItems = cov.ScheduledItems.toList()
        buildExperienceRatingModificationYearNode(3, experienceRatingContainer, scheduledItems)
      }
    }

    return experienceRatingModificationWorksheetsAdded
  }

  private function buildExperienceRatingModificationYearNode(year : int, parentContainer : WorksheetTreeNodeContainer, scheduleItems : List<ScheduledItem>) {
    var experienceRatingModificationYearContainer = new WorksheetTreeNodeContainer(DisplayKey.get("Web.Policy.GL7.Worksheet.ExperienceRatingModificationYear", year))
    parentContainer.addChild(experienceRatingModificationYearContainer)
    scheduleItems.orderBy(\s -> s.ScheduleNumber)
        .each(\item ->
            buildWorksheetEntry(_line.Branch, item as GL7SublineTypeSchCovItem, experienceRatingModificationYearContainer, DisplayKey.get("Web.Policy.GL7.Worksheet.ScheduleItem", item.ScheduleNumber))
        )
  }

  private function buildLocationLevelNode(sublineType : GL7SublineType) : List<WorksheetTreeNodeContainer> {
    var locations = sublineType.Locations
    var locationNodes : List<WorksheetTreeNodeContainer> = {}

    locations.each(\loc -> {
      var locContainer = buildCoverableEntries(loc, sublineType.Branch, DisplayKey.get("Web.Policy.GL7.Worksheet.Location", loc.DisplayName))

      if (locContainer != null) {
        buildStatCodeNodeForNonCostClauses(loc, locContainer)
        locContainer.addChildren(buildScheduleNodesForCoverable(loc))
        locationNodes.add(locContainer)
      }
    })

    return locationNodes
  }

  private function buildSublineLevelNode(sublineType : GL7SublineType) : List<WorksheetTreeNodeContainer> {
    var sublines = sublineType.Sublines
    var sublineNodes : List<WorksheetTreeNodeContainer> = {}

    sublines.each(\subline -> {
      var sublineContainer = buildCoverableEntries(subline, sublineType.Branch, subline.Jurisdiction.DisplayName)

      if (sublineContainer != null) {
        buildStatCodeNodeForNonCostClauses(subline, sublineContainer)
        sublineContainer.addChildren(buildScheduleNodesForCoverable(subline))
        sublineNodes.add(sublineContainer)
      }
    })

    return sublineNodes
  }

  private function buildExposureLevelNode(sublineType : GL7SublineType) : List<WorksheetTreeNodeContainer> {
    var exposures = sublineType.Locations*.GL7Exposures
    var exposureNodes : List<WorksheetTreeNodeContainer> = {}

    exposures.each(\exposure -> {
      var exposureContainer = buildCoverableEntries(exposure, sublineType.Branch, DisplayKey.get("Web.Policy.GL7.Worksheet.Exposure", exposure.DisplayName))

      if (exposureContainer != null) {
        buildTerrorNodes(exposure, exposureContainer)
        buildStatCodeNodeForNonCostClauses(exposure, exposureContainer)
        exposureContainer.addChildren(buildScheduleNodesForCoverable(exposure))
        exposureNodes.add(exposureContainer)
      }
    })
    return exposureNodes
  }

  private function buildUnmannedAircraftLevelNode(sublineType : GL7SublineType) : List<WorksheetTreeNodeContainer> {
    var unmannedAircrafts = sublineType.Locations*.GL7Exposures*.UnmannedAircrafts?.sortBy(\unmannedAircraft -> unmannedAircraft.UnmannedAircraftNumber)
    var unmannedAircraftNodes : List<WorksheetTreeNodeContainer> = {}

    unmannedAircrafts.each(\unmannedAircraft -> {
      var unmannedAircraftContainer = buildCoverableEntries(unmannedAircraft, sublineType.Branch, GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(unmannedAircraft))
      if (unmannedAircraftContainer != null) {
        buildStatCodeNodeForNonCostClauses(unmannedAircraft, unmannedAircraftContainer)
        unmannedAircraftContainer.addChildren(buildScheduleNodesForCoverable(unmannedAircraft))
        unmannedAircraftNodes.add(unmannedAircraftContainer)
      }
    })
    return unmannedAircraftNodes
  }


  private function buildTerrorNodes(exposure : GL7Exposure, parentContainer : WorksheetTreeNodeContainer) {
    if (exposure.GL7Terr != null) {
      buildWorksheetEntry(exposure.Branch, exposure.GL7Terr, parentContainer, exposure.GL7Terr.DisplayName)
    }
  }

  private function buildCoverableEntries(coverable : Coverable, branch : PolicyPeriod, label : String = null) : WorksheetTreeNodeContainer {
    var exposureContainer = new WorksheetTreeNodeContainer(label.HasContent ? label : coverable.DisplayName)
    var worksheetAdded = buildWorksheetEntry(branch, coverable, exposureContainer)

    var costs = _util.CostByCoverable.get(coverable)
    buildCostsEntries(costs, exposureContainer)

    // USGL-834
    // check if the line contains the NH complex schedule "New Hampshire Amendment Of Liquor Liability Exclusion" who is the type of GLYSublineSchedExclitem
    // if so return an empty container
    if (worksheetAdded or costs.HasElements or _util.CostByCoverable.keySet().hasMatch(\key -> key typeis GL7SublineSchedExclItem)) {
      return exposureContainer
    }
    return null
  }

  private function buildCostsEntries(costs : List<GL7Cost>, parentContainer : WorksheetTreeNodeContainer) {
    costs = costs?.sortBy(\ cost-> _util.CostDisplayName(cost))
    for (c in costs) {
      var costContainer = new WorksheetTreeNodeContainer(_util.CostDisplayName(c))
      costContainer.addChildren(WorksheetTreeNodeUtil.buildTreeNodes(c, _showConditionals))
      parentContainer.addChild(costContainer)
    }
  }

  private function buildWorksheetEntry(branch : PolicyPeriod, bean : EffDated, parentContainer : WorksheetTreeNodeContainer, label : String = null) : boolean {
    var worksheetAdded = false
    var worksheet = branch.getWorksheetFor(bean)
    if (worksheet != null) {
      var worksheetContainer = new WorksheetTreeNodeContainer(label.HasContent ? label : DisplayKey.get("Web.Policy.GL7.Worksheet.CommonRating"))
      worksheetContainer.addChildren(WorksheetTreeNodeUtil.buildTreeNodes(worksheet, _showConditionals))
      parentContainer.addChild(worksheetContainer)
      worksheetAdded = true
    }
    return worksheetAdded
  }

  private function buildStatCodeNodeForNonCostClauses(coverable : Coverable, parentContainer : WorksheetTreeNodeContainer) {
    var clauses = coverable.getCoveragesConditionsAndExclusionsFromCoverable()
        .where(\clause -> _util.costsForClause(clause).Empty and
            _util.statRecordForClause(clause) != null and
            !isScheduledClause(coverable, clause as Clause))

    clauses.each(\clause ->
        buildWorksheetEntry(_line.Branch, clause, parentContainer, clause.DisplayName)
    )
  }

  private function isScheduledClause(coverable : Coverable, clause : Clause) : boolean {
    var scheduleClausePatterns = _util.getSchedules(coverable)
        .map(\s -> (s as Clause).Pattern)
    return scheduleClausePatterns.contains(clause.Pattern)
  }

  private function buildScheduleNodesForCoverable(coverable : Coverable) : List<WorksheetTreeNodeContainer> {
    var treeNodes : List<WorksheetTreeNodeContainer> = {}
    var schedules = _util.getSchedules(coverable)
    schedules.each(\schedule -> {
      var scheduleContainer = new WorksheetTreeNodeContainer(schedule.ScheduleName)
      var scheduleCosts = _util.getScheduleCosts(schedule)
      var addTreeNode = false
      if (scheduleCosts.HasElements) {
        buildScheduleItemNodes(scheduleContainer, schedule)
      }

      if (scheduleHasStatRecord(schedule)) {
        buildScheduleNodes(coverable, schedule, scheduleContainer)
        addTreeNode = true
      }

      if (scheduleCosts.HasElements or addTreeNode) {
        treeNodes.add(scheduleContainer)
      }
    })

    return treeNodes
  }

  private function buildModifierNodesForSublineType(sublineType : GL7SublineType, container : WorksheetTreeNodeContainer) {
    var modifiers = sublineType.Sublines*.Modifiers.partition(\modifier -> modifier.DisplayName)
    modifiers.Keys.each(\modifierName -> {
      var modifierContainer = new WorksheetTreeNodeContainer(modifierName)
      modifiers.get(modifierName).each(\modifier -> {
        buildWorksheetEntry(sublineType.Branch, modifier, modifierContainer, modifier.State.Description)
      })
      container.addChild(modifierContainer)
    })
  }

  private function buildScheduleNodes(coverable : Coverable, schedule : Schedule, container : WorksheetTreeNodeContainer) {
    var clause = coverable.getCoveragesConditionsAndExclusionsFromCoverable()
        .firstWhere(\clause -> clause.Pattern == (schedule as Clause).Pattern)

    if (clause != null) {
      buildWorksheetEntry(_line.Branch, clause, container, DisplayKey.get("Web.Policy.GL7.Worksheet.StatCode"))
    }
  }

  private function scheduleHasStatRecord(schedule : Schedule) : boolean {
    return _util.statRecordForClause(schedule as Clause) != null
  }

  private function buildScheduleItemNodes(parentContainer : WorksheetTreeNodeContainer, schedule : Schedule) {
    schedule.ScheduledItems
        .orderBy(\s -> s.ScheduleNumber)
        .each(\item -> buildWorksheetEntry(_line.Branch, item, parentContainer, DisplayKey.get("Web.Policy.GL7.Worksheet.ScheduleItem", item.ScheduleNumber)))
  }
}