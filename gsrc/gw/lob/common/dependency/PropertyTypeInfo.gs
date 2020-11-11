package gw.lob.common.dependency

uses gw.api.domain.Clause
uses gw.api.productmodel.ClausePattern
uses gw.api.system.logging.LOBLoggerCategory
uses gw.lang.reflect.IType
uses gw.lang.reflect.TypeSystem
uses org.slf4j.MarkerFactory
uses java.lang.ClassNotFoundException
uses java.lang.Comparable
uses java.util.ArrayList
uses java.util.StringTokenizer
uses gw.lob.common.dependency.schema.value_dependency_config.KeyColumn
uses org.slf4j.LoggerFactory

class PropertyTypeInfo implements Comparable<PropertyTypeInfo> {
  var _path: String as Path
  var _pathSegments = new ArrayList<String>()

  var _name: String as readonly Name
  var _type: IType as readonly ContextType
  var _riskType: IType as readonly RiskType

  var _isLineLevel: boolean as readonly IsLineLevel = false
  var _isClause: boolean as readonly IsClause = false
  var _isTerm: boolean as readonly IsTerm = false
  var _isSchedule: boolean as readonly IsSchedule = false
  var _isCalculated: boolean as readonly IsCalculated = false
  var _isModifier: boolean as readonly IsModifier = false

  construct(name: String, typeName: String){
    this(name, typeName, false)
  }

  construct(type: IType){
    _isCalculated = true
    _type = type
  }

  construct(name: String, typeName: String, isSchedule: boolean){
    determineType(typeName)
    _isSchedule = isSchedule
    init(name, false)
  }

  construct(path: String) {
    _path = path
    var st = new StringTokenizer(_path, '/')
    while (st.hasMoreTokens()) {
      _pathSegments.add(st.nextToken())
    }
    if (_pathSegments.size() < 2) {
      throw("PropertyTypeInfo path requires at least 2 segments")
    }

    determineType(_pathSegments[_pathSegments.size() - 2])
    if (_type != null && ScheduledItem.Type.isAssignableFrom(_type)) {
      _isSchedule = true
      // Use the 3rd last segment if the 2nd one is the generic schedule item name
      if (_pathSegments.size() < 3) {
        throw("PropertyTypeInfo path for schedule item property requires at least 3 segments")
      }
      determineType(_pathSegments[_pathSegments.size() - 3])
    }
    init(_pathSegments[_pathSegments.size() - 1], true)
  }

  static function createFromKeyColumnXml(keyColumn: KeyColumn) : PropertyTypeInfo  {
    if (keyColumn.Path != null) {
      return new PropertyTypeInfo(keyColumn.Path)
    } else {
      return new PropertyTypeInfo(TypeSystem.getByFullName(keyColumn.ClassPath))
    }
  }

  private function determineType(typeName: String) {
    _type = DependencyUtil.getTypeByRelativeName(typeName)

    if (_type == null) {
      LoggerFactory.getLogger("DEPENDENCY").warn(MarkerFactory.getMarker(PropertyTypeInfo.Type.Name), PropertyTypeInfo.Type.Name + ": typeName '${typeName}' is not found in TypeSystem !!!!!")
    }
  }

  final function init(name: String, fromPath: boolean) {
    _name = name
    if (_type != null) {
      if (Clause.Type.isAssignableFrom(_type)) {
        _isClause = true

        if (not _isSchedule) {
          _isTerm = true
          if (not fromPath and _name.endsWith("Term")) {
            _name = _name.substring(0, _name.lastIndexOf("Term"))
          }
        }

        var coverableName = com.guidewire.pc.system.dependency.PCDependencies.ProductModel.getPatternByCodeIdentifier(_type.RelativeName, ClausePattern).OwningEntityType
        _riskType = DependencyUtil.getTypeByRelativeName(coverableName)
      } else if (Coverable.Type.isAssignableFrom(_type)) {
        _riskType = _type
        if (_name != null) {

          // TODO: do not initialize it, slow and not used most of the time
          _isClause = isClauseType(_name)
        }
      } else if (Modifier.Type.isAssignableFrom(_type)) {
        _isModifier = true
      } else {
        throw("Unsupported type!:${_type.Name} for PropertyTypeInfo")
      }

      if (PolicyLine.Type.isAssignableFrom(_riskType) and not _isSchedule) {
        _isLineLevel = true
      }
    } else {
      return
    }
  }

  static function isClauseType(typeName: String): boolean {
    var type = DependencyUtil.getTypeByRelativeName(typeName)
    return type != null and not type.Interface && not type.Abstract && Clause.Type.isAssignableFrom(type) // ignore all the keywords from base PC like "Exclusion"
  }

  static function isCoverableType(typeName: String): boolean {
    var type = DependencyUtil.getTypeByRelativeName(typeName)
    return type != null and not type.Interface && not type.Abstract && Coverable.Type.isAssignableFrom(type) // ignore all the keywords from base PC like "Coverable"
  }

  property get FullPropertyName(): String {
    return ContextType.RelativeName + '.' + Name
  }

  override function equals(obj: Object): boolean {
    return (obj as PropertyTypeInfo).FullPropertyName == FullPropertyName
  }

  override function hashCode(): int {
    return FullPropertyName.hashCode()
  }

  override function compareTo(other: PropertyTypeInfo): int {
    return this.FullPropertyName.compareTo(other.FullPropertyName)
  }

  override function toString(): String {
    return FullPropertyName
  }
}
