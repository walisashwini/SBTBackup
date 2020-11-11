package gw.lob.gl7.synchronizer

uses gw.lob.common.synchronizer.PropertySynchronizer
uses gw.lob.gl7.GL7SublineTypeName

class GL7LocationSynchronizer {

  var _location : GL7Location

  construct(location : GL7Location) {
    _location = location
  }

  function syncZipCode() {
    PropertySynchronizer.betweenProperties(_location.Location#PostalCode, _location#ZipCode, "Other").sync()
  }

  function syncCounty() {
    PropertySynchronizer.betweenProperties(_location.Location#County, _location#LiquorLiabTerr, "Other").sync()
    PropertySynchronizer.betweenProperties(_location.Location#County, _location#PremisesOperationsTerr, "Other").sync()
  }

  function syncTerritoryIndicator() {
    if (not _location.fieldExists("TerritoryIndicator")) {
      return
    }

    var territoryIndicator : String = null

    var premisesOperationsTerritory = _location.PremisesOperationsTerritory
    if (premisesOperationsTerritory == "001") {
      territoryIndicator = "1"
    } else if (premisesOperationsTerritory == "010") {
      territoryIndicator = "2"
    }

    if (territoryIndicator == null) {
      var subline = _location.SublineType.Subline
      final var PREM_OPS_SUBLINE_TYPES = {
          GL7SublineTypeName.CGL.Description,
          GL7SublineTypeName.PREMISE_OPERATIONS.Description
      }
      final var PREM_OPS_TERRITORIES = {
          "002", "003", "004", "005", "006", "007", "008", "009",
          "012", "014", "016", "017", "018",
          "020", "021", "022", "023", "024"
      }
      final var PRODS_SUBLINE_TYPES = {
          GL7SublineTypeName.PRODS_COMPLETED_OPERATION.Description,
          GL7SublineTypeName.PRODUCT_WITHDRAWAL.Description
      }
      if ((PREM_OPS_SUBLINE_TYPES.contains(subline) and PREM_OPS_TERRITORIES.contains(premisesOperationsTerritory))
          or PRODS_SUBLINE_TYPES.contains(subline)
      ) {
        territoryIndicator = "0"
      }
    }

    _location.setFieldIfFound("TerritoryIndicator", \-> territoryIndicator)
  }

  function syncAll() {
    syncZipCode()
    syncCounty()
    syncTerritoryIndicator()
  }
}