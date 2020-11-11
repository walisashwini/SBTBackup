package gw.sbt.extractor

uses gw.sbt.content.Content
uses gw.sbt.extractor.content.ClauseExtractor
uses gw.sbt.extractor.content.ConfigExtractor
uses gw.sbt.extractor.content.ContentExtractor
uses gw.sbt.extractor.content.ExtractorResult
uses gw.sbt.extractor.content.FormExtractor
uses gw.sbt.extractor.content.GwDocumentationExtractor
uses gw.sbt.extractor.content.StatescopeExtractor
uses gw.sbt.index.SBTUpdateIndex
uses gw.sbt.zip.CustomerPackageUnzipper
uses java.io.InputStream
uses java.util.ArrayList
uses gw.sbt.extractor.content.RCRNExtractor
uses gw.sbt.extractor.content.ContentsFileExtractor
uses java.util.List

class SBTUpdateExtractor {

  static var EXTRACTORS : List<ContentExtractor> =  {
      new RCRNExtractor(),
      new StatescopeExtractor(),
      new GwDocumentationExtractor(),
      new ConfigExtractor(),
      new ContentsFileExtractor()
  }

  static var EXTRACTORS_REQ_ADOPTION_DATE : List<ContentExtractor> =  {
      new ClauseExtractor(),
      new FormExtractor()
  }

  private construct() {
  }

  static function extract(sbtCustomerPackage: InputStream, line: String, jurisdiction: String, adoptionDate: Date): List<Content> {
    return new SBTUpdateExtractor().createSBTUpdate(sbtCustomerPackage, jurisdiction, adoptionDate)
  }

  private function createSBTUpdate(sbtCustomerPackage: InputStream, jurisdiction: String, adoptionDate: Date): List<Content> {
    var customerPackageContents = new CustomerPackageUnzipper().unzipCustomerPackage(sbtCustomerPackage)
    var extractedContents = EXTRACTORS.map(\extractor -> extractor.extract(customerPackageContents, jurisdiction))
    extractedContents.addAll(
        EXTRACTORS_REQ_ADOPTION_DATE.map(\extractor -> extractor.extract(customerPackageContents, jurisdiction, adoptionDate))
    )

    var sbtIndex = createIndex(extractedContents)
    var updateContents = createUpdateContent(extractedContents, sbtIndex)

    return updateContents
  }

  private function createUpdateContent(extractedContents: List<ExtractorResult>, sbtIndex: SBTUpdateIndex): List<Content> {
    var updateContents = new ArrayList<Content>()
    extractedContents.each(\content -> {
      if (content.Contents != null) {
        updateContents.addAll(content.Contents)
      }
    })

    updateContents.add(new Content("index.json", sbtIndex.toString().Bytes))
    return updateContents
  }

  private function createIndex(extractedContents: List<ExtractorResult>): SBTUpdateIndex {
    return extractedContents.map(\content -> { return content.SBTIndex })
        .reduce(new SBTUpdateIndex(), \updateIndex, contentIndex -> {
          if (contentIndex != null) {
            updateIndex.putAll(contentIndex)
          }
          return updateIndex
        })
  }


  // Bit of a hack here but it is the least intrusive way to determine if it's state-add or state-update flow without
  // using an explicit flag.
  static function isStateUpdateFlow(adoptionDate : Date) : boolean {
    return adoptionDate != null
  }
}
