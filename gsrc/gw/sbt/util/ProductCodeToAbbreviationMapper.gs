package gw.sbt.util
/**
 * To be refactored to avoid this static mapping
 */
class ProductCodeToAbbreviationMapper {
  private static var ProductCodeToAbbreviation = {
    "BusinessAutoLine" -> "CA",
    "BP7Line" -> "BP7",
    "CP7Line" -> "CP7",
    "CA7Line" -> "CA7",
    "GL7Line" -> "GL7",
    "WC7Line" -> "WC7",
    "WCMLine" -> "WCM",
    "CR7Line" -> "CR7"
  }


  static function getProductAbbreviation(productCode : String) : String {
    return ProductCodeToAbbreviation.get(productCode)
  }

  private static var ProductCodeToIcon = {
      "BusinessAutoLine" -> "CA",
      "BP7Line" -> "BOP",
      "CP7Line" -> "CP",
      "CA7Line" -> "CA",
      "GL7Line" -> "GL",
      "WC7Line" -> "WC",
      "WCMLine" -> "WC",
      "CR7Line" -> "CR"
  }

  static function getProductLineIcon(productCode : String) : String {
    return ProductCodeToIcon.get(productCode)
  }

  static function productAbbreviationThatPrefixesPattern(patternCode : String) : String {
    return ProductCodeToAbbreviation.Values
        .where(\ prefix -> patternCode.startsWith(prefix))
        .orderByDescending(\ prefix -> prefix.length)
        .first()
  }
}