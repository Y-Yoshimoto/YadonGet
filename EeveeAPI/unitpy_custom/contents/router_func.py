#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import random


def get(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/plain')])
    return [b"Unit for Wsgi is Up.   Ver 0.09"]


def sendjson(environ, start_response):
    start_response('200 OK', [('Content-Type', 'application/json')])
    data = {"name": "test"}
    sendData = json.dumps(data, ensure_ascii=False)
    return sendData


def eeveeget(environ, start_response):
    start_response('200 OK', [('Content-Type', 'application/json')])
    wsgi_input = environ["wsgi.input"]
    content_length = int(environ.get('CONTENT_LENGTH', 0))
    fromData = wsgi_input.read(content_length)
    # 値の取りだしと判定
    number = json.loads(fromData)["number"]
    randomN = random.random()*100.0
    print(randomN)
    result = 0 if number >= randomN else 1
    # 返信データの作成
    data = {'result': result,'randomN': int(randomN)}
    sendData = json.dumps(data, ensure_ascii=False)
    return sendData


def not_found(environ, start_response):
    start_response('404 Not Found', [('Content-Type', 'text/html')])
    return [b"404 Not Found."]
