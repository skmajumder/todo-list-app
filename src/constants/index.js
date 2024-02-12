import { task, event, write, work } from '../assets';

export const features = [
  {
    id: 'feature-1',
    icon: task,
    title: 'Small task',
  },
  {
    id: 'feature-2',
    icon: write,
    title: 'Write It',
  },
  {
    id: 'feature-3',
    icon: work,
    title: 'Do it',
  },
  {
    id: 'feature-4',
    icon: event,
    title: 'Repeat',
  },
];

export const footerNav = [
  {
    id: 'nav-1',
    title: 'Home',
    link: '#',
  },
  {
    id: 'nav-2',
    title: 'About',
    link: '#',
  },
  {
    id: 'nav-3',
    title: 'Features',
    link: '#',
  },
];

export const footerNavTwo = [
  {
    id: 'footer-nav-1',
    title: 'Tasks',
    link: '#',
  },
  {
    id: 'footer-nav-2',
    title: 'Blog',
    link: '#',
  },
  {
    id: 'footer-nav-3',
    title: 'Contact',
    link: '#',
  },
];

export const taskNavigation = [
  {
    id: 'task-nav-1',
    title: 'All task',
    link: '/todo',
  },
  {
    id: 'task-nav-2',
    title: 'Completed',
    link: '/todo/completed',
  },
  {
    id: 'task-nav-3',
    title: 'Uncompleted',
    link: '/todo/not-completed',
  },
];
