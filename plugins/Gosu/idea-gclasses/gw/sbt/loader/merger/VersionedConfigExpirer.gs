package gw.sbt.loader.merger

uses gw.sbt.artifacts.versioned.VersionedConfig

abstract class VersionedConfigExpirer {

  function expire(currentVersion : VersionedConfig, jurisdiction : String, adoptionDate : Date,
                  hasEffectiveCWCVersionInCurrent : boolean = true) {
    if (currentVersion == null) return

    if (currentVersion.Jurisdiction == jurisdiction)
      currentVersion.ExpiryDate = adoptionDate

    if (hasEffectiveCWCVersionInCurrent) {
      var unavailableVersion = currentVersion.copy()
      unavailableVersion.Jurisdiction = jurisdiction
      unavailableVersion.Available = false
      unavailableVersion.ExpiryDate = null
      unavailableVersion.EffectiveDate = adoptionDate

      addVersion(unavailableVersion)
    }
  }

  abstract protected function addVersion(newVersion : VersionedConfig)
}