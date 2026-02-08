from flask import Flask, request, jsonify
from flask_cors import CORS
import ollama # Import the local AI library

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    
    try:
        # Call the local model running on your machine
        response = ollama.chat(model='llama3', messages=[
            {'role': 'user', 'content': user_message},
        ])
        
        bot_reply = response['message']['content']
        return jsonify({"reply": bot_reply})
        
    except Exception as e:
        return jsonify({"reply": "My local brain is currently offline."}), 500

if __name__ == '__main__':
    app.run(port=5000)

