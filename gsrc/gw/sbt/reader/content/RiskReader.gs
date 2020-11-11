package gw.sbt.reader.content

uses gw.sbt.config.ConfigContents
uses gw.sbt.model.Risk

class RiskReader {

  function read(riskName : String, updateContents : ConfigContents) : Risk {
    var entity = updateContents.getEntity(riskName)

    return new Risk() {
      :Name = entity.DisplayName,
      :Entity = riskName
    }
  }
}