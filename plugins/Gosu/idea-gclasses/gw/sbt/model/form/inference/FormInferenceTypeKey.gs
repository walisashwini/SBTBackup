package gw.sbt.model.form.inference

class FormInferenceTypeKey {
  var _code : String as Code
  var _desc : String as Description
  var _typeList : TypeList as TypeList

  static class TypeList {
    var _name: String as Name
    var _desc : String as Description
    var _field : Field as Field

    static class Field {
      var _name: String as Name
      var _desc : String as Description
      var _coverable : Coverable as Coverable

      static class Coverable {
        var _name: String as Name
        var _displayName : String as DisplayName
      }
    }
  }

}
