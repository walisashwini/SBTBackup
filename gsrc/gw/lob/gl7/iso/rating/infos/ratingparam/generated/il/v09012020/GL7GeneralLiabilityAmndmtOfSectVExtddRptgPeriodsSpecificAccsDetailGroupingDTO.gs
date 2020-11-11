package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO> {

  public construct(_gL7SublineTypeSchCondItems : GL7SublineTypeSchCondItem[], parent : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO) {
    super( _gL7SublineTypeSchCondItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItems
    _all = _gL7SublineTypeSchCondItems.map(\obj -> new GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO {
   return _current as GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO {
   return _parent
  }
  

  
}