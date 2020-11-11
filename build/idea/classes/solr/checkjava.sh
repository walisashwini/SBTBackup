#!/bin/sh
#
# Determine the major version referred to by %JAVA_HOME% and return
# that version as the errorlevel of this script

fail() {
	for arg in "$@"; do
		>&2 echo $arg
	done
	exit 1
}

verify_and_get_java_version() {
	if [ -z "$JAVA_HOME" ]; then
		fail "'JAVA_HOME' must be configured to run Solr Batchload"
	fi

	local _JAVA=$JAVA_HOME/bin/java
	if [ ! -e "$_JAVA" ]; then
		fail "'$_JAVA' not found.  Make sure JAVA_HOME is set correctly"
	fi

	local _raw_version=$("$_JAVA" -version 2>&1 | grep version | cut -d "\"" -f 2)
	local _major_version=$(echo $_raw_version | cut -d \. -f 1)
	if [[ $_major_version == 1 ]]; then
		_major_version=$(echo $_raw_version | cut -d \. -f 2)
	fi
	if [[ ! $_major_version -eq 8 && ! $_major_version -eq 11 ]]; then
		fail "Java 8 or Java 11 is required but not found.  Make sure JAVA_HOME refers to the correct Java version."
	fi
	echo $_major_version
}
