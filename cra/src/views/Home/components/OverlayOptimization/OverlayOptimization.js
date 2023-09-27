import React from "react";
import Overlay from "../../../../components/Overlay";

const OverlayOptimization = () => (
  <Overlay id="optimization">
    <article>
      <section>
        <h2>Optimization</h2>
        <p>
          Optimizing, optimizing, optimizing. Optimizing speed, optimizing
          performance, optimizing seo is all a big part of the game of frontend
          development. To get started with this, you need a fundamental
          understanding of how things work. After lots of researching and
          testing, here are some of my tips.
        </p>
      </section>
      <section>
        <h3>Optimizing pageload time</h3>
        <p>
          A very well known concept is to bundle your assets, to avoid requests.
          But in my experience - over time - your application keeps increasing
          in size and soon you{"’"}ll endup with huge css and js assets which
          include everything your application needs. For a visited page you
          might only need 10% of your applications assets.
        </p>
        <p>
          Nowadays with component based structures it becomes easy to think in
          terms of “include the stuff you need”. So a better way to decrease
          load time is to split your bundles into smaller chunks. Now this
          introduces complexity, because there might be a library which you use
          on all pages.
        </p>
        <p>
          A best of both worlds scenario would be to keep a common cacheable
          asset which includes stuff most pages need (jQuery for instance) and
          to make a bundle foreach page or foreach group of pages.
        </p>
        <p>
          If it turns out that a bundle is very small (say below 30kb), then you
          can even consider forgoing cache-ability and choose to inline the
          asset. This way there’s no request, making your page load even faster!
        </p>
        <p>
          Here’s{" "}
          <a
            href="https://modpagespeed.com/doc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google’s PageSpeed Documentation
          </a>{" "}
          for more tips.
        </p>
      </section>
      <section>
        <h3>Optimizing animations and transitions</h3>
        <p>
          Unfortunately we are currently in a state where we are pretty limited
          in terms of animations due to performance on mobile phones. I’ve had
          many instances where I’ve created something which turned out to be a
          stuttering experience on low-end phones. The truth is that the
          experience becomes worse than one with no animations at all!
        </p>
        <p>
          Because of this, I’ve spend a lot of time testing and researching
          about this topic.{" "}
          <a
            href="https://www.youtube.com/watch?v=1ZWugkJV5Ks"
            target="_blank"
            rel="noopener noreferrer"
          >
            GSAP has published a video
          </a>{" "}
          showing that javascript animations perform better than css.
        </p>
        <p>
          While this might be true in their example, they neglect the fact that
          your website will have other javascript events going on at the same
          time. If the other js code are heavy operations, your js based
          animations are going to suffer and stutter whereas css animations
          don’t because they run on a different threat. Not to mention that you
          will need to load a library of 100kb (in the case of using GSAP) to
          make it work.
        </p>
        <p>
          The trick is to compose the animation and/or transitioning layers to
          the GPU. It makes a huge difference on mobile devices, and to avoid
          properties which cause repainting. Here’s{" "}
          <a href="https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/">
            a very thorough article about GPU Animation.
          </a>
        </p>
      </section>
      <section>
        <h3>Optimizing for search engines</h3>
        <p>
          Oh boy, if you figure this one out today you will be wrong tomorrow.
          Google (it’s the only one we really use right?) keeps changing their
          algorithms constantly. Metatags are important one day and your content
          the next day.
        </p>
        <p>
          Content and mobile is king. Make sure your content has keywords about
          your product and more importantly contains searchable words. And if
          your webpage isn’t mobile friendly, you lose (apart from niches like
          travel booking sites). Mobile friendly doesn’t just mean it should
          look good in mobile, but it also means it should load fast. Everything
          is tracked and taken into consideration.
        </p>
        <p>
          Make sure you index the right pages and specify which pages you don’t
          want to be shown, because the last things you want is an irrelevant
          page popping up first. Get your semantics right too, an aside should
          be an aside and not a side navigation.
        </p>
        <p>
          See{" "}
          <a
            href="https://moz.com/blog/seo-and-digital-trends-in-2017"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEO and digital trends in 2017
          </a>{" "}
          for more.
        </p>
      </section>
    </article>
  </Overlay>
);

export default OverlayOptimization;
