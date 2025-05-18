import {
  ChartPie,
  ChartLine,
  ShoppingBag,
  BookA,
  Forklift,
  Mail,
  MessageSquare,
  Calendar,
  Kanban,
  ReceiptText,
  Users,
  Lock,
  Fingerprint,
  SquareArrowUpRight,
  Settings,
  BarChart3,
  FileText,
  UserCheck,
  ShieldCheck,
  CreditCard,
  SlidersHorizontal,
  Bell,
  type LucideIcon,
} from 'lucide-react';

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: 'Dashboards',
    items: [
      { title: 'Overview', url: '/dashboard', icon: ChartPie },
      {
        title: 'Analytics',
        url: '/dashboard/analytics',
        icon: ChartLine,
        comingSoon: true,
      },
    ],
  },
  {
    id: 2,
    label: 'Pages',
    items: [
      {
        title: 'Products',
        url: '/products',
        icon: ShoppingBag,
        comingSoon: true,
      },
      { title: 'Orders', url: '/orders', icon: ReceiptText, comingSoon: true },
      {
        title: 'Inventory',
        url: '/inventory',
        icon: Forklift,
        comingSoon: true,
      },
      { title: 'Courses', url: '/courses', icon: BookA, comingSoon: true },
    ],
  },
  {
    id: 3,
    label: 'Management',
    items: [
      {
        title: 'Users',
        url: '/users',
        icon: Users,
        comingSoon: true,
        subItems: [
          {
            title: 'All Users',
            url: '/users/all',
            icon: Users,
          },
          { title: 'Roles', url: '/users/roles', icon: Lock },
          {
            title: 'Permissions',
            url: '/users/permissions',
            icon: Fingerprint,
          },
          {
            title: 'Verified Users',
            url: '/users/verified',
            icon: UserCheck,
          },
        ],
      },
      {
        title: 'Communication',
        url: '/communication',
        icon: MessageSquare,
        comingSoon: true,
        subItems: [
          {
            title: 'Inbox',
            url: '/communication/inbox',
            icon: Mail,
            comingSoon: true,
          },
          {
            title: 'Chat',
            url: '/communication/chat',
            icon: MessageSquare,
            comingSoon: true,
          },
          {
            title: 'Notifications',
            url: '/communication/notifications',
            icon: Bell,
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Reports',
    items: [
      {
        title: 'Sales Report',
        url: '/reports/sales',
        icon: FileText,
        comingSoon: true,
      },
      {
        title: 'User Activity',
        url: '/reports/users',
        icon: BarChart3,
        comingSoon: true,
      },
      {
        title: 'Financial',
        url: '/reports/financial',
        icon: CreditCard,
        comingSoon: true,
      },
    ],
  },
  {
    id: 5,
    label: 'Authentication',
    items: [
      { title: 'Login', url: '/auth/login', icon: Lock, comingSoon: true },
      {
        title: 'Register',
        url: '/auth/register',
        icon: Fingerprint,
        comingSoon: true,
      },
      {
        title: 'Forgot Password',
        url: '/auth/forgot-password',
        icon: ShieldCheck,
        comingSoon: true,
      },
    ],
  },
  {
    id: 6,
    label: 'Settings',
    items: [
      { title: 'General', url: '/settings', icon: Settings, comingSoon: true },
      {
        title: 'Preferences',
        url: '/settings/preferences',
        icon: SlidersHorizontal,
        comingSoon: true,
      },
    ],
  },
  {
    id: 7,
    label: 'Utilities',
    items: [
      { title: 'Calendar', url: '/calendar', icon: Calendar, comingSoon: true },
      { title: 'Tasks', url: '/tasks', icon: Kanban, comingSoon: true },
      {
        title: 'External Link',
        url: 'https://example.com',
        icon: SquareArrowUpRight,
        comingSoon: true,
      },
    ],
  },
];
