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
    # results = results.reset_index(drop=True)
    return results.to_json(orient = 'table', index = False)





    # all_wines = []

    # for i in range(0, 73100):
    #     wine_dict = {}
    #     wine_dict['country']= results['country'][i]
    #     wine_dict['description']= results['description'][i]
    #     wine_dict['points']= results['points'][i]
    #     wine_dict['price']= results['price'][i]
    #     wine_dict['province']= results['province'][i]
    #     wine_dict['region']= results['region'][i]
    #     wine_dict['taster_name']= results['taster_name'][i]
    #     wine_dict['taster_twitter_handle']= results['taster_twitter_handle'][i]        
    #     wine_dict['title']= results['title'][i]
    #     wine_dict['variety']= results['variety'][i]
    #     wine_dict['winery']= results['winery'][i]
    #     wine_dict['address']= results['address'][i]
    #     wine_dict['lats']= results['lats'][i]
    #     wine_dict['lngs']= results['lngs'][i]
    #     all_wines.append(wine_dict)
    # # return jsonify(all_wines)
    # print(all_wines)


if __name__ == "__main__":
    app.run(debug=True)