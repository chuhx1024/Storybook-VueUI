import CluInput from '../'

export default {
    title: 'CluInput',
    component: CluInput,
}

export const Text = () => ({
    components: { CluInput },
    template: '<clu-input v-model="value"></clu-input>',
    data () {
        return {
            value: 'admin',
        }
    },
})

export const Password = () => ({
    components: { CluInput },
    template: '<clu-input type="password" v-model="value"></clu-input>',
    data () {
        return {
            value: 'admin',
        }
    },
})
