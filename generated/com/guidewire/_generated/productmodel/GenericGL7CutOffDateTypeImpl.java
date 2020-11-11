package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdProductWithdrawalExpenseEndtPolLvl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGL7CutOffDateTypeImpl extends com.guidewire.pc.api.domain.covterm.DateTimeCovTermInternal implements productmodel.GenericGL7CutOffDateType {
  public GenericGL7CutOffDateTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GL7LmtdProductWithdrawalExpenseEndtPolLvl getCoverage() {
    return (productmodel.GL7LmtdProductWithdrawalExpenseEndtPolLvl)getClause();
  }
  
  @java.lang.Override
  public productmodel.GL7LmtdProductWithdrawalExpenseEndtPolLvl getGL7LmtdProductWithdrawalExpenseEndtPolLvl() {
    return (productmodel.GL7LmtdProductWithdrawalExpenseEndtPolLvl)getClause();
  }
  
  
}