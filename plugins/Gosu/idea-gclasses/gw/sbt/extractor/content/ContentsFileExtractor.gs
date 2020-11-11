package gw.sbt.extractor.content

uses gw.sbt.content.Content
uses java.util.List

class ContentsFileExtractor implements ContentExtractor {
  override function extract(customerPackageContents : List< Content >, jurisdiction : String, adoptionDate: Date) : ExtractorResult {
    throw "ContentsFileExtractor does not need an adoption date"
  }

  override function extract(customerPackageContent: List< Content >, jurisdiction: String): ExtractorResult {
    var content = customerPackageContent
        .where(\entry -> {
          return pathHasRootExtPackFolder("content", entry.Name)
        })
        .map(\entry -> new Content (getContentDirectory(entry.Name), entry.Bytes))

    return new ExtractorResult(){
        : Contents = content
    }
  }

  private function pathHasRootExtPackFolder(needle: String, folderPath: String): boolean {
    var normalizedPath = normalizePath(folderPath)
    var folders = normalizedPath.split("/").toList()
    return folders.Count > 1 and folders.get(1).equals(needle)
  }

  private function getContentDirectory(fileName: String): String {
    var cleanedName = normalizePath(fileName)
    var i = cleanedName.indexOf("/content/")
    return cleanedName.substring(i + 1, fileName.length)
  }

  private function normalizePath(dirtyFilePath: String): String {
    return dirtyFilePath.replaceAll("\\\\", "/")
  }
}