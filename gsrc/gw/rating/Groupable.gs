package gw.rating

interface Groupable<T extends LineModelObject> {
  function updateCurrent(current: T)

  property get Current(): T

  property get All(): java.util.List<T>
}