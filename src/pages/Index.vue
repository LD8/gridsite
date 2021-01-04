<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ landing.title }}</h1>
              <span class="subheading">{{ landing.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="post in $page.posts.edges"
            :key="post.node.id"
          >
            <g-link :to="post.node.path">
              <h2 class="post-title">
                {{ post.node.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ post.node.title }}
              </h3>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on September 24, 2019
            </p>
          </div>
          <hr />

          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right" href="#"
              >Older Posts &rarr;</a
            >
          </div> -->
          <pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
    <hr />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        path
        title
        content
      }
    }
  }

  landing: allStrapiLanding {
    edges{
      node{
        title
        subtitle
      }
    }
  }
}

</page-query>

<script>
import { Pager } from "gridsome";

export default {
  name: "HomePage",
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Pager,
  },
  computed: {
    landing() {
      return this.$page.landing.edges[0].node;
    },
  },
};
</script>

<style>
</style>
