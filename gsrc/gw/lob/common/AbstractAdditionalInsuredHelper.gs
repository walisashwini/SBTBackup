package gw.lob.common

uses gw.api.domain.Clause
uses gw.api.util.DisplayableException
uses gw.api.locale.DisplayKey

abstract class AbstractAdditionalInsuredHelper {

  abstract function getAdditionalInsuredType(clause : Clause) : AdditionalInsuredType

  function getPolicyAdditionalInsuredDetail (contact : Contact, clause : Clause) : PolicyAddlInsuredDetail {

    var mappedAdditionalInsuredType = getAdditionalInsuredType(clause)

    if(mappedAdditionalInsuredType == null){
      throw new DisplayableException(DisplayKey.get("Web.Policy.Common.AdditionalInsured.TypeNotMatch", clause.Pattern.CodeIdentifier))
    }

    var additionalInsured = clause.PolicyLine.AdditionalInsureds?.firstWhere(\ ai -> ai.AccountContactRole.AccountContact.Contact == contact)
        ?: clause.PolicyLine.addNewAdditionalInsured(contact)

    for (detail in additionalInsured.PolicyAdditionalInsuredDetails) {
      if (detail.AdditionalInsuredType == mappedAdditionalInsuredType) {
        return detail
      }
    }

    var additionalInsuredDetail = additionalInsured.addNewAdditionalInsuredDetail()
    additionalInsuredDetail.AdditionalInsuredType = mappedAdditionalInsuredType
    return additionalInsuredDetail
  }
}