package gw.sbt.extractor.content

uses gw.sbt.content.Content
uses java.util.List

class ConfigExtractor implements ContentExtractor {
  override function extract(customerPackageContents : List< Content >, jurisdiction : String, adoptionDate: Date) : ExtractorResult {
    throw "ConfigExtractor does not need an adoption date"
  }

  override function extract(customerPackageContents : List< Content >, jurisdiction : String) : ExtractorResult {
    var configContents = customerPackageContents
        .where( \ entry -> entry.Name.contains("\\config\\") or entry.Name.contains("/config/"))
    var contents = filterStateOnlyPcfs(configContents, jurisdiction)
        .map( \ entry -> new Content (getConfigDirectory(entry.Name), entry.Bytes))

    return new ExtractorResult(){
      :Contents=contents
    }
  }

  private function filterStateOnlyPcfs(contents : List<Content>, jurisdiction : String) : List<Content> {
    final var stateSuffixExpr = ".ST.pcf"
    return contents.where( \ entry -> {
      // Using manual find than non-regex for faster performance
      if(entry.Name.endsWith(".pcf")) {
        var nameLength = entry.Name.length
        if(entry.Name.charAt(nameLength - stateSuffixExpr.length) == '.') {
          return entry.Name.endsWith(".${jurisdiction}.pcf")
        }
      }
      return true
    })
  }

  private function getConfigDirectory(fileName: String) : String {
    var i = fileName.indexOf("/config/")

    if (i == -1) {
      i = fileName.indexOf("\\config\\")
    }

    return fileName.substring(i+1, fileName.length)
  }

}