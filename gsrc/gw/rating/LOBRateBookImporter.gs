package gw.rating

uses gw.api.database.Query
uses gw.api.webservice.importTools.ImportToolsImpl
uses gw.util.StreamUtil
uses org.slf4j.LoggerFactory

uses java.io.File
uses java.io.FileInputStream

class LOBRateBookImporter {

  private static var RatebookCodePrefixByLine =  {
      "CA7Line" -> "ISO Commercial Auto",
      "CP7Line" -> "ISO Commercial Property",
      "BP7Line" -> "ISO BOP",
      "WC7Line" -> "Workers Comp",
      "WCMLine" -> "Workers Comp",
      "CR7Line" -> "ISO Crime and Fidelity",
      "GeneralLiabilityLine_GLE" -> "ISO General Liability"}

  private static var CWCodeByLine = {"CR7Line" -> "Country Wide"}.toAutoMap( \ anyLine -> "CW")

  private var _line : String

  construct(line : String) {
    _line = line
  }

  function loadBooks(jurisdiction : String = null) {
    var rateBookDirectory = new LOBRateBookDirectory()
    if (not rateBookDirectory.hasRateBookFiles()){
      return
    }

    var rateBooksToLoad : java.io.File[]

    var allRateBooks = rateBookDirectory.AllRateBookFiles

    var cwRateBooks = allRateBooks.where(\ file -> file.AbsolutePath.contains(CWCodeByLine.get(_line)))

    if (jurisdiction != null) { //load jurisdiction-specific book
      var rateBookCode = RatebookCodePrefixByLine.get(_line) + " ${jurisdiction}"
      rateBooksToLoad = allRateBooks.where( \ book -> book.NameSansExtension.startsWith(rateBookCode))
      if (rateBooksToLoad.IsEmpty) {
        LoggerFactory.getLogger("Configuration").warn("No rate book found to load for jurisdiction ${jurisdiction}.")
      }
    }
    else { //load all books
      rateBooksToLoad = allRateBooks.disjunction(cwRateBooks).toTypedArray()
    }

    //Load Country Wide rate books first and then state rate books
    importRateBooks(cwRateBooks)
    importRateBooks(rateBooksToLoad)
  }

  private function importRateBooks(rateBooks : File[]) : void {
    rateBooks.each(\ file -> {
      var code = file.NameSansExtension.split("-").first()
      if (shouldLoadBook(code)) {
        using(var fileStream = new FileInputStream(file)) {
          try {
            var byteContent = StreamUtil.getContent(fileStream)
            var importer = new ImportToolsImpl()
            var importResults = importer.importXmlDataAsByteArray(byteContent)

            if (importResults == null) { // Importer returns null if no import data was found in the file
              throw "No data found in Rate Book file: " + file.Path
            }

          } catch(e:Exception){
            e.printStackTrace()
          }
        }
      }
    })
  }

  private function shouldLoadBook(code : String) : boolean {
    var q = Query.make(RateBook).compare("PolicyLine", Equals, _line)
        .startsWith("BookCode", code, true)
    return q.select().toList().Empty
  }
}