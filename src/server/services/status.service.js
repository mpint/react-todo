export async function ping() {
  return true;
}

export default function (container) {
  container.register({
    status: container.bindAll({
      ping
    })
  });
}
