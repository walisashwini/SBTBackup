package gw.lob.common.autonumbers

uses gw.lang.reflect.IType

/*
 * This interface has to be implemented by an entity that has auto number sequences for one or more arrays 
 */
interface AutoNumbersContainer {
  function initializeAutoNumberSequences()

  function cloneAutoNumberSequences()

  function resetAutoNumberSequences()

  function bindAutoNumberSequences()

  function renumberAutoNumberSequences()

  function number(elementType : IType, entity : EffDated)

  function renumber(elementType : IType)
}
