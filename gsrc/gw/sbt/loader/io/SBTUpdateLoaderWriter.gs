package gw.sbt.loader.io

uses gw.api.locale.DisplayKey
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.forms.CustomPolicyFormInference
uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.artifacts.policyline.ModifierPattern
uses gw.sbt.artifacts.properties.DisplayProperties
uses gw.sbt.artifacts.schedules.ScheduleConfig
uses gw.sbt.artifacts.systables.SystemTableRegistryFileDefinition
uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.artifacts.typelists.TypeListExtension
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.loader.EntityArrayHelper
uses gw.sbt.loader.EntityColumnHelper
uses gw.sbt.loader.EntityElementHelper
uses gw.sbt.loader.EntityTypeKeyHelper
uses gw.sbt.loader.TypeListHelper
uses gw.sbt.loader.io.schedule.ScheduleConfigCache

class SBTUpdateLoaderWriter {

  var _config: TargetConfiguration
  var _productModelDisplayPropertiesCache : DisplayPropertiesCache
  var _displayPropertiesCache: DisplayPropertiesCache
  var _formPatternsCache : FormPatternsCache
  var _customFormInferenceCache : CustomFormInferenceCache
  var _systemTableRegistryCache : SystemTableRegistryCache
  var _scheduleConfigCache : ScheduleConfigCache
  var _policyLinePatternCache : PolicyLinePatternCache
  var _writtenConfigurationFiles : Set<ConfigurationFile> as WrittenConfigurationFiles

  construct(config: TargetConfiguration) {
    _config = config
    _productModelDisplayPropertiesCache = null
    _formPatternsCache = null
    _writtenConfigurationFiles = {}
  }

  function writeProductModelDisplayProperties<T extends DisplayProperties>(displayPropertiesLoadOp: FileModification<T>) {
    if (_productModelDisplayPropertiesCache == null){
      // lazy init
      var initialBytes = _config.contents(displayPropertiesLoadOp.TargetFile)
      _productModelDisplayPropertiesCache = new DisplayPropertiesCache(initialBytes)
    }

    displayPropertiesLoadOp._existingContent = _productModelDisplayPropertiesCache.Bytes

    _productModelDisplayPropertiesCache.add(displayPropertiesLoadOp.Content)

    writeFile(displayPropertiesLoadOp.TargetFile, _productModelDisplayPropertiesCache.Bytes, true)
  }

  function undoWriteProductModelDisplayProperties<T extends DisplayProperties>(displayPropertiesLoadOp: FileModification<T>) {
    _productModelDisplayPropertiesCache?.undo(displayPropertiesLoadOp._existingContent)
    undoWriteFile(displayPropertiesLoadOp, true)
  }

  function writeDisplayProperties<T extends DisplayProperties>(displayPropertiesLoadOp: FileModification<T>) {

    if (_displayPropertiesCache == null) {
      // lazy init
      var initialBytes = _config.contents(displayPropertiesLoadOp.TargetFile)
      _displayPropertiesCache = new DisplayPropertiesCache(initialBytes)
    }

    displayPropertiesLoadOp._existingContent = _displayPropertiesCache.Bytes

    _displayPropertiesCache.add(displayPropertiesLoadOp.Content)

    writeFile(displayPropertiesLoadOp.TargetFile, _displayPropertiesCache.Bytes, true)
  }

  function undoWriteDisplayProperties<T extends DisplayProperties>(displayPropertiesLoadOp: FileModification<T>) {
    _displayPropertiesCache?.undo(displayPropertiesLoadOp._existingContent)
    undoWriteFile(displayPropertiesLoadOp, true)
  }

  function writeForm<T extends PolicyFormPattern>(formLoadOp: FileModification<T>) {
    if (_formPatternsCache == null) {
      _formPatternsCache = new FormPatternsCache()
    }

    formLoadOp._existingContent = _formPatternsCache.Bytes

    _formPatternsCache.add(formLoadOp.Content)

    writeFile(formLoadOp.TargetFile, _formPatternsCache.Bytes)
  }

  function undoWriteForm<T extends PolicyFormPattern>(formLoadOp: FileModification<T>) {
    _formPatternsCache?.undo(formLoadOp._existingContent)
    undoWriteFile(formLoadOp)
  }

  function writeCustomFormInference(customFormInferenceLoadOp: FileModification<CustomPolicyFormInference>) {
    if (_customFormInferenceCache == null){
      // lazy init
      var initialBytes = _config.contents(customFormInferenceLoadOp.TargetFile)
      _customFormInferenceCache = new CustomFormInferenceCache(initialBytes)
    }

    customFormInferenceLoadOp._existingContent = _customFormInferenceCache.Bytes

    _customFormInferenceCache.add(customFormInferenceLoadOp.Content)

    writeFile(customFormInferenceLoadOp.TargetFile, _customFormInferenceCache.Bytes)
  }

  function writeSystemTableRegistry(systemTableRegistryLoadOp: FileModification<SystemTableRegistryFileDefinition>) {
    if (_systemTableRegistryCache == null){
      // lazy init
      var initialBytes = _config.contents(systemTableRegistryLoadOp.TargetFile)
      _systemTableRegistryCache = new SystemTableRegistryCache(initialBytes)
    }

    systemTableRegistryLoadOp._existingContent = _systemTableRegistryCache.Bytes

    _systemTableRegistryCache.add(systemTableRegistryLoadOp.Content)

    writeFile(systemTableRegistryLoadOp.TargetFile, _systemTableRegistryCache.Bytes)
  }

  function undoWriteCustomFormInference(customFormInferenceLoadOp: FileModification<CustomPolicyFormInference>) {
    _customFormInferenceCache?.undo(customFormInferenceLoadOp._existingContent)
    undoWriteFile(customFormInferenceLoadOp)
  }

  function undoWriteSystemTableRegistry(systemTableRegistryLoadOp: FileModification<SystemTableRegistryFileDefinition>) {
    _systemTableRegistryCache?.undo(systemTableRegistryLoadOp._existingContent)
    undoWriteFile(systemTableRegistryLoadOp)
  }

  function writeScheduleConfigReplacement(scheduleConfigReplacementLoadOp: FileModification<ScheduleConfig>) {
    if(_scheduleConfigCache == null){
      // lazy init
      var initialBytes = _config.contents(scheduleConfigReplacementLoadOp.TargetFile)
      _scheduleConfigCache = new ScheduleConfigCache(initialBytes)
    }

    scheduleConfigReplacementLoadOp._existingContent = _scheduleConfigCache.Bytes
    _scheduleConfigCache = new ScheduleConfigCache(scheduleConfigReplacementLoadOp.Content.Bytes)
    writeFile(scheduleConfigReplacementLoadOp.TargetFile, _scheduleConfigCache.Bytes)
  }

  function writeTypeList(typeListLoadOp : FileModification<TypeList>) {
    var typeListFullName = typeListLoadOp.TargetFile.Name
    typeListLoadOp._existingContent = _config.contents(typeListLoadOp.TargetFile)
    var existingTypeList : TypeList = null
    if (typeListLoadOp._existingContent.length > 0) {
      if (typeListFullName.endsWith(".tti")) {
        existingTypeList = new TypeList(typeListFullName, typeListLoadOp._existingContent)
      } else {
        existingTypeList = new TypeListExtension(typeListFullName, typeListLoadOp._existingContent)
      }
    }
    //use existingTypeList as base, bring in missing TypeCodes and Filters from incomingTypeList
    if (existingTypeList != null) {
      var incomingTypeList = typeListLoadOp.Content
      TypeListHelper.addMissingTypeCodeAndCategory(incomingTypeList, existingTypeList)
      TypeListHelper.addMissingTypeFilterAndInclude(incomingTypeList, existingTypeList)
    } else {
      existingTypeList = typeListLoadOp.Content
    }
    writeFile(typeListLoadOp.TargetFile, existingTypeList.Bytes)
  }

  function writeEntity(entityLoadOp : FileModification<Entity>) {
    var entityFullName = entityLoadOp.TargetFile.Name
    entityLoadOp._existingContent = _config.contents(entityLoadOp.TargetFile)
    var existingEntity : Entity = null
    if (entityLoadOp._existingContent.length > 0) {
      if (entityFullName.endsWith(".eti")) {
        existingEntity = new Entity(entityLoadOp._existingContent)
      } else {
        existingEntity = new EntityExtension(entityLoadOp._existingContent)
      }
    }
    var incomingEntity = entityLoadOp.Content
    if (existingEntity == null) {
      writeFile(entityLoadOp.TargetFile, incomingEntity.Bytes)
    } else {
      // handling column
      var outcome = EntityColumnHelper.containsAllColumnsWithRightSizeInEntity(incomingEntity, existingEntity)
      if (outcome != EQUIV_COLUMNS) {
        // existing code assumes that everything in entity should be an update (which may not be the case if we have Type-System entries)
        incomingEntity = entityLoadOp.Content.copy()
        if (outcome == NEW_COLUMNS) {
          EntityColumnHelper.addMissingColumnsFromSource(incomingEntity, existingEntity)
        }
        EntityColumnHelper.increaseColumnSizeInTarget(incomingEntity, existingEntity)
      }

      EntityArrayHelper.addMissingArraysFromSource(incomingEntity, existingEntity)
      EntityTypeKeyHelper.addMissingTypeKeysFromSource(incomingEntity, existingEntity)
      EntityElementHelper.addMissingImplementsInterfaceFromSource(incomingEntity, existingEntity)
      EntityElementHelper.addMissingForeignKeysFromSource(incomingEntity, existingEntity)
      EntityElementHelper.addMissingImplementsEntityFromSource(incomingEntity, existingEntity)

      // write always
      writeFile(entityLoadOp.TargetFile, existingEntity.Bytes)
    }
  }

  function writeModifierPattern(modifierPatternLoadOp: FileModification<ModifierPattern>){
    if (_policyLinePatternCache == null){
      // lazy init
      var initialBytes = _config.contents(modifierPatternLoadOp.TargetFile)
      _policyLinePatternCache = new PolicyLinePatternCache(initialBytes)
    }

    modifierPatternLoadOp._existingContent = _policyLinePatternCache.Bytes
    _policyLinePatternCache.updateModifierPattern(modifierPatternLoadOp.Content)
    writeFile(modifierPatternLoadOp.TargetFile, _policyLinePatternCache.Bytes)
  }

  function undoWriteModifierPattern(modifierPatternLoadOp: FileModification<ModifierPattern>) {
    _policyLinePatternCache?.undo(modifierPatternLoadOp._existingContent)
    undoWriteFile(modifierPatternLoadOp)
  }

  function undoWriteScheduleConfig(scheduleConfigLoadOp: FileModification) {
    _scheduleConfigCache?.undo(scheduleConfigLoadOp._existingContent)
    undoWriteFile(scheduleConfigLoadOp)
  }

  function writeFileUndoable(fileModif: FileModification) {
    fileModif._existingContent = _config.contents(fileModif.TargetFile)
    writeFile(fileModif.TargetFile, fileModif.Content.Bytes)
  }

  function undoWriteFile(fileModif: FileModification, isUnicode : boolean= false) {
    var existingContent = fileModif._existingContent
    if (existingContent == null or existingContent.length == 0) {
      _config.delete(fileModif.TargetFile)
    } else {
      if (isUnicode) {
        _config.writeUnicode(fileModif.TargetFile, existingContent)
      } else {
        _config.write(fileModif.TargetFile, existingContent)
      }
    }
  }

  function writeFile(configFile: ConfigurationFile, contentBytes: byte [], isUnicode : boolean= false) {
    if (contentBytes == null) {
      throw DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.InvalidContent", configFile.Path)
    }

    if (isUnicode) {
      _config.writeUnicode(configFile, contentBytes)
    } else {
      _config.write(configFile, contentBytes)
    }
    _writtenConfigurationFiles.add(configFile)
  }

  function deleteFile(fileDeletion: FileDeletion) {
    _config.delete(fileDeletion.TargetFile)
  }
}