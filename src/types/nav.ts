export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
}
export type MainNavItem = NavItem;
export type SideBarNavItem = NavItem;
