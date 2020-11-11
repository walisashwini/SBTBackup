package gw.sbt.artifacts.clauses

uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class PolicyPackageCovTermPattern extends PolicyCovTermPattern {
  construct(content : byte[]) {
    super(content)
  }

  construct(content : XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  property get CovTermPacks() : List<PolicyCovTermPackPattern> {
    var packagesXml = Xml.getChild("Packages")
    if (packagesXml == null) {
      return {}
    }
    return packagesXml.getChildren("CovTermPack")?.map(\packXml -> new PolicyCovTermPackPattern(packXml, XmlDeclarations))
  }

  function addCovTermPack(covTermPack : PolicyCovTermPackPattern) {
    var packagesXml = Xml.getChild("Packages")
    if (packagesXml == null) {
      packagesXml = new XmlElement("Packages")
      Xml.addChild(packagesXml)
    }

    packagesXml.addChild(XmlUtil.copyElement(covTermPack.Xml))
  }

  override function copy() : PolicyPackageCovTermPattern {
    return new PolicyPackageCovTermPattern(XmlUtil.copyElement(_content), XmlDeclarations)
  }

  function removeCovTermPacks() {
    var packagesXml = Xml.getChild("Packages")
    if (packagesXml != null) {
      packagesXml.removeChildren("CovTermPack")
    }
  }
}