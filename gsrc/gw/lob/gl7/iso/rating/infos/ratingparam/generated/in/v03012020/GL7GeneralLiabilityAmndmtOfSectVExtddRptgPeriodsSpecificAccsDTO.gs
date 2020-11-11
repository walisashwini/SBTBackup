package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO {

  public construct(_gL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs : GL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs, parent )
    _amndmtOfSectVExtddRptgPeriodsSpecificAccsDetail = _gL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailGroupingDTO(_gL7AmndmtOfSectVExtddRptgPeriodsSpecificAccs.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmndmtOfSectVExtddRptgPeriodsSpecificAccsDetail() : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailGroupingDTO {
   return _amndmtOfSectVExtddRptgPeriodsSpecificAccsDetail as GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}