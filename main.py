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

@app.route('/js_momentum')
def js_momentum():
    return render_template("js_momentum.html")

@app.route('/js_paint')
def js_paint():
    return render_template("js_paint.html")

@app.route('/js_multi_test')
def js_multi_test():
    return render_template("js_multi_test.html")

if __name__ == '__main__':
    app.run(debug=True)
