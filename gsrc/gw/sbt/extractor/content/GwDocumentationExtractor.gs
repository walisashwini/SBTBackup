package gw.sbt.extractor.content

uses gw.sbt.content.Content
uses gw.sbt.artifacts.GwDocumentation
uses java.util.List

class GwDocumentationExtractor implements ContentExtractor {
  override function extract(customerPackageContents : List< Content >, jurisdiction : String, adoptionDate: Date) : ExtractorResult {
    throw "GwDocumentationExtractor does not need an adoption date"
  }

  override function extract(customerPackageContents: List< Content >, jurisdiction: String): ExtractorResult {
    var contents = customerPackageContents
        .where(\entry -> entry.Name == GwDocumentation.getFileName(jurisdiction))

    return new ExtractorResult(){
        : Contents = contents
    }
  }
}