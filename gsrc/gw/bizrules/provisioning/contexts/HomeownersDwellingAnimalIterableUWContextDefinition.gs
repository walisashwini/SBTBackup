package gw.bizrules.provisioning.contexts

@Export
class HomeownersDwellingAnimalIterableUWContextDefinition extends HomeownersUWContextDefinition {
  public static final var PARAM_HAZARDS: String = "hopDwellAnimal"

  construct() {
    addIterativeSymbol(PARAM_HAZARDS, DwellingAnimal, \ec -> ec.Period.HOPLine.HOPDwellings.arrays("DwellingAnimals").toArray(new DwellingAnimal[0]))
  }

  override property get Key(): RuleContextDefinitionKey {
    return RuleContextDefinitionKey.TC_HOPPOLICYDWELLINGANIMALITERATIVE
  }
}