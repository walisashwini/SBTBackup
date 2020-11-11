package gw.lob.common.displayable

uses java.util.List

class LabelDisplayable extends LobDisplayable {

  construct(entity: KeyableBean, propertyName: String) {
    super(entity, propertyName, null, false)
  }

  override property get Required(): boolean {
    return false
  }

  override property get Editable(): boolean {
    return false
  }

  override property get ValueRange(): List<String> {
    return {}
  }

  override property get Value(): Object {
    return ""
  }

  override function onChange() {
  }

}