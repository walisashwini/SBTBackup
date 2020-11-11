package gw.lob.common.adapters

uses gw.api.domain.CoverableAdapter
uses gw.api.util.JurisdictionMappingUtil

/**
 * Abstract adapter to optimize performance for coverable that has location property
 * This adapter can only be used if location state cannot be changed after location is created (default behavior of base PC)
 *
 * For example, to move a truck from NY to HI, changing garaging location from Location 1(NY) to Location 2(HI) will work,
 * but changing the state of Location 1 from NY to HI will not work.
 *
 * For coverables with mutable location state, a customized cache will need to be implemented if performance is an issue
 */
abstract class LocationBasedCoverableAdapter<T extends Coverable> implements CoverableAdapter {

  protected var _owner : T
  var _locationToJurisdictionMap: java.util.Map<gw.pl.persistence.core.Key, Jurisdiction> = {}

  construct(owner : T) {
    _owner = owner
  }

  /**
   * The location will be used to retrieve state
   */
  abstract property get Location(): PolicyLocation

  override property get PolicyLocations() : PolicyLocation[] {
    return {Location}
  }

  /**
   * Jurisdiction cache is used to optimize performance
   *
   * This cache assumes that location jurisdiction cannot be changed.
   * This assumption is verified by the location screen that both country and state are read-only.
   */
  override property get State() : Jurisdiction {
    var jurisdiction : Jurisdiction
    var location = Location

    if(location != null){

      var locationFixedId = location.FixedId

      jurisdiction = _locationToJurisdictionMap.get(locationFixedId)

      if (jurisdiction == null) {
        jurisdiction = JurisdictionMappingUtil.getJurisdiction(location)
        _locationToJurisdictionMap.put(locationFixedId, jurisdiction)
      }
    }

    return jurisdiction
  }

  override property get AssociatedCoveragePartTypes() : CoveragePartType[] {
    return new CoveragePartType[0]
  }
}