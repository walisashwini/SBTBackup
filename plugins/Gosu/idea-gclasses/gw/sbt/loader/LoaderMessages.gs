package gw.sbt.loader

uses java.util.Collection

class LoaderMessages {
  var _messages : Collection<String> as readonly Messages = {}

  function addMessage(message : String) {
    _messages.add(message)
  }
}