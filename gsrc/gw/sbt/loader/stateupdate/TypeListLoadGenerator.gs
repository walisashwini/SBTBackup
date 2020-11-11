package gw.sbt.loader.stateupdate

uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.TypeListHelper
uses gw.sbt.loader.io.TypeListAddition
uses gw.sbt.loader.io.TypeListModification
uses gw.sbt.loader.reporter.MessageReporter

class TypeListLoadGenerator extends StateUpdateLoadGenerator {

  construct(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, messageReporter : MessageReporter) {
    super(currentContents, updateContents, null)
    _messageReporter = messageReporter
  }

  function generateLoads() : List<Load> {
    var resultLoads : List<Load> = {}
    //note: fileName might be different from typeList name,
    //ie: 'AdditionalInsuredType.BP7.ttx' has typelist name as 'AdditionalInsuredType'
    var typeListFileNamesInUpdate = _updateContents.getTypeLists()*.FileName
    var typeListExtFileNamesInUpdate = _updateContents.getTypeListExtensions()*.FileName
    var allTypeListFileNamesInUpdate = TypeListHelper.createUnion({typeListFileNamesInUpdate?.toList(), typeListExtFileNamesInUpdate?.toList()})
    allTypeListFileNamesInUpdate.each(\typeListFileName -> {
      var currentTypeList = _currentContents.getTypeList(typeListFileName)
      var currentTypeListExtension = _currentContents.getTypeListExtension(typeListFileName)
      var updateTypeList  = _updateContents.getTypeList(typeListFileName)
      var updateTypeListExtension  = _updateContents.getTypeListExtension(typeListFileName)
      var load = new Load<TypeList>(updateTypeList?:updateTypeListExtension)

      //it might still exist in a typelist with a different file name, ie: 'AdditionalInsuredType.BP7.ttx' has typelist name as 'AdditionalInsuredType'
      if (currentTypeList == null and currentTypeListExtension == null) {
        var typeListName = updateTypeList.Name
        if (typeListName == null) {
          typeListName = updateTypeListExtension.Name
        }
        currentTypeList = _currentContents.getTypeLists().firstWhere(\typeList -> typeList.Name == typeListName)
        currentTypeListExtension = _currentContents.getTypeListExtensions().firstWhere(\typeList -> typeList.Name == typeListName)
      }

      if (currentTypeList == null and currentTypeListExtension == null) {// new TypeList/TypeListExtension
        if (updateTypeList != null) { //if it is a new TypeList, create a TypeListAddition
          load.add(new TypeListAddition(updateTypeList))
          _messageReporter.reportAdded(updateTypeList.FileNameWithExtension, TYPELIST)
        }
        if (updateTypeListExtension != null) { //if it is a new TypeListExtension, create a TypeListAddition
          load.add(new TypeListAddition(updateTypeListExtension))
          _messageReporter.reportAdded(updateTypeListExtension.FileNameWithExtension, TYPELIST)
        }
      } else {// existing TypeList/TypeListExtension
        if (currentTypeList != null and updateTypeList != null
            and currentTypeList.FileNameWithExtension != updateTypeList.FileNameWithExtension) {
          updateTypeList.FileNameWithExtension = currentTypeList.FileNameWithExtension  // use current typelist's file name, because changes should apply to the current typelist file
        }
        if (currentTypeListExtension != null and updateTypeListExtension != null
            and currentTypeListExtension.FileNameWithExtension != updateTypeListExtension.FileNameWithExtension) {
          updateTypeListExtension.FileNameWithExtension = currentTypeListExtension.FileNameWithExtension // use current typelistextension's file name, because changes should apply to the current typelist file
        }

        if (TypeListHelper.hasAnyConflict(updateTypeListExtension, currentTypeListExtension)) {
          _messageReporter.ConflictReporter.reportTypeList(updateTypeListExtension.FileNameWithExtension)
        }
        if (TypeListHelper.hasAnyConflict(updateTypeList, currentTypeList)) {
          _messageReporter.ConflictReporter.reportTypeList(updateTypeList.FileNameWithExtension)
        }

        var loadOpsAddedForTypeList = false         // once this flag becomes true, there is no need to check the other type codes/filters in this TypeList
        var loadOpsAddedForTypeListExtension = false // once this flag becomes true, there is no need to check the other type codes/filters in this TypeListExtension
        var typeCodesInUpdate = TypeListHelper.createUnion({updateTypeList.TypeCodes, updateTypeListExtension.TypeCodes})
        typeCodesInUpdate.each(\typeCodeInUpdate -> {
          if ((typeCodeInUpdate.ExistedInExtension and not loadOpsAddedForTypeListExtension)
              or (not typeCodeInUpdate.ExistedInExtension and not loadOpsAddedForTypeList)) {
            var codeOfTypeCodeInUpdate = typeCodeInUpdate.Code
            //try to get the typecode from extension first
            var typeCodeInCurrent = currentTypeListExtension?.getTypeCode(codeOfTypeCodeInUpdate)
            if (typeCodeInCurrent == null) {
              typeCodeInCurrent = currentTypeList?.getTypeCode(codeOfTypeCodeInUpdate)
            }
            var loadOpsNeeded = TypeListHelper.isLoadOpsNeeded(updateTypeList.Name?:updateTypeListExtension.Name, typeCodeInUpdate, typeCodeInCurrent)
            if (loadOpsNeeded) {
              if (typeCodeInUpdate.ExistedInExtension) {
                load.add(new TypeListModification(updateTypeListExtension))
                loadOpsAddedForTypeListExtension = true
              } else {
                load.add(new TypeListModification(updateTypeList))
                loadOpsAddedForTypeList = true
              }
            }
          }
        })

        var typeFiltersInUpdate = TypeListHelper.createUnion({updateTypeList.TypeFilters, updateTypeListExtension.TypeFilters})
        typeFiltersInUpdate.each(\typeFilterInUpdate -> {
          if ((typeFilterInUpdate.ExistedInExtension and not loadOpsAddedForTypeListExtension)
              or (not typeFilterInUpdate.ExistedInExtension and not loadOpsAddedForTypeList)) {
            var nameOfTypeFilterInUpdate = typeFilterInUpdate.Name
            //try to get the typefilter from extension first
            var typeFilterInCurrent = currentTypeListExtension?.getTypeFilter(nameOfTypeFilterInUpdate)
            if (typeFilterInCurrent == null) {
              typeFilterInCurrent = currentTypeList?.getTypeFilter(nameOfTypeFilterInUpdate)
            }
            var loadOpsNeeded = TypeListHelper.isLoadOpsNeeded(updateTypeList.Name?:updateTypeListExtension.Name, typeFilterInUpdate, typeFilterInCurrent)
            if (loadOpsNeeded) {
              if (typeFilterInUpdate.ExistedInExtension) {
                load.add(new TypeListModification(updateTypeListExtension))
                loadOpsAddedForTypeListExtension = true
              } else {
                load.add(new TypeListModification(updateTypeList))
                loadOpsAddedForTypeList = true
              }
            }
          }
        })
      }

      resultLoads.add(load)
    })
    return resultLoads
  }
}