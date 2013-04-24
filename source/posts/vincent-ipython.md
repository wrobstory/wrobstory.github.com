Date: 2013-04-23
Title: Vincent and iPython
Slug: vincent-ipython
Category: Blog
Tags: python, vincent, data, ipython

Thanks to the work of [Abraham Flaxman](https://twitter.com/healthyalgo)[(github)](https://github.com/aflaxman), Vincent now supports iPython plotting, with just two additional lines of initialization required: 

    ::py
    import vincent
    vincent.ipynb_init_d3()
    vincent.ipynb_init_vg()

    vis = vincent.Bar()
    vis.tabular_data((('A', 28), ('B', 55), ('C', 43), ('D', 91), ('E', 81), 
                      ('F', 53), ('G', 19), ('H', 87), ('I', 52)))
    vincent.ipynb_display(vis)
    
![ipython](http://farm9.staticflickr.com/8262/8677332204_7d11fc0364_z.jpg). 

Unfortunately, js embeds like this don't play nice with nbviewer- to see it in action, go grab the [example](https://github.com/wrobstory/vincent/tree/master/examples) and run it on a local server. 

I also recommend checking out Abraham's [blog](http://healthyalgorithms.com/), where he has some most excellent pixellated carrots. 


    