package gw.lob.gl7

uses gw.lob.common.AbstractAdditionalInsuredHelper
uses gw.api.domain.Clause

class GL7AdditionalInsuredHelper extends AbstractAdditionalInsuredHelper {

  override function getAdditionalInsuredType(clause : Clause) : AdditionalInsuredType {
    switch(clause.Pattern.CodeIdentifier) {
      case "GL7AddlInsdConcessionaires":
        return AdditionalInsuredType.TC_CONCES
      case "GL7AddlInsdControllingInt":
        return AdditionalInsuredType.TC_CONTROL
      case "GL7AddlInsdDesigntdPersonOrg":
        return AdditionalInsuredType.TC_DESIG
      case "GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd":
        return AdditionalInsuredType.TC_ENGNOT
      case "GL7AddlInsdGrantorFranchise":
        return AdditionalInsuredType.TC_GRANTFRAN
      case "GL7AddlInsdGrantorLicenses":
        return AdditionalInsuredType.TC_GRANTLICSCH
      case "GL7AddlInsdLessorLeasedEquipmt":
        return AdditionalInsuredType.TC_LESSEQUIP
      case "GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg":
        return AdditionalInsuredType.TC_OLCSCHED
      case "GL7AddlInsdMgrsLessorsPrem":
        return AdditionalInsuredType.TC_MGRPREM
      case "GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased":
        return AdditionalInsuredType.TC_OWNLAND
      case "GL7AddlInsdMortgageeAssigneeOrRecvr":
        return AdditionalInsuredType.TC_MORT
      case "GL7AddlInsdCoOwnerInsdPrem":
        return AdditionalInsuredType.TC_COOWN
      case "GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl":
        return AdditionalInsuredType.TC_OLCCOMPLETE
      case "GL7OKChangesAdditionalInsuredEngineersOrArchitects":
        return AdditionalInsuredType.TC_ENG
    }
    return null
  }
}