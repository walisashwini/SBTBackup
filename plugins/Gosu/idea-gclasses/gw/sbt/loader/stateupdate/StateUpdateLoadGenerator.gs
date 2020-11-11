package gw.sbt.loader.stateupdate

uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.reporter.MessageReporter
uses org.slf4j.Logger
uses org.slf4j.LoggerFactory

//base class for StateUpdate Load Generator
abstract class StateUpdateLoadGenerator {
  protected var _currentContents : CurrentConfigContents
  protected var _updateContents : SBTUpdateContents
  protected var _adoptedContents : SBTUpdateContents
  protected var _adoptionDate : Date as AdoptionDate
  protected var _jurisdiction : String as Jurisdiction
  protected var _isIndependentState : boolean
  protected var _messageReporter : MessageReporter as MessageReporter

  construct(
      currentContents : CurrentConfigContents,
      updateContents : SBTUpdateContents,
      adoptedContents : SBTUpdateContents
  ) {
    _currentContents = currentContents
    _updateContents = updateContents
    _adoptedContents = adoptedContents
  }

  protected property get Logger() : Logger {
    return LoggerFactory.getLogger("PCA")
  }
}