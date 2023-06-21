---
import Layout from '~/layouts/PageLayout.astro';

import Header from '~/components/widgets/Header.astro';
import Hero from '~/components/widgets/Hero.astro';
import { headerData } from '~/data';

const meta = {
  title: "Contact",
};
---

<Layout {meta}>
  <Fragment slot="header">
    <Header
      {...headerData}
      showRssFeed
      showToggleTheme
      position="left"
    />
  </Fragment>

  <!-- Hero2 Widget ******************* -->

  <Hero>
    <Fragment slot="title">
    say hello at kokitree.com

    </Fragment>



  </Hero>

</Layout>
