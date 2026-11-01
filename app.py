from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/lessons")
def lessons():
    return render_template("lessons.html")

@app.route("/conversations")
def conversations():
    return render_template("conversations.html")

@app.route("/quiz")
def quiz():
    return render_template("quiz.html")

@app.route("/progress")
def progress():
    return render_template("progress.html")


if __name__ == "__main__":
    app.run(debug=True)