package gw.lob.common.dependency

enhancement CoverableExistenceEnhancement: entity.Coverable {

  /**
   * get Clause existence value
   */
  function getClauseExistence(clauseCode: String): typekey.ExistenceType {
    return ExistenceSupport.Instance.getClauseExistence(this, clauseCode) ?: ExistenceType.TC_ELECTABLE
  }
}
