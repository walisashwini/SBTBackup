package gw.lob.common.dependency

enum ContainerType {
  COVERABLE, CLAUSE, SCHEDULE

  static function getContainerType(type : String) : ContainerType {
    var typeEnum = ContainerType.AllValues.firstWhere( \ typeEnum -> typeEnum.Code == type.toUpperCase())

    if(typeEnum == null) {
      throw "Unsupported container type '${type}' used"
    }

    return typeEnum
  }
}
