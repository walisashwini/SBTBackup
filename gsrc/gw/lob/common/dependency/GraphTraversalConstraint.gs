package gw.lob.common.dependency

interface GraphTraversalConstraint {

  function matchesConditionsForCoverable(coverable: Coverable): Boolean

}