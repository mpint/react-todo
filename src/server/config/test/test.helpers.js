import colors from 'colors';

// throw errors in mocha because it won't do it by default
export function throwAnyErrors(done, err, res) {
  if (err) {
    done(err);
  }
  else {
    done();
  }
}
