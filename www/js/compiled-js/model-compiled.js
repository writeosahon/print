"use strict";utopiasoftware[utopiasoftware_app_namespace].model={isAppReady:!1,appDatabase:null,encryptedAppDatabase:null,appBaseUrl:"https://shopoakexclusive.com",cartCount:0},utopiasoftware[utopiasoftware_app_namespace].controller.startup(),$(document).on("init","#home-page",utopiasoftware[utopiasoftware_app_namespace].controller.homePageViewModel.pageInit),$(document).on("show","#home-page",utopiasoftware[utopiasoftware_app_namespace].controller.homePageViewModel.pageShow),$(document).on("hide","#home-page",utopiasoftware[utopiasoftware_app_namespace].controller.homePageViewModel.pageHide),$(document).on("destroy","#home-page",utopiasoftware[utopiasoftware_app_namespace].controller.homePageViewModel.pageDestroy),$(document).on("init","#categories-page",utopiasoftware[utopiasoftware_app_namespace].controller.categoriesPageViewModel.pageInit),$(document).on("show","#categories-page",utopiasoftware[utopiasoftware_app_namespace].controller.categoriesPageViewModel.pageShow),$(document).on("hide","#categories-page",utopiasoftware[utopiasoftware_app_namespace].controller.categoriesPageViewModel.pageHide),$(document).on("destroy","#categories-page",utopiasoftware[utopiasoftware_app_namespace].controller.categoriesPageViewModel.pageDestroy),$(document).on("init","#search-page",utopiasoftware[utopiasoftware_app_namespace].controller.searchPageViewModel.pageInit),$(document).on("show","#search-page",utopiasoftware[utopiasoftware_app_namespace].controller.searchPageViewModel.pageShow),$(document).on("hide","#search-page",utopiasoftware[utopiasoftware_app_namespace].controller.searchPageViewModel.pageHide),$(document).on("destroy","#search-page",utopiasoftware[utopiasoftware_app_namespace].controller.searchPageViewModel.pageDestroy),$(document).on("init","#account-page",utopiasoftware[utopiasoftware_app_namespace].controller.accountPageViewModel.pageInit),$(document).on("show","#account-page",utopiasoftware[utopiasoftware_app_namespace].controller.accountPageViewModel.pageShow),$(document).on("hide","#account-page",utopiasoftware[utopiasoftware_app_namespace].controller.accountPageViewModel.pageHide),$(document).on("destroy","#account-page",utopiasoftware[utopiasoftware_app_namespace].controller.accountPageViewModel.pageDestroy),$(document).on("init","#login-page",utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageInit),$(document).on("show","#login-page",utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageShow),$(document).on("hide","#login-page",utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageHide),$(document).on("destroy","#login-page",utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageDestroy),$(document).on("init","#products-page",utopiasoftware[utopiasoftware_app_namespace].controller.productsPageViewModel.pageInit),$(document).on("show","#products-page",utopiasoftware[utopiasoftware_app_namespace].controller.productsPageViewModel.pageShow),$(document).on("hide","#products-page",utopiasoftware[utopiasoftware_app_namespace].controller.productsPageViewModel.pageHide),$(document).on("destroy","#products-page",utopiasoftware[utopiasoftware_app_namespace].controller.productsPageViewModel.pageDestroy),$(document).on("init","#product-details-page",utopiasoftware[utopiasoftware_app_namespace].controller.productDetailsPageViewModel.pageInit),$(document).on("show","#product-details-page",utopiasoftware[utopiasoftware_app_namespace].controller.productDetailsPageViewModel.pageShow),$(document).on("hide","#product-details-page",utopiasoftware[utopiasoftware_app_namespace].controller.productDetailsPageViewModel.pageHide),$(document).on("destroy","#product-details-page",utopiasoftware[utopiasoftware_app_namespace].controller.productDetailsPageViewModel.pageDestroy),$(document).on("init","#customise-product-page",utopiasoftware[utopiasoftware_app_namespace].controller.customiseProductPageViewModel.pageInit),$(document).on("show","#customise-product-page",utopiasoftware[utopiasoftware_app_namespace].controller.customiseProductPageViewModel.pageShow),$(document).on("hide","#customise-product-page",utopiasoftware[utopiasoftware_app_namespace].controller.customiseProductPageViewModel.pageHide),$(document).on("destroy","#customise-product-page",utopiasoftware[utopiasoftware_app_namespace].controller.customiseProductPageViewModel.pageDestroy),$(document).on("init","#view-cart-page",utopiasoftware[utopiasoftware_app_namespace].controller.viewCartPageViewModel.pageInit),$(document).on("show","#view-cart-page",utopiasoftware[utopiasoftware_app_namespace].controller.viewCartPageViewModel.pageShow),$(document).on("hide","#view-cart-page",utopiasoftware[utopiasoftware_app_namespace].controller.viewCartPageViewModel.pageHide),$(document).on("destroy","#view-cart-page",utopiasoftware[utopiasoftware_app_namespace].controller.viewCartPageViewModel.pageDestroy),$(document).on("init","#profile-page",utopiasoftware[utopiasoftware_app_namespace].controller.profilePageViewModel.pageInit),$(document).on("show","#profile-page",utopiasoftware[utopiasoftware_app_namespace].controller.profilePageViewModel.pageShow),$(document).on("hide","#profile-page",utopiasoftware[utopiasoftware_app_namespace].controller.profilePageViewModel.pageHide),$(document).on("destroy","#profile-page",utopiasoftware[utopiasoftware_app_namespace].controller.profilePageViewModel.pageDestroy),$(document).on("init","#change-password-page",utopiasoftware[utopiasoftware_app_namespace].controller.changePasswordPageViewModel.pageInit),$(document).on("show","#change-password-page",utopiasoftware[utopiasoftware_app_namespace].controller.changePasswordPageViewModel.pageShow),$(document).on("hide","#change-password-page",utopiasoftware[utopiasoftware_app_namespace].controller.changePasswordPageViewModel.pageHide),$(document).on("destroy","#change-password-page",utopiasoftware[utopiasoftware_app_namespace].controller.changePasswordPageViewModel.pageDestroy),$(document).on("init","#billing-info-page",utopiasoftware[utopiasoftware_app_namespace].controller.billingInfoPageViewModel.pageInit),$(document).on("show","#billing-info-page",utopiasoftware[utopiasoftware_app_namespace].controller.billingInfoPageViewModel.pageShow),$(document).on("hide","#billing-info-page",utopiasoftware[utopiasoftware_app_namespace].controller.billingInfoPageViewModel.pageHide),$(document).on("destroy","#billing-info-page",utopiasoftware[utopiasoftware_app_namespace].controller.billingInfoPageViewModel.pageDestroy);

//# sourceMappingURL=model-compiled.js.map