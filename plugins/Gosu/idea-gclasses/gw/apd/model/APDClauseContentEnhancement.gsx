package gw.apd.model

uses entity.APDClause
uses gw.api.locale.DisplayKey
uses gw.api.util.LocaleUtil
uses gw.xml.XMLNode

/**
 * Agile Product Developer
 */
@Export
enhancement APDClauseContentEnhancement : APDClause {

  function allowToggle() : Boolean {
    return true
  }

  function buildTree() : XMLNode {
    var tree = new XMLNode()
    tree.setAttributeValue("Name", this.Name)
    if (this typeis APDCoverage) {
      tree.ElementName = "Coverage"
      tree.setAttributeValue("Type", DisplayKey.get("Web.APD.ProductTree.CoverageNode"))
      this.CostDefinitions.each(\cost ->
        tree.addChild(cost.buildTree())
      )
    } else if (this typeis APDCondition) {
      tree.ElementName = "Condition"
      tree.setAttributeValue("Type", DisplayKey.get("Web.APD.ProductTree.ConditionNode"))
    } else if (this typeis APDExclusion) {
      tree.ElementName = "Exclusion"
      tree.setAttributeValue("Type", DisplayKey.get("Web.APD.ProductTree.ExclusionNode"))
    }

    if (checkGenerationValidity(tree)) {
      tree.setAttributeValue("Valid", "true")
    } else {
      tree.setAttributeValue("Valid", "false")
    }

    if (tree.Children.hasMatch(\node -> node.getAttributeValue("Valid") == "false")) {
      tree.setAttributeValue("Valid", "false")
    }

    return tree
  }

  function buildTreeForVisualization() : XMLNode {
    var tree = new XMLNode()
    tree.setAttributeValue("Name", this.Name)
    if (this typeis APDCoverage) {
      tree.ElementName = "Coverage"
      tree.setAttributeValue("Type", DisplayKey.get("Web.APD.ProductTree.CoverageNode"))
    } else if (this typeis APDCondition) {
      tree.ElementName = "Condition"
      tree.setAttributeValue("Type", DisplayKey.get("Web.APD.ProductTree.ConditionNode"))
    } else if (this typeis APDExclusion) {
      tree.ElementName = "Exclusion"
      tree.setAttributeValue("Type", DisplayKey.get("Web.APD.ProductTree.ExclusionNode"))
    }

    this.Terms.each(\term -> {
      tree.addChild(term.buildTreeForVisualization())
    })

    return tree
  }

  function checkGenerationValidity(cblNode : XMLNode) : Boolean {
    var valid = true
    var messages = new ArrayList<String>()

    // typename must be defined
    var codeIdentifierLabel = DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", this.Coverable.LinePrefix)
    if (this.CodeIdentifier == null) {
      messages.add(DisplayKey.get("Web.APDValidation.Clause.MissingCodeIdentifier", codeIdentifierLabel))
    } else if (not CodegenValidator.isValidName(this.CodeIdentifier)) {
      messages.add(DisplayKey.get("Web.APDValidation.Clause.InvalidCodeIdentifier", codeIdentifierLabel))
    }
    // must ensure default language exists for text that goes into display keys
    var lang = LocaleUtil.getDefaultLanguageType()
    if (this["Name_" + lang.Code] == null) {
      messages.add(DisplayKey.get("Web.APDValidation.Clause.MissingName"))
    }
    if (this["Description_" + lang.Code] == null) {
      messages.add(DisplayKey.get("Web.APDValidation.Clause.MissingDescription"))
    }

    // terms must have unique names
    if (CodegenValidator.containsDuplicates(this.Terms*.Name)) {
      messages.add(DisplayKey.get("Web.APDValidation.Attribute.UniqueTermNames"))
    }

    if (messages.Count > 0) {
      valid = false
      messages.each(\msg -> {
        var errorTree = new XMLNode()
        errorTree.ElementName = "ERROR"
        errorTree.setAttributeValue("Name", msg)
        cblNode.addChild(errorTree)
      })
    }

    this.Terms.each(\fld -> {
      if (not fld.checkGenerationValidity(cblNode)) {
        valid = false
      }
    })

    return valid
  }

  property get UIDetailsLabel() : String {
    return (this.Name != null) ?
        this.Name + " " + DisplayKey.get("Web.APDRiskClauseInputSet.Clause.Details") : DisplayKey.get("Web.APDRiskClauseInputSet.Clause.Details")
  }
}
