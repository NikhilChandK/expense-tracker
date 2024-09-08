export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}
export interface MainNavItem extends NavItem {}
export interface SideBarNavItem extends NavItem {}
