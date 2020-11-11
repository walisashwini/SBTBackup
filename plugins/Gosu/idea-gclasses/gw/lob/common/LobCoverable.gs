package gw.lob.common

uses gw.lob.common.dependency.GraphTraversalConstraint

structure LobCoverable {
  property get Constraint(): GraphTraversalConstraint

  property get DisplayReference(): String
}
