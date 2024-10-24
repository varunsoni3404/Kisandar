from flask import Flask, request, jsonify
from flask_cors import CORS 
import google.generativeai as genai

app = Flask(__name__)
CORS(app, supports_credentials=True)  


API_KEY = 'AIzaSyD31IDHs3PjKuHP39JRmblnnNSl8AmKIxk'  
genai.configure(api_key=API_KEY)

class Gemini:
    def TextResponse(self, value, stream=False):
        model = genai.GenerativeModel('gemini-pro')
        try:
            response = model.generate_content(value, stream=stream)
            if stream:
                return response
            else:
                return response.text
        except Exception as e:
            return f'{type(e).__name__}: {e}'

@app.route('/summarize', methods=['POST'])
def summarize():
    user_input = request.json.get('input', '')
    gemini = Gemini()
    summary = gemini.TextResponse(value=f"Summarize the following:\n{user_input}")
    return jsonify({"summary": summary})

if __name__ == '__main__':
    app.run(debug=True)
