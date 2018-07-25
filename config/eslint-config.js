module.exports = {
	parser: 'babel-eslint',
	extends: 'standard',
	plugins: [
		'standard',
		'react'
	],
	env: {
		browser: true,
		mocha: true,
		node: true,
		es6: true
	},
	parserOptions: {
		ecmaFeatures: {
			modules: true,
			jsx: true
		}
	},
	globals: {
		sinon: true,
		expect: true
	},
	rules: {
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		semi: ['error', 'always'],
		'no-tabs': 'off',
		'space-before-function-paren': 'off',
		'space-infix-ops': 'off',
		'brace-style': 'off',
		'space-before-function-paren': 'off',
		'no-multiple-empty-lines': 'off',
		'no-mixed-operators': 'off',
		'one-var': 'off',
		'space-in-parens': 'off',
		'operator-linebreak': 'off',
		'padded-blocks': 'off',
		'no-cond-assign': 1,
		'no-empty': 0,
		'no-console': 1,
		indent: [2, 'tab', {SwitchCase: 1}],
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-trailing-spaces': [2, { skipBlankLines: true }],
		'max-nested-callbacks': [2, 3],
		'no-eval': 2,
		'no-implied-eval': 2,
		'no-new-func': 2,
		'guard-for-in': 0,
		eqeqeq: 0,
		'no-else-return': 2,
		'no-redeclare': 2,
		'no-dupe-keys': 2,
		radix: 2,
		'no-shadow': 0,
		'callback-return': [1, ['callback', 'cb', 'next', 'done']],
		'no-delete-var': 2,
		'no-undef-init': 2,
		'no-shadow-restricted-names': 2,
		'handle-callback-err': 0,
		'no-lonely-if': 2,
		'keyword-spacing': 2,
		'constructor-super': 2,
		'no-this-before-super': 2,
		'no-dupe-class-members': 2,
		'no-const-assign': 2,
		'prefer-spread': 2,
		'no-useless-concat': 2,
		'no-var': 2,
		'object-shorthand': 2,
		'prefer-arrow-callback': 2
	}
};
