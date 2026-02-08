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



# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from openai import OpenAI # Import the OpenAI library

# app = Flask(__name__)
# CORS(app)

# # Initialize the OpenAI client with your API key
# client = OpenAI(api_key="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")

# @app.route('/chat', methods=['POST'])
# def chat():
#     user_message = request.json.get('message')
    
#     try:
#         # Call the OpenAI Chat Completion API
#         completion = client.chat.completions.create(
#             model="gpt-3.5-turbo", # Or "gpt-4"
#             messages=[
#                 {"role": "system", "content": "You are a helpful assistant for a wildlife photography website."},
#                 {"role": "user", "content": user_message}
#             ]
#         )
        
#         bot_reply = completion.choices[0].message.content
#         return jsonify({"reply": bot_reply})
        
#     except Exception as e:
#         return jsonify({"reply": f"Sorry, I'm having trouble thinking right now. Error: {str(e)}"}), 500

# if __name__ == '__main__':
#     app.run(port=5000)