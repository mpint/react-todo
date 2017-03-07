#!/usr/bin/env bash

OUT="./.revision.js"
HASH=$(git rev-parse HEAD)
VERSION=$( cat ./package.json | python -m json.tool | grep '"version"' | sed 's/[^0-9.]*//g' )

echo "module.exports = { commit: \"$HASH\", version: \"$VERSION\" };" > $OUT
