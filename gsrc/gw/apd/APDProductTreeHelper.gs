package gw.apd

uses gw.api.tree.RowTreeRootNode
uses gw.api.tree.TreeNode
uses gw.xml.XMLNode

@Export
class APDProductTreeHelper {
  private static final var DEFAULT_EXPANDCOLLAPSE_DEPTH = 4

  static function createProductTree(product : APDProduct) : RowTreeRootNode {
    if (product != null) {
      final var root = new ArrayList()
      root.add(product.buildTreeForVisualization())
      var tree = new RowTreeRootNode(root, (\node -> (node as XMLNode).Children), DEFAULT_EXPANDCOLLAPSE_DEPTH)
      return tree
    }
    return null
  }

  static function expandAll(productTree : RowTreeRootNode) {
    toggleRecursively(productTree, true)
  }

  static function collapseAll(productTree : RowTreeRootNode) {
    toggleRecursively(productTree, false)
  }

  private static function toggleRecursively(node : TreeNode, expand : boolean) {
    if (node.Expanded != expand && !node.isLeaf()) {
      node.toggle()
    }
    node.Children.each(\c -> toggleRecursively(c, expand))
  }
}