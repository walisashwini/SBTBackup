package gw.sbt.loader

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses java.lang.Exception
uses java.util.List

class Load<T> {
  var _subject : T as readonly Subject
  var _categorizedMessages : Map<LoadMessageCategory, List<String>>
  var _manualWorkRequired : boolean as ManualWorkRequired

  var _loadOps : LoadOps as readonly LoadOps

  construct() {
    _loadOps = new LoadOps()

    _categorizedMessages= new HashMap <LoadMessageCategory, List<String>> ()
    _categorizedMessages.put (LoadMessageCategory.DEFAULT, {})

    _manualWorkRequired = false
  }

  construct(subject : T) {
    this()
    _subject = subject
  }

  function add(op : LoadOp) {
    _loadOps.add(op)
  }

  function commit(writer : SBTUpdateLoaderWriter) {
    try {
      _loadOps.commit(writer)
    } catch (e : Exception) {
      e.printStackTrace()
      undo(writer)
      throw e
    }
  }

  function rollback() {
    throw "not implemented"
  }

  function undo(writer : SBTUpdateLoaderWriter) {
    _loadOps.undo(writer)
  }

  function setFailedLoadManualInstructions(instruction : String) {
    _manualWorkRequired = true
    addMessage(instruction)
  }

  function addMessage(message: String){
    addMessage (LoadMessageCategory.DEFAULT, message)
  }

  function addMessage(category: LoadMessageCategory, msg : String){
    var messages= _categorizedMessages.get (category)

    if (messages== null) {
      messages= new ArrayList<String> ()
      _categorizedMessages.put (category, messages)
    }

    messages.add (msg)
  }

  function addMessages(category: LoadMessageCategory, msgs: List<String>){
    var messages= _categorizedMessages.get (category)

    if (messages== null) {
      messages= new ArrayList<String> ()
      _categorizedMessages.put (category, messages)
    }

    messages.addAll (msgs)
  }


  property get Messages () : List<String> {
    return _categorizedMessages.get (LoadMessageCategory.DEFAULT)
  }

  property get CategorizedMessages () : Map <LoadMessageCategory, List<String>> {
    return _categorizedMessages
  }

  property get HasProductModelOps() : boolean {
    return _loadOps.HasProductModelOps
  }

  property get HasSystemTableOps() : boolean {
    return _loadOps.HasSystemTablesOps
  }

  property get ModifiedFiles() : ConfigurationFile[] {
    return _loadOps.CommittedOps*.TargetFile
  }

}