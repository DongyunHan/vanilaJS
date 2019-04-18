from flask import Flask
from flask import  render_template, request, make_response
app = Flask(__name__)

@app.route('/')
@app.route('/js_theory')
def js_theory():
    return render_template("js_theory.html")

@app.route('/js_practice')
def js_practice():
    return render_template("js_practice.html")

if __name__ == '__main__':
    app.run(debug=True)
