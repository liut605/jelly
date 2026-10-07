if (!process.env.npm_config_user_agent?.startsWith('pnpm/')) {
  console.error('Use ./scripts/local.sh install or pnpm install.');
  process.exit(1);
}
