package gw.sbt.loader.merger

uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityColumn
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.loader.EntityColumnHelper
uses gw.sbt.loader.LoaderMessages

class ClauseEntityExtensionMerger {
  protected var _loaderMessages : LoaderMessages as readonly LoaderMessages

  construct() {}

  construct(loaderMessages : LoaderMessages) {
    _loaderMessages = loaderMessages
  }

  function merge(clauseEntityInCurrent : Entity,
                 clauseEntityExtensionInCurrent : EntityExtension,
                 clauseRootEntityExtensionInCurrent : Entity,
                 clauseEntityInUpdate:Entity,
                 clauseEntityExtensionInUpdate: EntityExtension,
                 clausePattern : PolicyClausePattern) : EntityExtension {
    var newEntityExtName = clauseEntityInCurrent?.EntityName
    var resultEntityExtension : EntityExtension = null
    if(clauseRootEntityExtensionInCurrent == null) {
      resultEntityExtension = clauseEntityExtensionInCurrent?.copy()
    } else {
      if(clauseRootEntityExtensionInCurrent typeis EntityExtension) {
        resultEntityExtension = clauseRootEntityExtensionInCurrent?.copy()
      } else {
        newEntityExtName = clauseRootEntityExtensionInCurrent.EntityName
      }
    }

    // Note we have a lot of tests which specifies a clause entity in the PolicyClausePattern which is not in the running instance
    if (clauseEntityInCurrent == null)
      return null

    var columnsContainedInCurrent = EntityColumnHelper.getColumnsFromEntityExt(clauseEntityInCurrent, clauseEntityExtensionInCurrent, true)
    //check the existence in the incoming package, new columns would be added in entity merging step, these would be duplicated if added here.
    var columnsContainedInUpdate = EntityColumnHelper.getColumnsFromEntityExt(clauseEntityInUpdate, clauseEntityExtensionInUpdate, false)
    var columnsContained = columnsContainedInCurrent.union(columnsContainedInUpdate)
    clausePattern.CovTerms?.each( \ covTerm -> {
      var coverageColumnName = covTerm.CoverageColumn

      if (not columnsContained.contains(coverageColumnName)) {

        if (resultEntityExtension == null) {
          resultEntityExtension = EntityExtension.newEntityExtension(newEntityExtName)
        }

        resultEntityExtension.addColumn(EntityColumn.newColumn(coverageColumnName, EntityColumnHelper.deriveClauseColumnType(coverageColumnName)))
        resultEntityExtension.addColumn(EntityColumn.newColumn(coverageColumnName + "Avl", "bit"))

        columnsContained.add(coverageColumnName)
        columnsContained.add(coverageColumnName + "Avl")
      }
    })

    return resultEntityExtension
  }


}
