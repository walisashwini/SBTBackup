package gw.forms.generic

uses gw.admin.EntityTypeRef
uses gw.entity.IEntityPropertyInfo
uses gw.entity.IEntityType
uses gw.entity.ITypeList
uses gw.entity.TypeKey
uses gw.lang.reflect.IPropertyInfo
uses gw.lob.common.dependency.v2.ValueDependencySupport

enhancement FormPatternMultipleInferenceEnhancement : entity.FormPattern {
  property get CoverableTypeKeysRef() : TypeKey[] {
    if (this.CoverableTypeRef != null and this.CoverableTypeListRef != null and this.CoverableTypeKeys.HasElements) {
      return this.CoverableTypeKeys.map(\key -> (this.CoverableTypeListRef.FeatureType as ITypeList).getTypeKey(key.Code))
    } else {
      return null
    }
  }

  property set CoverableTypeKeysRef(keys : TypeKey[]) {
    this.clearCoverableTypeKeys()
    if (keys.HasElements) {
      keys.each(\key -> {
        this.addToCoverableTypeKeys(new FormPatternTypeKey() {
          :FormPattern = this,
          :Code = key.Code
        })
      })
    }
  }

  property get CoverableSysTableRef() : IPropertyInfo {
    if (this.CoverableTypeRef != null and this.CoverableSysTable != null) {
      return this.CoverableTypeRef.EntityType.TypeInfo.Properties.firstWhere(\elt -> elt.Name == this.CoverableSysTable)
    } else {
      return null
    }
  }

  property set CoverableSysTableRef(prop : IPropertyInfo) {
    if (prop != null) {
      this.CoverableSysTable = prop.Name
    } else {
      this.CoverableSysTable = null
    }
  }

  property get CoverableSysTableValuesRef() : String[] {
    if (this.CoverableTypeRef != null and this.CoverableSysTableRef != null and this.CoverableSysTableValues.HasElements) {
      return this.CoverableSysTableValues.map(\elt -> elt.Code)
    } else {
      return {}
    }
  }

  property set CoverableSysTableValuesRef(keys : String[]) {
    this.clearCoverableSysTableValues()
    if (keys.HasElements) {
      keys.each(\key -> {
        this.addToCoverableSysTableValues(new FormPatternSysTableValue() {
          :FormPattern = this,
          :Code = key
        })
      })
    }
  }

  property get CoverableTypeRangeWithoutScheduledItems() : EntityTypeRef[] {
    if (this.PolicyLinePatternRef != null) {
      return this.PolicyLinePatternRef.Pattern.AllCoverableEntityTypes.where(\elt -> !isScheduledItem(elt)).map(\i -> new EntityTypeRef(i)).toTypedArray()
    } else {
      return {}
    }
  }

  property get CoverableSysTableRange() : IPropertyInfo[] {
    if (this.CoverableTypeRef == null) {
      return {}
    }
    var entityTypeInfo = this.CoverableTypeRef.EntityType.TypeInfo
    var sysTableProperties = ValueDependencySupport.Instance.getCoverableSysTableProperties(entityTypeInfo.Name)
    var props = entityTypeInfo.Properties
        .where(\elt -> elt typeis IEntityPropertyInfo
            and sysTableProperties.contains(elt.Name)
            and not this.BlackListedFormPatternCoverableProperties.contains(elt.Name))
    return props.toTypedArray()
  }

  property get CoverableSysTableValuesRange() : String[] {
    if (this.CoverableTypeRef == null or this.CoverableSysTableRef == null) {
      return {}
    }
    return ValueDependencySupport.Instance.fullValueRange(this.CoverableSysTableRef.Name, this.CoverableTypeRef.EntityType.TypeInfo.Name).toTypedArray()
  }

  function clearCoverableTypeKeys() {
    this.CoverableTypeKeys.each(\w -> this.removeFromCoverableTypeKeys(w))
  }

  function clearCoverableSysTableValues() {
    this.CoverableSysTableValues.each(\v -> this.removeFromCoverableSysTableValues(v))
  }

  private function isScheduledItem(entity: IEntityType): boolean {
    return ScheduledItem.Type.isAssignableFrom(entity)
  }
}
