<% uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator %>
<%@ params(product: APDProduct) %>
<?xml version="1.0"?>
<import>
  <ProductLookup public-id="${PublicIdGenerator.instance().generateId()}">
    <Availability>Available</Availability>
    <ProductCode>${product.CodeIdentifier}</ProductCode>
    <StartEffectiveDate>2000-01-01 00:00:00.000</StartEffectiveDate>
  </ProductLookup>
</import>

