package test

uses java.sql.Connection
uses java.sql.DriverManager


class AccountConnectionManager {

  static function createLegacyDBConnection() : Connection{
    return DriverManager.getConnection("jdbc:sqlserver://localhost:1433; databaseName=AK_LegacyDB;user=cnuser;password=pc")
  }
  //connection to staging  DB to access control and staging table

  static function createStagingDBConnection() : Connection{
    return DriverManager.getConnection("jdbc:sqlserver://localhost:1433; databaseName=AK_StagingDB;user=cnuser;password=pc")
  }

  static function createAccConversionDBConnection() : Connection{
    return DriverManager.getConnection("jdbc:sqlserver://localhost:1433; databaseName=ConversionControl;user=cnuser;password=pc")
  }
  static function createStagingDBConnection1() : Connection{
    return DriverManager.getConnection("jdbc:sqlserver://localhost:1433; databaseName=AK_StagingDB;user=cnuser;password=pc")
  }

  static function createAccConversionDBConnection1() : Connection{
    return DriverManager.getConnection("jdbc:sqlserver://localhost:1433; databaseName=ConversionControl;user=cnuser;password=pc")
  }
 
}

