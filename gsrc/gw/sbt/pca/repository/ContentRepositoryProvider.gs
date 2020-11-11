package gw.sbt.pca.repository

uses java.io.File

class ContentRepositoryProvider {
  static var _currentRepository : ContentRepository = FileContentRepository.create()
  static var _configLocation : File = null

  static property get CurrentRepository() : ContentRepository {
    return _currentRepository
  }

  static function useRepository<T extends ContentRepository>(repository : T) : T {
    _currentRepository = repository
    return repository
  }

  static property get CurrentConfigLocation() : File {
    return _configLocation
  }

  static function useConfigLocation(configLocation : File) : File {
    _configLocation = configLocation
    return configLocation
  }
}