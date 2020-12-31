<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="post in $page.posts.edges" :key="post.node.id">
            <a :href="post.node.path">
              <h2 class="post-title">
                {{ post.node.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ post.node.title }}
              </h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on September 24, 2019
            </p>
          </div>
          <hr />
          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#"
              >Older Posts &rarr;</a
            >
          </div>
        </div>
      </div>
    </div>
    <hr />
  </Layout>
</template>

<page-query>
query {
  posts: allBlogPost{
    edges{
      node{
        id   
        path
        title
        content
      }
    }
  }
}

</page-query>

<script>
export default {
  name: "HomePage",
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
</style>
