import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import FreedomPage from '@/components/pages/FreedomPage';
import { WixServicesProvider, rootRouteLoader, MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { ShoppingCart } from 'lucide-react';

// Main Layout component that wraps all routes
function MainLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <MiniCart cartIcon={ShoppingCart} cartIconClassName="fixed top-20 right-6 z-40" />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <ContactForm />
        <Footer />
      </div>
    </WixServicesProvider>
  );
}

// Layout without Header and Footer for specific pages
function MinimalLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <MiniCart cartIcon={ShoppingCart} cartIconClassName="fixed top-20 right-6 z-40" />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
}

// Layout for Freedom page - no header, footer, or mini cart
function FreedomLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: '/products/:slug',
        element: <ProductDetailsRoute />,
        loader: productRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.product",
          identifiers: {
            slug: "STORES.PRODUCT.SLUG"
          }
        },
      },
      {
        path: '/store',
        element: <></>,
        loader: defaultStoreCollectionRouteRedirectLoader,
      },
      {
        path: '/store/:categorySlug',
        element: <StoreCollectionRoute productPageRoute="/products" />,
        loader: storeCollectionRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.category",
          identifiers: {
            categorySlug: "STORES.CATEGORY.SLUG"
          }
        }
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/freedom',
        element: (
          <FreedomLayout>
            <FreedomPage />
          </FreedomLayout>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
