package gw.sbt.model

class ConfigurationUpdate {

  var _line : String as Line
  var _jurisdiction : String as Jurisdiction
  var _latestAdoptedUpdate : SBTUpdateMetaData as readonly AdoptedUpdate
  var _selectedUpdateOptions : OptionSelector<SBTUpdateMetaData> as readonly SelectedUpdateOptions

  construct(line : String,
            jurisdiction : String,
            latestAdoptedUpdate : SBTUpdateMetaData,
            selectedUpdateOptions : OptionSelector<SBTUpdateMetaData>
  ) {
    _line = line
    _jurisdiction = jurisdiction
    _latestAdoptedUpdate  = latestAdoptedUpdate
    _selectedUpdateOptions = selectedUpdateOptions
  }
}
