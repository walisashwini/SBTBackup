package gw.sbt.model

uses java.util.List

class Risk extends ContainerPropertyConfigModelObject {
  var _name : String as Name
  var _entity : String as Entity
  var _attributes: List< RiskAttribute > as RiskAttributes = {}
}
