package gw.lob.gl7.tree

uses gw.api.tree.RowTreeRootNode
uses gw.api.tree.TreeNode
uses gw.lob.gl7.pcf.GL7TreeNodeExpandCollapseContext

uses java.util.ArrayList

class GL7PolicyReviewTreeBuilder {

  var _line : GL7GeneralLiabilityLine

  construct(line : GL7GeneralLiabilityLine){
   _line = line
  }

  function createPolicyReviewTreeWithContext(expandCollapseContext: GL7TreeNodeExpandCollapseContext) : RowTreeRootNode {
    expandCollapseContext.save()
    var root = createPolicyReviewTreeRootNode()
    expandCollapseContext.RootNode = root
    expandCollapseNodes(root, expandCollapseContext)

    return root
  }

  private function createPolicyReviewTreeRootNode() : RowTreeRootNode {
    return new RowTreeRootNode(generatePolicyReviewTreeLocationRows(),
        \ o -> {
          var row = o as GL7AbstractSummaryRow
          return row.Children
        }
    )
  }

  private function generatePolicyReviewTreeLocationRows() : List<GL7LocationSummaryRow> {
    var rows = new ArrayList<GL7LocationSummaryRow>()
    var policyLocations = _line.Branch.PolicyLocations
        .orderBy( \ l -> l.LocationNum)

    policyLocations.each( \ policyLocation -> rows.add(new GL7LocationSummaryRow(_line, policyLocation)))
    return rows
  }

  private function expandCollapseNodes(root : TreeNode,  expandCollapseContext : GL7TreeNodeExpandCollapseContext) {
    for(node in root.Children) {
      var newChild = expandCollapseContext.hasNewChild(root)
      if (not node.Leaf) {
        var expandCollapse = expandCollapseContext.getExpandCollapse(node) or newChild
        if (existingNonLeafNodeAndDifferentExpandCollapse(expandCollapse, node) or newNonLeafNodeAndNotExpanded(expandCollapse, node)) {
          node.toggle()
        }
        expandCollapseNodes(node, expandCollapseContext)
      }
    }
  }

  private function existingNonLeafNodeAndDifferentExpandCollapse(expandCollapse : Boolean, node : TreeNode) : boolean {
    return expandCollapse != null and node.Expanded != expandCollapse
  }

  private function newNonLeafNodeAndNotExpanded(expandCollapse : Boolean, node : TreeNode) : boolean {
    return expandCollapse == null and not node.Expanded
  }

}