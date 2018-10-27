<template>
    <div>
        <Chart></Chart>
    </div>
</template>
<script>

    import Chart from './Chart';

    export default {
       components:{Chart},
        computed: {
            item: {
                get() {
                    return this.$store.getters.product;
                }
            }
        }
    }
</script>