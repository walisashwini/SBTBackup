package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO) {
    super( _gL7SublineTypeSchCondItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO {
   return _parent as GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO
  }
  

  
}