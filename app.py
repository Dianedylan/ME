from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')

@app.route('/indigo')
def indigo():
    return render_template("indigo.html")
    
@app.route('/liveartificial')
def liveartificial():
    return render_template("liveartificial.html")

@app.route('/pots')
def pots():
    return render_template("pots.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/plant_lighting')
def plant_lighting():
    return render_template("plant_lighting.html")

@app.route('/site_analysis')
def site_analysis():
    return render_template("site_analysis.html")

@app.route('/gardend')
def gardend():
    return render_template("gardend.html")

if __name__=="__main__":
    app.run(debug=True)