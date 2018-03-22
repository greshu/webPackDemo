
import userRoutes from "./user.config"
import UserListController from "./user.controller"

// (function(){



//     angular.module("user", [])
//     .controller("UserListController", UserListController);
// })();

angular.module("user", [])
    .config(userRoutes)
    .controller("UserListController", UserListController);
    
   