package gw.sbt.extractor.content

uses gw.sbt.content.Content
uses java.util.List

class RCRNExtractor implements ContentExtractor {
  override function extract(customerPackageContents : List< Content >, jurisdiction : String, adoptionDate: Date) : ExtractorResult {
    throw "RCRNExtractor does not need an adoption date"
  }

  override function extract(customerPackageContents : List<Content>, jurisdiction : String) : ExtractorResult {
    var contents = customerPackageContents
        .where( \ entry -> entry.Name.startsWith("RCRN"))

    return new ExtractorResult(){
        :Contents = contents
    }
  }
}