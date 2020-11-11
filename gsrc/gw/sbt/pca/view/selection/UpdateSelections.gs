package gw.sbt.pca.view.selection

class UpdateSelections {
  var _adoptedSelection : UpdateSelection as readonly AdoptedSelection
  var _newSelection : UpdateSelection as readonly NewSelection

  construct(adoptedSelection : UpdateSelection, newSelection : UpdateSelection) {
    _adoptedSelection = adoptedSelection
    _newSelection = newSelection
  }
}