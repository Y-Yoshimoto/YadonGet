import json
import random

def lambda_handler(event, context):
    # Get Number
    #number = json.loads(event)["number"]
    print event
    number = event["number"]
    randomN = random.random()*120.0
    # Check
    result = 0 if number >= randomN else 1
    
    return {
        'statusCode': 200,
        'headers': {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials": "true",  
        },
        'body': {'result': result,
            'randomN': int(randomN),
            'Version': int(2.0)
        }
    }
