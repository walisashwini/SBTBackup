package gw.sbt.artifacts.clauses

uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class PolicyCovTermPackPattern extends PolicyCovTermOptionPattern {
  construct(content : byte[]) {
    super(content)
  }

  construct(content : XmlElement, xmlDeclarations: String) {
    super(content, xmlDeclarations)
  }

  property get PackageCode() : String {
    return Xml.getAttributeValue("packageCode")
  }

  override function copy() : PolicyCovTermPackPattern {
    return new PolicyCovTermPackPattern(this.Bytes)
  }

  property get PackageTerms() : List<PackageTermPattern> {
    var packageTermsXml = Xml.getChild("PackageTerms")
    if (packageTermsXml == null) {
      return {}
    }
    return packageTermsXml.getChildren("PackageTerm")?.map(\packXml -> new PackageTermPattern(packXml, XmlDeclarations))
  }

  function addPackageTerm(packageTerm : PackageTermPattern) {
    var packageTermsXml = Xml.getChild("PackageTerms")
    if (packageTermsXml == null) {
      packageTermsXml = new XmlElement("PackageTerms")
      Xml.addChild(packageTermsXml)
    }

    packageTermsXml.addChild(XmlUtil.copyElement(packageTerm.Xml))
  }

  function removePackageTerm() {
    var packageTermsXml = Xml.getChild("PackageTerms")
    if (packageTermsXml != null) {
      packageTermsXml.removeChildren("PackageTerm")
    }
  }

  static property get ComparableAttributes() : List<String> {
    return {
        "currency",
        "priority"
    }
  }
}