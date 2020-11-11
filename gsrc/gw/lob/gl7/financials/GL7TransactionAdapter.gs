package gw.lob.gl7.financials
uses gw.api.domain.financials.TransactionAdapter

@Export
class GL7TransactionAdapter implements TransactionAdapter
{
  var _owner : GL7Transaction
  
  construct( owner : GL7Transaction )
  {
    _owner = owner
  }
  
  override property get Cost() : Cost
  {
    return _owner.GL7Cost
  }

}
