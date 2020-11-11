package gw.lob.common.dependency

uses gw.util.concurrent.LockingLazyVar
uses java.util.HashMap
uses java.util.HashSet
uses java.util.Set
uses gw.pl.persistence.core.Key

/**
 * Created with IntelliJ IDEA.
 * User: drosu
 * Date: 2/4/14
 * Time: 3:09 PM
 * To change this template use File | Settings | File Templates.
 */
@Deprecated("Use new dependency framework instead")
class DependencyEventNotifier {
  static var _instance = LockingLazyVar.make(\ -> new DependencyEventNotifier())

  static property get Instance() : DependencyEventNotifier{
    return _instance.get()
  }

  var _onDependencyUpdatedCallbacks  : HashMap<Key, Set<DependencyEventObserver>> = {}

  function subscribeToUpdate(entity : KeyableBean, observer : DependencyEventObserver) {
    var observers = _onDependencyUpdatedCallbacks.get(entity.ID)
    if(observers == null){
      observers = new HashSet<DependencyEventObserver>()
      _onDependencyUpdatedCallbacks.put(entity.ID, observers)
    }
    observers.add(observer)
  }

  function unsubscribeFromUpdate(entity : KeyableBean, observer : DependencyEventObserver) {
    var observers = _onDependencyUpdatedCallbacks.get(entity.ID)
    if(observers != null){
      observers.remove(observer)
    }
  }

  function publishUpdate(entity : KeyableBean) {
    var observers = _onDependencyUpdatedCallbacks.get(entity.ID)
    if(observers != null){
      observers.each( \ observer -> observer.onUpdate(entity))
    }
  }

}