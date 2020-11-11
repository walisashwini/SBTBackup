package gw.sbt.pca.view

uses gw.api.tree.TreeNode
uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.api.locale.DisplayKey

enhancement RowTreeRootNodeEnhancement : gw.api.tree.RowTreeRootNode {

  function resetClauseTree() {
    resetClauseTree(this)
  }

  //can be written as a single function but written as two separate functions for ease of understanding.
  function resetClauseTree(node : TreeNode) {
    node.Children.each( \ c -> {
      setNodeExpanded(c,
          (c.Data as RowPresenter).Description != DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Attributes"))
      resetClauseTree(c)
    })
  }

  function setNodeExpanded(node : TreeNode, expanded : boolean) {
    if(not node.Leaf and node.Expanded != expanded) {
      node.toggle()
    }
  }
}
