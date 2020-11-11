package gw.sbt.reader.content.rating.entity

uses gw.sbt.model.rating.RateBookContent

class RateBookConverter {
  var _refBookEntity: RateBook
  var _refBookContent: RateBookContent

  function withReferencedRateBook(refBookEntity: RateBook, refBookContent: RateBookContent): RateBookConverter {
    _refBookEntity = refBookEntity
    _refBookContent = refBookContent
    return this
  }

  function convert(rateBook : RateBook) : RateBookContent {
    if(rateBook == null) {
      return null
    }
    var bookCode = rateBook.BookCode
    var bookGroup = rateBook.BookGroup
    var desc = rateBook.BookDesc
    var edition = rateBook.BookEdition
    var effDate = rateBook.EffectiveDate
    var bookJurisdiction = rateBook.BookJurisdiction.Code

    var rateTables = new RateTableContentConverter().withRateBook(rateBook).withReferencedRateBook(_refBookEntity, _refBookContent).convert() // we need the referenced ratebook's publicId

    var rateBookContent = new RateBookContent(){
      : BookCode = bookCode,
      : ReferencedBook =  _refBookContent,
      : BookGroup = bookGroup,
      : Description = desc,
      : Edition = edition,
      : EffectiveDate = effDate,
      : Jurisdiction = bookJurisdiction,
      : RateTables = rateTables}

    rateBookContent.RateTables.each(\rateTable -> {
      rateTable.OwningRateBook = rateBookContent
    })

    return rateBookContent
  }
}