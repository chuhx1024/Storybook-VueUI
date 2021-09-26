import CluButton from '../'

export default {
    title: 'CluButton',
    component: CluButton,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    },
}

export const small = () => ({
    components: { CluButton },
    template: '<clu-button >Small</clu-button>',
})

export const big = () => ({
    components: { CluButton },
    template: '<clu-button >Big</clu-button>',
})
