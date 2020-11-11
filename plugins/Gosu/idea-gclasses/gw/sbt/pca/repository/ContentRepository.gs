package gw.sbt.pca.repository

uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses java.util.List

interface ContentRepository {

  function list() : List<SBTUpdateMetaData>

  function getSBTUpdate(sbtUpdateMetaData : SBTUpdateMetaData, adoptionDate : Date) : SBTUpdate

  function findCustomerContent(sbtUpdateMetaData : SBTUpdateMetaData) : SBTUpdateContents

  function adoptSBTUpdate(sbtUpdateMetaData : SBTUpdateMetaData)

  function unadoptSBTUpdate(sbtUpdateMetaData : SBTUpdateMetaData)
}
