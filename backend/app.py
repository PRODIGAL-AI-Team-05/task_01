from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import datetime

app = Flask(__name__)
CORS(app)

# 🧠 Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client['heatmap_db']
interactions_collection = db['interactions']

@app.route('/')
def home():
    return "✅ Flask server is running!"

@app.route('/api/log-interaction', methods=['POST'])
def log_interaction():
    data = request.get_json()
    if not data:
        return jsonify({"status": "error", "message": "No data received"}), 400

    # 🧠 Attach server timestamp to each event
    for event in data:
        event['received_at'] = datetime.datetime.utcnow()

    try:
        interactions_collection.insert_many(data)
        print(f"📥 Stored {len(data)} events in MongoDB")
        return jsonify({"status": "success", "message": "Events saved"}), 200
    except Exception as e:
        print("❌ MongoDB Error:", e)
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
