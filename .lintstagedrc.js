module.exports = {
  '*.ts': () => 'tsc -p tsconfig.json --noEmit',
  '*.ts(x)': 'eslint --cache --fix',
  '*.{ts,js,css,md,yml}': 'prettier --write',
}
