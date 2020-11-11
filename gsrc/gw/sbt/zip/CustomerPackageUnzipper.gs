package gw.sbt.zip

uses com.google.common.base.Optional
uses gw.sbt.artifacts.GwDocumentation
uses gw.sbt.content.Content
uses java.io.File
uses java.io.InputStream
uses java.util.List

class CustomerPackageUnzipper {

  private class OuterZipContent {
    var innerZip : Optional< Content > as InnerZip
    var statescope : Optional< Content > as StatescopeFile
    var gwDocumentation: List< Content > as GwDocumentation
    var rcrn : List<Content> as ReleaseNotes
  }

  function unzipCustomerPackage(sbtCustomerPackage : InputStream) : List< Content > {
    var outerZipContents = extractInnerZipStatescopeAndGwDocFiles(sbtCustomerPackage)

    var contents = extractZipEntries(outerZipContents.InnerZip)
    contents.addAll(outerZipContents.GwDocumentation)
    contents.addAll(outerZipContents.ReleaseNotes)

    var stateScopeContent = outerZipContents.StatescopeFile
    if (stateScopeContent.Present) {
      contents.add(stateScopeContent.get())
    }

    return contents
  }

  private function extractInnerZipStatescopeAndGwDocFiles(sbtCustomerPackage : InputStream) : OuterZipContent {
    var contents = new ZipExtractor().extractInMemory(sbtCustomerPackage)

    return new OuterZipContent() {
      :InnerZip = extractInnerZip(contents),
      :StatescopeFile = extractStateScopeFile(contents),
      :GwDocumentation = extractGwDocumentationFiles(contents),
      :ReleaseNotes = extractRCRNFiles(contents)
    }
  }

  private function extractInnerZip(contents : List< Content >) : Optional< Content > {
    var innerZip = contents.firstWhere( \ zipEntryContent -> zipEntryContent.Name.endsWith(".zip"))
    if (innerZip == null) {
      return Optional< Content >.absent()
    }

    return Optional.of(innerZip)
  }

  private function extractZipEntries(innerZip: Optional< Content >) : List< Content > {
    if (innerZip.Present) {
      var zipExtractor = new ZipExtractor()
      return zipExtractor.extractInMemory(innerZip.get().asStream(), \entry -> new File(entry.Name).Extension.length > 0)
    }

    return {}
  }

  private function extractStateScopeFile(contents : List< Content >) : Optional< Content > {
    var statescopeReadMe = contents.firstWhere( \ zipEntryContent -> zipEntryContent.Name == "statescope_readme.html")
    if (statescopeReadMe == null) {
      return Optional< Content >.absent()
    }

    return Optional.of(statescopeReadMe)
  }

  private function extractGwDocumentationFiles(contents : List< Content >) : List< Content > {
   return contents.where( \ zipEntryContent -> zipEntryContent.Name.startsWith(GwDocumentation.FilePrefix))
  }

  private function extractRCRNFiles(contents : List<Content>) : List<Content> {
    return contents.where( \ zipEntryContent -> zipEntryContent.Name.startsWith("RCRN"))
  }

}