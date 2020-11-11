package gw.apd.model.export

uses gw.apd.model.export.xsd.apdproductimport.Import
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Attribute_Codes
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Attribute_Codes_APDDropDownEntry_Description_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Attribute_Codes_APDDropDownEntry_Name_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Attribute_Codes_APDDropDownEntry_Values
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Attribute_Description_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Attribute_Label_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Attribute_Rules_APDAttributeRule
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Attribute_Rules_APDDropDownEntryRule
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Clause_Description_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Clause_Name_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Clause_Rules_APDClauseRule
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Clause_ScheduledItem
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Clause_Terms
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Clause_Terms_APDTerm
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Clause_Terms_APDTerm_DropdownColumns
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Clause_Terms_APDTerm_DropdownColumns_APDDropdownColumn_Name_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.CostDefinition_CostCodeFilters
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.CostDefinition_CostSteps
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_ChildrenLabel_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_ClauseCategories
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_ClauseCategories_APDClauseCategory_Description_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_ClauseCategories_APDClauseCategory_Name_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Clauses
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Clauses_APDCondition
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Clauses_APDCoverage
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Clauses_APDCoverage_ClaimCategories
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Clauses_APDCoverage_CostDefinitions
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Clauses_APDCoverage_Perils
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Clauses_APDExclusion
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_CoreFields
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_CostDefinitions
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Description_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_ExposureLabel_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Exposures
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Exposures_APDExposure_Description_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Exposures_APDExposure_Fields
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Exposures_APDExposure_MenuLabel_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Exposures_APDExposure_Name_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Fields
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Fields_APDField
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_Name_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Coverable_MenuLabel_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Import_APDProductLine
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Import_APDProductToLine
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Import_APDProduct_Description_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Import_APDProduct_Name_L10N_ARRAY
uses gw.apd.model.export.xsd.apdproductimport.anonymous.elements.Rule_RuleElements
uses gw.api.database.Query
uses gw.api.locale.DisplayKey
uses gw.api.system.PCLoggerCategory
uses gw.api.web.WebFile
uses gw.datatype.DataTypes
uses gw.lang.reflect.IPropertyInfo
uses gw.pl.persistence.core.Bundle
uses gw.util.Pair
uses gw.xml.XmlElement

uses java.io.BufferedInputStream

uses entity.APDDropdownValue
uses entity.APDDropdownColumn
uses entity.APDAttribute
uses entity.APDClause
uses entity.APDCoverable
uses entity.APDCostDefinition
uses org.apache.commons.lang3.StringUtils

/**
 * Helper class to build all the objects from the 'Import' XmlElement structure
 * Maps the various complex types to their sub-elements
 */
@Export
class APDProductImportHelper implements ImportHelper {
  private var _webXMLFile : WebFile as readonly XMLFile
  private var _import : Import
  private var _product : APDProduct

  override property set XMLFile(file : WebFile) {
    _webXMLFile = file
  }

  override property get NewProduct() : APDProduct {
    return _product
  }

  // Note that the PublicIDs already in the database take precedence,
  //      so some matching objects may have a different PublicID in the XML from the database

  // a list of all attributes and their XML publicIDs; this is used to find attributes from their XML ID
  var allAttributes : HashMap<String, APDAttribute>
  // a list of all coverages and their XML publicIDs; this is used to find coverages from their XML ID
  var allCoverages : HashMap<String, APDCoverage>
  // a list of all options and packages and their XML publicIDs; this is used to find coverages from their XML ID
  var allOptionsAndPackages : HashMap<String, APDDropdownEntry>
  // the reference using the XML publicID from one attrbute to another
  var attributeToAttribute = new ArrayList<Pair<APDAttribute, String>>()
  // the list of the clause categories used their XML publicIDs
  var allClauseCategories : HashMap<String, APDClauseCategory>
  // the list of all rules to include in a second pass once the product structure is built
  var allRules : ArrayList<Pair<APDRule, XmlElement>>

  construct(p : APDProduct) {
    _product = p
  }

  override function validateXML() : String {
    if (_webXMLFile == null) return DisplayKey.get("Web.APDValidation.XML.MissingFileName")
    try {
      _import = Import.parse(new BufferedInputStream(_webXMLFile.InputStream))
    }
    catch (e : Exception) {
      PCLoggerCategory.SERVER.info("Error importing APD product template from \"${_webXMLFile.Name}\": ${e.Message}")
      return DisplayKey.get("Web.APDValidation.XML.InvalidFile", _webXMLFile.Name)
    }

    return null
  }

  override function importProduct() {
    if (_product == null) {
      gw.transaction.Transaction.runWithNewBundle(\bun -> {
        buildAndImportProduct()
      })
    } else {
      buildAndImportProduct()
      _product.DateUpdated = Date.CurrentDate
      for (productToLine in _product.ProductLines) {
        productToLine.ProductLine.ProductLine.Products.each(\elt -> {elt.Product.DateUpdated = Date.CurrentDate})
      }
    }
  }

  private function buildAndImportProduct() {
    _product = buildProduct()
    final var productLines = new ArrayList<APDProductLine>()
    _import.APDProductLine.each(\pl -> productLines.add(buildProductLine(pl)))
    _import.APDProductToLine.each(\ptl -> buildProductToLine(_product, productLines, ptl))
    // complete product build once structure is in place
    _product.syncEntriesForProductCoreField()
    completeRules()
  }

  /** ********************************************** import XML *************************************************************** **/

  private function buildProduct() : APDProduct {
    final var bundle = gw.transaction.Transaction.getCurrent()
    final var importProduct = _import.APDProduct
    var product : APDProduct
    if (_product == null) {
      product = new APDProduct()
      product.PublicID = importProduct.PublicId
    }
    else {
      product = bundle.add(_product)
    }

    product.Abbreviation = product.Abbreviation ?: importProduct.Abbreviation
    product.CodeIdentifier = importProduct.CodeIdentifier
    product.Coinsurance = importProduct.Coinsurance
    product.Currencies = APDCurrencyHandling.getTypeKey(importProduct.Currencies)
    product.DefinitionSequence = importProduct.DefinitionSequence
    product.Description = importProduct.Description
    if (importProduct.DateInstalled != null) {
      product.DateInstalled = importProduct.DateInstalled.toCalendar().Time
    }
    if (importProduct.DateUpdated != null) {
      product.DateUpdated = importProduct.DateUpdated.toCalendar().Time
    }
    buildProductDescriptions(product, importProduct.Description_L10N_ARRAY)
    product.Multiline = importProduct.Multiline
    product.Name = importProduct.Name
    buildProductNames(product, importProduct.Name_L10N_ARRAY)
    if (importProduct.ProductAccountType != null) {
      product.ProductAccountType = ProductAccountType.getTypeKey(importProduct.ProductAccountType)
    }
    product.ProductCode = importProduct.ProductCode
    product.UsesLocationListView = importProduct.UsesLocationListView
    product.WrittenByThirdParty = importProduct.WrittenByThirdParty

    return product
  }

  private function buildProductLine(pl : Import_APDProductLine) : APDProductLine {
    final var bundle = gw.transaction.Transaction.getCurrent()
    allAttributes = new HashMap<String, APDAttribute>()
    allCoverages = new HashMap<String, APDCoverage>()
    allOptionsAndPackages = new HashMap<String, APDDropdownEntry>()
    attributeToAttribute = new ArrayList<Pair<APDAttribute, String>>()
    allClauseCategories = new HashMap<String, APDClauseCategory>()
    allRules = new ArrayList<Pair<APDRule, XmlElement>>()

    // look for line on the product first, then in the database
    var productLine = _product.ProductLines*.ProductLine.firstWhere(\line -> line.LinePrefix == pl.LinePrefix) ?:
        Query.make(APDProductLine).compare(APDProductLine#LinePrefix, Equals, pl.LinePrefix).select().first()
    if (productLine == null) {
      productLine = new APDProductLine()
      productLine.PublicID = pl.PublicId
    }
    else {
      productLine = bundle.add(productLine)
    }

    productLine.CodeIdentifier = pl.CodeIdentifier
    productLine.Currencies = APDCurrencyHandling.getTypeKey(pl.Currencies)
    // Update the Definition sequence to a greater value of the in-memory and XML values.
    // Addition of core fields can lead to increments in definition sequence of in-memory line.
    productLine.DefinitionSequence = Math.max(productLine.DefinitionSequence, pl.DefinitionSequence)
    productLine.LinePrefix = productLine.LinePrefix ?: pl.LinePrefix
    productLine.ProductLineCode = pl.ProductLineCode

    productLine.ChildrenLabel = pl.ChildrenLabel
    buildCoverableChildrenLabels(productLine, pl.ChildrenLabel_L10N_ARRAY)
    productLine.CoverableType = APDCoverableType.getTypeKey(pl.CoverableType)
    productLine.Description = pl.Description
    buildCoverableDescriptions(productLine, pl.Description_L10N_ARRAY)
    productLine.ExposureLabel = pl.ExposureLabel
    buildCoverableExposureLabels(productLine, pl.ExposureLabel_L10N_ARRAY)
    productLine.HasChildren = pl.HasChildren
    productLine.HasExposure = pl.HasExposure
    productLine.HasModifiers = pl.HasModifiers ?: false
    productLine.IsAutoNumbered = false // is ignored so this is logically correct
    productLine.MenuLabel = pl.MenuLabel
    buildCoverableMenuLabels(productLine, pl.MenuLabel_L10N_ARRAY)
    productLine.Name = pl.Name
    buildCoverableNames(productLine, pl.Name_L10N_ARRAY)
    productLine.RiskLocation = APDRiskLocationType.getTypeKey(pl.RiskLocation)
    productLine.SeparateBilling = pl.SeparateBilling
    productLine.SeparateCollection = pl.SeparateCollection
    productLine.TypeName = trim(pl.TypeName, APDProductLine#TypeName.PropertyInfo)
    productLine.WrittenByThirdParty = pl.WrittenByThirdParty

    buildCoreFields(productLine, pl.CoreFields)
    buildExposures(productLine, pl.Exposures)
    buildFields(productLine, pl.Fields)
    buildClauseCategories(productLine, pl.ClauseCategories)
    buildClauses(productLine, pl.Clauses)
    buildRiskCostDefinitions(productLine, pl.CostDefinitions)

    // build children (which can refer to their parent elements)
    buildCoverables(productLine)

    // add foreign key references from attribute to attribute now all are loaded
    attributeToAttribute.each(\aa -> {
      aa.First.OwningDropDown = allAttributes.get(aa.Second)
    })

    return productLine
  }

  private function buildProductToLine(p : APDProduct, pls : ArrayList<APDProductLine>, ptl : Import_APDProductToLine) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    var productToLine = Query.make(APDProductToLine).compare(APDProductToLine#PublicID, Equals, ptl.PublicId).select().first()
    if (productToLine == null) {
      productToLine = new APDProductToLine()
      productToLine.PublicID = ptl.PublicId
    }
    else {
      productToLine = bundle.add(productToLine)
    }

    productToLine.Product = p

    try {
      productToLine.ProductLine = pls.singleWhere(\pl -> pl.PublicID == ptl.ProductLine.PublicId)
    } catch (e : IllegalStateException) {
      throw new IllegalArgumentException("Unable to build APDProductToLine. Import line "+ptl.ProductLine.PublicId+" not found in lines array "+pls*.PublicID.toList())
    }

  }

  /** *********************************************** build elements ******************************************************************** **/

  private function buildProductDescriptions(product : APDProduct, importProductDescriptions : Import_APDProduct_Description_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = importProductDescriptions.APDProduct_Description_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        product["Description_" + language.Code] = XMLValue
      }
    })
  }

  private function buildProductNames(product : APDProduct, importProductNames : Import_APDProduct_Name_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = importProductNames.APDProduct_Name_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        product["Name_" + language.Code] = XMLValue
      }
    })
  }

  private function buildCoverables(parent: APDCoverable) {
    final var bundle = gw.transaction.Transaction.getCurrent()
    final var importCoverables = _import.APDCoverable.where(\cbl -> cbl.Parent.PublicId == parent.PublicID)
    final var children = new ArrayList<APDCoverable>()

    importCoverables.each(\cbl -> {
      // try and match puplicID as these are likely to match if updating from a common saved template
      // alternatively match on the name in case of mismatched publicID
      var coverable = parent.ChildCoverables.firstWhere(\child -> child.PublicID == cbl.PublicId)
          ?: parent.ChildCoverables.firstWhere(\child -> child.Name == cbl.Name and child.Name != null)
      if (coverable == null) {
        coverable = new APDCoverable()
        coverable.PublicID = cbl.PublicId
        coverable.Parent = parent
      } else {
        coverable = bundle.add(coverable)
      }
      coverable.ChildrenLabel = cbl.ChildrenLabel
      buildCoverableChildrenLabels(coverable, cbl.ChildrenLabel_L10N_ARRAY)
      coverable.CoverableType = APDCoverableType.getTypeKey(cbl.CoverableType)
      coverable.Description = cbl.Description
      buildCoverableDescriptions(coverable, cbl.Description_L10N_ARRAY)
      coverable.ExposureLabel = cbl.ExposureLabel
      buildCoverableExposureLabels(coverable, cbl.ExposureLabel_L10N_ARRAY)
      coverable.HasChildren = cbl.HasChildren
      coverable.HasExposure = cbl.HasExposure
      coverable.HasModifiers = cbl.HasModifiers
      coverable.IsAutoNumbered = cbl.IsAutoNumbered
      coverable.MenuLabel = cbl.MenuLabel
      buildCoverableMenuLabels(coverable, cbl.MenuLabel_L10N_ARRAY)
      coverable.Name = cbl.Name
      buildCoverableNames(coverable, cbl.Name_L10N_ARRAY)
      coverable.RiskLocation = APDRiskLocationType.getTypeKey(cbl.RiskLocation)
      coverable.SeparateBilling = cbl.SeparateBilling
      coverable.SeparateCollection = cbl.SeparateCollection
      coverable.TypeName = trim(cbl.TypeName, APDCoverable#TypeName.PropertyInfo)
      coverable.WrittenByThirdParty = cbl.WrittenByThirdParty

      buildCoreFields(coverable, cbl.CoreFields)
      buildExposures(coverable, cbl.Exposures)
      buildFields(coverable, cbl.Fields)
      buildClauseCategories(coverable, cbl.ClauseCategories)
      buildClauses(coverable, cbl.Clauses)
      buildRiskCostDefinitions(coverable, cbl.CostDefinitions)

      // build children (which can refer to their parent elements using XML public IDs)
      buildCoverables(coverable)

      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      cbl.PublicId = coverable.PublicID

      children.add(coverable)
    })

    // remove coverables no longer used and not matched by name
    parent.ChildCoverables.where(\child -> not importCoverables.hasMatch(\cbl -> cbl.PublicId == child.PublicID)).each(\child -> bundle.add(child).remove())
  }

  private function buildCoverableChildrenLabels(coverable : APDCoverable, coverableChildrenLabels : Coverable_ChildrenLabel_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = coverableChildrenLabels.APDCoverable_ChildrenLabel_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        coverable["ChildrenLabel_" + language.Code] = XMLValue
      }
    })
  }

  private function buildCoverableDescriptions(coverable : APDCoverable, coverableDescriptions : Coverable_Description_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = coverableDescriptions.APDCoverable_Description_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        coverable["Description_" + language.Code] = XMLValue
      }
    })
  }

  private function buildCoverableExposureLabels(coverable : APDCoverable, coverableExposureLabels : Coverable_ExposureLabel_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = coverableExposureLabels.APDCoverable_ExposureLabel_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        coverable["ExposureLabel_" + language.Code] = XMLValue
      }
    })
  }

  private function buildCoverableMenuLabels(coverable : APDCoverable, coverableNames : Coverable_MenuLabel_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = coverableNames.APDCoverable_MenuLabel_L10N?.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        coverable["MenuLabel_" + language.Code] = XMLValue
      }
    })
  }
  private function buildCoverableNames(coverable : APDCoverable, coverableNames : Coverable_Name_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = coverableNames.APDCoverable_Name_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        coverable["Name_" + language.Code] = XMLValue
      }
    })
  }

  /** ******************** exposures ******************************** **/

  private function buildExposures(cbl : APDCoverable, exposures : Coverable_Exposures) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new clause cateegories
    exposures.APDExposure.each(\exp -> {
      // try to match on publicID; if no match and there is just one, assume this is the one
      var exposure = cbl.Exposures.firstWhere(\e -> e.PublicID == exp.PublicId)
          ?: (cbl.Exposures.Count == 1 and exposures.APDExposure.Count == 1) ? cbl.Exposures.first() : null
      if (exposure == null) {
        exposure = new APDExposure()
        exposure.PublicID = exp.PublicId
        cbl.addToExposures(exposure)
      } else {
        exposure = bundle.add(exposure)
      }
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      exp.PublicId = exposure.PublicID

      exposure.ContactRole = APDExposureContactRole.getTypeKey(exp.ContactRole)
      exposure.Description = exp.Description
      buildExposureDescriptions(exposure, exp.Description_L10N_ARRAY)
      exposure.ExposureType = APDExposureType.getTypeKey(exp.ExposureType)
      exposure.IsAutoNumbered = false // ignore for the time being until fixed
      exposure.MenuLabel = exp.MenuLabel
      buildExposureMenuLabels(exposure, exp.MenuLabel_L10N_ARRAY)
      exposure.Name = exp.Name
      buildExposureNames(exposure, exp.Name_L10N_ARRAY)
      exposure.RatingType = APDExposureRatingType.getTypeKey(exp.RatingType)
      exposure.RiskLocation = APDRiskLocationType.getTypeKey(exp.RiskLocation)
      exposure.TypeName = trim(exp.TypeName, APDExposure#TypeName.PropertyInfo)
      buildExposureFields(exposure, exp.Fields)
    })

    // remove exposures no longer used
    cbl.Exposures.where(\e -> not exposures.APDExposure.hasMatch(\exp -> exp.PublicId == e.PublicID)).each(\e -> e.remove())

  }

  private function buildExposureDescriptions(exposure : APDExposure, exposureDescriptions : Coverable_Exposures_APDExposure_Description_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = exposureDescriptions.APDExposure_Description_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        exposure["Description_" + language.Code] = XMLValue
      }
    })
  }

  private function buildExposureMenuLabels(exposure : APDExposure, exposureNames : Coverable_Exposures_APDExposure_MenuLabel_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages().toTypedArray().each(\language -> {
      final var XMLValue = exposureNames.APDExposure_MenuLabel_L10N?.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        exposure["Name_" + language.Code] = XMLValue
      }
    })
  }

  private function buildExposureNames(exposure : APDExposure, exposureNames : Coverable_Exposures_APDExposure_Name_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages().toTypedArray().each(\language -> {
      final var XMLValue = exposureNames.APDExposure_Name_L10N?.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        exposure["Name_" + language.Code] = XMLValue
      }
    })
  }

  /** ******************** clauses ********************************** **/

  private function buildClauseCategories(cbl : APDCoverable, ccs : Coverable_ClauseCategories){
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new clause categories
    ccs.APDClauseCategory.each(\cc -> {
      var trimmedCodeIdentifier = trim(cc.CodeIdentifier, APDClauseCategory#CodeIdentifier.PropertyInfo)
      var clauseCategory = cbl.ClauseCategories.firstWhere(\cCat -> cCat.PublicID == cc.PublicId)
          ?: cbl.ClauseCategories.firstWhere(\cCat -> cCat.CodeIdentifier == trimmedCodeIdentifier and cCat.CodeIdentifier != null)
          ?: cbl.ClauseCategories.firstWhere(\cCat -> cCat.Name == cc.Name and cCat.Name != null)
      if (clauseCategory == null) {
        clauseCategory = new APDClauseCategory()
        clauseCategory.PublicID = cc.PublicId
        cbl.addToClauseCategories(clauseCategory)
      } else {
        clauseCategory = bundle.add(clauseCategory)
      }
      allClauseCategories.put(cc.PublicId, clauseCategory)
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      cc.PublicId = clauseCategory.PublicID

      clauseCategory.CodeIdentifier = trimmedCodeIdentifier
      clauseCategory.Description = cc.Description
      buildClauseCategoryDescriptions(clauseCategory, cc.Description_L10N_ARRAY)
      clauseCategory.Hidden = cc.Hidden
      clauseCategory.Itemised = cc.Itemised
      clauseCategory.Name = cc.Name
      buildClauseCategoryNames(clauseCategory, cc.Name_L10N_ARRAY)
      clauseCategory.Sequence = cc.Sequence
    })

    // remove clause categories no longer used
    cbl.ClauseCategories.where(\cCat -> not ccs.APDClauseCategory.hasMatch(\cc -> cc.PublicId == cCat.PublicID)).each(\cCat -> cCat.remove())
  }

  private function buildClauseCategoryDescriptions(category : APDClauseCategory, categoryDescriptions : Coverable_ClauseCategories_APDClauseCategory_Description_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = categoryDescriptions.APDClauseCategory_Description_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        category["Description_" + language.Code] = XMLValue
      }
    })
  }

  private function buildClauseCategoryNames(category : APDClauseCategory, categoryNames : Coverable_ClauseCategories_APDClauseCategory_Name_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = categoryNames.APDClauseCategory_Name_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        category["Name_" + language.Code] = XMLValue
      }
    })
  }

  private function buildClauses(cbl : APDCoverable, clauses : Coverable_Clauses) {
    clauses.APDCoverage.each(\cov -> buildCoverage(cbl, cov))
    clauses.APDCondition.each(\cov -> buildCondition(cbl, cov))
    clauses.APDExclusion.each(\cov -> buildExclusion(cbl, cov))

    // remove clause no longer used
    cbl.Clauses.whereTypeIs(APDCoverage).where(\c -> not clauses.APDCoverage.hasMatch(\cov -> cov.PublicId == c.PublicID)).each(\c -> c.remove())
    cbl.Clauses.whereTypeIs(APDCondition).where(\c -> not clauses.APDCondition.hasMatch(\cov -> cov.PublicId == c.PublicID)).each(\c -> c.remove())
    cbl.Clauses.whereTypeIs(APDExclusion).where(\c -> not clauses.APDExclusion.hasMatch(\cov -> cov.PublicId == c.PublicID)).each(\c -> c.remove())
  }

  private function buildCoverage(cbl : APDCoverable, cov : Coverable_Clauses_APDCoverage) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    var trimmedCodeIdentifier = trim(cov.CodeIdentifier, APDCoverage#CodeIdentifier.PropertyInfo)
    var coverage = cbl.Clauses.whereTypeIs(APDCoverage).firstWhere(\c -> c.PublicID == cov.PublicId)
        ?: cbl.Clauses.whereTypeIs(APDCoverage).firstWhere(\c -> c.CodeIdentifier== trimmedCodeIdentifier and c.CodeIdentifier != null)
        ?: cbl.Clauses.whereTypeIs(APDCoverage).firstWhere(\c -> c.Name == cov.Name and c.Name != null)
    if (coverage == null) {
      coverage = new APDCoverage()
      cbl.addToClauses(coverage)
      coverage.PublicID = cov.PublicId
    } else {
      coverage = bundle.add(coverage)
    }
    // existing model publicID takes precedence - update the XML to match so that is can be referenced later
    cov.PublicId = coverage.PublicID

    // clause categories indexed by XML publicID
    coverage.ClauseCategory = allClauseCategories.get(cov.ClauseCategory.PublicId)
    coverage.CodeIdentifier = trimmedCodeIdentifier
    coverage.Description = cov.Description
    buildClauseDescriptions(coverage, cov.Description_L10N_ARRAY)
    coverage.Name = cov.Name
    buildClauseNames(coverage, cov.Name_L10N_ARRAY)
    cov.Rules.APDClauseRule?.each(\rule -> {
      buildClauseRule(coverage, rule, bundle)
    })
    // remove rules that no longer exist
    coverage.Rules.where(\fRule -> not cov.Rules.APDClauseRule?.hasMatch(\rc -> clauseRuleMatches(fRule, rc))).each(\fRule -> fRule.remove())
    buildScheduledItem(coverage, cov.ScheduledItem)
    coverage.Sequence = cov.Sequence
    buildTerms(coverage, cov.Terms)

    buildClaimCategories(coverage, cov.ClaimCategories)
    coverage.PricingOrder = cov.PricingOrder
    coverage.SeparateBilling = cov.SeparateBilling
    coverage.SeparateCollection = cov.SeparateCollection
    coverage.WrittenByThirdParty = cov.WrittenByThirdParty
    // perils and cost definitions use elements of the definition so must be added last
    buildCoveragePerils(coverage, cov.Perils)
    buildCoverageCostDefinitions(coverage, cov.CostDefinitions)
    allCoverages.put(cov.PublicId, coverage)
  }

  private function buildCondition(cbl : APDCoverable, cond: Coverable_Clauses_APDCondition) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    var trimmedCodeIdentifier = trim(cond.CodeIdentifier, APDCondition#CodeIdentifier.PropertyInfo)
    var condition = cbl.Clauses.whereTypeIs(APDCondition).firstWhere(\c -> c.PublicID == cond.PublicId)
        ?: cbl.Clauses.whereTypeIs(APDCondition).firstWhere(\c -> c.CodeIdentifier== trimmedCodeIdentifier and c.CodeIdentifier != null)
        ?: cbl.Clauses.whereTypeIs(APDCondition).firstWhere(\c -> c.Name == cond.Name and c.Name != null)
    if (condition == null) {
      condition = new APDCondition()
      cbl.addToClauses(condition)
      condition.PublicID = cond.PublicId
    }
    else {
      condition = bundle.add(condition)
    }
    // existing model publicID takes precedence - update the XML to match so that is can be referenced later
    cond.PublicId = condition.PublicID

    condition.ClauseCategory = cbl.ClauseCategories.firstWhere(\cCat -> cCat.PublicID == cond.ClauseCategory.PublicId)
    condition.CodeIdentifier = trimmedCodeIdentifier
    condition.Description = cond.Description
    buildClauseDescriptions(condition, cond.Description_L10N_ARRAY)
    condition.Name = cond.Name
    buildClauseNames(condition, cond.Name_L10N_ARRAY)
    cond.Rules.APDClauseRule?.each(\rule -> {
      buildClauseRule(condition, rule, bundle)
    })
    // remove rules that no longer exist
    condition.Rules.where(\fRule -> not cond.Rules.APDClauseRule?.hasMatch(\rc -> clauseRuleMatches(fRule, rc))).each(\fRule -> fRule.remove())
    buildScheduledItem(condition, cond.ScheduledItem)
    condition.Sequence = cond.Sequence
    buildTerms(condition, cond.Terms)
  }

  private function buildExclusion(cbl : APDCoverable, excl : Coverable_Clauses_APDExclusion) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    var trimmedCodeIdentifier = trim(excl.CodeIdentifier, APDExclusion#CodeIdentifier.PropertyInfo)
    var exclusion = cbl.Clauses.whereTypeIs(APDExclusion).firstWhere(\c -> c.PublicID == excl.PublicId)
        ?: cbl.Clauses.whereTypeIs(APDExclusion).firstWhere(\c -> c.CodeIdentifier== trimmedCodeIdentifier and c.CodeIdentifier != null)
        ?: cbl.Clauses.whereTypeIs(APDExclusion).firstWhere(\c -> c.Name == excl.Name and c.Name != null)
    if (exclusion == null) {
      exclusion = new APDExclusion()
      cbl.addToClauses(exclusion)
      exclusion.PublicID = excl.PublicId
    }
    else {
      exclusion = bundle.add(exclusion)
    }
    // existing model publicID takes precedence - update the XML to match so that is can be referenced later
    excl.PublicId = exclusion.PublicID

    exclusion.ClauseCategory = cbl.ClauseCategories.firstWhere(\cCat -> cCat.PublicID == excl.ClauseCategory.PublicId)
    exclusion.CodeIdentifier = trimmedCodeIdentifier
    exclusion.Description = excl.Description
    buildClauseDescriptions(exclusion, excl.Description_L10N_ARRAY)
    exclusion.Name = excl.Name
    buildClauseNames(exclusion, excl.Name_L10N_ARRAY)
    excl.Rules.APDClauseRule?.each(\rule -> {
      buildClauseRule(exclusion, rule, bundle)
    })
    // remove rules that no longer exist
    exclusion.Rules.where(\fRule -> not excl.Rules.APDClauseRule?.hasMatch(\rc -> clauseRuleMatches(fRule, rc))).each(\fRule -> fRule.remove())
    buildScheduledItem(exclusion, excl.ScheduledItem)
    exclusion.Sequence = excl.Sequence
    buildTerms(exclusion, excl.Terms)
  }

  private function buildClauseDescriptions(clause : APDClause, clauseDescriptions : Clause_Description_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = clauseDescriptions.APDClause_Description_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        clause["Description_" + language.Code] = XMLValue
      }
    })
  }

  private function buildClauseNames(clause : APDClause, clauseNames : Clause_Name_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = clauseNames.APDClause_Name_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        clause["Name_" + language.Code] = XMLValue
      }
    })
  }

  private function buildScheduledItem(clause : APDClause, exportedSchedule : Clause_ScheduledItem) {
    // add or remove scheduled item based on whether one exists in the template
    clause.HasSchedule = (exportedSchedule != null)

    if (exportedSchedule != null) {
      // copy values from the exported schedule
      var scheduledItem = clause.ScheduledItem
      scheduledItem.PublicID = exportedSchedule.PublicId

      // only set the value if it exists in order to not overwrite the auto-generated description
      if (exportedSchedule.Description != null and exportedSchedule.Description.HasContent) {
        scheduledItem.Description = exportedSchedule.Description
      }
      buildCoverableDescriptions(scheduledItem, exportedSchedule.Description_L10N_ARRAY)

      // only set the value if it exists in order to not overwrite the auto-generated name
      if (exportedSchedule.Name != null and exportedSchedule.Name.HasContent) {
        scheduledItem.Name = exportedSchedule.Name
      }
      buildCoverableNames(scheduledItem, exportedSchedule.Name_L10N_ARRAY)

      // only set the value if it exists in order to not overwrite the auto-generated type name
      var typeName = trim(exportedSchedule.TypeName, APDScheduledItem#TypeName.PropertyInfo)
      if (typeName != null and typeName.HasContent) {
        scheduledItem.TypeName = typeName
      }

      buildClauseScheduleTermsAndRemoveUnusedTerms(clause, exportedSchedule)
    }
  }

  private function buildClauseRule(clause : APDClause, rule : Clause_Rules_APDClauseRule, bundle : Bundle) {
    var clauseRule = clause.Rules.firstWhere(\aRule -> clauseRuleMatches(aRule, rule))
    var ruleType = APDRuleType.get(rule.RuleType)
    var tagType = APDTagType.getTypeKey(rule.TagType)
    var existence = APDDataExistenceType.get(rule.DefaultExistence)

    if (clauseRule == null) {
      clauseRule = clause.createAndAddRule(ruleType)
    } else {
      clauseRule = bundle.add(clauseRule)
      clauseRule.RuleType = ruleType
    }
    clauseRule.DefaultExistence = existence
    clauseRule.TagType = tagType

    // store rules to be completed later once the full product structure has been imported
    allRules.add(new Pair<APDRule, XmlElement>(clauseRule, rule))
  }

  private static function clauseRuleMatches(existingRule : APDClauseRule, importRule : Clause_Rules_APDClauseRule) : boolean {
    return (existingRule.RuleType.Code == importRule.RuleType)
        and (existingRule.TagType.Code == importRule.TagType)
  }

  /** ******************** attributes ********************************** **/

  private function buildCoreFields(cbl : APDCoverable, fields : Coverable_CoreFields) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new clause categories
    fields.APDCoreAttribute?.each(\fld -> {
      // try to match on (1) publicID (2) field type
      var field = cbl.CoreFields.firstWhere(\f -> f.PublicID == fld.PublicId)
          ?: cbl.CoreFields.firstWhere(\f -> f.FieldType.Code == fld.FieldType)
      if (field == null) {
        field = new APDCoreAttribute()
        field.PublicID = fld.PublicId
        cbl.addToCoreFields(field)
      } else {
        field = bundle.add(field)
      }
      // store XML publicID to pick up references to it later
      allAttributes.put(fld.PublicId, field)
      // existing model publicID takes presidence - update the XML to match so that is can be referenced later
      fld.PublicId = field.PublicID

      field.FieldType = APDCoreFieldType.getTypeKey(fld.FieldType)

      field.Description = fld.Description
      buildAttributeDescriptions(field, fld.Description_L10N_ARRAY)
      field.DoNotRegenerate = fld.DoNotRegenerate
      field.DropDownType = APDDropDownType.getTypeKey(fld.DropDownType)
      field.IsDropDownOwner = fld.IsDropDownOwner
      field.Jurisdiction = fld.Jurisdiction
      field.Label = fld.Label
      buildAttributeLabels(field, fld.Label_L10N_ARRAY)
      field.Name = trim(fld.Name, APDCoreAttribute#Name.PropertyInfo)
      // these have to be stored and set later as not all attributes may have been loaded yet
      if (fld.OwningDropDown.PublicId != null)
        attributeToAttribute.add(new Pair<APDAttribute, String>(field, fld.OwningDropDown.PublicId))
      field.Sequence = fld.Sequence
      field.Type = APDFieldType.getTypeKey(fld.Type)
      field.Typelist = fld.Typelist

      if (fld.OwningDropDown.PublicId == null) buildDropdownEntries(field, fld.Codes)
    })
    // synchronise with current core field list
    if (cbl typeis APDProductLine) {
      cbl.syncCoreFields()
    }
  }

  private function buildFields(cbl : APDCoverable, fields : Coverable_Fields) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new clause categories
    fields.APDField.each(\fld -> {
      // try to match on (1) publicID (2) field name (3) label
      var trimmedName = trim(fld.Name, APDField#Name.PropertyInfo)
      var field = cbl.Fields.firstWhere(\f -> f.PublicID == fld.PublicId)
          ?: cbl.Fields.firstWhere(\f -> f.Name == trimmedName and f.Name != null)
          ?: cbl.Fields.firstWhere(\f -> f.Label == fld.Label and f.Label != null)
      if (field == null) {
        field = new APDField()
        field.PublicID = fld.PublicId
        cbl.addToFields(field)
      } else {
        field = bundle.add(field)
      }
      // store XML publicID to pick up references to it later
      allAttributes.put(fld.PublicId, field)
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      fld.PublicId = field.PublicID

      field.Identifier = fld.Identifier

      field.Description = fld.Description
      buildAttributeDescriptions(field, fld.Description_L10N_ARRAY)
      field.DoNotRegenerate = fld.DoNotRegenerate
      field.DropDownType = APDDropDownType.getTypeKey(fld.DropDownType)
      field.IsDropDownOwner = fld.IsDropDownOwner
      field.Jurisdiction = fld.Jurisdiction
      field.Label = fld.Label
      buildAttributeLabels(field, fld.Label_L10N_ARRAY)
      field.Name = trimmedName
      // these have to be stored and set later as not all attributes may have been loaded yet
      if (fld.OwningDropDown.PublicId != null) attributeToAttribute.add(new Pair<APDAttribute, String>(field, fld.OwningDropDown.PublicId))
      if (fld.Scalable != null) {
        field.Scalable = fld.Scalable
      }
      field.Sequence = fld.Sequence
      if (fld.SplitByRatingPeriods != null) {
        field.SplitByRatingPeriods = fld.SplitByRatingPeriods
      }
      field.Type = APDFieldType.getTypeKey(fld.Type)
      field.Typelist = fld.Typelist

      if (field.OwningDropDown == null) buildDropdownEntries(field, fld.Codes)

      fld.Rules.APDAttributeRule?.each(\rule -> {
        buildAttributeRule(field, rule, bundle)
      })
      fld.Rules.APDDropDownEntryRule?.each(\rule -> {
        buildDropDownEntryRule(field, rule, bundle)
      })
      // remove rules that no longer exist
      field.Rules.where(\fRule -> typeof fRule == APDAttributeRule and not fld.Rules.APDAttributeRule?.hasMatch(\rc -> attributeRuleMatches(fRule, rc)))
          .each(\fRule -> fRule.remove())
      field.Rules.whereTypeIs(APDDropdownEntryRule)
          .where(\fRule -> not fld.Rules.APDDropDownEntryRule?.hasMatch(\rc ->
              dropdownEntryRuleMatchesOnPublicId(fRule, rc)
                  or dropdownEntryRuleMatchesOnCode(fRule, rc)
                  or dropdownEntryRuleMatchesOnName(fRule, rc)))
          .each(\fRule -> fRule.remove())
    })

    // remove fields no longer used
    cbl.Fields.where(\f -> not fields.APDField.hasMatch(\field -> field.PublicId == f.PublicID)).each(\f -> f.remove())
  }

  private function buildExposureFields(exp : APDExposure, fields : Coverable_Exposures_APDExposure_Fields) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new clause cateegories
    fields.APDExposureField.each(\fld -> {
      // try to match on (1) publicID (2) field name (3) label
      var trimmedName = trim(fld.Name, APDExposureField#Name.PropertyInfo)
      var field = exp.Fields.firstWhere(\f ->f.PublicID == fld.PublicId)
          ?: exp.Fields.firstWhere(\f -> f.Name == trimmedName and f.Name != null)
          ?: exp.Fields.firstWhere(\f -> f.Label == fld.Label and f.Label != null)
      if (field == null) {
        field = new APDExposureField()
        field.PublicID = fld.PublicId
        exp.addToFields(field)
      } else {
        field = bundle.add(field)
      }
      // store XML publicID to pick up references to it later
      allAttributes.put(fld.PublicId, field)
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      fld.PublicId = field.PublicID

      field.ExposureParty = fld.ExposureParty
      field.BasisScalingKey = fld.BasisScalingKey

      field.Description = fld.Description
      buildAttributeDescriptions(field, fld.Description_L10N_ARRAY)
      field.DoNotRegenerate = fld.DoNotRegenerate
      field.DropDownType = APDDropDownType.getTypeKey(fld.DropDownType)
      field.IsDropDownOwner = fld.IsDropDownOwner
      field.Jurisdiction = fld.Jurisdiction
      field.Label = fld.Label
      buildAttributeLabels(field, fld.Label_L10N_ARRAY)
      field.Name = trimmedName
      // these have to be stored and set later as not all attributes may have been loaded yet
      if (fld.OwningDropDown.PublicId != null) attributeToAttribute.add(new Pair<APDAttribute, String>(field, fld.OwningDropDown.PublicId))
      if (fld.Scalable != null) {
        field.Scalable = fld.Scalable
      }
      field.Sequence = fld.Sequence
      if (fld.SplitByRatingPeriods != null) {
        field.SplitByRatingPeriods = fld.SplitByRatingPeriods
      }
      field.Type = APDFieldType.getTypeKey(fld.Type)
      field.Typelist = fld.Typelist

      if (field.OwningDropDown == null) buildDropdownEntries(field, fld.Codes)

      fld.Rules.APDAttributeRule?.each(\rule -> {
        buildAttributeRule(field, rule, bundle)
      })
      fld.Rules.APDDropDownEntryRule?.each(\rule -> {
        buildDropDownEntryRule(field, rule, bundle)
      })
      // remove rules that no longer exist
      field.Rules.where(\fRule -> typeof fRule == APDAttributeRule and not fld.Rules.APDAttributeRule?.hasMatch(\rc -> attributeRuleMatches(fRule, rc)))
          .each(\fRule -> fRule.remove())
      field.Rules.whereTypeIs(APDDropdownEntryRule)
          .where(\fRule -> not fld.Rules.APDDropDownEntryRule?.hasMatch(\rc ->
              dropdownEntryRuleMatchesOnPublicId(fRule, rc)
                  or dropdownEntryRuleMatchesOnCode(fRule, rc)
                  or dropdownEntryRuleMatchesOnName(fRule, rc)))
          .each(\fRule -> fRule.remove())
    })

    // remove fields no longer used
    exp.Fields.where(\f -> not fields.APDExposureField.hasMatch(\field -> field.PublicId == f.PublicID)).each(\f -> f.remove())
  }

  private function buildClauseScheduleTermsAndRemoveUnusedTerms(clause : APDClause, exportedSchedule : Clause_ScheduledItem) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // build schedule terms from scheduled item fields
    exportedSchedule.Fields.APDField.each(\field -> {
      if (!clause.Coverable.ScheduledItem) {
        clause.HasSchedule = true
      }
      buildScheduleTermsFromProperties(clause, field, bundle)
    })

    // build schedule terms from linked clause terms
    var clauseTerms : Clause_Terms = null
    if (exportedSchedule.Clauses.APDCoverage.HasElements and exportedSchedule.Clauses.APDCoverage.size() == 1) {
      var exportedCoverage = exportedSchedule.Clauses.APDCoverage.single()
      buildScheduleTermsFromLinkedTerms(clause, exportedCoverage.Terms)
      clauseTerms = exportedCoverage.Terms
    } else if (exportedSchedule.Clauses.APDCondition.HasElements and exportedSchedule.Clauses.APDCondition.size() == 1) {
      var exportedCondition = exportedSchedule.Clauses.APDCondition.single()
      buildScheduleTermsFromLinkedTerms(clause, exportedCondition.Terms)
      clauseTerms = exportedCondition.Terms
    } else if (exportedSchedule.Clauses.APDExclusion.HasElements and exportedSchedule.Clauses.APDExclusion.size() == 1) {
      var exportedExclusion = exportedSchedule.Clauses.APDExclusion.single()
      buildScheduleTermsFromLinkedTerms(clause, exportedExclusion.Terms)
      clauseTerms = exportedExclusion.Terms
    }

    // remove schedule terms no longer used
    if (clauseTerms != null) {
      clause.ScheduleTerms.where(\t -> not (clauseTerms.APDTerm.hasMatch(\term -> term.PublicId == t.PublicID) or
          exportedSchedule.Fields.APDField.hasMatch(\field -> field.PublicId == t.PublicID))).each(\t -> t.remove())
    } else {
      clause.ScheduleTerms.where(\t -> not exportedSchedule.Fields.APDField.hasMatch(\field -> field.PublicId == t.PublicID)).each(\t ->
          t.remove())
    }
  }

  private function buildScheduleTermsFromProperties(clause : APDClause, field : Coverable_Fields_APDField, bundle : Bundle) {
    // update existing and add new clause categories
    // try to match on (1) publicID (2) term name (3) label
    var trimmedName = trim(field.Name, APDAttribute#Name.PropertyInfo)
    var clauseTerm = clause.Terms.firstWhere(\f -> f.PublicID == field.PublicId)
        ?: clause.Terms.firstWhere(\f -> f.Name == trimmedName and f.Name != null)
        ?: clause.Terms.firstWhere(\f -> f.Label == field.Label and f.Label != null)
    if (clauseTerm == null) {
      clauseTerm = new APDTerm()
      clauseTerm.PublicID = field.PublicId
      clause.addToTerms(clauseTerm)
    } else {
      clauseTerm = bundle.add(clauseTerm)
    }
    // store XML publicID to pick up references to it later
    allAttributes.put(field.PublicId, clauseTerm)
    // existing model publicID takes precedence - update the XML to match so that is can be referenced later
    field.PublicId = clauseTerm.PublicID

    clauseTerm.ScheduleItemAttribute = true
    clauseTerm.Description = field.Description
    buildAttributeDescriptions(clauseTerm, field.Description_L10N_ARRAY)
    clauseTerm.DoNotRegenerate = field.DoNotRegenerate
    clauseTerm.DropDownType = APDDropDownType.getTypeKey(field.DropDownType)
    clauseTerm.IsDropDownOwner = field.IsDropDownOwner
    clauseTerm.Jurisdiction = field.Jurisdiction
    clauseTerm.Label = field.Label
    buildAttributeLabels(clauseTerm, field.Label_L10N_ARRAY)
    clauseTerm.Name = trimmedName
    // these have to be stored and set later as not all attributes may have been loaded yet
    if (field.OwningDropDown.PublicId != null) attributeToAttribute.add(new Pair<APDAttribute, String>(clauseTerm, field.OwningDropDown.PublicId))
    clauseTerm.Sequence = field.Sequence
    clauseTerm.Type = APDFieldType.getTypeKey(field.Type)
    clauseTerm.Typelist = field.Typelist

    if (field.OwningDropDown == null) buildDropdownEntries(clauseTerm, field.Codes)
    clauseTerm.updateGenerateAsClauseTermBasedOnType()
  }

  private function buildScheduleTermsFromLinkedTerms(clause : APDClause, terms : Clause_Terms) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    terms.APDTerm.each(\term -> {
      if (term.ScheduleItemAttribute == true and !clause.Coverable.ScheduledItem) {
        clause.HasSchedule = true
      }
      var clauseTerm = addTermToClause(clause, term, bundle)
      // set it to 'true' for linked terms
      clauseTerm.GenerateAsClauseTerm = true
    })
  }

  private function removeUnusedScheduleTerms(clause : APDClause, terms : Clause_Terms, fields : Coverable_Fields) {
    clause.ScheduleTerms.where(\t -> not (terms.APDTerm.hasMatch(\term -> term.PublicId == t.PublicID) or
        fields.APDField.hasMatch(\field -> field.PublicId == t.PublicID))).each(\t ->
        t.remove()
    )
  }

  private function buildTerms(clause : APDClause, terms : Clause_Terms) {
    final var bundle = gw.transaction.Transaction.getCurrent()
    terms.APDTerm.each(\term -> addTermToClause(clause, term, bundle))

    // remove terms no longer used
    clause.StandardTerms.where(\t -> not terms.APDTerm.hasMatch(\term -> term.PublicId == t.PublicID)).each(\t ->
        t.remove()
    )
  }

  private function addTermToClause(clause : APDClause, term : Clause_Terms_APDTerm, bundle : Bundle) : APDTerm {
    // update existing and add new clause cateegories
    // try to match on (1) publicID (2) term name (3) label
    var trimmedName = trim(term.Name, APDAttribute#Name.PropertyInfo)
    var clauseTerm = clause.Terms.firstWhere(\f -> f.PublicID == term.PublicId)
        ?: clause.Terms.firstWhere(\f -> f.Name == trimmedName and f.Name != null)
        ?: clause.Terms.firstWhere(\f -> f.Label == term.Label and f.Label != null)
    if (clauseTerm == null) {
      clauseTerm = new APDTerm()
      clauseTerm.PublicID = term.PublicId
      clause.addToTerms(clauseTerm)
    } else {
      clauseTerm = bundle.add(clauseTerm)
    }
    // store XML publicID to pick up references to it later
    allAttributes.put(term.PublicId, clauseTerm)
    // existing model publicID takes precedence - update the XML to match so that is can be referenced later
    term.PublicId = clauseTerm.PublicID

    clauseTerm.ScheduleItemAttribute = term.ScheduleItemAttribute
    // support older template imports that don't have a schedule item defined but there are schedule terms
    if (term.ScheduleItemAttribute and clause.ScheduledItem == null) {
      clause.HasSchedule = true
    }
    var columnMap = buildDropdownColumns(clauseTerm, term.DropdownColumns)

    clauseTerm.Description = term.Description
    buildAttributeDescriptions(clauseTerm, term.Description_L10N_ARRAY)
    clauseTerm.DoNotRegenerate = term.DoNotRegenerate
    clauseTerm.DropDownType = APDDropDownType.getTypeKey(term.DropDownType)
    clauseTerm.IsDropDownOwner = term.IsDropDownOwner
    clauseTerm.Jurisdiction = term.Jurisdiction
    clauseTerm.Label = term.Label
    buildAttributeLabels(clauseTerm, term.Label_L10N_ARRAY)
    clauseTerm.Name = trimmedName
    // these have to be stored and set later as not all attributes may have been loaded yet
    if (term.OwningDropDown.PublicId != null) attributeToAttribute.add(new Pair<APDAttribute, String>(clauseTerm, term.OwningDropDown.PublicId))
    if (term.Scalable != null) {
      clauseTerm.Scalable = term.Scalable
    }
    clauseTerm.Sequence = term.Sequence
    if (term.SplitByRatingPeriods != null) {
      clauseTerm.SplitByRatingPeriods = term.SplitByRatingPeriods
    }
    if (term.GenerateAsClauseTerm != null) {
      clauseTerm.GenerateAsClauseTerm = term.GenerateAsClauseTerm
    }
    clauseTerm.Type = APDFieldType.getTypeKey(term.Type)
    clauseTerm.Typelist = term.Typelist

    if (clauseTerm.OwningDropDown == null) buildDropdownEntries(clauseTerm, term.Codes, columnMap)

    term.Rules.APDAttributeRule?.each(\rule -> {
      buildAttributeRule(clauseTerm, rule, bundle)
    })
    term.Rules.APDDropDownEntryRule?.each(\rule -> {
      buildDropDownEntryRule(clauseTerm, rule, bundle)
    })
    // remove rules that no longer exist
    clauseTerm.Rules.where(\fRule -> typeof fRule == APDAttributeRule and not term.Rules.APDAttributeRule?.hasMatch(\rc -> attributeRuleMatches(fRule, rc)))
        .each(\fRule -> fRule.remove())
    clauseTerm.Rules.whereTypeIs(APDDropdownEntryRule)
        .where(\fRule -> not term.Rules.APDDropDownEntryRule?.hasMatch(\rc ->
            dropdownEntryRuleMatchesOnPublicId(fRule, rc)
                or dropdownEntryRuleMatchesOnCode(fRule, rc)
                or dropdownEntryRuleMatchesOnName(fRule, rc)))
        .each(\fRule -> fRule.remove())

    clauseTerm.updateGenerateAsClauseTermBasedOnType()
    return clauseTerm
  }

  private function buildAttributeLabels(attribute : APDAttribute, attributeLabels : Attribute_Label_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = attributeLabels.APDAttribute_Label_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        attribute["Label_" + language.Code] = XMLValue
      }
    })
  }

  private function buildAttributeDescriptions(attribute : APDAttribute, attributeDescriptions : Attribute_Description_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = attributeDescriptions.APDAttribute_Description_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        attribute["Description_" + language.Code] = XMLValue
      }
    })
  }

  private function buildAttributeRule(attribute : APDAttribute, rule : Attribute_Rules_APDAttributeRule, bundle : Bundle) {
    var attributeRule = attribute.Rules.firstWhere(\aRule -> attributeRuleMatches(aRule, rule))
    var ruleType = APDRuleType.get(rule.RuleType)
    var tagType = APDTagType.getTypeKey(rule.TagType)
    var existence = APDDataExistenceType.get(rule.DefaultExistence)

    if (attributeRule == null) {
      attributeRule = attribute.createAndAddRule(ruleType)
    } else {
      attributeRule = bundle.add(attributeRule)
      attributeRule.RuleType = ruleType
    }
    attributeRule.DefaultExistence = existence
    attributeRule.TagType = tagType

    // store rules to be completed later once the full product structure has been imported
    allRules.add(new Pair<APDRule, XmlElement>(attributeRule, rule))
  }

  private static function attributeRuleMatches(existingRule : APDAttributeRule, importRule : Attribute_Rules_APDAttributeRule) : boolean {
    return (typeof existingRule == APDAttributeRule)
        and (existingRule.RuleType.Code == importRule.RuleType)
        and (existingRule.TagType.Code == importRule.TagType)
  }

  private function buildDropDownEntryRule(attribute : APDAttribute, rule : Attribute_Rules_APDDropDownEntryRule, bundle : Bundle) {
    var attributeRules = attribute.Rules.whereTypeIs(APDDropdownEntryRule)
    var attributeRule = attributeRules.firstWhere(\aRule -> dropdownEntryRuleMatchesOnPublicId(aRule, rule))
        ?: attributeRules.firstWhere(\aRule -> dropdownEntryRuleMatchesOnCode(aRule, rule))
        ?: attributeRules.firstWhere(\aRule -> dropdownEntryRuleMatchesOnName(aRule, rule))
    var ruleType = APDRuleType.get(rule.RuleType)
    var tagType = APDTagType.getTypeKey(rule.TagType)

    if (attributeRule == null) {
      attributeRule = new APDDropdownEntryRule()
      attribute.addToRules(attributeRule)
    } else {
      attributeRule = bundle.add(attributeRule)
    }
    attributeRule.RuleType = ruleType
    attributeRule.TagType = tagType
    attributeRule.DropdownEntry = attribute.Codes.firstWhere(\c -> c.PublicID == rule.DropDownEntry.PublicId)
        ?: attribute.Codes.firstWhere(\c -> c.Code == rule.DropDownEntry.Code and c.Code != null)
        ?: attribute.Codes.firstWhere(\c -> c.Name == rule.DropDownEntry.Name and c.Name != null)

    // store rules to be completed later once the full product structure has been imported
    allRules.add(new Pair<APDRule, XmlElement>(attributeRule, rule))
  }

  private static function dropdownEntryRuleMatchesOnPublicId(existingRule : APDDropdownEntryRule, importRule : Attribute_Rules_APDDropDownEntryRule) : boolean {
    return (importRule.DropDownEntry.PublicId != null)
        and (existingRule.DropdownEntry.PublicID == importRule.DropDownEntry.PublicId)
        and (existingRule.RuleType.Code == importRule.RuleType)
        and (existingRule.TagType.Code == importRule.TagType)
  }

  private static function dropdownEntryRuleMatchesOnCode(existingRule : APDDropdownEntryRule, importRule : Attribute_Rules_APDDropDownEntryRule) : boolean {
    return (importRule.DropDownEntry.Code != null)
        and (existingRule.DropdownEntry.Code == importRule.DropDownEntry.Code)
        and (existingRule.RuleType.Code == importRule.RuleType)
        and (existingRule.TagType.Code == importRule.TagType)
  }

  private static function dropdownEntryRuleMatchesOnName(existingRule : APDDropdownEntryRule, importRule : Attribute_Rules_APDDropDownEntryRule) : boolean {
    return (existingRule.DropdownEntry.Name == importRule.DropDownEntry.Name)
        and (existingRule.RuleType.Code == importRule.RuleType)
        and (existingRule.TagType.Code == importRule.TagType)
  }

  private function buildDropdownColumns(term : APDTerm, dbcs : Clause_Terms_APDTerm_DropdownColumns) : Map<String, entity.APDDropdownColumn> {
    var columnMap = new HashMap<String, entity.APDDropdownColumn>()
    if (dbcs == null) return columnMap
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new drop down entries
    dbcs.APDDropdownColumn.each(\col -> {
      // try to match on (1) publicID (2) sequence (assuming the preferred match is by column)
      var dropdownColumn = term.DropdownColumns.firstWhere(\c -> c.PublicID == col.PublicId)
          ?: term.DropdownColumns.firstWhere(\v -> v.Sequence == col.Sequence and v.Sequence != null)
      if (dropdownColumn == null) {
        dropdownColumn = new APDDropdownColumn()
        dropdownColumn.PublicID = col.PublicId
        term.addToDropdownColumns(dropdownColumn)
      } else {
        dropdownColumn = bundle.add(dropdownColumn)
      }
      // map xml publicIDs to the objects for later lookup
      columnMap.put(col.PublicId, dropdownColumn)
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      col.PublicId = dropdownColumn.PublicID

      dropdownColumn.Name = col.Name
      buildDropdownColumnNames(dropdownColumn, col.Name_L10N_ARRAY)
      dropdownColumn.Sequence = col.Sequence
      dropdownColumn.ValueType = CovTermModelVal.getTypeKey(col.ValueType)
    })

    // remove dropdown columns no longer used
    term.DropdownColumns.where(\c -> not dbcs.APDDropdownColumn.hasMatch(\col -> col.PublicId == c.PublicID)).each(\c -> c.remove())

    return columnMap
  }

  private function buildDropdownColumnNames(col : entity.APDDropdownColumn, columnNames : Clause_Terms_APDTerm_DropdownColumns_APDDropdownColumn_Name_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = columnNames.APDDropdownColumn_Name_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        col["Name_" + language.Code] = XMLValue
      }
    })
  }

  private function buildDropdownEntries(att : APDAttribute, codes : Attribute_Codes) {
    buildDropdownEntries(att, codes, new HashMap<String, entity.APDDropdownColumn>())
  }

  private function buildDropdownEntries(att : APDAttribute, codes : Attribute_Codes, columnMap : Map<String, entity.APDDropdownColumn>) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    if (att.TypelistExists and att.DoNotRegenerate) {
      // use an existing typelist if it exists and the definition is not maintaining it
      att.sync()
    } else {
      // update existing and add new drop down entries
      codes.APDDropDownEntry.each(\code -> {
        var trimmedCodeValue = trim(code.Code, APDDropdownEntry#Code.PropertyInfo)
        // try to match on (1) publicID (2) code
        var dropdownCode = att.Codes.firstWhere(\c -> c.PublicID == code.PublicId)
            ?: att.Codes.firstWhere(\c -> c.Code == trimmedCodeValue and c.Code != null)
        if (dropdownCode == null) {
          dropdownCode = new APDDropdownEntry()
          att.addToCodes(dropdownCode)
          dropdownCode.PublicID = code.PublicId
        } else {
          dropdownCode = bundle.add(dropdownCode)
        }
        // existing model publicID takes precedence - update the XML to match so that is can be referenced later
        code.PublicId= dropdownCode.PublicID

        dropdownCode.Code = trimmedCodeValue
        dropdownCode.Currency = Currency.getTypeKey(code.Currency)
        dropdownCode.Description = code.Description
        buildDropdownEntryDescriptions(dropdownCode, code.Description_L10N_ARRAY)
        dropdownCode.Name = code.Name
        buildDropdownEntryNames(dropdownCode, code.Name_L10N_ARRAY)
        dropdownCode.Sequence = code.Sequence ?: 0
        buildDropdownValues(dropdownCode, code.Values, columnMap)

        allOptionsAndPackages.put(code.PublicId, dropdownCode)
      })

      // remove dropdown entries no longer used
      att.Codes.where(\c -> not codes.APDDropDownEntry.hasMatch(\code -> code.PublicId == c.PublicID)).each(\c -> c.remove())

      //some older templates have no exported dropdown columns/values on option terms but this is currently required
      //so we'll add an empty column automatically that will have to be filled by the user
      if (att typeis APDTerm && att.DropDownType == APDDropDownType.TC_OPTION && att.DropdownColumns.IsEmpty) {
        att.addDropdownColumnWithName("Value")
      }
    }

  }

  private function buildDropdownValues(entry : APDDropdownEntry, values : Attribute_Codes_APDDropDownEntry_Values, columnMap : Map<String, entity.APDDropdownColumn>) {
    if (values == null) return
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new drop down entries
    values.APDDropdownValue.each(\value -> {
      // try to match on (1) publicID (2) column (assuming the preferred match is by column)
      var dropdownValue  = entry.Values.firstWhere(\c -> c.PublicID == value.PublicId)
          ?: entry.Values.firstWhere(\v -> v.DropdownColumn == columnMap.get(value.PublicId))
      if (dropdownValue == null) {
        dropdownValue = new APDDropdownValue()
        dropdownValue.PublicID = value.PublicId
        entry.addToValues(dropdownValue)

      } else {
        dropdownValue = bundle.add(dropdownValue)
      }
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      value.PublicId = dropdownValue.PublicID

      dropdownValue.DropdownColumn = columnMap.get(value.DropdownColumn.PublicId)
      dropdownValue.DecimalValue = value.DecimalValue
      dropdownValue.IntegerValue = value.IntegerValue
    })

    // remove dropdown entries no longer used
    entry.Values.where(\c -> not values.APDDropdownValue.hasMatch(\value -> value.PublicId == c.PublicID)).each(\c -> c.remove())

  }

  private function buildDropdownEntryDescriptions(entry : APDDropdownEntry, codeDescriptions : Attribute_Codes_APDDropDownEntry_Description_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = codeDescriptions.APDDropdownEntry_Description_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        entry["Description_" + language.Code] = XMLValue
      }
    })
  }

  private function buildDropdownEntryNames(entry : APDDropdownEntry, codeNames : Attribute_Codes_APDDropDownEntry_Name_L10N_ARRAY) {
    gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray().each(\language -> {
      final var XMLValue = codeNames.APDDropdownEntry_Name_L10N.firstWhere(\d -> d.Language == language.Code).Value
      if (XMLValue != null) {
        entry["Name_" + language.Code] = XMLValue
      }
    })
  }
  /** *********************** rule definitions ************************** **/

  private function completeRules() {
    allRules.each(\rulePair -> {
      switch (typeof rulePair.First) {
        case APDAttributeRule :
          completeAttributeRule(rulePair.First, rulePair.Second as Attribute_Rules_APDAttributeRule)
          break
        case APDDropdownEntryRule :
          completeDropdownEntryRule(rulePair.First, rulePair.Second as Attribute_Rules_APDDropDownEntryRule)
          break
        case APDClauseRule :
          completeClauseRule(rulePair.First,rulePair.Second as Clause_Rules_APDClauseRule)
          break
      }
    })
  }

  private function completeAttributeRule(attributeRule : APDAttributeRule, rule : Attribute_Rules_APDAttributeRule) {
    final var attribute = attributeRule.Attribute

    switch (attributeRule.RuleType) {
      case APDRuleType.TC_DEFAULT :
      case APDRuleType.TC_MIN :
      case APDRuleType.TC_MAX :
        attributeRule.DefaultBitValue = rule.DefaultBitValue
        // try to match on (1) publicID (2) code (3) name
        attributeRule.DefaultCodeValue = attribute.CodesToUse?.firstWhere(\c -> c.PublicID == rule.DefaultCodeValue.PublicId)
            ?: attribute.CodesToUse?.firstWhere(\c -> c.Code == rule.DefaultCodeValue.Code and rule.DefaultCodeValue.Code != null)
            ?: attribute.CodesToUse?.firstWhere(\c -> c.Name == rule.DefaultCodeValue.Name and rule.DefaultCodeValue.Name != null)
        attributeRule.DefaultDateValue = rule.DefaultDateValue?.toCalendar().getTime()
        attributeRule.DefaultDecimalValue = rule.DefaultDecimalValue
        attributeRule.DefaultIntegerValue = rule.DefaultIntegerValue
        attributeRule.DefaultStringValue = rule.DefaultStringValue
        break
      case APDRuleType.TC_EXISTENCE :
        attributeRule.DefaultExistence = APDDataExistenceType.getTypeKey(rule.DefaultExistence)
        break
      case APDRuleType.TC_TAG :
        attributeRule.DefaultTagValue = APDTagApplicability.getTypeKey(rule.DefaultTagValue)
        break
    }
    // rule elements
    buildRuleElements(attributeRule, rule.RuleElements)
  }

  private function completeDropdownEntryRule(dropdownEntryRule : APDDropdownEntryRule, rule : Attribute_Rules_APDDropDownEntryRule) {
    // drop down entries (codes) only have existence rules and tags
    switch (dropdownEntryRule.RuleType) {
      case APDRuleType.TC_EXISTENCE :
        dropdownEntryRule.DefaultExistence = APDDataExistenceType.getTypeKey(rule.DefaultExistence)
        break
      case APDRuleType.TC_TAG :
        dropdownEntryRule.DefaultTagValue = APDTagApplicability.getTypeKey(rule.DefaultTagValue)
        break
    }
    // rule elements
    buildRuleElements(dropdownEntryRule, rule.RuleElements)
  }

  private function completeClauseRule(clauseRule : APDClauseRule, rule : Clause_Rules_APDClauseRule) {
    // clauses only have existence rules and tags
    switch (clauseRule.RuleType) {
      case APDRuleType.TC_EXISTENCE :
        clauseRule.DefaultExistence = APDDataExistenceType.getTypeKey(rule.DefaultExistence)
        break
      case APDRuleType.TC_TAG :
        clauseRule.DefaultTagValue = APDTagApplicability.getTypeKey(rule.DefaultTagValue)
        break
    }
    // rule elements
    buildRuleElements(clauseRule, rule.RuleElements)
  }

  private function buildRuleElements(rule : APDRule, elements : Rule_RuleElements) {
    final var bundle = gw.transaction.Transaction.getCurrent()
    elements.APDRuleElement.each(\re -> {
      var element = rule.RuleElements.firstWhere(\ruleE -> ruleE.PublicID == re.PublicId)
      if (element == null) {
        element = new APDRuleElement()
        element.PublicID = re.PublicId
        rule.addToRuleElements(element)
      } else {
        element = bundle.add(element)
      }
      switch (rule.RuleType) {
        case APDRuleType.TC_DEFAULT :
        case APDRuleType.TC_MIN :
        case APDRuleType.TC_MAX :
          if (rule typeis APDAttributeRule) {
            var attribute = rule.Attribute
            element.DefaultBitValue = re.DefaultBitValue
            // try to match on (1) publicID (2) code (3) name
            element.DefaultCodeValue = attribute.CodesToUse?.firstWhere(\c -> c.PublicID == re.DefaultCodeValue.PublicId)
                ?: attribute.CodesToUse?.firstWhere(\c -> c.Code == re.DefaultCodeValue.Code and re.DefaultCodeValue.Code != null)
                ?: attribute.CodesToUse?.firstWhere(\c -> c.Name == re.DefaultCodeValue.Name and re.DefaultCodeValue.Name != null)
            element.DefaultDateValue = re.DefaultDateValue?.toCalendar().getTime()
            element.DefaultDecimalValue = re.DefaultDecimalValue
            element.DefaultIntegerValue = re.DefaultIntegerValue
            element.DefaultStringValue = re.DefaultStringValue
          }
          break
        case APDRuleType.TC_EXISTENCE :
          element.Existence = APDDataExistenceType.getTypeKey(re.Existence)
          break
        case APDRuleType.TC_TAG :
          element.DefaultTagValue = APDTagApplicability.getTypeKey(re.DefaultTagValue)
          break
      }

      element.Sequence = re.Sequence

      // add element rule conditions
      re.RuleConditions.APDRuleCondition.each(\rc -> {
        var condition = element.RuleConditions.firstWhere(\ruleC -> ruleC.PublicID == rc.PublicId)
        if (condition == null) {
          condition = new APDRuleCondition()
          condition.PublicID = rc.PublicId
          element.addToRuleConditions(condition)
        } else {
          condition = bundle.add(condition)
        }
        condition.Attribute = allAttributes.get(rc.Attribute.PublicId)
        if (condition.Attribute.Type == APDFieldType.TC_TYPEKEY) {
          condition.CodeValue = condition.Attribute.CodesToUse?.firstWhere(\c -> c.PublicID == rc.CodeValue.PublicId)
              ?: condition.Attribute.CodesToUse?.firstWhere(\c -> c.Code == rc.CodeValue.Code and rc.CodeValue.Code != null)
              ?: condition.Attribute.CodesToUse?.firstWhere(\c -> c.Name == rc.CodeValue.Name and rc.CodeValue.Name != null)
        } else {
          condition.ConditionValue = rc.ConditionValue

          if (condition.Attribute.Type == APDFieldType.TC_BOOLEAN && rc.BitValue != null && rc.ConditionValue == null) {
            condition.ConditionValue = rc.BitValue.toString()
          }
        }
        condition.Operator = (rc.Operator != null) ? APDRuleConditionOperator.getTypeKey(rc.Operator) : APDRuleConditionOperator.TC_EQUALS
      })

      // remove conditions that no longer exist
      element.RuleConditions.where(\ruleC -> not re.RuleConditions.APDRuleCondition.hasMatch(\rc -> rc.PublicId == ruleC.PublicID)).each(\ruleC -> ruleC.remove())
    })
    // remove rule elements no longer used
    rule.RuleElements.where(\elem -> not elements.APDRuleElement.hasMatch(\re -> re.PublicId == elem.PublicID)).each(\elem -> {
      rule.removeFromRuleElements(elem)
      elem.remove()
    })

    // If there are duplicates, reorder rule elements by condition count and then sequence number
    if (rule.RuleElements.Count != rule.RuleElements*.Sequence.toSet().Count) {
      final var ruleElementsByConditionCount = rule.RuleElements.partition(\re -> re.RuleConditions.Count)

      var sequenceNumber = 1;
      for (conditionCount in ruleElementsByConditionCount.Keys.toList().sortDescending()) {
        for (ruleElement in ruleElementsByConditionCount[conditionCount].sortBy(\elem -> elem.Sequence)) {
          ruleElement.Sequence = sequenceNumber
          sequenceNumber++
        }
      }
    }
  }

  /** ******************** coverage definitions ************************* **/

  private function buildClaimCategories(cov : APDCoverage, claims : Coverable_Clauses_APDCoverage_ClaimCategories) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new clause categories
    claims.APDCoverageClaim.each(\cc -> {
      // try to match on (1) publicID (2) claim cost category
      var coverageClaim = cov.ClaimCategories.firstWhere(\cCat -> cCat.PublicID == cc.PublicId)
          ?: cov.ClaimCategories.firstWhere(\cCat -> cCat.ClaimCostCategory.PublicID == cc.ClaimCostCategory.PublicId)
      if (coverageClaim == null) {
        coverageClaim = new APDCoverageClaim()
        coverageClaim.PublicID = cc.PublicId
        cov.addToClaimCategories(coverageClaim)
      } else {
        coverageClaim = bundle.add(coverageClaim)
      }
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      cc.PublicId = coverageClaim.PublicID

      coverageClaim.ClaimCostCategory = getOrBuildClaimCategory(cc.ClaimCostCategory.PublicId)
    })

    // remove claim categories no longer used
    cov.ClaimCategories.where(\cCat -> not claims.APDCoverageClaim.hasMatch(\cc -> cc.PublicId == cCat.PublicID)).each(\cCat -> cCat.remove())
  }

  private function getOrBuildClaimCategory(cCode : String) : APDClaimCostCategory {
    var c = Query.make(APDClaimCostCategory).compare(APDClaimCostCategory#PublicID, Equals, cCode).select().first()
    if (c == null) {
      final var bundle = gw.transaction.Transaction.getCurrent()
      c = bundle.InsertedBeans.whereTypeIs(APDClaimCostCategory).firstWhere(\cc -> cc.CodeIdentifier == cCode)
    }
    if (c == null) {
      c = new APDClaimCostCategory()
      c.PublicID = cCode
      c.CodeIdentifier = cCode
      c.Name = DisplayKey.get("Web.TemplateImport.CostCategory.Unknown", cCode)
      c.Description = DisplayKey.get("Web.TemplateImport.CostCategory.UpdateSystemTable")
      c.CostType = APDCostType.TC_CLAIMSCOST
    }

    return c
  }

  private function buildCoveragePerils(cov : APDCoverage, perils : Coverable_Clauses_APDCoverage_Perils) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new clause cateegories
    perils.APDCoveragePeril.each(\peril -> {
      // try to match on (1) publicID (2) peril
      var coveragePeril = cov.Perils.firstWhere(\p -> p.PublicID == peril.PublicId)
          ?: cov.Perils.firstWhere(\p -> p.Peril.PublicID == peril.Peril.PublicId)
      if (coveragePeril == null) {
        coveragePeril = new APDCoveragePeril()
        coveragePeril.PublicID = peril.PublicId
        cov.addToPerils(coveragePeril)
      } else {
        coveragePeril = bundle.add(coveragePeril)
      }
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      peril.PublicId = coveragePeril.PublicID

      coveragePeril.Deductible = peril.Deductible
      // lookup attributes based on XML publicID - this assumes all referred to attributes have already been loaded
      coveragePeril.DeductibleAttribute = allAttributes.get(peril.DeductibleAttribute.PublicId)
      coveragePeril.LimitAttribute = allAttributes.get(peril.LimitAttribute.PublicId)
      coveragePeril.Peril = getOrBuildPeril(peril.Peril.PublicId)
      coveragePeril.PerilLimit = peril.PerilLimit
    })

    // remove claim categories no longer used
    cov.Perils.where(\p -> not perils.APDCoveragePeril.hasMatch(\peril -> peril.PublicId == p.PublicID)).each(\p -> p.remove())
  }

  private function getOrBuildPeril(pCode : String) : APDPeril {
    var p = Query.make(APDPeril).compare(APDPeril#PublicID, Equals, pCode).select().first()
    if (p == null) {
      final var bundle = gw.transaction.Transaction.getCurrent()
      p = bundle.InsertedBeans.whereTypeIs(APDPeril).firstWhere(\cc -> cc.CodeIdentifier == pCode)
    }
    if (p == null) {
      p = new APDPeril()
      p.PublicID = pCode
      p.CodeIdentifier = pCode
      p.Name = DisplayKey.get("Web.TemplateImport.Peril.Unknown", pCode)
      p.Description = DisplayKey.get("Web.TemplateImport.Peril.UpdateSystemTable")
    }

    return p
  }

  /** ******************** cost definitions ******************************* **/

  private function buildRiskCostDefinitions(cbl : APDCoverable, costs : Coverable_CostDefinitions) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new cost definitions
    costs.APDRiskCostDefinition.each(\cost -> {
      var costDfn = cbl.CostDefinitions.firstWhere(\cDef -> cDef.PublicID == cost.PublicId)
          ?: cbl.CostDefinitions.firstWhere(\cDef -> cDef.CostCode.PublicID == cost.CostCode.PublicId)
      if (costDfn == null) {
        costDfn = new APDRiskCostDefinition()
        costDfn.PublicID = cost.PublicId
        cbl.addToCostDefinitions(costDfn)
      } else {
        costDfn = bundle.add(costDfn)
      }
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      cost.PublicId = costDfn.PublicID

      // basis depends on coverable fields, coverage terms and exposure fields - these must have been added already
      costDfn.Basis = allAttributes.get(cost.Basis.PublicId)
      costDfn.CostCode = getOrBuildCostCode(cost.CostCode.PublicId)
      costDfn.CumulativeCostBasis = cost.CumulativeCostBasis
      costDfn.JurisdictionFilter = Jurisdiction.getTypeKey(cost.JurisdictionFilter)
      costDfn.PricingOrder = cost.PricingOrder
      costDfn.RateAmountTypeFilter = RateAmountType.getTypeKey(cost.RateAmountTypeFilter)
      costDfn.RatingScale = RatingScale.getTypeKey(cost.RatingScale)
      costDfn.SeparateBilling = cost.SeparateBilling
      costDfn.SeparateCollection = cost.SeparateCollection
      buildCostCodeFilters(costDfn, cost.CostCodeFilters)
      buildCostStepDefinitions(costDfn, cost.CostSteps)
    })

    // remove cost definitions no longer used
    cbl.CostDefinitions.where(\cDfn -> not costs.APDRiskCostDefinition.hasMatch(\cd -> cd.PublicId == cDfn.PublicID)).each(\cDfn -> cDfn.remove())
  }

  private function buildCoverageCostDefinitions(cov : APDCoverage, costs : Coverable_Clauses_APDCoverage_CostDefinitions) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new cost definitions
    costs.APDCoverageCostDefinition.each(\cost -> {
      var costDfn = cov.CostDefinitions.firstWhere(\cDef -> cDef.PublicID == cost.PublicId)
          ?: cov.CostDefinitions.firstWhere(\cDef -> cDef.CostCode.PublicID == cost.CostCode.PublicId)
      if (costDfn == null) {
        costDfn = cov.createAndAddCostDefinition()
        costDfn = new APDCoverageCostDefinition()
        costDfn.PublicID = cost.PublicId
        cov.addToCostDefinitions(costDfn)
      } else {
        costDfn = bundle.add(costDfn)
      }
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      cost.PublicId = costDfn.PublicID

      // basis depends on coverable fields, coverage terms and exposure fields - these must have been added already
      costDfn.Basis = allAttributes.get(cost.Basis.PublicId)
      costDfn.CostCode = getOrBuildCostCode(cost.CostCode.PublicId)
      costDfn.CumulativeCostBasis = cost.CumulativeCostBasis
      costDfn.JurisdictionFilter = Jurisdiction.getTypeKey(cost.JurisdictionFilter)
      costDfn.PricingOrder = cost.PricingOrder
      costDfn.RateAmountTypeFilter = RateAmountType.getTypeKey(cost.RateAmountTypeFilter)
      costDfn.RatingScale = RatingScale.getTypeKey(cost.RatingScale)
      costDfn.SeparateBilling = cost.SeparateBilling
      costDfn.SeparateCollection = cost.SeparateCollection
      buildCostCodeFilters(costDfn, cost.CostCodeFilters)
      buildCostStepDefinitions(costDfn, cost.CostSteps)
    })

    // remove cost definitions no longer used
    cov.CostDefinitions.where(\cDfn -> not costs.APDCoverageCostDefinition.hasMatch(\cd -> cd.PublicId == cDfn.PublicID)).each(\cDfn -> cDfn.remove())
  }

  private function buildCostCodeFilters(cd : APDCostDefinition, filters : CostDefinition_CostCodeFilters) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new cost definitions
    filters.APDCostCodeFilter.each(\filter -> {
      var costFilter = cd.CostCodeFilters.firstWhere(\cf -> cf.PublicID == filter.PublicId)
          ?: cd.CostCodeFilters.firstWhere(\cf -> cf.CostCode.PublicID == filter.CostCode.PublicId)
      if (costFilter == null) {
        costFilter = new APDCostCodeFilter()
        costFilter.PublicID = filter.PublicId
        cd.addToCostCodeFilters(costFilter)
      } else {
        costFilter = bundle.add(costFilter)
      }
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      filter.PublicId = costFilter.PublicID
      costFilter.CostCode = getOrBuildCostCode(filter.CostCode.PublicId)
    })

    // remove cost filters no longer used
    cd.CostCodeFilters.where(\cf -> not filters.APDCostCodeFilter.hasMatch(\filter -> filter.PublicId == cf.PublicID)).each(\cf -> cd.removeFilter(cf))
  }

  private function buildCostStepDefinitions(cd : APDCostDefinition, steps : CostDefinition_CostSteps) {
    final var bundle = gw.transaction.Transaction.getCurrent()

    // update existing and add new cost definitions
    steps.APDCostStepDefinition.each(\step -> {
      var costStep = cd.CostSteps.firstWhere(\cf -> cf.PublicID == step.PublicId)
      if (costStep == null) {
        costStep = cd.createAndAddStep()
        costStep = new APDCostStepDefinition()
        costStep.PublicID = step.PublicId
        cd.addToCostSteps(costStep)
      } else {
        costStep = bundle.add(costStep)
      }
      // existing model publicID takes precedence - update the XML to match so that is can be referenced later
      //step.PublicId = costStep.PublicID

      costStep.Description = step.Description
      // PrimaryFactor depends on coverable fields, coverage terms and exposure fields - these must have been added already
      costStep.PrimaryFactor = allAttributes.get(step.PrimaryFactor.PublicId)
    })

    // remove step definitions no longer used
    cd.CostSteps.where(\s -> not steps.APDCostStepDefinition.hasMatch(\step -> step.PublicId == s.PublicID)).each(\step -> cd.removeStep(step))
  }

  private function getOrBuildCostCode(cCode : String) : CostCode {
    var c = Query.make(CostCode).compare(CostCode#PublicID, Equals, cCode).select().first()
    if (c == null) {
      final var bundle = gw.transaction.Transaction.getCurrent()
      c = bundle.InsertedBeans.whereTypeIs(CostCode).firstWhere(\cc -> cc.CostCode == cCode)
    }
    if (c == null) {
      c = new CostCode()
      c.PublicID = cCode
      c.ChargePatern = ChargePattern.TC_PREMIUM
      c.ProrationMethod = ProrationMethod.TC_PRORATABYDAYS
      c.RateAmountType = RateAmountType.TC_STDPREMIUM
      c.CostCode = cCode
      c.CostName = DisplayKey.get("Web.TemplateImport.GenericCost.Unknown", cCode)
      c.Description = DisplayKey.get("Web.TemplateImport.GenericCost.UpdateSystemTable")
    }

    return c
  }

  private static function trim(value : String, propertyInfo : IPropertyInfo) : String {
    var allowedLength = DataTypes.get(propertyInfo).asConstrainedDataType().getLength(null, propertyInfo)
    return StringUtils.left(value, allowedLength)
  }
}