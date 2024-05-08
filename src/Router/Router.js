import { createMemoryHistory, createRouter } from "vue-router";

import Overview from "@/components/Overview/Overview.vue";
import Product from "@/Pages/Product/Product.vue";
import ProductDetail from "@/Pages/ProductDetail/ProductDetail.vue";
import AddProduct from "@/Pages/AddProduct/AddProduct.vue";

const routes = [
    { path: "/", name: 'Home', component: Overview },
    { path: '/ecommerce-products', name: 'ecommerce-products', component: Product},
    { path: '/ecommerce-product-detail', name: 'ecommerce-product-detail', component: ProductDetail},
    { path: '/ecommerce-add-product', name: 'ecommerce-add-product', component: AddProduct},
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
