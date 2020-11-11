package gw.lob.gl7.presenters

uses gw.api.locale.DisplayKey

class GL7AuditDetailsPresenter {
  var _jurisdictionPresenters : List<JurisdictionPresenter> as JurisdictionPresenters

  static function forLine(line : GL7GeneralLiabilityLine) : GL7AuditDetailsPresenter {
    var jurisdictionPresenters = line.JurisdictionsWithSublinesWM.order()
        .map(\ jurisdiction -> JurisdictionPresenter.create(line, jurisdiction))
    return new GL7AuditDetailsPresenter(jurisdictionPresenters)
  }

  private construct(jurisdictionPresenters : List<JurisdictionPresenter>) {
    _jurisdictionPresenters = jurisdictionPresenters
  }

  
  static class JurisdictionPresenter {
    var _jurisdiction : Jurisdiction
    var _sublineTypePresenters : List<SublineTypePresenter> as readonly SublineTypePresenters

    static function create(line : GL7GeneralLiabilityLine, jurisdiction : Jurisdiction) : JurisdictionPresenter {
      var sublineForJurisdiction = line.sublineTypesForJurisdictionWM(jurisdiction)
      var sublineNames = extractSortedSublineNames(sublineForJurisdiction)
      return new JurisdictionPresenter(
          jurisdiction,
          sublineNames.map(\ sublineName -> SublineTypePresenter.create(sublineName, line, jurisdiction)))
    }

    private static function extractSortedSublineNames(sublineTypes : List<GL7SublineType>) : List<String> {
      return GL7PresenterUtil.SortedSublines.where( \ sublineName -> sublineTypes.hasMatch( \ sublineType -> sublineType.Subline == sublineName))
    }

    private construct(jurisdiction : Jurisdiction, sublineTypePresenters : List<SublineTypePresenter>) {
      _jurisdiction = jurisdiction
      _sublineTypePresenters = sublineTypePresenters
    }

    property get JurisdictionName() : String {
      return _jurisdiction.DisplayName
    }
  }


  static class SublineTypePresenter {
    var _sublineName: String as SublineName
    var _exposurePresenters : List<GL7ExposurePresenter> as readonly ExposurePresenters

    static function create(sublineName : String, line : GL7GeneralLiabilityLine, jurisdiction: Jurisdiction) : SublineTypePresenter {
      return new SublineTypePresenter(
          sublineName,
          line.GL7ExposuresWM.where( \ exp -> exp.GL7Location.Jurisdiction == jurisdiction && exp.SublineTypeName == sublineName)
              .map(\ exposure -> GL7ExposurePresenter.create(exposure))
              .orderBy(\ exposurePresenter -> exposurePresenter.LocationWM.DisplayName)
              .thenBy(\ exposurePresenter -> exposurePresenter.ClassCode)
              .thenBy(\ exposurePresenter -> exposurePresenter.EffectiveDate))
    }

    private construct(sublineName: String, exposurePresenters : List<GL7ExposurePresenter>) {
      _sublineName = sublineName
      _exposurePresenters = exposurePresenters
    }

    property get GenericExposureColumns() : ExposureColumns {
      return ExposureColumnGroups.GenericColumns
    }

    property get ProductsCompletedOpsExposureColumns() : ExposureColumns {
      return ExposureColumnGroups.ProductsCompletedOpsColumns
    }

    private property get ExposureColumnGroups() : ExposureColumnGroups {
      switch (SublineName) {
        case "Premises/Operations and Products/Completed Operations":
          return new ExposureColumnGroups(
              :genericColumns = ExposureColumns.PremisesOps,
              :productsCompletedOpsColumns = ExposureColumns.ProductsCompletedOps)
        case "Products/Completed Operations":
          return new ExposureColumnGroups(
              :genericColumns = ExposureColumns.Invalid,
              :productsCompletedOpsColumns = ExposureColumns.Generic)
        default:
          return new ExposureColumnGroups(
              :genericColumns = ExposureColumns.Generic,
              :productsCompletedOpsColumns = ExposureColumns.Invalid)
      }
    }
  }


  static class ExposureColumnGroups {
    var _genericColumns : ExposureColumns as readonly GenericColumns
    var _productsCompletedOpsColumns : ExposureColumns as readonly ProductsCompletedOpsColumns
    

    construct(genericColumns : ExposureColumns, productsCompletedOpsColumns : ExposureColumns) {
      _genericColumns = genericColumns
      _productsCompletedOpsColumns = productsCompletedOpsColumns
    }
  }


  static class ExposureColumns {
    var _estimatedLabel : String as readonly EstimatedLabel
    var _auditedLabel : String as readonly AuditedLabel
    var _visible : boolean as readonly Visible

    static property get Generic() : ExposureColumns {
      return new ExposureColumns(
          DisplayKey.get("Web.Policy.GL7.AuditWizard.EstimatedExposure"),
          DisplayKey.get("Web.Policy.GL7.AuditWizard.AuditedExposure"))
    }

    static property get PremisesOps() : ExposureColumns {
      return new ExposureColumns(
          DisplayKey.get("Web.Policy.GL7.AuditWizard.EstimatedPremisesOpsExposure"),
          DisplayKey.get("Web.Policy.GL7.AuditWizard.AuditedPremisesOpsExposure"))
    }

    static property get ProductsCompletedOps() : ExposureColumns {
      return new ExposureColumns(
          DisplayKey.get("Web.Policy.GL7.AuditWizard.EstimatedProductsCompletedOpsExposure"),
          DisplayKey.get("Web.Policy.GL7.AuditWizard.AuditedProductsCompletedOpsExposure"))
    }

    static property get Invalid() : ExposureColumns {
      return new ExposureColumns(null, null, :visible = false)
    }

    private construct(estimatedLabel : String, auditedLabel : String, visible : boolean = true) {
      _estimatedLabel = estimatedLabel
      _auditedLabel = auditedLabel
      _visible = visible
    }
  }
}