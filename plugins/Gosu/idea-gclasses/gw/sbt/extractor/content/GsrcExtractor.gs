package gw.sbt.extractor.content

uses gw.sbt.content.Content
uses java.util.List

class GsrcExtractor implements ContentExtractor {
  override function extract(customerPackageContents : List< Content >, jurisdiction : String, adoptionDate: Date) : ExtractorResult {
    throw "GsrcExtractor does not need an adoption date"
  }

  override function extract(customerPackageContents : List< Content >, jurisdiction : String) : ExtractorResult {
    var contents = customerPackageContents
        .where( \ entry -> entry.Name.contains("\\gsrc\\") or entry.Name.contains("/gsrc/"))
        .map( \ entry -> new Content (getConfigDirectory(entry.Name), entry.Bytes))

    return new ExtractorResult(){
        :Contents=contents
    }
  }

  private function getConfigDirectory(fileName: String) : String {
    var i = fileName.indexOf("/gsrc/")

    if (i == -1) {
      i = fileName.indexOf("\\gsrc\\")
    }

    return fileName.substring(i+1, fileName.length)
  }


}