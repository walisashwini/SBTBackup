package gw.sbt.artifacts.lookuptables

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class LookupTable extends XmlContent {
  var _lookupTableCode : String as LookupTableCode
  var _lookupTableEntityName : String as LookupTableEntityName
  var _lookupTableRoot : String as LookupTableRoot
  var _lookupTableAppliesTo : String as LookupTableAppliesTo

  var _lookupTableFilters : List<LookupTableFilter> as LookupTableFilters
  var _lookupTableDimensions : List<LookupTableDimension> as LookupTableDimensions
  var _lookupTableDistinguishingField : LookupTableDistinguishingField as LookupTableDistinguishingField

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _lookupTableCode = _content.getAttributeValue("code")
    _lookupTableEntityName = _content.getAttributeValue("entityName")
    _lookupTableRoot = _content.getAttributeValue("root")
    _lookupTableAppliesTo = _content.getAttributeValue("appliesTo")

    _lookupTableFilters = {}
    _lookupTableFilters = getChildren("Filter").map( \ filterChild -> new LookupTableFilter(filterChild))

    _lookupTableDimensions = {}
    _lookupTableDimensions = getChildren("Dimension").map( \ dimensionChild -> new LookupTableDimension(dimensionChild))

    _lookupTableDistinguishingField = new LookupTableDistinguishingField(getChildren("DistinguishingField").first())
  }

  public function addFilter(filter : LookupTableFilter) {
    _lookupTableFilters.add(filter)
    _content.addChild(filter.Xml)
    sortLookupTable()
  }

  public function addDimension(dimension : LookupTableDimension) {
    _lookupTableDimensions.add(dimension)
    _content.addChild(dimension.Xml)
    sortLookupTable()
  }

  private function sortLookupTable(){
    var sortedLookupTableElements : List<XmlElement> = {}
    var lookupTableElementNames = {"Filter", "Dimension", "DistinguishingField"}

    lookupTableElementNames.each(\elementName -> {
      var existingElements = _content.removeChildren(elementName)
      sortedLookupTableElements.addAll(existingElements)
    })

    sortedLookupTableElements.each(\element -> _content.addChild(element))
  }

}