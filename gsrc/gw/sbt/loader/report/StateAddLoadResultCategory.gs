package gw.sbt.loader.report

uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.SystemTableAddition
uses gw.sbt.model.Risk
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.form.PolicyForm

class StateAddLoadResultCategory extends LoadResultCategory {

  construct(loads : List<Load>, sbtUpdate : SBTUpdate) {
    super(loads, sbtUpdate)
  }

  override property get BureauCodes() : List<BureauCodes> {
    var ret = subjectsOfType(SystemTable)
        .map(\table -> {
          return SBTUpdate.BureauCodes.firstWhere(\codes -> codes.TableName == table.TableName)
        })
    return ret.where(\ codes -> codes != null).orderBy(\codes -> codes.Label)
  }

  override property get ModifiedRiskEntityFiles() : ConfigurationFile[] {
    return loadsOfSubjectType(Risk)*.ModifiedFiles
  }

  override property get Clauses(): List<Clause> {
    return subjectsOfType(Clause).where(\subj -> subj != null).orderBy(\clause -> clause.Description)
  }

  override function findModifiedBureauCodesWithFilename(filename : String) : BureauCodes {
    return SystemTableAdditions.hasMatch(\ loadOp -> loadOp.TargetFile.Name == filename + ".xml")
        ? SBTUpdate.getBureauCodes(filename)
        : null
  }

  override property get Forms() : List<PolicyForm> {
    return subjectsOfType(PolicyForm).where(\subj -> subj != null).orderBy(\form -> form.Description)
  }

  private property get SystemTableAdditions() : List<SystemTableAddition> {
    return loadsOfSubjectType(SystemTable)
        .flatMap(\ load -> load.LoadOps.Ops)
        .whereTypeIs(SystemTableAddition)
  }
}