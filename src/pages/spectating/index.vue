<template>
  <div class="es-League-spectating">
    <h2 class="es-League-spectating__title">
      Guidelines for spectators<br /><span>観戦ガイドライン</span>
    </h2>
    <div class="es-League-spectating__container">
      <h3 class="es-League-spectating__subTitle">【本ガイドラインについて】</h3>
      <p class="es-League-spectating__text">
        新型コロナウイルスの今後の感染状況によって、本ガイドラインを変更する可能性があります。
      </p>
      <h3 class="es-League-spectating__subTitle">【来場時の注意点】</h3>
      <p class="es-League-spectating__text index">
        ①無理な来場は見合わせてください。次に該当する場合は来場をお控えいただきますようお願い致します。<br />
        ・体調がよくない場合(平熱を超える発熱、咳、喉の痛み、倦怠感、味覚異常、嗅覚異常など)<br />
        ・同居家族や身近な人に感染が疑われる方がいる場合<br />
        ・過去14日以内に政府から入国制限、入国後の観察とされている国、地域等への渡航歴のある方
      </p>
      <p class="es-League-spectating__text index">
        ②入場時にお客様の体温を測定させていただき、37.5度以上ある場合(37.5度未満の場合でも明らかな発熱症状を本人が自覚している場合や、平熱よりも1度以上高いことが明らかな場合も含む)は入場できませんので、予めご了承ください。
      </p>
      <p class="es-League-spectating__text index">
        ③マスクの着用をお願い致します。（会場でのマスクの配布はございませんので、各自ご準備ください。）
      </p>
      <p class="es-League-spectating__text index">
        ④食事中は黙食とし、他者との距離を取るようにして下さい。
      </p>
      <p class="es-League-spectating__text index">
        ⑤会場では身体的距離を確保するようにしてください。
      </p>
      <p class="es-League-spectating__text index">
        ⑥手洗い・消毒などをこまめに実施してください。会場内設置の消毒液をご利用ください。
      </p>
      <p class="es-League-spectating__text index">
        ⑦観戦時は座席から移動することを禁止します。
      </p>
      <p class="es-League-spectating__text index">
        ⑧大声での発声、歌唱や声援、密集の形成など、感染リスクのある行為は控えてください。
      </p>
      <p class="es-League-spectating__text index">
        ⑨『選手・監督・コーチ』との接触や会話は極力お控え下さい。
      </p>
      <p class="es-League-spectating__text index">
        ⑩本ガイドラインと併せて利用施設の決めたガイドライン・指示に従うようにお願いい致します。
      </p>
      <h3 class="es-League-spectating__subTitle">【応援時の注意点】</h3>
      <p class="es-League-spectating__text index">
        ① 容認される行為<br />
        ・拍手(発声を誘発しない範囲で)<br />
        ・応援グッズ(タオル、バルーン、フラッグ等)を振る、又は回す
      </p>
      <p class="es-League-spectating__text index">
        ②禁止する行為<br />
        ・大声を出しての応援(歌を歌う、指笛を含む)<br />
        ・他来場者など他人とのハイタッチ、肩を組んでの応援などの接触を伴う応援<br />
        ・選手の出待ち<br />
        ・応援時の座席の移動<br />
      </p>
      <p class="es-League-spectating__text coution">
        ※上記に記載する禁止事項に該当するような行為、又は感染拡大の可能性のある行為をされた場合はスタッフから注意喚起、又は来場をお断りする場合があります。新型コロナウイルス感染拡大防止の為、皆様のご理解とご協力をお願いします。
      </p>
      <p class="es-League-spectating__text contact">
        ※観戦終了後2週間以内に新型コロナウイルスを発症した場合はES
        LEAGUE事務局までご報告をお願い致します。<br />
        es.league2022@gmail.com
      </p>
    </div>
    <div class="es-League-spectating__btnWrapper">
      <es-button url="/" class="es-League-team__btn">TOPへ戻る</es-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League-spectating {
  margin: 0px 16px;
  padding: 80px 0px;
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
  &__container {
    text-align: left;
    margin-top: 40px;
  }
  &__subTitle {
    font-size: 18px;
    margin: 10px 0;
    font-weight: normal;
    line-height: 1.2;
  }
  &__text {
    line-height: 1.5;
    font-size: 14px;
    padding-left: 2em;
    &.index {
      text-indent: -1em;
    }
    &.coution {
      margin-top: 15px;
      padding-left: 0;
    }
    &.contact {
      margin-top: 15px;
      padding-left: 0;
    }
  }
  &__btnWrapper {
    margin: 40px auto 0;
    display: flex;
    justify-content: center;
  }
}
@media screen and (min-width: 768px) {
  .es-League-spectating {
    max-width: 600px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }
    &__container {
      margin-top: 70px;
    }
  }
}
</style>
