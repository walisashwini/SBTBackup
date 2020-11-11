package gw.sbt.reader.content.rating.xml

uses gw.sbt.model.rating.RateBookContent
uses gw.xml.XmlElement
uses gw.sbt.util.Formatter
uses javax.xml.namespace.QName

class RateBookReader {
  var _refBook: RateBookContent

  function withReferencedRateBook(refBook: RateBookContent): RateBookReader {
    _refBook = refBook
    return this
  }

  function read(ratebookFileXml: XmlElement): RateBookContent {
    if (ratebookFileXml == null) {
      return null
    }

    var namespace = ratebookFileXml.$Namespace.NamespaceURI
    var ratebookXmlElement = ratebookFileXml.getChild(new QName(namespace, "RateBook"))
    if(ratebookXmlElement.$Children.size() == 0) {
      return null
    }
    var bookCode = ratebookXmlElement.getChild(new QName(namespace, "BookCode"))?.$Text
    var bookGroup = ratebookXmlElement.getChild(new QName(namespace, "BookGroup"))?.$Text
    var desc = ratebookXmlElement.getChild(new QName(namespace, "BookDesc")).$Text
    var edition = ratebookXmlElement.getChild(new QName(namespace, "BookEdition")).$Text
    var effDateString = ratebookXmlElement.getChild(new QName(namespace, "EffectiveDate")).$Text
    var effDate = Formatter.stringToDate(effDateString)
    var bookJurisdiction = ratebookXmlElement.getChild(new QName(namespace, "BookJurisdiction")).$Text

    var stateCalcRoutineDefs = ratebookFileXml.getChildren(new QName(namespace, "CalcRoutineDefinition"))

    var ratingAlgorithms = new RatingAlgorithmReader().read(namespace, stateCalcRoutineDefs, _refBook)
    var rateTables = new RateTableContentReader(namespace, ratebookFileXml, _refBook).read() // we need the referenced ratebook's publicId

    var rateBookContent = new RateBookContent(){
        : BookCode = bookCode,
        : ReferencedBook =  _refBook,
        : BookGroup = bookGroup,
        : Description = desc,
        : Edition = edition,
        : EffectiveDate = effDate,
        : Jurisdiction = bookJurisdiction,
        : RateTables = rateTables,
        : Algorithms = ratingAlgorithms,
        : Intent = STATE_ADD}

    rateBookContent.RateTables.each(\rateTable -> {
      rateTable.OwningRateBook = rateBookContent
    })
    rateBookContent.Algorithms.each(\algorithm -> {
      algorithm.OwningRateBook = rateBookContent
    })

    return rateBookContent
  }
}