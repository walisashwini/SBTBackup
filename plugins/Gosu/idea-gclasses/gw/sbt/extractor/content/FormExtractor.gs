package gw.sbt.extractor.content

uses gw.sbt.artifacts.forms.CustomFormInferencesContent
uses gw.sbt.artifacts.forms.FormPatterns
uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.content.Content
uses gw.sbt.content.XmlSpecificContent
uses gw.sbt.extractor.SBTUpdateExtractor
uses gw.sbt.extractor.content.index.FormIndexCreator
uses gw.sbt.index.SBTUpdateIndex

uses java.util.List

class FormExtractor implements ContentExtractor {
  override function extract(customerPackageContents : List< Content >, jurisdiction : String) : ExtractorResult {
    return extract(customerPackageContents, jurisdiction, null)
  }

  override function extract(customerPackageContents : List< Content >, jurisdiction : String, adoptionDate: Date) : ExtractorResult {
    var formPatterns = customerPackageContents.firstWhere( \ content -> content.Name.endsWith("FormPatterns.xml") )
    if (formPatterns == null) return new ExtractorResult() {
        :SBTIndex = new SBTUpdateIndex(),
        :Contents = {}
    }

    var includeCW = SBTUpdateExtractor.isStateUpdateFlow(adoptionDate)

    var allFormPatterns = new FormPatterns(formPatterns.Bytes).All
    var eligibleFormPatterns : List<PolicyFormPattern> = {}
    if (includeCW) { // Forms with state and/or countrywide lookup
      eligibleFormPatterns = allFormPatterns.where(\formPattern -> (formPattern.getLookup(jurisdiction, adoptionDate) != null or formPattern.getLookupForCW(adoptionDate) != null))
    } else {         // Forms with state lookup
      eligibleFormPatterns = allFormPatterns.where(\formPattern -> formPattern.getLookup(jurisdiction, adoptionDate) != null)
    }

    var extractorResult = extractFormsWithIndex(allFormPatterns, jurisdiction, adoptionDate)

    var remainingFormPatterns = allFormPatterns.subtract(eligibleFormPatterns)

    var remainingFormPatternsCodes = remainingFormPatterns*.Code

    var cwFormIndex  = extractorResult.SBTIndex.Forms.where(\formEntry -> remainingFormPatternsCodes.contains(formEntry.ContentId))

    cwFormIndex?.each(\cwForm -> {
      // set the intent to null for all forms not referred by this state (CW Forms)
      // 1). not showing in UI.
      // 2). its contents still in SBTUpdate, will be processed by Loader
      cwForm.Intent = null
    })

    var formInferenceContent = customerPackageContents.firstWhere(
        \content -> content.Name.endsWith(CustomFormInferencesContent.SYSTABLE_FILENAME))
    if (formInferenceContent != null) {
      extractorResult.Contents.add(
          extractCustomFormInferences(new CustomFormInferencesContent(formInferenceContent.Bytes)))
    }

    return extractorResult
  }

  private function extractFormsWithIndex(formPatterns: List<PolicyFormPattern>, jurisdiction: String, adoptionDate : Date): ExtractorResult {
    var formContents = extractForms(formPatterns)

    return new ExtractorResult() {
      :SBTIndex = new FormIndexCreator(adoptionDate).createIndex(formPatterns, jurisdiction),
      :Contents = formContents
    }
  }

  private function extractCustomFormInferences(customFormInferences: CustomFormInferencesContent) : Content {
    return new XmlSpecificContent ("systables/" + CustomFormInferencesContent.SYSTABLE_FILENAME,
        customFormInferences.Xml)
  }

  private function extractForms(stateFormPatterns: List<PolicyFormPattern>) : List< Content > {
    return
      stateFormPatterns
        .map( \stateFormPattern -> extractForm(stateFormPattern))
  }

  private function extractForm(stateFormPattern: PolicyFormPattern) : Content {
    var patternCode = stateFormPattern.Code
    return new XmlSpecificContent ("forms/" + patternCode + ".xml", stateFormPattern.XML)
  }
}