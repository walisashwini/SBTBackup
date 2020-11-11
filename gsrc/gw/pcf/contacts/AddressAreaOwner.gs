package gw.pcf.contacts

uses gw.api.address.AddressFillableExtension

uses java.lang.UnsupportedOperationException
uses java.util.*
uses gw.api.address.AddressOwnerFieldId

@Export
class AddressAreaOwner extends OptionalSelectedCountryAddressOwner {

  var _address : Address
  var _useCounty : boolean

  construct(addrDelegate : AddressFillableExtension, useCounty : boolean = true) {
    assignDelegateInternal(addrDelegate)
   _useCounty = useCounty
  }

  //prevents overridable method from being called inside a constructor
  private function assignDelegateInternal(addrDelegate : AddressFillableExtension) {
    this.setDelegateInternal(addrDelegate)
  }

  override property get ShowAddressSummary() : boolean {
    return false
  }

  override property get Address(): entity.Address {
    return null
  }
  override property set Address(value: entity.Address) {
    throw new UnsupportedOperationException("Address is not supported, please use AddressFillableExtension")
  }

  override function isHideIfReadOnly(fieldId : AddressOwnerFieldId) : boolean {
    return false
  }

  override property get RequiredFields() : Set <AddressOwnerFieldId> {
    return new HashSet <AddressOwnerFieldId> (){}.freeze()
  }

  override property get HiddenFields() : Set <AddressOwnerFieldId> {
    var hFields : Set <AddressOwnerFieldId> = {}
    hFields.addAll(AddressOwnerFieldId.ALL_PCF_FIELDS)
    hFields.removeAll(AddressOwnerFieldId.CITY_FIELDS)
    if (_useCounty) {
      hFields.remove(AddressOwnerFieldId.COUNTY)
    }
    hFields.remove(AddressOwnerFieldId.STATE)
    hFields.removeAll(AddressOwnerFieldId.POSTALCODE_FIELDS)
    hFields.remove(AddressOwnerFieldId.COUNTRY)
    return hFields
  }

}
