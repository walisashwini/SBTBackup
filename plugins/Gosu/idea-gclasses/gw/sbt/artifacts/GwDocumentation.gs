package gw.sbt.artifacts

uses gw.sbt.model.SBTUpdate
uses gw.sbt.util.ProductCodeToAbbreviationMapper
uses gw.xml.XmlElement
uses gw.xml.XmlException

uses java.lang.RuntimeException

class GwDocumentation {

  final static public var UPDATE : String = "update"
  final static public var CLAUSES_GROUP : String = "clauses_group"
  final static public var CLAUSES : String = "clauses"
  final static public var CLAUSE : String = "clause"
  final static public var PUBLIC_ID : String = "public-id"
  final static public var FORMS_GROUP : String = "forms_group"
  final static public var FORMS : String = "forms"
  final static public var FORM : String = "form"
  final static public var FORM_NUMBER : String = "number"
  final static public var FORM_EDITION : String = "edition"
  final static public var RATING_GROUP : String = "rating_group"
  final static public var RATE_TABLES_GROUP : String = "rate_tables_group"
  final static public var RATE_TABLES : String = "rate_tables"
  final static public var RATE_TABLE : String = "rate_table"
  final static public var RATE_TABLE_TABLE_NAME : String = "table_name"
  final static public var ALGORITHMS_GROUP : String = "algorithms_group"
  final static public var ALGORITHMS : String = "algorithms"
  final static public var ALGORITHM : String = "algorithm"
  final static public var ALGORITHM_NAME : String = "name"
  final static public var BUREAU_CODES : String = "bureau_codes"
  final static public var CODES : String = "codes"
  final static public var SYSTBLE_SUFFIX : String = "systable_suffix"
  final static public var RISK_ATTRIBUTES_GROUP : String = "risk_attributes_group"
  final static public var RISKS : String = "risks"
  final static public var RISK : String = "risk"
  final static public var RISK_NAME : String = "name"
  final static public var RISK_ATTRIBUTE : String = "attribute"
  final static public var RISK_ATTRIBUTE_NAME : String = "name"
  final static public var FULL_PATH : String = "full_path"
  final static public var DIFFERENCE : String = "difference"
  final static public var DESCRIPTION : String = "description"
  final static public var CDATA : String = "_CDATA_"
  final static public var CDATA_XML : String = "<![CDATA[]]>"

  var _root: XmlElement

  construct(documentation: byte[], jurisdiction : String) {
    try {
      _root = XmlElement.parse(documentation)
    } catch (e : XmlException) {
      throw new RuntimeException("Invalid GW Documentation in ${jurisdiction} package.")
    }
  }

  static function getFileName(jurisdiction : String) : String {
    return "${FilePrefix}-${jurisdiction}.xml"
  }

  static property get FilePrefix() : String {
    return "gw_documentation"
  }

  function mapToSBTUpdate(sbtUpdate : SBTUpdate) {
    sbtUpdate.DecisionAndInstructions.GwDocumentation = _root.getChild(UPDATE)?.$Text

    setDocumentationForClauses(sbtUpdate)
    setDocumentationForForms(sbtUpdate)
    setDocumentationForRating(sbtUpdate)
    setDocumentationForBureauCodes(sbtUpdate)
    setDocumentationForRiskAttributes(sbtUpdate)
  }

  private function setDocumentationForClauses(sbtUpdate : SBTUpdate) {
    sbtUpdate.DecisionAndInstructionsForClauses.GwDocumentation = _root.getChild(CLAUSES_GROUP)?.$Text
    _root.getChild(CLAUSES)?.getChildren(CLAUSE).each( \clauseDocElement -> {
      var clausePid = clauseDocElement.getAttributeValue(PUBLIC_ID)
      var doc = clauseDocElement.$Text
      var clause = sbtUpdate.Clauses.firstWhere( \ clause -> clause.PublicId == clausePid)
      if (clause != null) clause.DecisionAndInstructions.GwDocumentation = doc
    })
  }

  private function setDocumentationForForms(sbtUpdate : SBTUpdate) {
    sbtUpdate.DecisionAndInstructionsForForms.GwDocumentation = _root.getChild(FORMS_GROUP)?.$Text
    _root.getChild(FORMS)?.getChildren(FORM).each( \formDocElement -> {
      var number = formDocElement.getAttributeValue(FORM_NUMBER)
      var edition = formDocElement.getAttributeValue(FORM_EDITION)
      var doc = formDocElement.$Text
      var form = sbtUpdate.Forms.firstWhere( \ form -> form.Number == number and form.Edition == edition)
      if (form != null) form.DecisionAndInstructions.GwDocumentation = doc
    })
  }

  private function setDocumentationForRating(sbtUpdate : SBTUpdate) {
    var rateBook = sbtUpdate.RateBook
    rateBook.DecisionAndInstructions.GwDocumentation = _root.getChild(RATING_GROUP)?.$Text
    rateBook.DecisionAndInstructionsForRateTables.GwDocumentation = _root.getChild(RATE_TABLES_GROUP)?.$Text
    _root.getChild(RATE_TABLES)?.getChildren(RATE_TABLE)?.each( \rateTableDocElement -> {
      var tableName = rateTableDocElement.getAttributeValue(RATE_TABLE_TABLE_NAME)
      var doc = rateTableDocElement.$Text
      var rateTable = rateBook.RateTables.firstWhere( \ rateTable -> rateTable.TableName == tableName)
      if (rateTable != null) {
        rateTable.DecisionAndInstructions.GwDocumentation = doc

        var refTable = rateTable.OwningRateBook.getReferencedTable(rateTable.ReferenceTablePublicId)
        if (refTable != null) {
          refTable.DecisionAndInstructions.GwDocumentation = doc
        }
      }
    })
    rateBook.DecisionAndInstructionsForAlgorithms.GwDocumentation = _root.getChild(ALGORITHMS_GROUP)?.$Text
    _root.getChild(ALGORITHMS)?.getChildren(ALGORITHM)?.each( \algorithmDocElement -> {
      var algorithmName = algorithmDocElement.getAttributeValue(ALGORITHM_NAME)
      var doc = algorithmDocElement.$Text
      var algorithm = rateBook.Algorithms.firstWhere( \alg -> alg.Name == algorithmName)
      if (algorithm != null) {
        algorithm.DecisionAndInstructions.GwDocumentation = doc
      }
    })
  }

  private function setDocumentationForBureauCodes(sbtUpdate : SBTUpdate) {
    _root.getChild(BUREAU_CODES)?.getChildren(CODES).each( \codesDocElement -> {
      var systableSuffix = codesDocElement.getAttributeValue(SYSTBLE_SUFFIX)
      var doc = codesDocElement.$Text
      var productAbbrev = ProductCodeToAbbreviationMapper.getProductAbbreviation(sbtUpdate.MetaData.Line.Code)
      sbtUpdate.SystemTables.firstWhere( \ bureauCode -> bureauCode.getSysTableSuffix(productAbbrev) == systableSuffix)?.DecisionAndInstructions.GwDocumentation = doc
    })
  }

  private function setDocumentationForRiskAttributes(sbtUpdate : SBTUpdate) {
    sbtUpdate.DecisionAndInstructionsForRiskAttributes.GwDocumentation = _root.getChild(RISK_ATTRIBUTES_GROUP)?.$Text
    _root.getChild(RISKS)?.getChildren(RISK).each( \riskDocElement -> {
      var riskName = riskDocElement.getAttributeValue(RISK_NAME)
      riskDocElement.getChildren(RISK_ATTRIBUTE).each( \ attributeDocElement -> {
        var risk = sbtUpdate.Risks.firstWhere( \ risk -> risk.Entity == riskName)
        if (risk != null) {
          var riskAttribute = risk.RiskAttributes*.DefiningLeafAttribute.firstWhere( \ attribute -> attribute.OriginatingFullPath == attributeDocElement.getAttributeValue(FULL_PATH))
          if (riskAttribute != null) {
            riskAttribute.DecisionAndInstructions.GwDocumentation = attributeDocElement.$Text
          }
        }
      })
    })
  }
}