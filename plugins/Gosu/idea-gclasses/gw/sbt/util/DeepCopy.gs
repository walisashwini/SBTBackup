package gw.sbt.util

class DeepCopy {

  reified static function makeCopy<T>(o : T) : T {
    return Serializer.fromXML(Serializer.toXML(o)) as T
  }
}