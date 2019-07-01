'use strict'

class NavigationGenerator {

    async handle ({ view,request }, next) {
        const Config = use('Config')

        view.share({
            navigationItems:()=> this.addActive(
                Config.get("navigation.items"),request
            )
        })
    
        await next()
    }

    addActive(navigationItems,request){
        return  navigationItems.map((navItem)=>{
            navItem.active = this.isActive(navItem,request)?'active':''
            return navItem
        })
    }

    isActive(navItem,request){
        return request.match(['/'+navItem.url])
    }
}

module.exports = NavigationGenerator