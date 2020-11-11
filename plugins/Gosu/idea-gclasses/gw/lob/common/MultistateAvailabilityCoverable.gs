package gw.lob.common

structure MultistateAvailabilityCoverable {
  /**
   * Method to get the availability status of a given clause calculated using more than one state.
   * Should bee implemented on the adapter for the coverable implementing it.
   * @param clauseCode
   * @return boolean
   */
  function isClauseMultistateAvailable(clauseCode : String) : Boolean

  /**
   * Method to get the availability status of a given term of a clause calculated using more than one state.
   * Should bee implemented on the adapter for the coverable implementing it.
   * @param clauseCode
   * @param covTermCode
   * @return boolean
   */
  function isCovTermMultistateAvailable(clauseCode : String, covTermCode : String) : Boolean
}