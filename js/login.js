require.config({
    paths:{
        jquery:'jquery-1.11.3',
        login1:'login1'
    }
})
require(['login1'],function(login1){
    login1.loginTest()
    login1.downloadnav()
    login1.navHover()

})