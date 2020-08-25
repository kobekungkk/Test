require.config({
    paths:{
        jquery:'jquery-1.11.3',
        'jquery-cookie':'jquery.cookie',
        parabola:'parabola',
        register1:'register1',
     
    },
    shim:{
        'jquery-cookie':['jquery'],
        parabola:{
            exports:'_'
        }
    }
})
require(['register1'],function(register1){
    register1.registerTest(),
    register1.downloadnav(),
    register1.navHover()
})