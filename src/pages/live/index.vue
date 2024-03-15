<template>
  <section class="es-League-live">
    <h2 class="es-League-live__title">
      2022 SEASON<br />
      LIVE STREAMING<br />
      <span>ライブ配信</span>
    </h2>
    <div class="es-League-live__wrapper">
        <ul>
          <li v-for="movieList in movieLists" :key="movieList.clause" class="es-League-live__movieLists">
            <p class="es-League-live__clause">第{{ movieList.clause }}節</p>
            <div v-for="movie in movieList.movies" :key="movie.id" class="es-League-live__info">
              <iframe
                  width="560"
                  height="315"
                  :src="movie.url"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
              ></iframe>
            </div>
          </li>
        </ul>
    </div>
    <es-button url="/" class="es-League-live__btn">TOPページへ</es-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      movieLists: [
        {
          clause: 1,
          movies: [
            { 
              id: 1,
              url: 'https://www.youtube.com/embed/1EP55eCL--4',
            },
            {
              id: 2,
              url: 'https://www.youtube.com/embed/WJcVpsYG7u8',
            },
            {
              id: 3,
              url: 'https://www.youtube.com/embed/t5MSmq312WY',
            },
          ]
        },
        {
          clause: 2,
          movies: [
            {
              id: 4,
              url: 'https://www.youtube.com/embed/VXhe1KJ8gYE',
            },
            {
              id: 5,
              url: 'https://www.youtube.com/embed/awFyT1hx68o',
            },
            {
              id: 6,
              url: 'https://www.youtube.com/embed/9vEJlrbNn0Y',
            },
          ]
        },
        {
          clause: 3,
          movies: [
            {
              id: 7,
              url: 'https://www.youtube.com/embed/FCak6WQgJNo',
            },
            {
              id: 8,
              url: 'https://www.youtube.com/embed/L_SXDNhkDLU',
            },
            {
              id: 9,
              url: 'https://www.youtube.com/embed/83PI3F-mBkY',
            },
          ]
        },
        {
          clause: 4,
          movies: [
            {
              id: 10,
              url: 'https://www.youtube.com/embed/W9Giamq-9Dg',
            },
            {
              id: 11,
              url: 'https://www.youtube.com/embed/DRO75qts4po',
            },
            {
              id: 12,
              url: 'https://www.youtube.com/embed/EAIOkZK4zuQ',
            },
          ]
        },
        {
          clause: 5,
          movies: [
            {
              id: 13,
              url: 'https://www.youtube.com/embed/4DgGr29jCJE',
            },
            {
              id: 14,
              url: 'https://www.youtube.com/embed/20DSU5SFodk',
            },
            {
              id: 15,
              url: 'https://www.youtube.com/embed/lxwBY8H9bUg',
            },
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.es-League-live {
  padding: 80px 0px 40px;
  &__title {
    margin: 24px 0;
    text-align: center;
    font-size: 32px;
    color: #000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      color: #030012;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }

  &__wrapper {
    margin: 0 16px;

    ul,li {
      list-style: none;
    }
  }

  &__movieLists {
    margin-bottom: 100px;
  }

  &__clause {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
  }
  &__info {
    margin-top: 20px;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0px;
    position: relative;
    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &__btn {
    margin: 30px auto 0;
  }
}
@media screen and (min-width: 768px) {
  .es-League-live {
    max-width: 600px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      margin-bottom: 35px;
      & span {
        font-size: 24px;
      }
    }
    &__btn {
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
}
</style>
