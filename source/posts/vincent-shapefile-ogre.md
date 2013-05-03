Date: 2013-05-02
Title: Vincent Spatial File conversion with Ogre
Slug: vincent-spatial-ogre
Category: Blog
Tags: python, maps, vincent, Ogre

Vincent now supports spatial file conversion via the [Ogre](http://ogre.adc4gis.com/) web tool. Here is a quick example for some shapefiles- the syntax is almost exactly the same as building a normal map, except now you need to pass one additional keyword argument to perform the conversion to geoJSON so that Vincent/Vega can parse it properly. 

All of the following data was downloaded from the awesome folks at [Natural Earth](http://www.naturalearthdata.com/), who provide free vector and raster map data, with all sorts of cultural/physical datasets. 

Lets quickly make a map with oceans, land and lakes: 

    ::py
    import vincent

    #Add Oceans
    vis = vincent.Map(width=1200, height=800)
    vis.geo_data(scale=200, spatial_convert=True, ocean=r'data/ne_110m_ocean.zip')
    vis += ('#476481', 'marks', 0, 'properties', 'enter', 'fill', 'value')
    vis.update_vis(padding={'bottom': 20, 'left': 50, 'right': 20, 'top': 50})
    vis.to_json('vega.json', html=True)

![Oceans](http://farm9.staticflickr.com/8127/8704086440_aa73f96040_z.jpg)

    ::py
    #Add Land masses
    vis.geo_data(spatial_convert=True, world=r'data/ne_110m_land.zip')
    vis += ('1a252f', 'marks', 1, 'properties', 'enter', 'fill', 'value')
    vis += ('1a252f', 'marks', 1, 'properties', 'enter', 'stroke', 'value')
    vis.to_json(path)
    
![Land](http://farm9.staticflickr.com/8408/8704086426_9377d8cff1_z.jpg)
    
    ::py
    #Add Lakes
    vis.geo_data(spatial_convert=True, lakes=r'data/ne_50m_lakes.zip')
    vis += ('#3498db', 'marks', 2, 'properties', 'enter', 'fill', 'value')
    vis += ('#3498db', 'marks', 2, 'properties', 'enter', 'stroke', 'value')
    vis.to_json(path)
    
![Lakes](http://farm9.staticflickr.com/8554/8704086410_28abf14af8_z.jpg)

Click [here](http://farm9.staticflickr.com/8554/8704086410_78e6cb0222_o.jpg) for a bigger version of the last one. 

There is also a standalone shapefile conversion method, if you just want to make some geoJSONs: 

    ::py
    vis.shapefile_to_json(shp_path=r'data/ne_110m_ocean.zip', json_out=r'map.json')
    
Just be careful with your file sizes- Ogre has an output limit of 15MB, and you don't want to make the Ogre angry. 

I'm sure there is all sorts of cool stuff that you cartographers and Pythonistas out there can build- let me know if you create interesting maps with Vincent, and even better, submit examples as a pull request to [Github](https://github.com/wrobstory/vincent).




