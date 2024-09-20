import { PathConstants } from '../router/constants';
import { MainNavItem, SideBarNavItem } from '../types/nav';

export interface DocsConfig {
    mainNav: MainNavItem[];
    sideNav: SideBarNavItem[];
}
export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: 'OverView',
            href: PathConstants.OVERVIEW,
        },
        {
            title: 'Analysis',
            href: PathConstants.ANALYSIS,
        },
    ],
    sideNav: [
        {
            title: 'Notifications',
            href: PathConstants.NOTIFICATIONS,
        },
        {
            title: 'settings',
            href: PathConstants.SETTINGS,
        },
    ],
};
