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
    results = session.query(table)
    all_wines = []

    for wine in results:
        wine_dict = {}
        wine_dict['country']= wine.country
        wine_dict['description']= wine.description
        wine_dict['points']= wine.points
        wine_dict['price']= wine.price
        wine_dict['province']= wine.province
        wine_dict['region']= wine.region
        wine_dict['taster_name']= wine.taster_name
        wine_dict['taster_twitter_handle']= wine.taster_twitter_handle        
        wine_dict['title']= wine.title
        wine_dict['variety']= wine.variety
        wine_dict['winery']= wine.winery
        wine_dict['address']= wine.address
        wine_dict['lats']= wine.lats
        wine_dict['lngs']= wine.lngs
        all_wines.append(wine_dict)
    return jsonify(all_wines)


if __name__ == "__main__":
    app.run(debug=True)