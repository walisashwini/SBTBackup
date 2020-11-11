package gw.sbt.extractor.content

uses gw.sbt.content.Content
uses java.util.List

interface ContentExtractor {

  function extract(customerPackageContents: List< Content >, jurisdiction: String) : ExtractorResult

  function extract(customerPackageContents: List< Content >, jurisdiction: String, adoptionDate: Date) : ExtractorResult
}
