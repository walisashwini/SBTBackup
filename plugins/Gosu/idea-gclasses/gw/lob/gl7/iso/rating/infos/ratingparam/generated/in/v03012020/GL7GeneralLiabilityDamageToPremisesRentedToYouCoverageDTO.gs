package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDamageToPremisesRentedToYouCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDamageToPremisesRentedToYouCoverageDTO {

  public construct(_gL7DamageToPremisesRentedToYou : GL7DamageToPremisesRentedToYou, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DamageToPremisesRentedToYou, parent )
    _limitGovernmentalSubdivision = (_cf.stateMatches(ParentLineModelObject.AsDataModel.GL7SublineTypes.singleWhere( \ elm -> elm.Subline == Parameters.getParam("GL7SublineType")).Sublines.singleWhere( \ elm -> elm.Jurisdiction.Code == Parameters.getParam("Jurisdiction")).GL7DamageToPremisesRentedToYouGovSubdivision.OwningCoverable, Parameters)) ? ParentLineModelObject.AsDataModel.GL7SublineTypes.singleWhere( \ elm -> elm.Subline == Parameters.getParam("GL7SublineType")).Sublines.singleWhere( \ elm -> elm.Jurisdiction.Code == Parameters.getParam("Jurisdiction")).GL7DamageToPremisesRentedToYouGovSubdivision.GL7LimitGovSubdivisionTerm.OptionValue.DisplayName : _limitGovernmentalSubdivision
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDamageToPremisesRentedToYouCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  var _limitGovernmentalSubdivision : java.lang.String as LimitGovernmentalSubdivision = ""

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}