<template>
  <div class="row">
    <div class="col-md-6">
      <img :src="hk" alt="" width="100%" height="100%">
    </div>
    <div class="col-md-6">
      <div class="card border-orange">
          <div class="card-body text-left">
            <blockquote class="quote-box">
              <p class="quotation-mark">
              “
              </p>
              <p class="quote-text">
              Education is not Preparation
              <br>
              For Life, Education is Life Itself.
              </p>
              <hr>
              <div class="blog-post-actions">
              <p class="blog-post-bottom pull-left">
                  Beckham Roy
              </p>
              </div>
          </blockquote>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Image } from '@/constant/image';

  const { hk } = Image;

  export default {
    name: "Panel",
    data() {
      return {
        hk,
      };
    },
  };
</script>
