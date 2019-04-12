import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy




# Database Setup


engine = create_engine("sqlite:///db/wineDB.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
table = Base.classes

session = Session(engine)

print(Base.classes.keys())

print(engine.table_names())
#for some reason it doesn't like data at the end. Not sure why as that's the table name. 
app = Flask(__name__)
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/api")
def api():
    results = pd.read_sql_table('data', con=engine)
    return results.to_json(orient = 'table', index = False)

@app.route("/map")
def map():
    return render_template("winemap.html")


if __name__ == "__main__":
    app.run(debug=True)