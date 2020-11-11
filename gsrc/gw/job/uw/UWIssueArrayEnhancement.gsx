package gw.job.uw

enhancement UWIssueArrayEnhancement : UWIssue[] {

  function issuesBlockingUser(bp : UWIssueBlockingPoint, authorityProfiles : UWAuthorityProfile[]) : UWIssue[] {
    return this.where( \ i -> {
      return i.isBlockingUser(bp, authorityProfiles)
    })
  }

  function whereBlocking(bp : UWIssueBlockingPoint) : UWIssue[] {
    return this.where(\ issue -> issue.isBlocking(bp))
  }

  property get CurrentBlockingPoint() : UWIssueBlockingPoint {
    return this.reduce(typekey.UWIssueBlockingPoint.TC_NONBLOCKING, \ bp, issue -> 
      (issue.Active and issue.CurrentBlockingPoint.Priority > bp.Priority) ? issue.CurrentBlockingPoint : bp)
  }

  function viewableToUserWithProfiles(authorityProfiles : UWAuthorityProfile[]) : UWIssue[] {
    /*
     * The analyzer wants a blocking point as a threshold, and won't put something in the auto-approvable
     * pile unless the IssueType's DefaultApprovalBlockingPoint is strictly after that threshold. We want
     * to view any issue that can't be auto-approved all the way through issuance, so we set that threshold
     * just before "NonBlocking", so that only automatic issue types with DefaultApprovalBlockingPoint=="NonBlocking"
     * can be hidden.
     */
    var bpThreshold = (typekey.UWIssueBlockingPoint.TC_NONBLOCKING).Previous
    var analyzer = new UWIssueAutomaticApprovabilityAnalyzer(this, authorityProfiles.arrays("Grants").toArray(new UWAuthorityGrant[0]), bpThreshold)
    return analyzer.RequireManualAttention
  }

}
