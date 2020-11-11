<%
uses gw.api.locale.DisplayKey
%>
<%@ params(productLine: APDProductLine, lang : LanguageType) %>
<%if(productLine["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.Name = ${productLine["Name_" + lang.Code]}
<%}%>
<%if(productLine["Description_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.Description = ${productLine["Description_" + lang.Code]}
<%}%>
<%for (category in productLine.AllClauseCategories) { %>
<%if(category["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.CoverageCategory_${productLine.LinePrefix}${category.CodeIdentifier}.Name = ${category["Name_" + lang.Code]}
<%}%>
<%if(category["Description_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.CoverageCategory_${productLine.LinePrefix}${category.CodeIdentifier}.Description = ${category["Description_" + lang.Code]}
<%}%>
<%}%>
<%for (coverage in productLine.AllCoverages) { %>
<%if(coverage["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}.Name = ${coverage["Name_" + lang.Code]}
<%}%>
<%if(coverage["Description_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}.Description = ${coverage["Description_" + lang.Code]}
<%}%>
<%for (term in coverage.StandardTerms) { %>
<%if(term["Label_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}${term.Name}.Name = ${term["Label_" + lang.Code]}
<%}%>
<%if(term["Description_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}${term.Name}.Description = ${term["Description_" + lang.Code]}
<%}%>
<%if (term.Type == APDFieldType.TC_TYPEKEY and term.DropDownType != APDDropDownType.TC_TYPELIST) {%>
<%for (code in term.Codes) for (ccy in code.Currencies) {%>
<%if (term.DropDownType == APDDropDownType.TC_OPTION) {%>
<%if(code["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}${term.Name}.CovTermOpt_${productLine.LinePrefix}${coverage.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}.Description = ${code["Name_" + lang.Code]}
<%}%>
<%} else { //package%>
<%if(code["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}${term.Name}.CovTermPack_${productLine.LinePrefix}${coverage.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}.Description = ${code["Name_" + lang.Code]}
<%}%>
<%for (val in code.Values index i) {%>
<%if(val.DropdownColumn["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}${term.Name}.CovTermPack_${productLine.LinePrefix}${coverage.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}.PackageTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}${i}.Name = ${val.DropdownColumn["Name_" + lang.Code]}
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%if (coverage.HasSchedule) { // Generate display keys for scheduled item properties %>
<%for (field in coverage.ScheduleItemProperties) {%>
<%if (field["Label_" + lang.Code] != null) {%>
PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}.ClauseSchedulePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}Schedule.ScheduledItemPropertyPattern_${productLine.LinePrefix}${coverage.CodeIdentifier}${field.Name}.Name = ${field["Label_" + lang.Code]}
PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}.ClauseSchedulePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}Schedule.ScheduledItemPropertyPattern_${productLine.LinePrefix}${coverage.CodeIdentifier}${field.Name}.Description = ${field["Description_" + lang.Code]?:field["Label_" + lang.Code]}
<%}%>
<%}%>
<%if (coverage.ScheduleLinkedClauseTerms.HasElements) {%>
<%if (coverage["Name_" + lang.Code] != null) {%>
PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov.Name = ${DisplayKey.get("Web.APD.Codegen.LinkedClause.Name", coverage["Name_" + lang.Code])}
PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov.Description = ${DisplayKey.get("Web.APD.Codegen.LinkedClause.Description", coverage["Description_" + lang.Code]?:coverage["Name_" + lang.Code])}
<%}%>
<%for (term in coverage.ScheduleLinkedClauseTerms) { %>
<%if (term["Label_" + lang.Code] != null) {%>
PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov${term.Name}.Name = ${term["Label_" + lang.Code]}
PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov${term.Name}.Description = ${term["Description_" + lang.Code]?:term["Label_" + lang.Code]}
<%}%>
<%if (term.Type == APDFieldType.TC_TYPEKEY and term.DropDownType != APDDropDownType.TC_TYPELIST) {%>
<%for (code in term.Codes) for (ccy in code.Currencies){%>
<%if (term.DropDownType == APDDropDownType.TC_OPTION) {%>
<%if (code["Name_" + lang.Code] != null) {%>
PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov${term.Name}.CovTermOpt_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov${term.Name}${code.Code}${ccy.Code?:""}.Description = ${code["Name_" + lang.Code]}
<%}%>
<%} else { //package%>
<%if (code["Name_" + lang.Code] != null) {%>
PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov${term.Name}.CovTermPack_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov${term.Name}${code.Code}${ccy.Code?:""}.Description = ${code["Name_" + lang.Code]}
<%}%>
<%for (val in code.Values index i) {%>
<%if (val.DropdownColumn["Name_" + lang.Code] != null) {%>
PolicyLine_${productLine.CodeIdentifier}.CoveragePattern_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov.CovTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov${term.Name}.CovTermPack_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov${term.Name}${code.Code}${ccy.Code?:""}.PackageTerm_${productLine.LinePrefix}${coverage.CodeIdentifier}ItemCov${term.Name}${code.Code}${ccy.Code?:""}${i}.Name = ${val.DropdownColumn["Name_" + lang.Code]}
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%for (condition in productLine.AllConditions) { %>
<%if(condition["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ConditionPattern_${productLine.LinePrefix}${condition.CodeIdentifier}.Name = ${condition["Name_" + lang.Code]}
<%}%>
<%if(condition["Description_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ConditionPattern_${productLine.LinePrefix}${condition.CodeIdentifier}.Description = ${condition["Description_" + lang.Code]}
<%}%>
<%for (term in condition.Terms) { %>
<%if(term["Label_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ConditionPattern_${productLine.LinePrefix}${condition.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${condition.CodeIdentifier}${term.Name}.Name = ${term["Label_" + lang.Code]}
<%}%>
<%if(term["Description_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ConditionPattern_${productLine.LinePrefix}${condition.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${condition.CodeIdentifier}${term.Name}.Description = ${term["Description_" + lang.Code]}
<%}%>
<%if (term.Type == APDFieldType.TC_TYPEKEY and term.DropDownType != APDDropDownType.TC_TYPELIST) {%>
<%for (code in term.Codes) for (ccy in code.Currencies) {%>
<%if (term.DropDownType == APDDropDownType.TC_OPTION) {%>
<%if(code["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ConditionPattern_${productLine.LinePrefix}${condition.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${condition.CodeIdentifier}${term.Name}.CovTermOpt_${productLine.LinePrefix}${condition.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}.Description = ${code["Name_" + lang.Code]}
<%}%>
<%} else { //package%>
<%if(code["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ConditionPattern_${productLine.LinePrefix}${condition.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${condition.CodeIdentifier}${term.Name}.CovTermPack_${productLine.LinePrefix}${condition.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}.Description = ${code["Name_" + lang.Code]}
<%}%>
<%for (val in code.Values index i) {%>
<%if(val.DropdownColumn["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ConditionPattern_${productLine.LinePrefix}${condition.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${condition.CodeIdentifier}${term.Name}.CovTermPack_${productLine.LinePrefix}${condition.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}.PackageTerm_${productLine.LinePrefix}${condition.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}${i}.Name = ${val.DropdownColumn["Name_" + lang.Code]}
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%for (exclusion in productLine.AllExclusions) { %>
<%if(exclusion["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ExclusionPattern_${productLine.LinePrefix}${exclusion.CodeIdentifier}.Name = ${exclusion["Name_" + lang.Code]}
<%}%>
<%if(exclusion["Description_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ExclusionPattern_${productLine.LinePrefix}${exclusion.CodeIdentifier}.Description = ${exclusion["Description_" + lang.Code]}
<%}%>
<%for (term in exclusion.Terms) { %>
<%if(term["Label_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ExclusionPattern_${productLine.LinePrefix}${exclusion.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${exclusion.CodeIdentifier}${term.Name}.Name = ${term["Label_" + lang.Code]}
<%}%>
<%if(term["Description_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ExclusionPattern_${productLine.LinePrefix}${exclusion.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${exclusion.CodeIdentifier}${term.Name}.Description = ${term["Description_" + lang.Code]}
<%}%>
<%if (term.Type == APDFieldType.TC_TYPEKEY and term.DropDownType != APDDropDownType.TC_TYPELIST) {%>
<%for (code in term.Codes) for (ccy in code.Currencies) {%>
<%if (term.DropDownType == APDDropDownType.TC_OPTION) {%>
<%if(code["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ExclusionPattern_${productLine.LinePrefix}${exclusion.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${exclusion.CodeIdentifier}${term.Name}.CovTermOpt_${productLine.LinePrefix}${exclusion.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}.Description = ${code["Name_" + lang.Code]}
<%}%>
<%} else { //package%>
<%if(code["Name_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ExclusionPattern_${productLine.LinePrefix}${exclusion.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${exclusion.CodeIdentifier}${term.Name}.CovTermPack_${productLine.LinePrefix}${exclusion.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}.Description = ${code["Name_" + lang.Code]}
<%}%>
<%for (val in code.Values index i) {%>
<%if(term["Label_" + lang.Code] != null){%>PolicyLine_${productLine.CodeIdentifier}.ExclusionPattern_${productLine.LinePrefix}${exclusion.CodeIdentifier}.CovTerm_${productLine.LinePrefix}${exclusion.CodeIdentifier}${term.Name}.CovTermPack_${productLine.LinePrefix}${exclusion.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}.PackageTerm_${productLine.LinePrefix}${exclusion.CodeIdentifier}${term.Name}${code.Code}${ccy.Code?:""}${i}.Name = ${val.DropdownColumn["Name_" + lang.Code]}
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>
<%}%>