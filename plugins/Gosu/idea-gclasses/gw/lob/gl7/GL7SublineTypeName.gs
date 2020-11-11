package gw.lob.gl7

enum GL7SublineTypeName {
  CGL('Premises/Operations and Products/Completed Operations'),
  PREMISE_OPERATIONS('Premises/Operations'),
  PRODS_COMPLETED_OPERATION('Products/Completed Operations'),
  LIQUOR('Liquor'),
  SPECIAL_PROTECTIVE_AND_HIGHWAY('Special Protective And Highway'),
  PRODUCT_WITHDRAWAL('Product Withdrawal'),
  OWNERS_AND_CONTRACTORS('Owners and Contractors'),
  RAILROAD('Railroad')

  private var _description: String as readonly Description

  private construct(description : String) {
    _description = description
  }

  static property get UnmannedAircraftSublines() : String[] {
    return {GL7SublineTypeName.PREMISE_OPERATIONS.Description,
        GL7SublineTypeName.CGL.Description,
        GL7SublineTypeName.OWNERS_AND_CONTRACTORS.Description,
        GL7SublineTypeName.RAILROAD.Description}
  }
}
