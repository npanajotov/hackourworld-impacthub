<script>
    export default {
        props: ['src'],
        render(h) {
            return h('img', {
                attrs: {
                    src: this.src // require(this.src)
                },
            });
        }
    }

</script>