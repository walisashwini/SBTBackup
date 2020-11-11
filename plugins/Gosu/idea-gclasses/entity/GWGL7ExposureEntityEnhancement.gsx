package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "GL7Exposure.eti;GL7Exposure.eix;GL7Exposure.etx")
enhancement GWGL7ExposureEntityEnhancement : entity.GL7Exposure {
  property get Constraint () : gw.lob.common.dependency.GraphTraversalConstraint {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobCoverable") as gw.lob.common.LobCoverable).Constraint
  }
  
  property get DisplayReference () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.common.LobCoverable") as gw.lob.common.LobCoverable).DisplayReference
  }
  
  property get EndOfCoverageDate () : java.util.Date {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.rating.CoverableWithRatingBasisType") as gw.rating.CoverableWithRatingBasisType).EndOfCoverageDate
  }
  
  property get IsBasisScalable () : java.lang.Boolean {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.rating.CoverableWithRatingBasisType") as gw.rating.CoverableWithRatingBasisType).IsBasisScalable
  }
  
  property get RatingBasisType () : typekey.RatingBasisType {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.rating.CoverableWithRatingBasisType") as gw.rating.CoverableWithRatingBasisType).RatingBasisType
  }
  
  property get SublineTypeName () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.gl7.GL7Coverable") as gw.lob.gl7.GL7Coverable).SublineTypeName
  }
  
  
}