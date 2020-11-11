<%@ params(cbl:APDCoverable) %>
      <RootEntity
          sortorder="1"
          type="entity.${cbl.QualifiedName}">
        <Properties
          includefromtype="entity.${cbl.QualifiedName}"
          parentpath="ENTITY"
          sortorder="1"/>
<%if (cbl.Coverages.Count > 0) {%>
        <Entity
          parentpath="ENTITY.${cbl.TypeName}"
          sortorder="2"
          type="entity.${cbl.QualifiedName}Cov">
          <Properties
            includefromtype="entity.${cbl.QualifiedName}Cov"
            parentpath="ENTITY"
            sortorder="1"/>
        </Entity>
<%if (cbl.Coverages.hasMatch(\cov -> cov.HasSchedule)) {%>
        <Entity
          parentpath="ENTITY.${cbl.TypeName}"
          sortorder="3"
          type="entity.${cbl.QualifiedName}ScheduleCov">
          <Entity
            parentpath="ENTITY.Schedule"
            type="entity.${cbl.QualifiedName}ScheduleCovItem">
<%if (cbl.Coverages.hasMatch(\cov -> cov.ScheduleLinkedClauseTerms.HasElements)) {%>
            <Properties
              includefromtype="entity.${cbl.QualifiedName}SchCovItemCov"
              parentpath="ENTITY.${cbl.QualifiedName}ScheduleCovItem">
            </Properties>
<%}%>
          </Entity>
        </Entity>
<%}%>
<%}%>
<%if (cbl.Exclusions.Count > 0) {%>
        <Entity
          parentpath="ENTITY.${cbl.TypeName}"
          sortorder="4"
          type="entity.${cbl.QualifiedName}Excl">
          <Properties
            includefromtype="entity.${cbl.QualifiedName}Excl"
            parentpath="ENTITY"
            sortorder="1"/>
        </Entity>
<%}%>
<%if (cbl.Conditions.Count > 0) {%>
        <Entity
          parentpath="ENTITY.${cbl.TypeName}"
          sortorder="5"
          type="entity.${cbl.QualifiedName}Cond">
          <Properties
            includefromtype="entity.${cbl.QualifiedName}Cond"
            parentpath="ENTITY"
            sortorder="1"/>
        </Entity>
<%}%>
<%for (exp in cbl.Exposures.sortBy(\e -> e.Name) index i) {%>
        <Entity
          label="entity.${exp.QualifiedName}.DisplayName"
          parentpath="ENTITY.${cbl.TypeName}"
          sortorder="${i+6}"
          type="entity.${exp.QualifiedName}">
          <Properties
            includefromtype="entity.${exp.QualifiedName}"
            parentpath="ENTITY"
            sortorder="1"/>
        </Entity>
<%}%>
      </RootEntity>