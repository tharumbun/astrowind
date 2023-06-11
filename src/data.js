import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Start here',
      links: [
        {
          text: 'Reviews',
          href: getPermalink('/category/reviews'),
        },
        {
          text: 'How to',
          href: getPermalink('/category/howto'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
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

  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/koki_tree' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    online since 2017
  `,
};
