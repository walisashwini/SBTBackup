package gw.command

uses com.guidewire.pl.system.bundle.EntityBundleImpl
uses com.guidewire.pl.system.bundle.validation.BundleValidationOptionInternalAccess
uses com.guidewire.pl.system.exim.PublicIdFinderImpl
uses com.guidewire.pl.system.exim.XMLImporterImpl
uses gw.api.database.Query
uses gw.api.database.Relop

uses java.io.FileInputStream
uses java.io.InputStreamReader

@SuppressWarnings("HiddenPackage")
@Export
@DefaultMethod("load")
class GL7Forms extends BaseCommand {
  function load() {
    importGL7StandardForms()
  }

  private function importGL7StandardForms() {
    // we need to check if forms already imported (we check the first form code from form patterns)
    if (!Query.make(FormPattern).compare("PolicyLinePatternCode", Relop.Equals, "GL7Line").select().toList().Empty) return

    var importBundle = new EntityBundleImpl()
    importBundle.getCommitOptions().setValidationOption(BundleValidationOptionInternalAccess.FRIEND_ACCESSOR.access().validateNothing())
    importBundle.getCommitOptions().setAllowReadOnlyBeanChanges(true)

    // reader
    var formPatterns = com.guidewire.pl.config.PLConfigResourceKeys.CONFIG_ROOT.getDir().getFile("content/GL7FormPatterns.xml")
    var reader = new InputStreamReader(new FileInputStream(formPatterns), "UTF-8")
    var importer = new XMLImporterImpl()
    importer.importXML(importBundle, reader, new PublicIdFinderImpl())
    importBundle.commit()

  }
}
