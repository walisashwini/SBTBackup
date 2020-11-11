package gw.lob.gl7

class GL7JurisdictionUtil {


  var _policyPeriod : PolicyPeriod

  construct(policyPeriod : PolicyPeriod) {
    _policyPeriod = policyPeriod
  }

  function productAvailableForState(jurisdiction : Jurisdiction) : boolean {
    var account = _policyPeriod.Policy.Account
    return account.getAvailableProduct(productRootForState(jurisdiction), _policyPeriod.Policy.Product) != null
  }

  private function productRootForState(jurisdiction : Jurisdiction) : PolicyProductRoot {
    return new PolicyProductRoot() {
        :Account = _policyPeriod.Policy.Account,
        :EffDate = _policyPeriod.EditEffectiveDate,
        :Producer = _policyPeriod.ProducerCodeOfRecord.Organization,
        :ProducerCode = _policyPeriod.ProducerCodeOfRecord,
        :State = jurisdiction
    }
  }

}