module.exports = {
  '*.ts': () => 'tsc -p tsconfig.json --noEmit',
  '*.(t|j)s': 'eslint --cache --fix',
  '*.{ts,js,css,md,yml}': 'prettier --write',
}
