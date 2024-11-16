from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/", methods=["POST"])
def handle_post():
    data = request.get_json()  # Parse the incoming JSON data
    if not data or "text" not in data:
        return jsonify({"message": "Invalid request"}), 400

    text = data["text"]
    print("Received text:", text)

    if text == "Hi, I am Himalaya Raj!":
        return jsonify({"message": "Hello"})
    else:
        return jsonify({"message": "no hello"})

if __name__ == "__main__":
    port = 3000
    app.run(host="localhost", port=port, debug=True)
