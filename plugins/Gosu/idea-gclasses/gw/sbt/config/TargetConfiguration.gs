package gw.sbt.config

interface TargetConfiguration {
  function exists(configFile : ConfigurationFile) : boolean
  function contents(configFile: ConfigurationFile) : byte[]
  function write(configFile : ConfigurationFile, content : byte[])
  function writeUnicode(configFile : ConfigurationFile, content : byte[])
  function delete(configFile : ConfigurationFile)
  function deleteUnicode(configFile : ConfigurationFile)
  function listFileNames(configFile : ConfigurationFile) : List<String>
  function listFilePaths(configFile : ConfigurationFile) : List<String>
}