#!/usr/bin/env bash

# install dev dependencies
yarn install --production=false
# build
yarn build
# prune dev dependencies
yarn install --production=true

