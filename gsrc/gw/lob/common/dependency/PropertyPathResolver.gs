package gw.lob.common.dependency

uses gw.api.domain.Clause
uses gw.api.system.logging.LOBLoggerCategory
uses org.slf4j.MarkerFactory
uses java.util.ArrayList
uses java.util.LinkedList
uses java.util.List
uses gw.api.productmodel.CovTermPattern
uses com.guidewire.commons.entity.type2.IEntityPropInfoInternal
uses gw.api.upgrade.PCCoercions
uses org.slf4j.LoggerFactory
uses gw.api.domain.covterm.OptionCovTerm

class PropertyPathResolver {

  static function getValue(currentProperty: PropertyInstanceInfo, depOn: PropertyTypeInfo): Object {
    return getValue(currentProperty, depOn, null);
  }

  static function getValue(currentProperty: PropertyInstanceInfo, depOn: PropertyTypeInfo, scheduledItem: ScheduledItem): Object {
    var contextObject = currentProperty.ContextObject

    if (scheduledItem != null) {
      if (scheduledItem.IntrinsicType.Name == depOn.ContextType.Name) {
        return scheduledItem.getProperty(depOn.Name)
      }
      if (scheduledItem typeis Coverable) {
        if (depOn.Path.indexOf("/${scheduledItem.IntrinsicType.TypeInfo.Name}/") != - 1){
          return getValue(scheduledItem, depOn)
        }

        // check parent coverable if the dependency is not on the schedule item
        var parent = currentProperty.ContextCoverable
        return getValue(parent, depOn)
      }
    }

    // in the same object
    if (currentProperty.TypeInfo.ContextType == depOn.ContextType) {
      if (depOn.IsClause){
        return getTermValue(contextObject as Clause, depOn.Name)
      }
      return contextObject[depOn.Name]
    }

    var contextCoverable = currentProperty.ContextCoverable

    // compare between clause and column
    return getValue(contextCoverable, depOn)
  }

  static function getValue(coverable: Coverable, propertyTypeInfo: PropertyTypeInfo): Object {
    var traversalConstraint = DependencyUtil.getGraphTraversalConstraint(coverable)

    var valueNodes = getValues(coverable, propertyTypeInfo, traversalConstraint)
    if(valueNodes?.size() == 1) {
      var node = valueNodes.first()
      if(node.NodeObject typeis OptionCovTerm){
        return getOptionCovTermValue(node.NodeObject)
      }
      return node.Value
    }

    return null
  }

  /**
   * Supports multiplicity. If any segment in the path is an array, the method will iterate through the whole array and search all subtrees for the value.
   * Optional GraphTraversalConstraint object can be passed, that will limit graph traversals to objects that match criteria wrapped in the constraint,
   * e.g. belong to specific jurisdiction.
   */
  static function getValues(coverable: Coverable, propertyTypeInfo: PropertyTypeInfo, traversalConstraint: GraphTraversalConstraint = null): List<GWNode> {
    var values = new ArrayList<GWNode>()
    var remainingNodeQueue = new LinkedList< MultiplicityNode >()
    var sourceNode = new GWNode(coverable)
    var relativePath = getRelativePath(sourceNode, propertyTypeInfo)
    var commonNode = findCommonNode(sourceNode, relativePath)
    var toTarget = relativePath.ToTarget.subList(1, relativePath.ToTarget.size())
    remainingNodeQueue.push(new MultiplicityNode (commonNode, toTarget))

    while (!remainingNodeQueue.Empty) {
      var toBeProcessedNode = remainingNodeQueue.pop()

      if (toBeProcessedNode.RemainingPaths.Empty) {
        values.add(toBeProcessedNode.Node)
      } else {
        var children = toBeProcessedNode.Node.getChildren(toBeProcessedNode.RemainingPaths.get(0), traversalConstraint)

        for (child in children) {
          remainingNodeQueue.push(new MultiplicityNode (child, toBeProcessedNode.RemainingPaths.subList(1, toBeProcessedNode.RemainingPaths.Count)))
        }
      }
    }

    return values
  }

  private static function getRelativePath(sourceNode: GWNode, propertyTypeInfo: PropertyTypeInfo): GWNodeRelativePath {
    var sourcePath = sourceNode.Path
    var targetPath = new GWNodePath(propertyTypeInfo.Path)
    return new GWNodeRelativePath(sourcePath, targetPath)
  }

  private static function findCommonNode(sourceNode: GWNode, relativePath: GWNodeRelativePath): GWNode {
    var commonNode = sourceNode
    var numOfParent = relativePath.FromSource.size() - 1
    while (numOfParent > 0) {
      commonNode = commonNode.getParent()
      numOfParent --
    }

    return commonNode
  }

  static function getChildCoverables(currentCoverable: Coverable, traversalConstraint: GraphTraversalConstraint): List<Coverable> {
    var childCoverables = new ArrayList<Coverable>()
    var props = currentCoverable.IntrinsicType.EntityProperties

    while (props.hasNext()) {
      var prop = props.next() as IEntityPropInfoInternal
      if (prop.Array) {
        var entityType = prop.asArray().ComponentEntityType
        if (Coverable.Type.isAssignableFrom(entityType)) {
          var someChildren = currentCoverable[prop.Name] as Coverable[]
          if(traversalConstraint != null) {
            childCoverables.addAll(someChildren.where( \ child -> traversalConstraint.matchesConditionsForCoverable(child)).toList())
          }
        }
      }
    }

    return childCoverables
  }

  public static function getCoverableLevelPropertyValue(currentCoverable: Coverable, typeInfo: PropertyTypeInfo): Object {
    if (typeInfo.IsClause){
      var clauseType = typeInfo.ContextType
      var clauseObj = currentCoverable[clauseType.RelativeName] as Clause
      return getTermValue(clauseObj, typeInfo.Name)
    }
    return currentCoverable[typeInfo.Name]
  }

  private static function getTermValue(clauseObj: Clause, propName: String): Object {
    if (clauseObj?.hasCovTermByCodeIdentifier(propName)) {
      var covTerm = clauseObj.getCovTerm(PCCoercions.makeProductModel<CovTermPattern>(propName))
      if(covTerm typeis OptionCovTerm){
        return getOptionCovTermValue(covTerm)
      }
      return covTerm.DisplayValue
    }
    LoggerFactory.getLogger("DEPENDENCY").debug(MarkerFactory.getMarker(PropertyPathResolver.Type.Name), PropertyPathResolver.Type.Name + ": Cannot find term '${propName}' for clause '${clauseObj}'")
    return null
  }

   /*
    THIS METHOD SHOULD BE REMOVED AND CLASS REFACTORED AFTER SWITCHING TO FULLY USE IN GENERATION OPTION VALUE, NOT DISPLAY ONE
    */
   private static function getOptionCovTermValue(optCovTerm : OptionCovTerm) : Object {
     if({"No Coverage", "Not Applicable"}.contains(optCovTerm.DisplayValue) and not {"NoCoverage", "NotApplicable"}.contains(optCovTerm.OptionValue.OptionCode)){
        return optCovTerm.OptionValue.OptionCode
     }

     return optCovTerm.DisplayValue
   }

  private static class MultiplicityNode {
    var _node: GWNode as readonly Node
    var _remainingPaths: List<String> as readonly RemainingPaths
    construct(node: GWNode, remainingPaths: List<String>) {
      _node = node
      _remainingPaths = remainingPaths
    }
  }
}
