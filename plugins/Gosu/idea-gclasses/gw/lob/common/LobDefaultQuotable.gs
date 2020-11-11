package gw.lob.common

class LobDefaultQuotable implements LobQuotable {
  // This allows accessing the "Costs" array of the entity implementing this structure.
  static final var COSTS : String = "Costs"

  private var _owner: EffDated as readonly Owner

  construct(owner : EffDated) {
    _owner = owner
  }

  override property get LobCosts() : List<Cost> {
    // Attampt to get the "Costs" array of the entity
    try {
      return _owner[COSTS] as List<Cost>
    } catch (e : Exception) {
      throw("LobQuotable requires an array of Cost with the name 'Costs'")
    }
  }
}