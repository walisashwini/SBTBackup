package gw.apd.model

uses entity.APDAttribute
uses gw.api.locale.DisplayKey
uses gw.api.util.LocaleUtil
uses gw.xml.XMLNode

/**
 * Agile Product Developer
 */
enhancement APDAttributeValidationEnhancement : APDAttribute {

  function checkGenerationValidity(cblNode : XMLNode) : Boolean {
    var valid = true
    var messages = new ArrayList<String>()
    // must ensure default language exists for text that goes into display keys
    var lang = LocaleUtil.getDefaultLanguageType()

    // name must be defined
    if (this.Name == null) {
      messages.add(DisplayKey.get("Web.APDValidation.Attribute.MissingName"))
    } else if (not CodegenValidator.isValidName(this.Name)) {
      messages.add(DisplayKey.get("Web.APDValidation.Attribute.InvalidName"))
    }
    if (this["Label_" + lang.Code] == null) {
      messages.add(DisplayKey.get("Web.APDValidation.Attribute.MissingLabel"))
    }
    if (this["Description_" + lang.Code] == null) {
      messages.add(DisplayKey.get("Web.APDValidation.Attribute.MissingDescription"))
    }
    // validate dropdowns
    if (this.Type == APDFieldType.TC_TYPEKEY) {
      if((this.DropDownType == APDDropDownType.TC_TYPELIST and this.OwningDropDown == null)
          or (this.DropDownType == APDDropDownType.TC_OPTION or this.DropDownType == APDDropDownType.TC_PACKAGE)) {
        // check dropdown entries have unique codes
        if (CodegenValidator.containsDuplicates(this.Codes*.Code)) {
          messages.add(DisplayKey.get("Web.APDValidation.Attribute.Dropdown.UniqueCodes"))
        }

        this.Codes.each(\code -> {
          if (code.Code == null) {
            messages.add(DisplayKey.get("Web.APDValidation.Attribute.Dropdown.MissingCode", code.Name))
          } else if (not CodegenValidator.isValidCode(code.Code)) {
            messages.add(DisplayKey.get("Web.APDValidation.Attribute.Dropdown.InvalidCode", code.Name))
          }
          if (code["Name_" + lang.Code] == null) {
            messages.add(DisplayKey.get("Web.APDValidation.Attribute.Dropdown.MissingName", code.Name))
          }
          if (code["Description_" + lang.Code] == null) {
            messages.add(DisplayKey.get("Web.APDValidation.Attribute.Dropdown.MissingDescription", code.Name))
          }
          if (this typeis APDTerm) {
            code.Values.each(\ v -> {
              switch (v.DropdownColumn.ValueType) {
                case CovTermModelVal.TC_COUNT :
                case CovTermModelVal.TC_DAYS :
                case CovTermModelVal.TC_HOURS :
                  if (v.IntegerValue == null) messages.add(DisplayKey.get("Web.APDValidation.Attribute.Dropdown.MissingValue", code.Name, v.DropdownColumn.Name))
                  break
                case CovTermModelVal.TC_MONEY :
                case CovTermModelVal.TC_PERCENT :
                case CovTermModelVal.TC_OTHER :
                  if (v.DecimalValue == null) messages.add(DisplayKey.get("Web.APDValidation.Attribute.Dropdown.MissingValue", code.Name, v.DropdownColumn.Name))
              }
            })
          }
        })
      }

      if (this.DropDownType == APDDropDownType.TC_TYPELIST and this.OwningDropDown == null) {
        // typelists must have a typelist name
        if (this.Typelist == null){
          messages.add(DisplayKey.get("Web.APDValidation.Attribute.MissingTypelist"))
        } else if (not CodegenValidator.isValidName(this.Typelist)) {
          messages.add(DisplayKey.get("Web.APDValidation.Attribute.InvalidTypelistName"))
        }
      } else { // option and package terms
        if (this typeis APDTerm) {
          if (this.DropDownType == APDDropDownType.TC_OPTION and this.DropdownColumns.Count != 1) {
            messages.add(DisplayKey.get("Web.APDValidation.Attribute.DropdownColumn.NoColumns"))
          }
          if (this.DropDownType == APDDropDownType.TC_PACKAGE and this.DropdownColumns.Count < 2) {
            messages.add(DisplayKey.get("Web.APDValidation.Attribute.DropdownColumn.MissingPackageColumns"))
          }
          // check dropdown column definitions
          if (this.DropdownColumns.hasMatch(\dc -> dc.Name == null)) {
            messages.add(DisplayKey.get("Web.APDValidation.Attribute.DropdownColumn.MissingName"))
          }
          if (this.DropdownColumns.hasMatch(\dc -> dc.ValueType == null)) {
            messages.add(DisplayKey.get("Web.APDValidation.Attribute.DropdownColumn.MissingValueType"))
          }
        }
      }
    }

    // validate when Scalable is set to true
    if (this.Scalable and not this.CanScale) {
      messages.add(DisplayKey.get("Web.APDValidation.Attribute.InvalidScalable"))
    }

    // check term should not be set as jurisdiction
    if (this typeis APDTerm && this.Jurisdiction) {
      messages.add(DisplayKey.get("Web.APDValidation.Attribute.InvalidJurisdiction"))
    }

    // validate that 'GenerateAsClauseTerm' is always set to 'true' for schedule terms that are invalid schedule property types
    if (this typeis APDTerm && this.ScheduleItemAttribute && this.CanOnlyBeAClauseTermBasedOnType && not this.GenerateAsClauseTerm) {
      messages.add(DisplayKey.get("Web.APDValidation.Attribute.InvalidGenerateAsClauseTerm"))
    }

    if (messages.Count > 0) {
      valid = false
      var fieldTree = new XMLNode()
      fieldTree.setAttributeValue("Valid", "false")
      if (this typeis APDField or this typeis APDExposureField) {
        fieldTree.ElementName = "Field"
        fieldTree.setAttributeValue("Type", DisplayKey.get("Web.APD.ProductTree.FieldNode"))
      } else {
        fieldTree.ElementName = "ClauseTerm"
        var value = (this as APDTerm).ScheduleItemAttribute ? DisplayKey.get("Web.APD.ProductTree.ScheduleTermNode") : DisplayKey.get("Web.APD.ProductTree.TermNode")
        fieldTree.setAttributeValue("Type", value)
      }
      fieldTree.setAttributeValue("Name", this.Label)
      messages.each(\msg -> {
        var errorTree = new XMLNode()
        errorTree.ElementName = "ERROR"
        errorTree.setAttributeValue("Name", msg)
        fieldTree.addChild(errorTree)
      })
      cblNode.addChild(fieldTree)
    }

    return valid
  }
}