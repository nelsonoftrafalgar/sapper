from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS, cross_origin
from board_generator import BoardGenerator

app = Flask(__name__, static_folder='client/build', static_url_path='')
cors = CORS(app)


@app.route('/api')
@cross_origin()
def Api():
    level = float(request.args.get('level'))
    rows = int(request.args.get('rows'))
    cols = int(request.args.get('cols'))
    board_generator = BoardGenerator(rows, cols, level)
    return {'board': board_generator.board}


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
