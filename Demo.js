//var gl = new WebGL2RenderingContext(); //enable WebGL 2 partial support

Demo.prototype.init = function()
{
    const settings = new Settings();
    settings.demo.compatibility.old2dCoordinates = true; // when true 2d coordinates x: 0 - 1920, y: 0 - 1080; when false 2d coordinates are -0.5 - 0.5 range
    settings.demo.compatibility.oldColors = true; // when true colors are in 0-255 range, when false colors are in 0-1 range
  
    var start = 0;
    var duration = 60*2;
    var layer = 1; 

    var animSpeed = 10.0;
    this.loader.addAnimation(
    {
        "start": 0, "duration": duration, "layer": layer
        ,"image": "_embedded/defaultWhite.png"
    });

    this.loader.addAnimation(
    {
         "start": 20, "duration": duration, "layer": layer
        ,"image": "_embedded/defaultWhite.png"
        ,"shader":{
             "name":"retroBackground.fs"
            /*,"variable":[
                 {"name":"colorStart","value":"{return getPaletteColorAsUniform(Sync.getSyncValue('c1'));}"}
                ,{"name":"colorEnd","value":"{return getPaletteColorAsUniform(Sync.getSyncValue('c2'));}"}
                ,{"name":"colorSunStart","value":"{return getPaletteColorAsUniform(Sync.getSyncValue('c3'));}"}
                ,{"name":"colorSunEnd","value":"{return getPaletteColorAsUniform(Sync.getSyncValue('c4'));}"}
            ]*/
         }
        ,"color":[{"a":0}, {"a":255, "duration":4}]
    });

   this.loader.addAnimation({
         "start": 2, "duration":10
        ,"scale": [{"uniform2d":1.0}]
        ,"layer": layer, "image": ["jml_01.png","jml_02.png","jml_03.png","jml_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
        ,"color":[{"a":0}, {"a":255, "duration":1}, {"duration":4}, {"a":0, "duration":1}]
    });
    this.loader.addAnimation({
         "start": 7, "duration":10
        ,"scale": [{"uniform2d":1.0}]
        ,"layer": layer, "image": ["hauho_01.png","hauho_02.png","hauho_03.png","hauho_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
        ,"color":[{"a":0}, {"a":255, "duration":1}, {"duration":3}, {"a":0, "duration":1}]
    });

    this.loader.addAnimation({
         "start": 108, "duration":duration
        ,"scale": [{"uniform2d":1.0}]
        ,"layer": layer, "image": ["rainbow_01.png","rainbow_02.png","rainbow_03.png","rainbow_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
        ,"color":[{"a":0}, {"a":255, "duration":1}]
    });

    this.loader.addAnimation({
         "start": 12, "duration":duration
        ,"scale": [{"uniform2d":4.0},{"uniform2d":1.5, "duration":3}]
        ,"position": [{"x":getScreenWidth()*0.5, "y":getScreenHeight()*0.5},{"x":getScreenWidth()*0.8, "y":getScreenHeight()*0.7,"duration":3}]
        ,"color":[{"a":0}, {"a":255, "duration":1}]
        ,"layer": layer, "image": ["sun_01.png","sun_02.png","sun_03.png","sun_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
    });

    this.loader.addAnimation({
         "start": 30, "duration":duration
        ,"scale": [{"uniform2d":3.0}]
        ,"color":[{"a":0}, {"a":255, "duration":1},{"duration":26},{"a":0, "duration":1}]
        ,"position": [
            {"x":getScreenWidth()*-0.4, "y":getScreenHeight()*0.35}
            ,{"x":getScreenWidth()*0.4, "duration":10}
        ]
        ,"layer": layer, "image": ["boat_01.png","boat_02.png","boat_03.png","boat_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
    });

    this.loader.addAnimation({
         "start": 25, "duration":duration
        ,"scale": [{"uniform2d":1.0}]
        ,"color":[{"a":0}, {"a":255, "duration":1},{"duration":31},{"a":0, "duration":1}]
        ,"position": [
            {"x":getScreenWidth()*0.95, "y":getScreenHeight()*0.45}
            ,{"x":getScreenWidth()*0.0, "duration":30}
        ]
        ,"angle": [{"degreesZ":"{return Math.sin(getSceneTimeFromStart()*2.0) * 1.0;}"}]
        ,"layer": layer, "image": ["sea_01.png","sea_02.png","sea_03.png","sea_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
    });


    for(var i = 0; i < 20; i++) {
        var startTime = i*0.5;
        var startX = (1.2+Math.random()*i);
        var endX = -2.0;
        this.loader.addAnimation({
             "start": 57+startTime, "duration":duration
            ,"scale": [{"uniform2d":1.0}]
            ,"color":[{"a":255}, {"duration":102-(57+startTime)},{"a":0, "duration":1}]
            ,"position": [
                 {"x":getScreenWidth()*startX, "y":getScreenHeight()*0.3+Math.random()*0.1}
                ,{"x":getScreenWidth()*endX, "duration":duration}
            ]
            ,"layer": layer, "image": ["tree_01.png","tree_02.png","tree_03.png","tree_04.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
        });
    }

    this.loader.addAnimation({
         "start": 57, "duration":duration
        ,"scale": [{"uniform2d":1.0}]
        ,"color":[{"a":0}, {"a":255, "duration":1},{"duration":44},{"a":0, "duration":1}]
        ,"position": [
            {"x":getScreenWidth()*0.95, "y":getScreenHeight()*0.45}
            ,{"x":getScreenWidth()*0.0, "duration":30}
        ]
        ,"angle": [{"degreesZ":"{return Math.sin(getSceneTimeFromStart()*2.0) * 1.0;}"}]
        ,"layer": layer, "image": ["road_01.png","road_02.png","road_03.png","road_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
    });

    this.loader.addAnimation({
         "start": 57, "duration":duration
        ,"scale": [{"uniform2d":3.0}]
        ,"color":[{"a":0}, {"a":255, "duration":1},{"duration":44},{"a":0, "duration":3}]
        ,"position": [
            {"x":getScreenWidth()*0.4, "y":getScreenHeight()*0.35}
            ,{"duration":44}
            ,{"x":getScreenWidth()*1.3, "duration":2}
        ]
        ,"layer": layer, "image": ["car_01.png","car_02.png","car_03.png","car_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
    });

    for(var i = 0; i < 30; i++) {
        var startTime = i*0.5;
        var startX = (1.2+Math.random()*i);
        var endX = -2.0;
        this.loader.addAnimation({
             "start": start+startTime, "duration":duration
            ,"scale": [{"uniform2d":0.8 + Math.random()*0.7}]
            ,"position": [
                 {"x":getScreenWidth()*startX, "y":getScreenHeight()*(0.5+Math.random()*0.5)}
                ,{"x":getScreenWidth()*endX, "duration":duration}
            ]
            ,"layer": layer, "image": ["cloud_01.png","cloud_02.png","cloud_03.png","cloud_04.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
        });
    }


    this.loader.addAnimation({
         "start": 102, "duration":duration
        ,"scale": [{"uniform2d":1.0}]
        ,"layer": layer, "image": ["castle_01.png","castle_02.png","castle_03.png","castle_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
        ,"color":[{"a":0}, {"a":255, "duration":1}]
    });

    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 29.2+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 30.4+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 31.6+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 32.8+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }


    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 38.2+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 39.4+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 40.6+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 41.8+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 31.8+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 84+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 85.2+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 86.4+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 87.6+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }


    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 93.2+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 94.4+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 95.6+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }
    for (var i = 0; i < 4 ; i++) {
        this.loader.addAnimation({
             "start": 96.8+i*0.2, "duration":1
            ,"scale": [{"uniform2d":0.5}]
            ,"position": [{"x":getScreenWidth()*(0.1+Math.random()*0.7), "y":getScreenHeight()*(0.5+Math.random()*0.3)}]
            ,"layer": layer, "image": ["ha_01.png","ha_02.png","ha_01.png","ha_02.png"]
            ,"shader":{"name":"sketchy.fs"
                ,"variable":[
                     {"name":"animSpeed","value":[animSpeed]}
                ]}
            ,"color":[{"a":0}, {"a":255, "duration":0.25}, {"duration":0.5}, {"a":0, "duration":0.25}]
        });
    }

    
    this.loader.addAnimation({
         "start": 0, "duration":duration
        ,"scale": [{"uniform2d":1.0}]
        ,"layer": layer, "image": ["hauho_01.png","hauho_02.png","hauho_03.png","hauho_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[animSpeed]}
            ]}
        ,"color":[{"a":0},//{"duration":88.8},
        {"duration":34.0},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":41},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":0.5},
        {"a":255,"duration":0.35},{"a":0,"duration":0.35},
        {"duration":10.8},
        {"a":255,"duration":1}

        ]
    });

    
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"scale": [{"uniform2d":1.0}]
        ,"layer": layer, "image": ["fg_01.png","fg_02.png","fg_03.png","fg_04.png"]
        ,"shader":{"name":"sketchy.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[14.0]}
            ]}
        ,"color":[{"a":80}]
    });

    this.loader.addAnimation({
         "start": start, "duration": duration,"layer": layer
        ,"image": ["_embedded/defaultTransparent.png"]
        ,"shader":{"name":"vignette.fs"}    
        ,"color":[{"r":0,"g":0,"b":0,"a":255}]    
    });
}
