package gw.sbt.loader.io

uses gw.sbt.artifacts.forms.FormPatterns
uses gw.sbt.artifacts.forms.PolicyFormPattern

class FormPatternsCache {
  var _formPatterns : FormPatterns
  var _currentBytes: byte[] as readonly Bytes = {}

  internal function add(content : PolicyFormPattern){
    if (_formPatterns == null) {
      // lazy init
      _formPatterns = new FormPatterns(content.FormPatternBytes)
    } else {
      _formPatterns.addFormPattern(content)
    }

    _currentBytes = _formPatterns.Bytes
  }

  internal function undo(previousContent: byte[]){
    if (previousContent != null){
      _currentBytes = previousContent
      _formPatterns = null
      if (previousContent.Count > 0){
        _formPatterns = new FormPatterns(previousContent)
      }
    }
  }

}