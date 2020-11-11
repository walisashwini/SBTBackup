package gw.sbt.util

enhancement OptionalEnhancement<T> : Optional<T> {

  /**
   * Optional#orElseGet in Java 8 causes the Optional's value to be unwrapped.
   * This extension works the same as Optional#or, which is added in Java 9,
   * and allows a series of Optional to be chained (unfortunately, 'or' is a
   * reserved word in Gosu).
   */
  function orGet(other() : Optional<T>) : Optional<T> {
    if (this.Present)
      return this
    else
      return other()
  }

  function ifAbsent(action()) : Optional<T> {
    if (not this.Present)
      action()
    return this
  }
}
