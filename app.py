from flask import Flask, render_template, jsonify
import json


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/category')
def category():
    with open('static/src/category.json') as jfile:
        data = json.load(jfile)
    return(json.dumps({'data': data}))


@app.route('/part')
def part():
    with open('static/src/part.json') as jfile:
        data = json.load(jfile)
    return(json.dumps({'data': data}))


@app.route('/texture')
def texture():
    with open('static/src/texture.json') as jfile:
        data = json.load(jfile)
    return(json.dumps({'data': data}))


if __name__ == '__main__':
    app.run(debug=True)
