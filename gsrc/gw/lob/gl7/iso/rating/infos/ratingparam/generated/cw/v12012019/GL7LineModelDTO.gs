package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow

uses java.lang.RuntimeException
abstract class GL7LineModelDTO extends gw.rating.LineModelObject {

  public construct(line : GL7GeneralLiabilityLine) {
  
  
  }

  
  @VisibleInRateflow
  property get NotExistingList() : java.util.List {
   return null
  }
  

  
  @VisibleInRateflow
  property get NotExistingTable() : java.lang.Object {
   return null
  }
  

  
  @VisibleInRateflow
  property get NotExistingDate() : java.util.Date {
   return null
  }
  

  
  @VisibleInRateflow
  property get NotExistingString() : java.lang.String {
   return null
  }
  

  
  @VisibleInRateflow
  property get NotExistingInteger() : java.lang.Integer {
   return null
  }
  

  
  @VisibleInRateflow
  property get NotExistingBigDecimal() : java.math.BigDecimal {
   return null
  }
  

  
  @VisibleInRateflow
  property get StubMapping() : java.lang.Object {
   throw new RuntimeException("StubMapping - This code should be unreachable")
  }
  

  @VisibleInRateflow
  protected var _generalLiability : GL7GeneralLiabilityDTO as readonly GeneralLiability  

  
}