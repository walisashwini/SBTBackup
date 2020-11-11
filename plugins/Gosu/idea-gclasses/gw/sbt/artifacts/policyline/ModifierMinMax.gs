package gw.sbt.artifacts.policyline

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.util.XmlUtil

class ModifierMinMax extends XmlContent {
  var _modifierMinMaxLookups : List<ModifierMinMaxLookup>as MinMaxLookups = {}

  construct(content : byte[]) {
    super(content)
    var lookups = Xml.getChildren("ModifierMinMaxLookup")
    lookups?.each(\lookup -> _modifierMinMaxLookups.add(new ModifierMinMaxLookup(lookup)))
  }

  function addMinMaxLookup(lookup : ModifierMinMaxLookup) {
    Xml.addChild(XmlUtil.copyElement(lookup.Xml))
    _modifierMinMaxLookups.add(lookup)
  }
}