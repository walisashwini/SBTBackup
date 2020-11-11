package test.accountmodel.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement AccountEnhancement : test.accountmodel.Account {
  public static function create(object : entity.Account) : test.accountmodel.Account {
    return new test.accountmodel.Account(object)
  }

  public static function create(object : entity.Account, options : gw.api.gx.GXOptions) : test.accountmodel.Account {
    return new test.accountmodel.Account(object, options)
  }

}