package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/UsersAndSecurity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UsersAndSecurityExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/UsersAndSecurity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItemExpressionsImpl extends UsersAndSecurityExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/UsersAndSecurity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UsersAndSecurityExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 9, column 41
    function action_0 () : void {
      pcf.AdminUserSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 19, column 45
    function action_10 () : void {
      pcf.AdminProducerCodeSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 21, column 41
    function action_12 () : void {
      pcf.UWAuthorityProfiles.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 23, column 32
    function action_14 () : void {
      pcf.Attributes.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 25, column 41
    function action_16 () : void {
      pcf.SearchAffinityGroup.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 11, column 42
    function action_2 () : void {
      pcf.AdminGroupSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 13, column 27
    function action_4 () : void {
      pcf.Roles.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 15, column 29
    function action_6 () : void {
      pcf.Regions.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 17, column 44
    function action_8 () : void {
      pcf.OrganizationSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 9, column 41
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AdminUserSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 19, column 45
    function action_dest_11 () : pcf.api.Destination {
      return pcf.AdminProducerCodeSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 21, column 41
    function action_dest_13 () : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 23, column 32
    function action_dest_15 () : pcf.api.Destination {
      return pcf.Attributes.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 25, column 41
    function action_dest_17 () : pcf.api.Destination {
      return pcf.SearchAffinityGroup.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 11, column 42
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AdminGroupSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 13, column 27
    function action_dest_5 () : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 15, column 29
    function action_dest_7 () : pcf.api.Destination {
      return pcf.Regions.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 17, column 44
    function action_dest_9 () : pcf.api.Destination {
      return pcf.OrganizationSearchPage.createDestination()
    }
    
    // LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 7, column 68
    static function firstVisitableChildDestinationMethod_21 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.AdminUserSearchPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AdminGroupSearchPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Roles.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Regions.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.OrganizationSearchPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AdminProducerCodeSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.UWAuthorityProfiles.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Attributes.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.SearchAffinityGroup.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 7, column 68
    static function parent_18 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 7, column 68
    function tabBar_onEnter_19 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 7, column 68
    function tabBar_refreshVariables_20 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.UsersAndSecurity {
      return super.CurrentLocation as pcf.UsersAndSecurity
    }
    
    
  }
  
  
}