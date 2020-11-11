package gw.lob.common.financials.worksheet

uses entity.PolicyLine
uses gw.api.domain.Schedule
uses gw.rating.worksheet.domain.Worksheet
uses gw.rating.worksheet.treenode.WorksheetTreeNodeContainer
uses gw.rating.worksheet.treenode.WorksheetTreeNodeUtil

class LobCoverableWorksheetBuilder {
  protected var _line : PolicyLine

  construct(line : PolicyLine) {
    _line = line
  }

  public function buildCoverableWorksheetEntry(entity : EffDated, parentContainer : WorksheetTreeNodeContainer, showConditionals : boolean) {
    buildEntityWorksheetEntry(entity, _line.Branch.getWorksheetFor(entity), parentContainer, showConditionals)
    if (entity typeis Coverable) {
      entity.CoveragesConditionsAndExclusionsFromCoverable?.sortBy(\clause -> clause.DisplayName).each(\clause -> {
        var clauseContainer = buildEntityWorksheetEntry(clause, _line.Branch.getWorksheetFor(clause), parentContainer, showConditionals)
        if (clause typeis Schedule) {
          clause.ScheduledItems?.sortBy(\scheduledItem -> scheduledItem.ScheduleNumber)
              .each(\scheduledItem -> buildEntityWorksheetEntry(scheduledItem, _line.Branch.getWorksheetFor(scheduledItem), clauseContainer, showConditionals))
        }
      })
    }
  }

  protected function buildEntityWorksheetEntry(entity : EffDated, worksheet : Worksheet, parentContainer : WorksheetTreeNodeContainer, showConditionals : boolean) : WorksheetTreeNodeContainer {
    var container = createWorksheetNodeContainer(getEntityDisplayName(entity))

    if (worksheet != null) {
      container.addChildren(WorksheetTreeNodeUtil.buildTreeNodes(worksheet, showConditionals))
      parentContainer.addChild(container)
    } else if (entity typeis Schedule) {
      parentContainer.addChild(container)
    }
    return container
  }

  public function createWorksheetNodeContainer(displayName: String, expandByDefault: boolean = false): WorksheetTreeNodeContainer{
    return new WorksheetTreeNodeContainer(displayName) {:ExpandByDefault = expandByDefault}
  }

  protected function getEntityDisplayName(entity : EffDated) : String {
    return entity.DisplayName
  }
}