<template>
  <div class="es-League-about">
    <h2 class="es-League-about__title">
      WHAT'S SEPAKTAKRAW<br /><span>セパタクローとは</span>
    </h2>
    <div class="es-League-about__container">
      <img
        src="~/assets/img/about/key-visual.png"
        alt="セパタクローアタック"
        class="es-League-about__visual"
      />
      <p class="es-League-about__text">
        セパタクローとは、ネットをはさんで足や腿または頭を使ってボールを相手コートに返しあう競技でバレーボールに似たゲームです。
        別名「空中の格闘技」と言われるほど、アクロバティックで見応えのあるスポーツです。
      </p>
      <ul class="es-League-about__list">
        <li class="es-League-about__item">
          <accordion>
            <template #title>
              <h3 class="es-League-about__itemTitle">競技形式</h3>
            </template>
            <template #body>
              <p class="es-League-about__itemText">
                ３人が１組となり、ネットをはさんで２組が勝敗を競い合います。<br />
                ルールはバレーボールに似ていますが、大きな違いは次の４点です。
              </p>
              <ul class="es-League-about__ruleList">
                <li class="es-League-about__ruleListItem">
                  <p class="es-League-about__ruleListText">
                    1. 腕、手を使ってはいけない
                  </p>
                  <img
                    src="~/assets/img/about/hands.svg"
                    class="es-League-about__ruleListImg hand"
                    alt="手を使ってはいけない"
                  />
                </li>
                <li class="es-League-about__ruleListItem">
                  <p class="es-League-about__ruleListText">
                    2. 1人で続けて3回まで<br class="sp" />ボールにタッチして良い
                  </p>
                  <img
                    src="~/assets/img/about/touch.svg"
                    class="es-League-about__ruleListImg three-touch"
                    alt="タッチ数"
                  />
                </li>
                <li class="es-League-about__ruleListItem">
                  <p class="es-League-about__ruleListText">
                    3. 守備位置のローテーションはない
                  </p>
                  <img
                    src="~/assets/img/about/rotation.svg"
                    class="es-League-about__ruleListImg rotation"
                    alt="ローテーション"
                  />
                </li>
                <li class="es-League-about__ruleListItem">
                  <p class="es-League-about__ruleListText">
                    4. サーブは3本ずつ交代でする
                  </p>
                  <img
                    src="~/assets/img/about/service-time.svg"
                    class="es-League-about__ruleListImg three-times"
                    alt="サーブ回数"
                  />
                </li>
              </ul>
            </template>
          </accordion>
        </li>
        <li>
          <accordion>
            <template #title>
              <h3 class="es-League-about__itemTitle">得点・勝敗</h3>
            </template>
            <template #body>
              <p class="es-League-about__itemText">
                1セット21点のラリーポイント制(デュースの場合は最大25点まで)で、2セットを先取したレグが勝ちとなります。第1・第2セットを1セットずつ取った時は、第3セットを行い、21点を先取した(デュースの場合は最大で25点)レグが勝ちとなります。
                <span>※ES LEAGUEは大会特別ルールとなります。</span>
              </p>
            </template>
          </accordion>
        </li>
        <li>
          <accordion>
            <template #title>
              <h3 class="es-League-about__itemTitle">ポジション・コート</h3>
            </template>
            <template #body>
              <p class="es-League-about__itemText">
                セパタクローとは基本的にポジションごとに役職が別れており、アタックを打つ「アタッカー」、サーブを打つ「サーバー」、トスを上げる「トサー」の３つのポジションに分かれる。バレーボールのようにポジションのローテーションはなく、基本的に自分のポジションの役割をそれぞれが行う。
              </p>
              <img
                src="~/assets/img/about/coat_position.svg"
                class="es-League-about__itemImage"
                alt="セパタクローコート"
              />
              <p class="es-League-about__itemText">
                バドミントンと同じ広さのコート、同じ高さ(女子は10cm低い)のネットを使用します。
              </p>
            </template>
          </accordion>
        </li>
        <li>
          <accordion>
            <template #title>
              <h3 class="es-League-about__itemTitle">用具</h3>
            </template>
            <template #body>
              <div class="es-League-about__goodsItem">
                <p class="es-League-about__goodsName">ボール</p>
                <img
                  src="~/assets/img/about/ball.svg"
                  class="es-League-about__goods ball"
                  alt="セパタクローボール"
                />
                <p class="es-League-about__itemText">
                  セパタクローのボールは、プラスチックを編んでできている為、表面は固くとても軽い。
                  <br />
                  表面には12個の穴が開いていて、空洞になっている。男子ボールと女子ボールは大きさと色に違いがある。
                </p>
              </div>
              <div class="es-League-about__goodsItem">
                <p class="es-League-about__goodsName">シューズ</p>
                <img
                  src="~/assets/img/about/shoes.svg"
                  class="es-League-about__goods shoes"
                  alt="セパタクローボール"
                />
                <p class="es-League-about__itemText shoes">
                  セパタクローの選手の多くはナンヤンというタイの靴を履いている。
                  <br />
                  比較的シンプルな作りをしていて、足の内側が平らなのでボールを安定して蹴りやすいということから長い間セパタクロー選手が愛用をしている。
                </p>
              </div>
            </template>
          </accordion>
        </li>
        <li>
          <accordion>
            <template #title>
              <h3 class="es-League-about__itemTitle">技</h3>
            </template>
            <template #body>
              <div class="es-League-about__technic">
                <ul class="es-League-about__technicList">
                  <li class="es-League-about__technicItem">
                    <p class="es-League-about__technicTitle">アタック</p>
                    <img
                      src="~/assets/img/about/attack.png"
                      class="es-League-about__technicImage"
                      alt="アタック"
                    />
                    <p class="es-League-about__itemText">
                      アタックは主にサッカーのオーバーヘッドシュートのような「ローリングアタック」と足をハサミのようにして打つ「シザースアタック」の2種類がある。<br />
                      ネット際でのアタッカーの攻防は、とてもアクロバティックで相手のブロックやレシーブを交わすためにコースをついたり、緩急をつけて攻撃する。
                    </p>
                  </li>
                  <li class="es-League-about__technicItem">
                    <p class="es-League-about__technicTitle">サーブ</p>
                    <img
                      src="~/assets/img/about/serve.png"
                      class="es-League-about__technicImage"
                      alt="サーブ"
                    />
                    <p class="es-League-about__itemText">
                      サーブは主に足の内側で蹴る「インサイドサーブ」、足の甲で蹴る「インステップサーブ」、インサイドとインフロントの中間で蹴る「インフロントサーブ」という３種類に分けられる。<br />
                      サーブを打つ際に当てる位置や場所を変えることでスピードや回転に変化を持たせてエースを狙う。速いサーブだけでなく、フェイントなど緩急のあるサーブの組み立ても見どころのひとつ。
                    </p>
                  </li>
                  <li class="es-League-about__technicItem">
                    <p class="es-League-about__technicTitle">トス</p>
                    <img
                      src="~/assets/img/about/tosser.png"
                      class="es-League-about__technicImage"
                      alt="トス"
                    />
                    <p class="es-League-about__itemText">
                      トスはアタッカーの強みを引き出すために、速さや高さ、距離などを考えてトスをあげている。また、相手のブロックの位置やレシーブの位置なども見ながらアタッカーが決め切れるようにコントロールをする。<br />
                      チームメイトのみならず、相手チームのポジショニングなども見ながらトスを上げるため広い視野が必要である。
                    </p>
                  </li>
                  <li class="es-League-about__technicItem">
                    <p class="es-League-about__technicTitle">ブロック</p>
                    <img
                      src="~/assets/img/about/block.png"
                      class="es-League-about__technicImage"
                      alt="ブロック"
                    />
                    <p class="es-League-about__itemText">
                      セパタクローにもバレーと同じようにブロックをすることができる。<br />
                      ルール上、手の使用は禁止のためブロックは写真のように足で行うか背中で止める。<br />
                      ネット際のアタックとブロックの攻防は激しく、迫力満点。
                    </p>
                  </li>
                  <li class="es-League-about__technicItem">
                    <p class="es-League-about__technicTitle">レシーブ</p>
                    <img
                      src="~/assets/img/about/receive.png"
                      class="es-League-about__technicImage"
                      alt="レシーブ"
                    />
                    <p class="es-League-about__itemText">
                      セパタクローは高速のサーブやアタックを手以外の脚や頭を使ってレシーブする。<br />
                      ボールはプラスチックでできているため、レシーブをするだけでアザができることもあり、見た目以上に痛い。<br />
                      サッカーボールよりも小さいボールを足でコントロールするため繊細なボール捌きが必要である。
                    </p>
                  </li>
                </ul>
              </div>
            </template>
          </accordion>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import accordion from '~/components/integration/molecules/accordion.vue'

export default {
  components: {
    accordion,
  },
  head() {
    return {
      title: 'セパタクローとは',
    }
  },
}
</script>

<style lang="scss" scoped>
.es-League-about {
  margin: 0px 16px;
  padding: 80px 0px 40px;
  text-align: center;
  color: #000;

  &__title {
    margin: 24px 0;
    text-align: center;
    font-size: 32px;
    color: #000000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }
  &__visual {
    width: 100%;
  }
  &__text {
    text-align: left;
    font-size: 16px;
    margin-top: 16px;
    line-height: 1.2;
  }

  &__list {
    list-style: none;
    margin-top: 40px;
  }

  &__itemTitle {
    font-size: 18px;
    font-weight: bold;
  }
  &__itemText {
    text-align: left;
    font-size: 14px;
    line-height: 1.5;
    span {
      font-size: 12px;
      margin-top: 9px;
      display: block;
      text-align: left;
    }
  }
  &__itemImage {
    width: 100%;
    margin-top: 24px;
  }

  &__goodsItem {
    &:nth-child(2) {
      margin-top: 34px;
    }
  }

  &__goodsName {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }

  &__goods {
    margin-bottom: 16px;
    &.ball {
      width: 193px;
    }
    &.shoes {
      width: 216px;
    }
  }

  &__ruleList {
    list-style: none;
    margin-top: 23px;
  }
  &__ruleListItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 23px 0;
    text-indent: -1em;
    padding-left: 1em;
  }
  &__ruleListText {
    font-size: 14px;
    text-align: left;
    line-height: 1.5;
    &.sp {
      display: block;
    }
  }

  &__technicList {
    list-style: none;
  }
  &__technicItem {
    margin-top: 15px;
    &:first-child {
      margin-top: 0;
    }
  }

  &__technicTitle {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
  }

  &__technicImage {
    width: 100%;
    margin-bottom: 5px;
  }
}
@media screen and (max-width: 374px) {
  .es-League-about {
    &__text {
      font-size: 14px;
    }
    &__itemText {
      font-size: 12px;
    }
    &__ruleListText {
      font-size: 12px;
    }
    &__goodsItem {
      & .es-League-about__itemText.ball {
        padding-top: 160px;
      }
    }
    &__goodsName {
      &.left {
        left: 25px;
      }
      &.right {
        right: 25px;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-about {
    max-width: 600px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      margin-bottom: 35px;
      & span {
        font-size: 24px;
      }
    }
    &__text {
      font-size: 18px;
    }
    &__itemText {
      font-size: 16px;
    }
    &__ruleListText {
      font-size: 16px;
      & .sp {
        display: none;
      }
    }
    &__ruleListImg {
      &.hand {
        width: 130px;
      }
      &.three-touch {
        width: 140px;
      }
      &.rotation {
        width: 70px;
      }
      &.three-times {
        width: 90px;
      }
    }
    &__technicItem {
      margin-top: 25px;
    }
    &__technicTitle {
      font-size: 24px;
    }
  }
}
</style>
