package gw.sbt.model.builder

uses gw.api.database.Query
uses gw.api.database.QuerySelectColumns

uses gw.api.path.Paths
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.reader.content.rating.entity.RateBookConverter
uses gw.sbt.util.LoaderUtil

class CurrentRateBookBuilder {
  var _policyLinePatternCode : String
  var _jurisdiction : String
  var _adoptionDate : Date
  var _bookCode: String
  construct(policyLinePatternCode : String,
            bookCode : String,
            jurisdiction : String,
            adoptionDate : Date = null){
    _policyLinePatternCode = policyLinePatternCode
    _jurisdiction = jurisdiction
    _bookCode = bookCode
    _adoptionDate = adoptionDate ?: Date.Now
  }

  //1).read ratebook entity from db
  //Note: the PC logic to pick up the ratebook for rating:
  //     RateBookEnhancement.selectRateBook()
  //              -- RatingQueryFacade.matchLatestActiveRateBook()
  //                    -- RatingQueryFacade.latestActiveBook()
  //
  //2).call PC API to get the rate factors for each ratetable

  //3).and transform ratebook entity and rate table factors into PCA ratebook data object
  public function toRateBookModel() : RateBookContent {
    var rateBookEntity = readRateBookFromDB(_bookCode, null, _jurisdiction)
    if (rateBookEntity != null) {
      var referencedRateBook : RateBookContent = null
      var referencedRateBookEntity : RateBook = null
      var bookGroup = rateBookEntity.BookGroup
      if (bookGroup.HasContent) { //fetch by bookGroup.
        referencedRateBookEntity = readRateBookFromDB(null, bookGroup)
      } else {
        referencedRateBookEntity = readRateBookFromDB(getCWRateBookCode(_bookCode, _jurisdiction), null)
      }
      if (referencedRateBookEntity != null) {
        referencedRateBook = new RateBookConverter().convert(referencedRateBookEntity)
      }
      var rateBook = new RateBookConverter()
          .withReferencedRateBook(referencedRateBookEntity, referencedRateBook)
          .convert(rateBookEntity)
      return rateBook
    }
    return null
  }

  //DB Search Criteria: Status, Line, BookCode/BookGroup, Jurisdiction.
  //Filter by:  Effective/Expiration Date
  //Sort by:    Last Status Change Date (aka: Latest Activation Date)
  private function readRateBookFromDB(bookCode : String, bookGroup : String, jurisdiction : String = null) : RateBook {
    if (bookCode == null and bookGroup == null) {
      return null
    }
    var query = Query.make(RateBook)
        .compare(RateBook#Status, Equals, RateBookStatus.TC_ACTIVE)
        .compare(RateBook#PolicyLine, Equals, _policyLinePatternCode)
    if (bookCode != null) {
      query.compare(RateBook#BookCode, Equals, bookCode)
    } else {
      query.compare(RateBook#BookGroup, Equals, bookGroup)
    }
    if (jurisdiction != null) {
      query.compare(RateBook#BookJurisdiction, Equals, typekey.Jurisdiction.get(jurisdiction))
    } else {
      query.compare(RateBook#BookJurisdiction, Equals, null)
    }

    var rateBookList = query.select()
    if (rateBookList.HasElements) {
      if (rateBookList.Count > 1) {
        //sort desc by last status change date - aka: latest activation date
        rateBookList.orderByDescending(QuerySelectColumns.path(Paths.make(RateBook#LastStatusChangeDate)))
      }

      if (rateBookList.HasElements) {
        return rateBookList.first()
      }
    }
    return null
  }

  //book code naming conversion:N
  //  state       - ISO ${Line Description} ${Jurisdiction}, ie: ISO Workers Comp AR
  //  countrywide - ISO ${Line Description} CW,  ie: ISO Workers Comp CW
  private function getCWRateBookCode(stateBookCode : String, jurisdiction : String) : String {
    return stateBookCode.replaceAll(jurisdiction, "CW")
  }

}