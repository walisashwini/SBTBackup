package gw.sbt.model

uses java.util.List

class OptionSelector<T> {

  var _options : List<T> as readonly Options
  var _selection : T as Selection

  construct(options : List<T>, selection : T = null) {
    _options = options
    _selection = selection
  }

  reified static function make<U>(options : List<U>, selection : U = null) : OptionSelector<U> {
    return new OptionSelector<U>(options, selection)
  }
}
