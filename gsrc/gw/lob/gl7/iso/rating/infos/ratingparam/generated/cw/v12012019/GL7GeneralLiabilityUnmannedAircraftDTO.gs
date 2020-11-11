package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityUnmannedAircraftDTO extends gw.rating.LineModelObject {

  public construct(_gL7UnmannedAircraft : GL7UnmannedAircraft, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7UnmannedAircraft
    var tempGL7UnmannedAircraftCovABIPD = _gL7UnmannedAircraft.GL7UnmannedAircraftCovABIPD
    _aggregateLimit = _gL7UnmannedAircraft.GL7UnmannedAircraf.GL7AggLimit23Term.OptionValue.DisplayName
    _bIDeductible = tempGL7UnmannedAircraftCovABIPD.GL7BIDedTerm.OptionValue.DisplayName
    _bIPDDeductible = tempGL7UnmannedAircraftCovABIPD.GL7BIPDDedTerm.OptionValue.DisplayName
    _covAApplies = _gL7UnmannedAircraft.CovAApplies
    _covBApplies = _gL7UnmannedAircraft.CovBApplies
    _hoursOfOperationPerYear = _gL7UnmannedAircraft.HoursOfOperationPerYear
    _levelOfCertification = _gL7UnmannedAircraft.LevelOfCertification
    _manufacturer = _gL7UnmannedAircraft.Manufacturer
    _maximumTakeoffWeight = _gL7UnmannedAircraft.MaximumTakeoffWeight
    _model = _gL7UnmannedAircraft.Model
    _operatorYearsOfExperience = _gL7UnmannedAircraft.OperatorYearsOfExperience
    _ownershipAndOperation = _gL7UnmannedAircraft.OwnershipAndOperation
    _pDDeductible = tempGL7UnmannedAircraftCovABIPD.GL7PDDedTerm.OptionValue.DisplayName
    _primaryPlaceOfOperation = _gL7UnmannedAircraft.PrimaryPlaceOfOperation
    _typeOfModifications = _gL7UnmannedAircraft.TypeOfModifications
    _uAIdentificationCode = _gL7UnmannedAircraft.UAIdentificationCode
    _usage = _gL7UnmannedAircraft.Usage
    _displayName = _gL7UnmannedAircraft.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUnmannedAircraftDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _unmannedAircraftTerrorismCoverage : GL7GeneralLiabilityUnmannedAircraftTerrorismCoverageDTO as readonly UnmannedAircraftTerrorismCoverage  

  @VisibleInRateflow
  protected var _unmannedAircraftCovBPAICoverage : GL7GeneralLiabilityUnmannedAircraftCovBPAICoverageDTO as readonly UnmannedAircraftCovBPAICoverage  

  @VisibleInRateflow
  protected var _unmannedAircraftCovABIPDCoverage : GL7GeneralLiabilityUnmannedAircraftCovABIPDCoverageDTO as readonly UnmannedAircraftCovABIPDCoverage  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("WeightOfDroneStatCode")
  protected var _weightOfDroneStatCode : java.lang.String as WeightOfDroneStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("UsageStatCode")
  protected var _usageStatCode : java.lang.String as UsageStatCode = ""

  @VisibleInRateflow
  protected var _usage : java.lang.String as Usage = ""

  @VisibleInRateflow
  protected var _uAIdentificationCode : java.lang.String as UAIdentificationCode = ""

  @VisibleInRateflow
  protected var _typeOfModifications : java.lang.String as TypeOfModifications = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("SublineCode")
  protected var _sublineCode : java.lang.String as SublineCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PrimaryPlaceOfOperationStatCod")
  protected var _primaryPlaceOfOperationStatCode : java.lang.String as PrimaryPlaceOfOperationStatCode = ""

  @VisibleInRateflow
  protected var _primaryPlaceOfOperation : java.lang.String as PrimaryPlaceOfOperation = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PDDedStatCode")
  protected var _pDDeductibleStatCode : java.lang.String as PDDeductibleStatCode = ""

  @VisibleInRateflow
  protected var _pDDeductible : java.lang.String as PDDeductible = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("OwnershipOperationStatCode")
  protected var _ownershipAndOperationStatCode : java.lang.String as OwnershipAndOperationStatCode = ""

  @VisibleInRateflow
  protected var _ownershipAndOperation : java.lang.String as OwnershipAndOperation = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("OperatorYearsOfExperienceStatC")
  protected var _operatorYearsOfExperienceStatCode : java.lang.String as OperatorYearsOfExperienceStatCode = ""

  @VisibleInRateflow
  protected var _operatorYearsOfExperience : java.lang.String as OperatorYearsOfExperience = ""

  @VisibleInRateflow
  protected var _model : java.lang.String as Model = ""

  @VisibleInRateflow
  protected var _maximumTakeoffWeight : java.math.BigDecimal as MaximumTakeoffWeight = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ManufacturerModelStatCode")
  protected var _manufacturerModelStatCode : java.lang.String as ManufacturerModelStatCode = ""

  @VisibleInRateflow
  protected var _manufacturer : java.lang.String as Manufacturer = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("LevelOfCertificationStatCode")
  protected var _levelOfCertificationStatCode : java.lang.String as LevelOfCertificationStatCode = ""

  @VisibleInRateflow
  protected var _levelOfCertification : java.lang.String as LevelOfCertification = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("HoursOfOperationStatCode")
  protected var _hoursOfOperationStatCode : java.lang.String as HoursOfOperationStatCode = ""

  @VisibleInRateflow
  protected var _hoursOfOperationPerYear : java.lang.Integer as HoursOfOperationPerYear = 0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ExposureStatCode")
  protected var _exposureStatCode : java.lang.String as ExposureStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ExposureIndicatorStatCode")
  protected var _exposureIndicatorStatCode : java.lang.String as ExposureIndicatorStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("DroneModificationsStatCode")
  protected var _droneModificationsStatCode : java.lang.String as DroneModificationsStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("CovStatCode")
  protected var _coverageStatCode : java.lang.String as CoverageStatCode = ""

  @VisibleInRateflow
  protected var _covBApplies : java.lang.String as CovBApplies = ""

  @VisibleInRateflow
  protected var _covAApplies : java.lang.String as CovAApplies = ""

  @VisibleInRateflow
  protected var _bIPDDeductible : java.lang.String as BIPDDeductible = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("BIDedStatCode")
  protected var _bIDeductibleStatCode : java.lang.String as BIDeductibleStatCode = ""

  @VisibleInRateflow
  protected var _bIDeductible : java.lang.String as BIDeductible = ""

  @VisibleInRateflow
  protected var _aggregateLimit : java.lang.String as AggregateLimit = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("AggEndorsementLiabLimStatCode")
  protected var _aggregateEndorsementLiabLimitStatCode : java.lang.String as AggregateEndorsementLiabLimitStatCode = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7UnmannedAircraft {
   return _dataModel as GL7UnmannedAircraft
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityClassificationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent
  }
  

  
}