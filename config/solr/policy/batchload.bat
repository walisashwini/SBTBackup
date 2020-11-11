@echo off

setlocal enableDelayedExpansion

set APP_PREFIX=pc
set DOC_TYPE=policy
set BASE_DIR=c:\opt\gwsolr
set GWENV=

set GWSOLR_HOME=%BASE_DIR%\%APP_PREFIX%

set JAVA_OPTS=
set LIBDIR=%GWSOLR_HOME%\lib
set SERVLETJAR=%GWSOLR_HOME%\server\lib\javax.servlet-api-3.1.0.jar
set TRANSFORMERLIBDIR=%LIBDIR%
set CONFIGFILE=%GWSOLR_HOME%\solr\%DOC_TYPE%_active\conf\batchload-config-sqlserver.xml
rem set DEBUG=-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005

call :verifyjava JAVA_VERSION
if errorlevel 1 goto :done

call :buildpath %LIBDIR% JARS
call :buildpath %LIBDIR%\java%JAVA_VERSION% DRIVERJARS

rem If you define transformer classes, archive them in a jar and place the jar and any required dependent jars
rem in the directory pointed to by the TRANSFORMERLIBDIR environment variable.

rem Only needed if TRANSFORMERLIBDIR refers to a different directory than LIBDIR
if not "X"%LIBDIR% == "X"%TRANSFORMERLIBDIR% (
  call :buildpath %TRANSFORMERLIBDIR% TRANSFORMERJARS
) else (
  set TRANSFORMERJARS=
)

if not "X"%GWENV% == "X" (
  set JAVA_OPTS=%JAVA_OPTS% -Dgw.%APP_PREFIX%.env=%GWENV%
)

"%JAVA_HOME%\bin\java" %DEBUG% %JAVA_OPTS% -cp .;%JARS%;%DRIVERJARS%;%SERVLETJAR%;%TRANSFORMERJARS% com.guidewire.solr.batchload.SolrBatchLoader %CONFIGFILE% 2> solr-batchload.err
if errorlevel 1 (
  call :fail "Solr batchload failed.  Check solr-batchload.err for details."
)

goto :done

:buildpath
set _PVAR=
(for /f "delims=" %%a in ('dir /b /a-d %~1\*.jar') do (
  if "X"!_PVAR! == "X" (
	set _PVAR="%~1\%%a"
  ) else (
	set _PVAR=!_PVAR!;"%~1\%%a"
  )
))
set %~2=!_PVAR!
exit /b

:verifyjava
  if "%JAVA_HOME%" == "" (
    call :fail "JAVA_HOME must be configured to run Solr Batchload"
	exit /b
  )

  set JAVA="%JAVA_HOME%\bin\java.exe"
  if not exist %JAVA% (
    call :fail "'%JAVA%' not found.  Make sure JAVA_HOME is set correctly"
	exit /b
  )

  call checkjava

  if ERRORLEVEL 11 (
    set %~1=11
	exit /b 0
  ) else if ERRORLEVEL 9 (
    call :unsupported
  ) else if ERRORLEVEL 8 (
    set %~1=8
	exit /b 0
  ) else (
    call :unsupported
  )
  exit /b

:unsupported
  call :fail "Java 8 or Java 11 is required but not found.  Make sure JAVA_HOME refers to the correct Java version."
  exit /b 1

:fail
  echo %~1
  exit /b 1

:done
  endlocal
