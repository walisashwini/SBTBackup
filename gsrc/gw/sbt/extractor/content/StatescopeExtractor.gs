package gw.sbt.extractor.content

uses gw.sbt.content.Content
uses java.util.List

class StatescopeExtractor implements ContentExtractor {
  override function extract(customerPackageContents : List< Content >, jurisdiction : String, adoptionDate: Date) : ExtractorResult {
    throw "StatescopeExtractor does not need an adoption date"
  }

  override function extract(customerPackageContents : List< Content >, jurisdiction : String) : ExtractorResult {
    var contents = customerPackageContents
        .where( \ entry -> entry.Name =="statescope_readme.html")

    if (contents.Empty) throw "Cannot find statescope file"

    return new ExtractorResult(){
        :Contents = contents
    }
  }
}