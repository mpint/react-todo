export async function ping({ status, lumi }, ctx) {
  try {
    await status.ping();

    return ctx.ok('pong');
  } catch (err) {
    lumi.handleError(err, 'serverUnavailable', ctx);
  }
}
