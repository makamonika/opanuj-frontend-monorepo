export default { 
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
          2,
          'always',
          ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'build', 'ci', 'revert']
        ],
        'subject-case': [2, 'always', ['lower-case']],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'header-max-length': [2, 'always', 72],
        'body-max-line-length': [2, 'always', 100]
      },
};
