package gw.sbt.loader.report

uses gw.sbt.loader.Load
uses gw.sbt.loader.LoadMessageCategory
uses gw.sbt.loader.Loads
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses java.util.Date
uses java.util.List

class LoadResult {

  var _loads : Loads
  var _sbtUpdate : SBTUpdate

  var _successfulLoads : LoadResultCategory as SuccessfulLoads
  var _failedLoads : LoadResultCategory as FailedLoads

  static function forStateAdd(loads : Loads, sbtUpdate : SBTUpdate) : LoadResult {
    return new LoadResult(loads, sbtUpdate, \ loadList -> LoadResultCategory.forStateAdd(loadList, sbtUpdate))
  }

  static function forStateUpdate(loads : Loads, sbtUpdate : SBTUpdate) : LoadResult {
    return new LoadResult(loads, sbtUpdate, \ loadList -> LoadResultCategory.forStateUpdate(loadList, sbtUpdate))
  }

  private construct(loads : Loads, sbtUpdate : SBTUpdate, categorize(loadList : List<Load>) : LoadResultCategory) {
    _loads = loads
    _sbtUpdate = sbtUpdate
    _successfulLoads = categorize(_loads.SuccessfulLoads)
    _failedLoads = categorize(_loads.FailedLoads*.Load.toList())
  }

  property get MetaData() : SBTUpdateMetaData {
    return _sbtUpdate.MetaData
  }

  property get AdoptionDate() : Date {
    return _sbtUpdate.AdoptionDate
  }

  property get Messages() : List<String> {
    return _loads.AllLoads.flatMap(\load -> load.Messages)
  }

  reified function getAllMessagesForArtifact<T>() : List<String> {
    return _loads.AllLoads.whereTypeIs(Load<T>).flatMap(\load -> load.Messages)
  }

  reified function getAllCategorizedMessagesForArtifact<T>() : Map <LoadMessageCategory, List<String>> {
    var allMsgCombinedByCategory= new HashMap<LoadMessageCategory, List<String>> ()


    // take the categorized message lists of each Category (a N-to-1 relationship)
    _loads.AllLoads.whereTypeIs(Load<T>)
        .each(\ load -> load.CategorizedMessages
            // combine them into a consolidated list
            .forEach(\ category, msgs -> {
              if (msgs typeis List<String> and msgs.HasElements) {
                var msgCombinedByCategory = allMsgCombinedByCategory.get(category)

                if (!msgCombinedByCategory.HasElements) {
                  msgCombinedByCategory = new ArrayList<String>()

                  allMsgCombinedByCategory.put(category, msgCombinedByCategory)
                }

                msgCombinedByCategory.addAll(msgs)
              }
            })
        )

    return allMsgCombinedByCategory
  }
}
