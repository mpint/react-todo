#!/bin/bash

start_morpheus() {
  BUILDDIR=$1
  ENV=$2
  if [ -z ${BUILDDIR} ] || [ -z ${ENV} ]; then
    echo 'Usage: start_morpheus $BUILDDIR $ENV
      where $BUILDDIR is the target directory
            $ENV is the desired NODE_ENV
    (ex. start_morpheus build_0.2.0 ci)'

    return;
  fi

  if [[ $ENV != "production" ]] && [[ $ENV != "ci" ]]; then
      echo "ENV must be 'production' or 'ci'"
      return;
  fi

  CURRENT_VERSION=$BUILDDIR pm2 start $BUILDDIR/pm2.json --env $ENV
}
