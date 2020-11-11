package gw.sbt.config

uses gw.sbt.artifacts.properties.DisplayProperties
uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.artifacts.schedules.Schedule

interface DisplayPropertiesConfigContents {

  property get DisplayProperties() : DisplayProperties

  property get ProductModelDisplayProperties() : ProductModelDisplayProperties

  function getClauseDisplayProperties(clausePublicId : String) : ProductModelDisplayProperties

  function getSchedulePropertyDisplayProperties(schedule : Schedule) : DisplayProperties

  function getModifierPatternDisplayProperties(modifierPatternPublicid: String): ProductModelDisplayProperties

}
