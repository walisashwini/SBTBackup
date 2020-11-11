package gw.lob.common.dependency

interface CalculatedValue<T extends Coverable, V> {
  function calculate(coverable : T) : V
}