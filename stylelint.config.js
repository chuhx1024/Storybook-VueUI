module.exports = {
    defaultSeverity: 'error', // 只支持 “warning" 和 ”error" 两种，用于定义全局默认的报错等级
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order'], // 可以扩展现有配置（无论是自己的配置还是第三方配置
    // plugins: ['stylelint-scss', 'stylelint-less'], // 根据情况开启
    rules: {
        // 禁止低优先级的选择器出现在高优先级的选择器之后
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        indentation: 4, // 缩进
    },
}
