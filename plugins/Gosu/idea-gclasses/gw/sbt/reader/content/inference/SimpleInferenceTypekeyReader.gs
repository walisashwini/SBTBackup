package gw.sbt.reader.content.inference

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.artifacts.typelists.TypeCode
uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.artifacts.typelists.TypeListExtension
uses gw.sbt.config.ConfigContents
uses gw.sbt.model.form.inference.FormInference
uses gw.sbt.model.form.inference.FormInference.FormInferenceType
uses gw.sbt.model.form.inference.FormInferenceTypeKey
uses java.util.List

class SimpleInferenceTypekeyReader implements InferenceReader {
  override function read(formPattern: PolicyFormPattern, updateContents: ConfigContents): FormInference {
    return new FormInference() {
        : Type = FormInferenceType.SIMPLE,
        : Details = formPattern.GenericInferenceClass,
        : TypeKeys = newFormInferenceTypeKey(formPattern, updateContents)
    }
  }

  override property get MatchingInferenceClasses(): List<String> {
    return {"gw.forms.generic.GenericCoverableTypeKeyForm"}
  }

  protected function newFormInferenceTypeKey(formPattern: PolicyFormPattern, updateContents: ConfigContents): List<FormInferenceTypeKey> {
    var coverableType = formPattern.CoverableType
    var coverableTypeKeyName = formPattern.CoverableTypeList

    var entity = updateContents.getEntity(coverableType)
    var typeKeyColumn = entity.getTypeKey(coverableTypeKeyName)
    if (typeKeyColumn == null) {
      var entityExtension = updateContents.getEntityExtension(coverableType)
      typeKeyColumn = entityExtension.getTypeKey(coverableTypeKeyName)
    }

    var typeList = updateContents.getTypeList(typeKeyColumn.TypeList)
    var typeListExtension = updateContents.getTypeListExtension(typeKeyColumn.TypeList)

    var typeKeyCodes = getTypeKeyCodes(formPattern)

    return typeKeyCodes.map( \ typeKeyCode -> {
      return new FormInferenceTypeKey() {
          : Code = typeKeyCode,
          : Description = getTypeCode(typeKeyCode, typeList, typeListExtension).Description,
          : TypeList = new FormInferenceTypeKey.TypeList() {
              : Description = typeList.Description,
              : Name = typeKeyColumn.TypeList,
              : Field = new FormInferenceTypeKey.TypeList.Field() {
                  : Name = coverableTypeKeyName,
                  : Description = typeKeyColumn.Description,
                  : Coverable = new FormInferenceTypeKey.TypeList.Field.Coverable() {
                      : Name = coverableType,
                      : DisplayName = entity.DisplayName
                  }
              }
          }
      }
    })
  }

  protected function getTypeKeyCodes(formPattern : PolicyFormPattern) : List<String> {
    return {formPattern.CoverableTypeKey}
  }

  private function getTypeCode(typeKeyCode : String, typeList : TypeList, typeListExtension : TypeListExtension) : TypeCode {
    var typeCode = typeList?.getTypeCode(typeKeyCode)
    if (typeCode == null) {
      typeCode = typeListExtension?.getTypeCode(typeKeyCode)
    }
    return typeCode
  }
}