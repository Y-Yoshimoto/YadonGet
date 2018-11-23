#!/bin/bash
zip yadon.zip lambda_function.py -x "*.DS_Store"
aws cloudformation package \
   --template-file YadonGet.yaml \
   --output-template-file serverless-output.yaml \
   --s3-bucket yadonget
