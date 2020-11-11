package gw.sbt.reader

uses gw.sbt.artifacts.metadata.Statescope
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.content.Content
uses gw.sbt.extractor.SBTUpdateExtractor
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.meta.ERCPackageMetaData
uses gw.sbt.pca.analysis.EffectiveAvailabilityHelper
uses gw.sbt.reader.content.ClauseReader
uses gw.sbt.reader.content.FormReader
uses gw.sbt.reader.content.MetadataReader
uses gw.sbt.reader.content.RiskAttributeReader
uses gw.sbt.reader.content.bureau.BureauCodeReader
uses gw.sbt.reader.content.rating.xml.RateBookReader
uses gw.sbt.zip.ZipExtractor

uses java.io.InputStream
uses java.util.List

class SBTUpdateReader {

  private construct() {
  }

  static function readCustomerPackage(sbtCustomerPackage: InputStream, line: String, jurisdiction: String,
                                      adoptionDate: Date = null): SBTUpdate {
    var updateInput = SBTUpdateExtractor.extract(sbtCustomerPackage, line, jurisdiction, adoptionDate)
    var sbtUpdate = new SBTUpdateReader().readUpdateInput(updateInput, jurisdiction, adoptionDate)
    return sbtUpdate
  }

  static function readCustomerPackageMetaData(sbtCustomerPackage: InputStream): ERCPackageMetaData {
    var input = new SBTUpdateReader().unzipStatescope(sbtCustomerPackage)
    if (input != null) {
      return new MetadataReader().read(input)
    } else {
      return null
    }
  }

  private function readUpdateInput(updateInput: List<Content>, jurisdiction: String, adoptionDate: Date): SBTUpdate {
    var updateContents = new SBTUpdateContents(updateInput)
    var updateIndex = updateContents.Index

    var metadata = new MetadataReader().read(updateContents)
    // NOTE: We should fix the MetadataReader to return just a single jurisdiction
    metadata.Jurisdictions.retainWhere(\jurisdictionMeta -> jurisdictionMeta.Jurisdiction == "CW" or jurisdictionMeta.Jurisdiction == jurisdiction)

    // Read clauses
    var clauses = new ClauseReader().read(updateIndex, updateContents, jurisdiction)

    // Read forms
    var forms = new FormReader().read(updateIndex, updateContents)

    // Read bureau codes
    final var bureauCodeReader= new BureauCodeReader ()
    var bureauCodesList = bureauCodeReader.readFromUpdate(updateContents, jurisdiction, metadata.Line.Code, adoptionDate)

    // Read risks
    var risks = new RiskAttributeReader().read(updateContents, jurisdiction)

    // Read ratebooks
    var cwRateBookXml = updateContents.getRateBookXml("CW")
    var cwRateBook = new RateBookReader().read(cwRateBookXml)

    var stateRateBook = new RateBookReader()
        .withReferencedRateBook(cwRateBook)
        .read(updateContents.getRateBookXml(jurisdiction))

    var sbtUpdateMetaData = new SBTUpdateMetaData(metadata, jurisdiction)
    sbtUpdateMetaData.CWRCRN = updateContents.CWRCRN
    sbtUpdateMetaData.StateRCRN = updateContents.getStateRCRN(jurisdiction)

    var sbtUpdate = new SBTUpdate() {
        : MetaData = sbtUpdateMetaData,
        : Clauses = clauses,
        : Forms = forms,
        : BureauCodeFileDefinitions = updateContents.getBureauCodeFileDefinitions(metadata.Line.Code),
        : SystemTables = bureauCodesList,
        : RateBook = stateRateBook,
        : Risks = risks,
        : AdoptionDate = adoptionDate
    }

    var gwDocumentation = updateContents.getGwDocumentation(jurisdiction)
    if (gwDocumentation != null) {
      gwDocumentation.mapToSBTUpdate(sbtUpdate)
    }

    EffectiveAvailabilityHelper.setEffectiveAvailability(sbtUpdate)

    return sbtUpdate
  }

  private function unzipStatescope(input: InputStream): Statescope {
    return unzipInput(input, \filename -> filename == "statescope_readme.html").StateScope
  }

  private function unzipInput(input: InputStream, what: block(filename: String): boolean): SBTUpdateContents {
    return new SBTUpdateContents(new ZipExtractor().extractInMemory(input, \entry -> what(entry.Name)))
  }
}
