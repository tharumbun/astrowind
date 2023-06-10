import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Start here',
      links: [
        {
          text: 'Reviews',
          href: getPermalink('/landing/reviews'),
        },
        {
          text: 'How to',
          href: getPermalink('/landing/howto'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'About us',
          href: '#',
        },
        {
          text: 'Contact',
          href: '#',
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],

};
  
export const footerData = {
  links: [
    {
      title: 'Platform',
      links: [
        { text: 'Atom', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    online since 2017
  `,
};
