# A visualization on Wine around the Globe

## Introduction

  Our project was inspired by the idea of using our growing map visualization skillset to display different wineries and wine types around the globe. We found an amazingly diverse data set on kaggle and wanted to visualize it for anyone interested on learning about where the wine they love comes from. We were also inspired by this [NYC fashion visualization | http://www.nytimes.com/newsgraphics/2013/09/13/fashion-week-editors-picks/index.html ], and thought it would be a good way to engage our audience on the homepage before they dove into the data on dertailed within our map visualization. 
  
  Additionally, we wanted to make sure we analysed the data we found and decided to focus on the areas with the most wineries as well as a comparison of types of wine and their costs.

## Method

So, how did we go about setting up our data visualization? We used the following steps to find and clean up our data:
 - Step 1: Found data using Kaggle, US Census Library, Zillow, & Google API [_Resources_]
 - Step 2: Set up flask file, cleaned up our data and found wine images for our image carousel
           We stored the data in a database (SQLAlchemy) and created an API for we could use
           We also used a the Flickr API to find images of Red/Rose/White wine
 - Step 3: Set up HTML page with Bootstra
           Theme: https://v4-alpha.getbootstrap.com/examples/
 - Step 4: Create starter code for world map and add in layers to illustrate the wineries and wine types
 - Step 4: Use ideas found in [here|https://github.com/clairesunstudio/fashion-viz] and create D3 image carousel 


## Results 





## Resources
Kaggle: 
https://www.kaggle.com/zynicide/wine-reviews 

Homepage inspiration:
http://www.nytimes.com/newsgraphics/2013/09/13/fashion-week-editors-picks/index.html

### Project Requirements
The visualization must include a Python Flask powered RESTful API, HTML/CSS, JavaScript, and at least one database (MySQL, MongoDB, SQLite, etc.)
The  project should fall into one of the below four tracks:
A custom "creative" D3.js project (i.e. non-standard graph or chart)
A combination of Web Scraping and Leaflet or Plotly
A dashboard page with multiple charts all updating from the same data
A "thick" server that performs multiple manipulations on data in a database prior to visualization (must be approved)
Your project should include at least one JS library that we did not cover.
Your project must be powered by a dataset with at least 100 records.

