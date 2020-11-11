package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclSalineSubstancesContaminationDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclSalineSubstancesContamination : GL7ExclSalineSubstancesContamination, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclSalineSubstancesContamination
    _classDescription = _gL7ExclSalineSubstancesContamination.GL7ClassDescriptionTerm.OptionValue.DisplayName
    _manualPremium = _gL7ExclSalineSubstancesContamination.GL7ManualPremium82Term.Value
    _displayName = _gL7ExclSalineSubstancesContamination.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclSalineSubstancesContaminationDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("SpecialClassificationsIncludin")
  protected var _specialClassificationsIncludingNuclearEnergyLiability : java.lang.String as SpecialClassificationsIncludingNuclearEnergyLiability = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ExclSalineSubstancesContaminat")
  protected var _exclSalineSubstancesContamination : java.lang.String as ExclSalineSubstancesContamination = ""

  @VisibleInRateflow
  protected var _classDescription : java.lang.String as ClassDescription = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclSalineSubstancesContamination {
   return _dataModel as GL7ExclSalineSubstancesContamination
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