package gw.lob.gl7

uses gw.api.locale.DisplayKey

class GL7UnmannedAircraftFilter {

  private construct() { }

  public static var ModelTypeFilter : String = DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Model")
  public static var ManufacturerTypeFilter : String = DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Manufacturer")
  public static var LocationTypeFilter : String = DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Location")
  public static var SublineTypeFilter : String = DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Subline")
  public static var AircraftIdCodeTypeFilter : String = DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.UAIdentificationCode")


  public static var TypeFilterSet : List<String> = {
      ManufacturerTypeFilter,
      ModelTypeFilter,
      SublineTypeFilter,
      LocationTypeFilter,
      AircraftIdCodeTypeFilter
  }
}