import logger from 'lib/Logger';
const log = logger.get();

// First argument is the container,
// then the actual args follow.
//
// This is because we've bound these methods with the container.
// We are exporting the methods so they can be tested
// with mock dependencies.
export function getStuff({ boilerplate }, someArg) {
  return 'What is the universe? The answer is 42.';
}

// The function being called when registering services.
export default function (container) {
  // We register the stuff we want to expose.
  // That means when dependents need this service,
  // they must reference it as `boilerplate` in the container.
  container.register({
    boilerplate: container.bindAll({
      getStuff
    })
  });
}
