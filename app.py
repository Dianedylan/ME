
app = Flask(__name__)

@app.route('/')
@app.route('/indigo')
def indigo():
    return render_template("indigo.html")
    
@app.route('/live&artificial')
def live_artificial():
    return render_template("live&artificial.html")

@app.route('/pots.html')
def pots():
    return render_template("pots.html")

if __name__=="__main__":
    app.run(debug=True)