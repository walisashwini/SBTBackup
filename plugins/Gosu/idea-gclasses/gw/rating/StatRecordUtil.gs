package gw.rating

uses gw.api.domain.Clause
uses gw.datatype.DataTypes
uses gw.lang.reflect.IPropertyInfo
uses gw.lob.common.annotations.StatCode
uses gw.lob.common.statcode.StatCodeSupport
uses gw.lob.common.util.ReflectionPropertyUtil
uses entity.PolicyLine

class StatRecordUtil {
  private final static var STAT_RECORD_PROPERTY_NAME : String = "StatRecord"

  static function updateStatValues(dto : LineModelObject) {
    var statCodeValues = collectStatCodeValues(dto)
    updateStatRecord(statCodeValues, dto)
  }

  static function collectStatCodeValues(dto : LineModelObject) : List<StatCodePropertyData> {
    var props = dto.IntrinsicType.TypeInfo.Properties.where(\elt -> elt.Annotations*.Type.contains(StatCode))
    return props
        .map(\prop -> new StatCodePropertyData() {
          :ColumnName = extractStatCodeColumnName(prop),
          :PropertyName = prop.DisplayName,
          :PropertyValue = dto[prop.DisplayName]
        })
        .where(\v -> v.PropertyValue != null)
  }

  static function updateStatRecord(statValues : List<StatCodePropertyData>, dto : LineModelObject) {
    var parentEffDated = dto.EffDated
    var line = resolvePolicyLine(parentEffDated)
    if (!statValues.Empty && !line.Branch.isCanceledSlice()) {
      for (statData in statValues) {
        updateStatRecordValues(dto, parentEffDated, line, statData)
      }
    }
  }

  private static function updateStatRecordValues(dto : LineModelObject, parentEffDated : EffDated, line : PolicyLine, statData : StatCodePropertyData) {
    var targetEffDated = handleTargetEffDatedDeviation(dto, parentEffDated, statData.PropertyName)
    var propertyName = resolveStatRecordPropertyName(targetEffDated, line)
    if (ReflectionPropertyUtil.hasProperty(targetEffDated, propertyName)) {
      var record = getOrCreateStatRecordEntity(targetEffDated, propertyName, line)
      if (ReflectionPropertyUtil.hasProperty(record, statData.ColumnName)) {
        var dataValue = statData.PropertyValue.toString()
        var columnSize = DataTypes.get((typeof record).TypeInfo.getProperty(statData.ColumnName)).Parameters.get("size").toInt()
        if (columnSize < dataValue.length() and dataValue.contains(".")) {
          // too many characters - trim extra decimals if zero
          var extraDigits = dataValue.substring(columnSize)
          if (!extraDigits.contains(".") and extraDigits.toInt() == 0) {
            dataValue = dataValue.substring(0, columnSize)
          }
        }
        record[statData.ColumnName] = dataValue
      }
    }
  }

  private static function getOrCreateStatRecordEntity(targetEffDated : EffDated, propertyName : String, line : PolicyLine) : Object {
    var record = targetEffDated.getFieldValue(propertyName)
    if (record == null) {
      var slice = line.Branch.getSlice(targetEffDated.EffectiveDate)
      var statRecordType = targetEffDated.IntrinsicType.TypeInfo.Properties.singleWhere(\elt -> elt.Name == propertyName).FeatureType
      record = statRecordType.TypeInfo.getConstructor({PolicyPeriod}).Constructor.newInstance({slice})
      targetEffDated.setFieldValueForChunk(propertyName, record, targetEffDated.EffectiveDate, targetEffDated.ExpirationDate)
    }
    return record
  }

  private static function handleTargetEffDatedDeviation(dto : LineModelObject, parentEffDated : EffDated, statPropertyName : String) : EffDated {
    if (parentEffDated typeis PolicyLine) {
      var deviatedPropertyName = StatCodeSupport.Instance.findTargetPropertyForStatCode(parentEffDated.IntrinsicType.RelativeName, statPropertyName)
      if (deviatedPropertyName != null && dto.hasProperty(deviatedPropertyName)) {
        return dto[deviatedPropertyName] as EffDated
      }
    }
    return parentEffDated
  }

  private static function extractStatCodeColumnName(prop : IPropertyInfo) : String {
    var theAnnotation = prop.Annotations.singleWhere(\elt -> elt.Type == StatCode)
    return (theAnnotation.Instance as StatCode).ColumnName
  }

  private static function resolvePolicyLine(effDated : EffDated) : PolicyLine {
    if (effDated typeis Clause) {
      return effDated.PolicyLine
    } else if (effDated typeis Coverable) {
      return effDated.PolicyLine
    }
    return null
  }

  private static function resolveStatRecordPropertyName(effDated : EffDated, line : PolicyLine) : String {
    var propertyName = STAT_RECORD_PROPERTY_NAME
    if (effDated typeis PolicyLine) {
      var linePrefix = line.PatternCode.remove("Line")
      propertyName = "${linePrefix}${STAT_RECORD_PROPERTY_NAME}"
    }
    return propertyName
  }

  static class StatCodePropertyData {
    var _columnName : String as ColumnName
    var _propertyName : String as PropertyName
    var _propertyValue : Object as PropertyValue

    override function equals(o : Object) : boolean {
      if (this === o) {
        return true
      }
      if (!(o typeis StatCodePropertyData)) {
        return false
      }
      var that = o as StatCodePropertyData
      return _columnName == that.ColumnName and _propertyName == that.PropertyName
          and _propertyValue == that.PropertyValue
    }

    override function hashCode() : int {
      return Objects.hash({_columnName, _propertyName, _propertyValue})
    }

    override function toString() : String {
      return "StatCodePropertyData{" +
          "_columnName='" + _columnName + '\'' +
          ", _propertyName='" + _propertyName + '\'' +
          ", _propertyValue=" + _propertyValue +
          '}';
    }
  }
}