package gw.lob.gl7.pcf

uses gw.api.tree.RowTreeRootNode
uses gw.api.tree.TreeNode
uses gw.lob.gl7.tree.GL7AbstractSummaryRow

uses java.util.Map

class GL7TreeNodeExpandCollapseContext {
  var _location : PolicyLocation
  var _root : RowTreeRootNode as RootNode
  var _expandCollapseMap : Map< GL7AbstractSummaryRow, Boolean>

  property set RootNode(root : RowTreeRootNode) {
    if(_root == null) {
      _expandCollapseMap = expandCollapseContext(root)
    }
    _root = root
  }

  public function save() {
    if(_root != null) {
      _expandCollapseMap = expandCollapseContext(_root)
    }
  }

  function hasNewChild(root : TreeNode) : boolean {
    return _expandCollapseMap != null and //if the map has not been initialized then we are not returning from a popup
        (root.Children.hasMatch( \ c -> not _expandCollapseMap.containsKey(c.Data)) //A child is new
            or root.Children.hasMatch( \ c -> hasNewChild(c))) //A descendant of a child is new
  }

  function setLocation(location: PolicyLocation) {
    _location = location
  }

  function getExpandCollapse(node: TreeNode) : boolean {
    return _expandCollapseMap.get(node.Data as GL7AbstractSummaryRow)
  }

  private function expandCollapseContext(root : RowTreeRootNode) : Map< GL7AbstractSummaryRow, Boolean> {
    var expandCollapseMap : Map< GL7AbstractSummaryRow, Boolean> = {}

    saveChildNodes(root, expandCollapseMap)

    return expandCollapseMap
  }

  function saveChildNodes(root: TreeNode, expandCollapseMap: Map< GL7AbstractSummaryRow, Boolean>) {
    for(node in root.Children) {
      expandCollapseMap.put(node.Data as GL7AbstractSummaryRow, node.Expanded)
      saveChildNodes(node, expandCollapseMap)
    }
  }

  public function expandAll() : GL7TreeNodeExpandCollapseContext {
    setAllNodes(true)
    return this
  }

  public function collapseAll() : GL7TreeNodeExpandCollapseContext {
    setAllNodes(false)
    return this
  }

  public function setAllNodes(expanded : boolean) {
    var root : TreeNode
    if(_location == null) {
      root = _root
    } else {
      //expand only the location and children of that location.  This is for when the tree has been filtered and only
      //a single location is showing
      root = _root.Children.firstWhere( \ locNode -> (locNode.Data as GL7AbstractSummaryRow ).Location == _location)
    }
    setNodeAndChildrenExpanded(root, expanded)
    save()
  }

  function setNodeAndChildrenExpanded(node : TreeNode, expanded : boolean) {
    setNodeExpanded(node, expanded)
    node.Children.each( \ childNode -> {
      setNodeAndChildrenExpanded(childNode, expanded)
    })
  }

  function setNodeExpanded(node : TreeNode, expanded : boolean) {
    if(not node.Leaf and node.Expanded != expanded) {
      node.toggle()
    }
  }
}