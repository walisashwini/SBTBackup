package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityCompositeRatingDTO extends gw.rating.LineModelObject {

  public construct(_gL7CompositeRating : GL7CompositeRating, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7CompositeRating
    var tempGL7SublineTypes = ParentLineModelObject.AsDataModel.GL7SublineTypes.singleWhere( \ elm -> elm.Subline == Parameters.getParam("GL7SublineType"))
    _compositeExposure = tempGL7SublineTypes.CompositeExposure
    _compositeRating = tempGL7SublineTypes.CompositeRating
    _compositeRatingExposureBasis = _gL7CompositeRating.GL7CompositeRatingExposureBasisTerm.OptionValue.DisplayName
    _compositeRatingExposureBasisOverride = _gL7CompositeRating.GL7CompositeRatingExposureBasisOverrideTerm.Value
    _finalAdjustedCompositeExposure = _cf.makeLongFrom (_gL7CompositeRating.GL7FinalAdjustedCompositeExposureTerm.Value)
    _displayName = _gL7CompositeRating.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCompositeRatingDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _totalClassificationsPremium : java.math.BigDecimal as TotalClassificationsPremium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("Subline")
  protected var _subline : java.lang.String as Subline = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _finalCompositeRatingPremium : java.math.BigDecimal as FinalCompositeRatingPremium = 0.0

  @VisibleInRateflow
  protected var _finalAdjustedCompositeExposure : java.lang.Long as FinalAdjustedCompositeExposure = 0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ExposureIndicatorCode")
  protected var _exposureIndicatorCode : java.lang.String as ExposureIndicatorCode = ""

  @VisibleInRateflow
  protected var _compositeRatingExposureBasisOverride : java.lang.String as CompositeRatingExposureBasisOverride = ""

  @VisibleInRateflow
  protected var _compositeRatingExposureBasis : java.lang.String as CompositeRatingExposureBasis = ""

  @VisibleInRateflow
  protected var _compositeRating : java.lang.String as CompositeRating = ""

  @VisibleInRateflow
  protected var _compositeExposure : java.lang.Long as CompositeExposure = 0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ClassCode")
  protected var _classCode : java.lang.String as ClassCode = ""

  @VisibleInRateflow
  protected var _calcCompositeRate : java.math.BigDecimal as CalcCompositeRate = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7CompositeRating {
   return _dataModel as GL7CompositeRating
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}