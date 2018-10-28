<template>
  <div class="recomended">

    <ul>
      <li>
        <div><img src="/images/xxx3.png" alt=""></div>
        <p><strong>Dove Cream
        </strong> <br><span class="grey-title">250 RSD</span></p>
      </li>
      <li>
        <div><img src="/images/xxx2.png" alt=""></div>
        <p><strong>Lays Chips
        </strong> <br> <span class="grey-title">199 RSD</span></p>
      </li>
      <li>
        <div><img src="/images/xxx1.png" alt=""></div>
        <p><strong>Chipsy Classic
        </strong> <br> <span class="grey-title">199 RSD</span></p>
      </li>

    </ul>
  </div>
</template>
<script>
	export default {}
</script>
<style>
  .recomended {
    margin: 0 auto;
    display: table;
  }

  .recomended ul {

    display: flex;
    flex-direction: row;
    margin-top: 20px;
    justify-content: flex-start;

  }

  .recomended ul li {
    padding: 0 20px;
    height: 120px;
    text-align: center;
  }

  .recomended ul li div img {
    max-height: 100%;
    max-width: 100%;
    opacity: 0.6;
  }

  .recomended ul li div {
    position: relative;
    height: 80px;
  }

  .recomended ul li p {
    line-height: 20px;

  }

  .recomended ul li p strong {
    font-size: 12px;
  }

  .grey-title {
    color: #777777;
  }


</style>