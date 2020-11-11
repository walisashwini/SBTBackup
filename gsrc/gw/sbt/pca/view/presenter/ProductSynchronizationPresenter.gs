package gw.sbt.pca.view.presenter

uses com.guidewire.pc.domain.productmodel.ProductModelImportException
uses com.guidewire.pl.system.dependency.PLDependencies
uses gw.api.webservice.pc.productmodel.IProductModelAPI
uses java.lang.Throwable
uses java.util.List
uses gw.api.locale.DisplayKey

class ProductSynchronizationPresenter {
  var _syncLinkAvailable : boolean as readonly SyncLinkAvailable = true
  var _errorMessages : List<String> as readonly SyncErrorMessages = {}

  function sync(){
    var productModelService = PLDependencies.getServiceFactory().getService(IProductModelAPI) as IProductModelAPI
    try {
      productModelService.synchronizeProductModel()
      productModelService.synchronizeSystemTables()
    } catch (e : ProductModelImportException) {
      _errorMessages.addAll(e.Issues.map( \ issue -> issue ?: "Unknown synchronization error"))
    }
    catch(e : Throwable) {
      _errorMessages.add(e.LocalizedMessage ?: "Unknown synchronization error")
    }
    finally {
      _syncLinkAvailable = false
    }
  }

  property get SyncResultMessage() : String {
    return _errorMessages.Empty ? DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.ProductModelSynchronization.SuccessStatus") :
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.ProductModelSynchronization.FailedStatus")
  }
}