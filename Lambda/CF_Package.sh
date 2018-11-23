#!/bin/bash
aws cloudformation package \
   --template-file YadonGet.yaml \
   --output-template-file serverless-output.yaml \
   --s3-bucket yadonget