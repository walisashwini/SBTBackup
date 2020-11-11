package gw.lob.common.exception

uses java.lang.RuntimeException

/**
 * Exception for LOB configuration related error
 */
class LobConfigException extends RuntimeException {
  construct(fileName: String, errorMessage: String) {
    super("Error for Lob configuration files '${fileName}': \n ${errorMessage}")
  }
}
