package gw.lob.common.dependency

uses com.guidewire.commons.entity.type2.IEntityPropInfoInternal
uses gw.api.domain.Clause
uses gw.api.domain.covterm.CovTerm
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.CovTermPattern
uses gw.api.upgrade.Coercions
uses gw.api.upgrade.PCCoercions
uses org.slf4j.LoggerFactory
uses org.slf4j.MarkerFactory

class GWNode {

  var _clause: Clause
  var _covTerm: CovTerm as CovTerm
  var _coverable: Coverable
  var _value: Object as readonly Value
  var _path: GWNodePath
  var _type: NodeType as readonly Type

  enum NodeType {
    CLAUSE, COVTERM, COVERABLE, VALUE
  }

  construct (clause: Clause) {
    _clause = clause
    _type = CLAUSE
  }

  construct (covTerm: CovTerm) {
    _covTerm = covTerm
    _type = COVTERM
    _value = _covTerm.DisplayValue
  }

  construct (coverable: Coverable) {
    _coverable = coverable
    _type = COVERABLE
  }

  construct (value: Object) {
    _value = value
    _type = VALUE
  }

  property get InstanceId(): String {
    switch (_type) {
      case CLAUSE:
        return _clause.getBean().ID as String
      case COVTERM:
        return _covTerm.Clause.getBean().ID as String
      case COVERABLE:
        return _coverable.ID as String
      default:
        return null
    }
  }

  property get Id(): String {
    switch (_type) {
      case CLAUSE:
          return _clause.Pattern.CodeIdentifier
      case COVTERM:
          return _covTerm.Pattern.CodeIdentifier
      case COVERABLE:
          return _coverable.IntrinsicType.RelativeName
      default:
          return null
    }
  }

  function getParent(): GWNode {
    switch (_type) {
      case CLAUSE:
          return new GWNode(_clause.OwningCoverable)
      case COVTERM:
          return new GWNode(_covTerm.Clause)
      case COVERABLE:
          return isLine() ? null : (isScheduledItem() ? new GWNode((_coverable as ScheduledItem).ScheduleParent as Clause) : new GWNode(getParentCoverable(_coverable)))
      default:
          return null
    }
  }

  function getChildren(id: String, traversalConstraint: GraphTraversalConstraint = null): List<GWNode> {
    var children: List<GWNode>
    var childNodeType: NodeType

    if (PropertyTypeInfo.isClauseType(id)) {
      childNodeType = CLAUSE
    } else if (PropertyTypeInfo.isCoverableType(id)) {
      childNodeType = COVERABLE
    } else if (Type == CLAUSE) {
      childNodeType = COVTERM
    } else {
      childNodeType = VALUE // coverable property
    }

    return createChildrenGWNodes(childNodeType, id, traversalConstraint)
  }

  private function createChildrenGWNodes(childNodeType: NodeType, childId: String, traversalConstraint: GraphTraversalConstraint = null): List<GWNode> {
    var children = new ArrayList<GWNode>()
    switch (childNodeType) {
      case COVERABLE:
        if(_type == COVERABLE) {
          // down the risk hierarchy
          var props = _coverable.IntrinsicType.EntityProperties
          while (props?.hasNext()) {
            var prop = props.next() as IEntityPropInfoInternal
            if (prop.FeatureType.ComponentType.RelativeName == childId) {
              if (prop.Array) {
                if (_coverable[prop.Name] != null) {
                  var propertyArray = Coercions.cast<Object[]>(_coverable[prop.Name])
                  if(propertyArray typeis Coverable[]) {
                    var nodes = retainWhereMatchesConstraint(propertyArray.toList(), traversalConstraint)
                    children.addAll(nodes.map( \ node -> new GWNode(node)))
                  }
                }
              } else {
                children.add(new GWNode(_coverable[prop.Name] as Coverable))
              }
            }
          }
        } else if(_type == CLAUSE) {
          // the child has to be schedule item
          var items = _clause["ScheduledItems"]
          if (items != null and items typeis Coverable[]) {
            var nodes = retainWhereMatchesConstraint(items.toList(), traversalConstraint)
            children.addAll(nodes.map( \ node -> new GWNode(node)))
          }
        }
        break
      case CLAUSE:
        var clause = _coverable.getCoverageConditionOrExclusion(PCCoercions.makeProductModel<ClausePattern>(childId))
        if (clause != null) {
          children.add(new GWNode(clause))
        }
        break
      case COVTERM:
        var covTerm = _clause.getCovTerm(PCCoercions.makeProductModel<CovTermPattern>(childId))
        if (covTerm != null) {
          children.add(new GWNode(covTerm))
        }
        break
      case VALUE:
        var data: Object
        try {
          if (isScheduledItem()) {
            data = (_coverable as ScheduledItem).getProperty(childId)
          } else {
            data = _coverable[childId]
          }
        } catch (e: Exception) {
          // When Coverable does not have defined property, an exception is thrown. But this is a valid and possible scenario, so ignore the exception.
          //this is due to be able to get to the properties defined in enhancement not only in Entity
          logDebug("Cannot find property ${childId} from Coverable " + _coverable)
        }
        if (data != null) {
          children.add(new GWNode(data))
        }
        break
    }

    return children
  }

  internal function retainWhereMatchesConstraint(coverables: List<Coverable>, constraint: GraphTraversalConstraint): List<Coverable> {
    if(constraint != null) {
      coverables.retainWhere( \ cbl -> constraint.matchesConditionsForCoverable(cbl))
    }
    return coverables
  }

  function getChild(id: String, traversalConstraint: GraphTraversalConstraint): GWNode {
    try {
      var children = getChildren(id, traversalConstraint)
      if(children.size() == 1) {
        return getChildren(id).first()
      } else {
        return null
      }
    } catch (ex: Exception) {
      //Currently just information instead of a warning because sometimes the clause hasn't been created yet.
      logDebug("Cannot find child node ${id} from Coverable " + _coverable)
      return null
    }
  }

  property get NodeObject(): Object {
    switch (_type) {
      case CLAUSE:
          return _clause
      case COVTERM:
          return _covTerm
      case COVERABLE:
          return _coverable
      case VALUE:
          return _value
      default:
        return null
    }
  }

  property get Path(): GWNodePath {
    if (_path == null) { // cache
      _path = new GWNodePath(this)
    }
    return _path
  }

  function isLine(): boolean {
    return _type == COVERABLE and
        _coverable.PolicyLine.IntrinsicType.Name == _coverable.IntrinsicType.Name
  }

  function isScheduledItem(): boolean {
    return _type == COVERABLE and _coverable typeis ScheduledItem
  }

  function isValue(): boolean {
    return _type == VALUE
  }

  override function hashCode(): int {
    return _type.hashCode() * 13 + _clause?.hashCode() + _covTerm?.hashCode() +  _coverable?.hashCode()
  }

  override function equals(obj: Object): boolean {
    return obj typeis GWNode and _type == obj.Type and NodeObject == obj.NodeObject
  }

  private function getParentCoverable(coverable: Coverable): Coverable {
    var coverableTypeName = coverable.IntrinsicType.RelativeName
    var props = coverable.IntrinsicType.EntityProperties

    while (props.hasNext()) {
      var p = props.next() as IEntityPropInfoInternal
      if (p.DataType.Name == "foreignkey") {
        var array = p.asLink().AssociatedArrays.first()
        if (array != null and array.FeatureType.RelativeName == (coverableTypeName + "[]"))  {
          return coverable[p.Name] as Coverable
        }
      }
    }

    return null
  }

  private function logDebug(message: String) {
    LoggerFactory.getLogger("DEPENDENCY").debug(MarkerFactory.getMarker(GWNode.Type.Name), GWNode.Type.Name + ": ${message}")
  }
}

