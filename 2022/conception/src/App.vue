<template>
  <div>
    <egun-navbar />
    <egun-hero />   
    <egun-post />

    <!-- PAGINATION START -->
    <nav class="pagination is-rounded  is-centered" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
        <li>
          <button
            type="button"
            class="pagination-previous has-text-weight-bold">Previous</button>
        </li>
        <li>
          <button
            type="button"
            class="pagination-link button has-text-weight-bold is-primary">Page 1</button>
        </li>
        <li>
          <button
            type="button"
            class="pagination-next has-text-weight-bold">Next</button>
        </li>
      </ul>
    </nav>
    <!-- PAGINATION END -->
  </div>
</template>

<script>
import EgunNavbar from "./components/EgunNavbar.vue";
import EgunHero from "./components/EgunHero.vue"
import EgunPost from "./components/EgunPost.vue"
export default {
  name: 'App',
  components: {
    EgunNavbar,
    EgunHero,
    EgunPost,
  }
}
</script>

<style lang="scss">
   @import 'assets/styles/variables.scss';
   @import '~bulma/bulma.sass';
   @import 'assets/styles/main.scss';
  .hero-section {
    position: relative;
  }
  .posts {
    padding-top: 70px;
  }
  .posts-type {
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .search-lookup {
    width: 960px;
    margin: 0 auto;
    background-color: #262d32;
    padding: 20px;
    color: white;
    border-radius: 10px;
  }
  .search-lookup-wrap {
    width: 100%;
    z-index: 2;
    position: absolute;
    top: auto;
    bottom: -42px;
  }

  @media only screen and (max-width: 769px) {
    .search-lookup-wrap {
      position: inherit;
      bottom: unset;
    }
    .search-lookup {
      width: 100%;
      border-radius: 0px;
    }
  }

  .search-card-find {
    width: 100%;
    height: 180px;
    position: relative;
    display: block;
    border-radius: 3px;
    text-decoration: none;
    box-shadow: 0 0 1px rgba(0,0,0,.05);
    background-clip: content-box;
    background-size: cover;
    background-position: 50% 20%;
    border: 1px solid rgba(0,0,0,.12);
    -webkit-tap-highlight-color: transparent;
    &-interest {
      position: absolute;
      bottom: 12px;
      right: 12px;
      > p {
        font-weight: bold;
      }
    }
    .title {
      color: white;
    }
    .subtitle {
      color: white;
    }
    &-content {
      &-date {
        margin: 10px;
        width: 70px;
        text-align: center;
        border-radius: 50%;
        .day {
          display: block;
          font-size: 21px;
          color: white;
          font-weight: bold;
        }
        .month {
          display: block;
          color: #ff5050;
          font-weight: bold;
          font-size: 23px;
          margin-bottom: -5px;
        }
      }
      &-info {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 15px;
        width: 100%;
      }
    }
  }
</style>

