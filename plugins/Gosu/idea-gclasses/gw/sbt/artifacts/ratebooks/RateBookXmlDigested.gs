package gw.sbt.artifacts.ratebooks

uses gw.xml.XmlElement

uses javax.xml.namespace.QName

class RateBookXmlDigested extends RateBookXml {

  construct(content : byte[]) {
    this(XmlElement.parse(content))
  }

  construct(content : XmlElement) {
    super(content)
    init()
  }

  private function init() {  // initialize all tables, definitions, factor rows and calcRoutineParameterSets
    RateTableListXml.getChildren(new QName(_namespace, "RateTable"))?.each(\rateTableElement -> AllTables.add(new RateTableXml(rateTableElement)))
    getChildren("DefaultRateFactorRow")?.each(\factorRowElement -> AllRateFactorRows.add(new DefaultRateFactorRowXml(factorRowElement)))
    getChildren("RateTableDefinition")?.each(\tableDefinitionElement -> AllTableDefinitions.add(new RateTableDefinitionXml(tableDefinitionElement)))
    getChildren("CalcRoutineParameterSet")?.each(\calcRoutineParameterSetElement -> AllCalcRoutineParameterSets.add(new CalcRoutineParameterSetXml(calcRoutineParameterSetElement)))
  }

}