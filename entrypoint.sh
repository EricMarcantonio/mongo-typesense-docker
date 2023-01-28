#!/bin/bash 


node bin/index.js

if [ $? -eq 0 ]
then
  typesense-mongodb \
        --mongo-collection=$MONGO_COLLECTION \
        --mongo-database=$MONGO_DATABASE \
        --typesense-collection=$TYPESENSE_COLLECTION \
        --mongo-url=$MONGO_CONNECTION_STRING \
        --typesense-url=$TYPESENSE_CONNECTION_STRING \
        --typesense-api-key=$TYPESENSE_API_KEY
  exit 0
else
  exit 1
fi
