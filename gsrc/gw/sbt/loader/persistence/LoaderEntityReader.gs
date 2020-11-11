package gw.sbt.loader.persistence

uses com.guidewire.pl.system.exim.XMLExport
uses com.google.common.collect.Lists
uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.sbt.artifacts.forms.FormPatterns
uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.util.LoaderUtil

class LoaderEntityReader {

  function findFormPattern(code : String) : PolicyFormPattern {
    var formPatternList = Query.make(FormPattern).compare(FormPattern#Code, Relop.Equals, code).select().toList()
    if (formPatternList.Count != 1) return null
    var formBytes = XMLExport.exportXmlToBytes(formPatternList, false)
    var result = new FormPatterns(formBytes).All.first()
    return result
  }

  function findFormPatterns(formNumber : String, policyLinePatternCode : String) : List<PolicyFormPattern> {
    var formPatternList = Query.make(FormPattern)
        .compare(FormPattern#FormNumber, Relop.Equals, formNumber)
        .compare(FormPattern#PolicyLinePatternCode, Relop.Equals, policyLinePatternCode)
        .select().toList()
    if (formPatternList.Empty) return null
    var formBytes = XMLExport.exportXmlToBytes(formPatternList, false)
    var result = new FormPatterns(formBytes).All
    return result
  }

  function findAllFormPatternNumbersWithCWLookup(policyLinePatternCode : String) : List<String> {
    var formPatternList = Query.make(FormPattern).compare(FormPattern#PolicyLinePatternCode, Relop.Equals, policyLinePatternCode).select().toList()
    formPatternList.retainWhere(\formPattern -> formPattern.Lookups.hasMatch(\lookup -> LoaderUtil.isJurisdictionCW(lookup.Jurisdiction.Code)))
    return formPatternList.Empty ? {} : Lists.newArrayList(formPatternList*.FormNumber)
  }
}