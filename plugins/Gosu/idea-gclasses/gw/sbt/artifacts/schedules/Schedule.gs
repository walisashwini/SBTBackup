package gw.sbt.artifacts.schedules

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses gw.sbt.util.XmlUtil
uses java.util.List

class Schedule extends XmlContent {
  var _clausePattern: String as ClausePattern
  var _properties: List<ScheduleProperty> as Properties
  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml: XmlElement) {
    super(xml)
    init()
  }

  construct(content: XmlElement, xmlDeclarations: String) {
    super(content, xmlDeclarations)
    init()
  }

  private function init() {
    _clausePattern = super.getAttributeValue("pattern")
    _properties = getChildren().where(\childNode -> childNode.$QName.LocalPart != "ItemClause")
        .map(\prop -> new ScheduleProperty(prop, XmlDeclarations))
  }

  function getProperty(name: String): ScheduleProperty {
    return _properties.firstWhere(\prop -> prop.Name == name)
  }

  function copy(): Schedule {
    return new Schedule(XmlUtil.copyElement(_content), XmlDeclarations)
  }

  function add(propertyInfoToAdd: ScheduleProperty) {
    var scheduleProperties = _content.$Children
    var lastPropertyInfoIndex = -1
    var lastAutoNumberPropertyInfoIndex = -1
    for (scheduleProperty in scheduleProperties index i) {
      if (scheduleProperty.$QName.LocalPart == "AutoNumberPropertyInfo") {
        lastAutoNumberPropertyInfoIndex = i
      }
      else if (scheduleProperty.$QName.LocalPart == "PropertyInfo") {
        lastPropertyInfoIndex = i
      }
    }

    if (lastPropertyInfoIndex != -1) {
      if(lastPropertyInfoIndex == scheduleProperties.size() - 1) {
        scheduleProperties.add(propertyInfoToAdd.Xml)
      } else {
        scheduleProperties.add(lastPropertyInfoIndex + 1, propertyInfoToAdd.Xml)
      }
    } else if(lastAutoNumberPropertyInfoIndex != -1) {
      if(lastAutoNumberPropertyInfoIndex == scheduleProperties.size() - 1) {
        scheduleProperties.add(propertyInfoToAdd.Xml)
      } else {
        scheduleProperties.add(lastAutoNumberPropertyInfoIndex + 1, propertyInfoToAdd.Xml)
      }
    } else {
      scheduleProperties.add(0, propertyInfoToAdd.Xml)
    }

    _properties.add(propertyInfoToAdd)
  }
}