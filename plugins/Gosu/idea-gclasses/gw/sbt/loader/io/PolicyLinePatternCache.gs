package gw.sbt.loader.io

uses gw.sbt.artifacts.policyline.PolicyLinePattern
uses gw.sbt.artifacts.policyline.ModifierPattern

class PolicyLinePatternCache {

  var _policyLinePattern: PolicyLinePattern
  var _currentBytes: byte[] as readonly Bytes

  internal construct(initial : byte[]){
    reset(initial)
  }

  internal function updateModifierPattern(content : ModifierPattern){
    _policyLinePattern.updateModifierPattern(content)
    _currentBytes = _policyLinePattern.Bytes
  }

  internal function undo(previousContent: byte[]){
    if (previousContent != null){
      reset(previousContent)
    }
  }

  private function reset(content: byte[]){
    _currentBytes = content
    _policyLinePattern = new PolicyLinePattern(content)
  }

}