<%@ params(owner : String, field: APDAttribute, labelDisplayKey : String, editable : String, action : String, required : String) %>
<%if(field.Type== APDFieldType.TC_BOOLEAN){%>
        <BooleanRadioInput
<%if (action != null) {%>
          action="${action}"
<%}%>
          editable="${editable}"
          id="${field.Name}"
          label="DisplayKey.get(&quot;${labelDisplayKey}&quot;)"
<%if (required != null) {%>
          required="${required}"
<%}%>
          value="${owner}.${field.Name}"/>
<%}else if(field.Type == APDFieldType.TC_DATE){%>
        <DateInput
<%if (action != null) {%>
          action="${action}"
<%}%>
          editable="${editable}"
          id="${field.Name}"
          label="DisplayKey.get(&quot;${labelDisplayKey}&quot;)"
<%if (required != null) {%>
          required="${required}"
<%}%>
          value="${owner}.${field.Name}"/>
<%}else if(field.Type == APDFieldType.TC_BIGDECIMAL){%>
        <TextInput
<%if (action != null) {%>
          action="${action}"
<%}%>
          editable="${editable}"
          id="${field.Name}"
          label="DisplayKey.get(&quot;${labelDisplayKey}&quot;)"
<%if (required != null) {%>
          required="${required}"
<%}%>
          value="${owner}.${field.Name}"
          valueType="java.math.BigDecimal"/>
<%}else if(field.Type == APDFieldType.TC_LOCATION){%>
        <RangeInput
<%if (action != null) {%>
          action="${action}"
<%}%>
          editable="${editable}"
          align="left"
          id="${field.Name}"
          label="DisplayKey.get(&quot;${labelDisplayKey}&quot;)"
          optionLabel="${owner}.Branch.getPolicyLocationOptionDisplayName(VALUE)"
<%if (required != null) {%>
          required="${required}"
<%}%>
          value="${owner}.Account${field.Name}"
          valueRange="${owner}.Branch.Policy.Account.AccountLocations"
          valueType="AccountLocation">
          <PickerMenuItem
            action="LocationPopup.push(null, null, ${owner}.Branch, true, true, true)"
            id="New${field.Name}"
            label="DisplayKey.get(&quot;Web.Policy.LocationContainer.Location.New&quot;)"
            onPick="${owner}.${field.Name} = PickedValue"/>
          <PickerMenuItem
            action="LocationPopup.push(null, ${owner}.${field.Name}, ${owner}.Branch, true, true, true)"
            id="Edit${field.Name}"
            label="DisplayKey.get(&quot;Web.Policy.LocationContainer.Location.EditLocation&quot;)"
            onPick="${owner}.${field.Name} = PickedValue"
            visible="${owner}.${field.Name} != null"/>
        </RangeInput>
<%}else if(field.Type == APDFieldType.TC_INTEGER){%>
        <TextInput
<%if (action != null) {%>
          action="${action}"
<%}%>
          editable="${editable}"
          id="${field.Name}"
          label="DisplayKey.get(&quot;${labelDisplayKey}&quot;)"
<%if (required != null) {%>
          required="${required}"
<%}%>
          value="${owner}.${field.Name}"
          valueType="Integer"/>
<%}else if(field.Type== APDFieldType.TC_MONEY){%>
        <TextInput
<%if (action != null) {%>
          action="${action}"
<%}%>
          editable="${editable}"
          id="${field.Name}"
          label="DisplayKey.get(&quot;${labelDisplayKey}&quot;)"
<%if (required != null) {%>
          required="${required}"
<%}%>
          value="${owner}.${field.Name}"
          valueType="java.math.BigDecimal"/>
<%}else if(field.Type== APDFieldType.TC_PARTY){%>
        <RangeInput
<%if (action != null) {%>
          action="${action}"
<%}%>
          align="left"
          editable="${editable}"
          id="${field.Name}"
          label="DisplayKey.get(&quot;${labelDisplayKey}&quot;)"
<%if (required != null) {%>
          required="${required}"
<%}%>
          value="${owner}.${field.Name}"
          valueRange="${owner}.Branch.PolicyContactRoles.whereTypeIs(APDPolicyInvolvedParty)"
          valueType="PolicyContactRole">
            <PickerMenuItem
              onPick="${owner}.${field.Name} = ${owner}.Branch.addNewPolicyContactRoleForContact(PickedValue, TC_APDPOLICYINVOLVEDPARTY)"
              id="AddFromSearch"
              label="DisplayKey.get(&quot;Web.Policy.Contact.FromAddressBook&quot;)"
              action="ContactSearchPopup.push(TC_APDINVOLVEDPARTY)"/>
            <MenuItemIterator
              elementName="contactType"
              value="gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin).getAllowedContactTypesForPolicyContactRoleType(TC_APDPOLICYINVOLVEDPARTY)"
              valueType="typekey.ContactType[]">
              <IteratorSort
                sortBy="contactType.DisplayName"
                sortOrder="1"/>
              <PickerMenuItem
                id="ContactType"
                label="DisplayKey.get(&quot;Web.Contact.AddNewOfType&quot;, contactType)"
                action="NewAPDPolicyInvolvedPartyPopup.push(${owner}.PolicyLine,contactType)"
                onPick="${owner}.${field.Name} = PickedValue"/>
            </MenuItemIterator>
            <MenuItem
              id="existingInvolvedParties"
              label="DisplayKey.get(&quot;Web.Policy.Contact.AddExisting&quot;,APDPolicyInvolvedParty.Type.TypeInfo.DisplayName)">
              <MenuItemIterator
                elementName="availableInvolvedParty"
                id="AddOtherInvolvedParty"
                value="${owner}.Branch.UnassignedAPDInvolvedParties"
                valueType="entity.AccountContactView[]">
                <MenuItem
                  action="${owner}.${field.Name} = ${owner}.PolicyLine.addNewAPDPolicyInvolvedPartyForContact(availableInvolvedParty.AccountContact.Contact)"
                  id="OtherInvolvedParty"
                  label="availableInvolvedParty.DisplayName"/>
              </MenuItemIterator>
            </MenuItem>
            <MenuItem
              id="availableContacts"
              label="DisplayKey.get(&quot;Web.Policy.Contact.AddOtherContacts&quot;)">
              <MenuItemIterator
                elementName="availableContact"
                id="AddOtherContact"
                value="${owner}.Branch.APDInvolvedPartyOtherCandidates"
                valueType="entity.AccountContactView[]">
                <MenuItem
                  action="${owner}.${field.Name} = ${owner}.PolicyLine.addNewAPDPolicyInvolvedPartyForContact(availableContact.AccountContact.Contact)"
                  id="OtherContact"
                  label="availableContact.DisplayName"/>
              </MenuItemIterator>
            </MenuItem>
        </RangeInput>
<%}else if(field.Type== APDFieldType.TC_TYPEKEY){%>
        <TypeKeyInput
<%if (action != null) {%>
          action="${action}"
<%}%>
          editable="${editable}"
          id="${field.Name}"
          label="DisplayKey.get(&quot;${labelDisplayKey}&quot;)"
<%if (required != null) {%>
          required="${required}"
<%}%>
          value="${owner}.${field.Name}"
          valueType="typekey.${field.TypelistToUse}"/>
<%}else if(field.Type== APDFieldType.TC_VARCHAR){%>
        <TextInput
<%if (action != null) {%>
          action="${action}"
<%}%>
          editable="${editable}"
          id="${field.Name}"
          label="DisplayKey.get(&quot;${labelDisplayKey}&quot;)"
<%if (required != null) {%>
          required="${required}"
<%}%>
          value="${owner}.${field.Name}"
          valueType="String"/>
<%}%>