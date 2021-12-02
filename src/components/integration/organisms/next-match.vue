<template>
  <div class="es-League-schedule">
    <h3 class="es-League-schedule__title">
      NEXT MATCH<br /><span>試合予定</span>
    </h3>
    <p class="es-League-schedule__date">2022.02.11 FRI.</p>
    <div class="es-League-schedule__teamList">
      <ul class="es-League-schedule__info">
        <li class="es-League-schedule__infoItem">
          <p>TEAM A</p>
          <span>x</span>
          <p>TEAM B</p>
        </li>
        <li class="es-League-schedule__infoItem">
          <p>TEAM C</p>
          <span>x</span>
          <p>TEAM D</p>
        </li>
        <li class="es-League-schedule__infoItem">
          <p>TEAM a</p>
          <span>x</span>
          <p>TEAM b</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League-schedule {
  padding-top: 20px;
  &__title {
    text-align: center;
    font-size: 32px;
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
    }
  }
  &__date {
    text-align: center;
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  &__teamList {
    margin-top: 10px;
  }
  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  &__infoItem {
    display: block;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    padding: 13px 0;
    background-color: #050101;
    border-right: 1px solid #fff;
    &:last-child {
      background-color: #ad6666;
      border-right: none;
    }
    & span {
      display: block;
      margin: 5px 0;
    }
  }
}
</style>
