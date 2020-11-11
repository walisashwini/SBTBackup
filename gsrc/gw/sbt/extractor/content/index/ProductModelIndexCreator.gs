package gw.sbt.extractor.content.index

uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.util.LoaderUtil

class ProductModelIndexCreator {
  var _adoptionDate : Date as AdoptionDate

  construct(adoptionDate : Date) {
    _adoptionDate = adoptionDate
  }

  public function findProductModelAvailability(availabilities : List<ProductModelAvailability>, jurisdiction : String, fallbackToCw : boolean = false) : ProductModelAvailability {
    var filteredAvailabilities =
        availabilities.where(\availability -> availability.Jurisdiction == jurisdiction)

    var availability = filteredAvailabilities.firstWhere(\availability ->
        LoaderUtil.isDateWithinRange(AdoptionDate, availability.EffDate, availability.ExpDate))
    if (availability == null and jurisdiction != null and fallbackToCw) {
      return findProductModelAvailability(availabilities, null, false)
    } else {
      return availability
    }
  }

}