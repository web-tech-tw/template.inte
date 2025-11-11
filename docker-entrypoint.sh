#!/bin/sh

set -e
INSTANCES="${PM2_INSTANCES:-8}"

echo "Starting App server with pm2-runtime (instances: $INSTANCES)..."
exec pm2-runtime start server/index.mjs -i "$INSTANCES" --name wings
