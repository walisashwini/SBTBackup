package gw.sbt.extractor.content

uses gw.sbt.content.Content
uses gw.sbt.extractor.SBTUpdateExtractor
uses gw.sbt.extractor.content.index.ClauseIndexCreator
uses gw.xml.XmlElement
uses org.apache.commons.io.IOUtils
uses java.io.File
uses java.util.Set
uses java.util.List

class ClauseExtractor implements ContentExtractor {
  override function extract(customerPackageContents: List< Content >, jurisdiction: String): ExtractorResult {
    throw "ClauseExtractor requires an adoption date"
  }

  override function extract(customerPackageContents: List< Content >, jurisdiction: String, adoptionDate: Date): ExtractorResult {
    var clauseContents = mapClausesToSBTUpdateFormat(customerPackageContents)

    // Copy CW Lookups into State, return to be removed CW Lookups
    var lookupsToBeRemoved = copyCWLookupsToStateLookups(clauseContents)

    var includeCW = SBTUpdateExtractor.isStateUpdateFlow(adoptionDate)

    var stateContents = getContents(clauseContents, customerPackageContents, jurisdiction, includeCW, lookupsToBeRemoved)
    if (includeCW) {
      stateContents.each(\clauseContent -> {
        clauseContent.Name = clauseContent.Name.replaceAll("state_../", "")
      })
      var stateClauseIndex = new ClauseIndexCreator(adoptionDate).createIndex(stateContents, jurisdiction)
      return new ExtractorResult () {
        :SBTIndex = stateClauseIndex,
        :Contents = stateContents.toList()
      }
    } else {
      var allContents = getContents(clauseContents, customerPackageContents, jurisdiction, true, lookupsToBeRemoved)
      allContents.each(\clauseContent -> {
        clauseContent.Name = clauseContent.Name.replaceAll("state_../", "")
      })

      var availableClausePatternPIDs = getClausePublicIds(stateContents)
      var allClauseIndex = new ClauseIndexCreator(adoptionDate).createIndex(allContents, jurisdiction)

      var cwClauseIndex = allClauseIndex.Clauses.where(\clauseEntry -> not availableClausePatternPIDs.contains(clauseEntry.ContentId))
      cwClauseIndex.each(\cwClause -> {
        // set the intent to null for all clauses not referred by this state (CW Clauses)
        // 1). not showing in UI.
        // 2). its contents still in SBTUpdate, will be processed by Loader
        cwClause.Intent = null
      })
      return new ExtractorResult () {
        :SBTIndex = allClauseIndex,
        :Contents = allContents.toList()
      }
    }
  }

  private function getContents(clauseContents: List< Content >, customerPackageContents: List< Content >, jurisdiction: String, includeCW: boolean, lookupsToBeRemoved: List<Content>) : Set<Content> {
    var contents = new HashSet<Content>()
    contents.addAll(getStateLookups(clauseContents, jurisdiction, includeCW))
    contents.addAll(getStateClausePatterns(clauseContents, jurisdiction, includeCW))
    contents.addAll(extractClauseDisplayProperties(customerPackageContents, contents))
    //remove the lookups (these are already concatenated)
    contents.removeAll(lookupsToBeRemoved)
    return contents
  }

  private function mapClausesToSBTUpdateFormat(zipEntryContents: List< Content >): List< Content > {
    return zipEntryContents
      .where(\zipEntryContent -> zipEntryContent.Name.contains("coveragepatterns"))
      .map(\clauseEntryContent -> {
        var clauseEntryPath = clauseEntryContent.Name
        var clauseFilename = new File(clauseEntryPath).Name
        var clausePatternSubFolderName = clauseFilename.replaceAll(".xml", "")
        if (clauseFilename.endsWith("-lookups.xml"))  {
          clausePatternSubFolderName = clauseFilename.replaceAll("-lookups.xml", "")
          if (clauseEntryPath.contains("jurisdictions")) {
            var stateIndex = clauseEntryPath.indexOf("jurisdictions") + "jurisdictions".length + 1
            var state = clauseEntryPath.substring(stateIndex, stateIndex + 2)
            return new Content ("clauses/${clausePatternSubFolderName}/state_" + state + "/${clauseFilename}", clauseEntryContent.Bytes)
          }
        }
        return new Content ("clauses/${clausePatternSubFolderName}/${clauseFilename}", clauseEntryContent.Bytes)
      })
  }

  private function copyCWLookupsToStateLookups(updateContents : List<Content>) : List<Content> {
    var lookupsToBeRemoved : List<Content> = {}
    updateContents.where(\clauseContent -> clauseContent.Name.contains("state_")).each(\stateLookupContent -> {
      var stateLookupsFile = new File(stateLookupContent.Name)
      var clauseFilename = stateLookupsFile.Name
      var cwLookupContent = updateContents.firstWhere(\clauseContent -> not clauseContent.Name.contains("state_") and clauseContent.Name.endsWith(clauseFilename))
      if (cwLookupContent != null) {
        stateLookupContent.Bytes = concatenateLookupsContent(stateLookupContent, cwLookupContent).Bytes
        lookupsToBeRemoved.add(cwLookupContent)
      }
    })
    //cwLookup has already been concatenated into state lookup, should be removed later
    return lookupsToBeRemoved
  }

  private function concatenateLookupsContent(first : Content, second : Content) : String {
    var firstXml = XmlElement.parse(first.Bytes)
    var secondXml = XmlElement.parse(second.Bytes)
    firstXml.$Children.addAll(secondXml.$Children)
    return firstXml.asUTFString()
  }

  private function getStateLookups(contents: List< Content >, jurisdiction: String, includeCW: boolean = false): List< Content > {
    if (includeCW) {
      //get lookups for this state and countrywide, remove lookups for other states
      var stateAndCountryWide = contents.where(\clauseContent -> clauseContent.Name.endsWith(".xml"))
      stateAndCountryWide.removeIf(\content -> content.Name.contains("state_") and not content.Name.contains("state_${jurisdiction}"))
      return stateAndCountryWide
    } else {
      return contents.where(\clauseContent -> clauseContent.Name.contains("state_${jurisdiction}"))
    }
  }

  private function getStateClausePatterns(contents: List< Content >, jurisdiction: String, includeCW: boolean = false): List< Content > {
    var stateLookupContents = getStateLookups(contents, jurisdiction, includeCW)
    return contents.where(\clauseContent
        -> stateLookupContents.map(\stateClauseContent -> new File(stateClauseContent.Name).Name.replaceAll("-lookups", ""))
            .contains(new File(clauseContent.Name).Name))
  }

  private function extractClauseDisplayProperties(contents: List< Content >, clauseContents: Set< Content >) : List< Content > {
    var displayPropertiesFileContent = extractProductModelDisplayProperties(contents)
    if (displayPropertiesFileContent == null) {
      return {}
    }

    var displayProperties = IOUtils.toString(displayPropertiesFileContent.Bytes, "UTF-8").split("\\r?\\n")
    var availableClausePatterns = getClausePublicIds(clauseContents)

    return availableClausePatterns.map(\clausePattern ->
        new Content ("clauses/${clausePattern}/${clausePattern}.display.properties",
            displayProperties.where(\displayProperty -> displayProperty.contains("_" + clausePattern + ".")).join("\n").Bytes))
  }

  private function extractProductModelDisplayProperties(zipEntryContents: List< Content >) : Content {
    return zipEntryContents
        .firstWhere(\zipEntryContent -> (zipEntryContent.Name.contains("productmodel.display") and zipEntryContent.Name.endsWith("properties")))
  }

  private function getClausePublicIds(contents: Set< Content >): Set<String> {
    return contents
        .where(\clauseContent -> clauseContent.Name.startsWith("clauses") and not clauseContent.Name.contains("state_"))
        .map(\clauseContent -> new File(new File(clauseContent.Name).Parent).Name).toSet()
  }

}