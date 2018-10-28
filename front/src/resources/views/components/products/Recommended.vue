<template>
    <div class="recomended">

        <ul>
            <li>
            <div><img src="/smokic_thumb.png" alt=""></div>
            <p><strong>Chipsy Classic
            </strong> <br><span class="grey-title">199 RSD</span></p>
        </li>
            <li>
                <div><img src="/smokic_thumb.png" alt=""></div>
                <p><strong>Chipsy Classic
                </strong>  <br> <span class="grey-title">199 RSD</span></p>
            </li>
            <li>
                <div><img src="/smokic_thumb.png" alt=""></div>
                <p><strong>Chipsy Classic
                </strong>  <br> <span class="grey-title">199 RSD</span></p>
            </li>

        </ul>
    </div>
</template>
<script>
    export default {}
</script>
<style>

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
    .recomended ul li p strong{
        font-size: 12px;
    }
    .grey-title{
        color: #777777;
    }


</style>