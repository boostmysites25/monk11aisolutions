import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Header from "./components/website/Header";
import Footer from "./components/website/Footer";
import LandingHeader from "./components/landingPage/LandingHeader";
import LandingFooter from "./components/landingPage/LandingFooter";
import { Toaster } from "react-hot-toast";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const Services = lazy(() => import("./pages/Services"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Thankyou = lazy(() => import("./pages/Thankyou"));

AOS.init({
  once: true,
  duration: 500,
  easing: "ease-in-out-quart",
  offset: -150,
});

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <SpinnerContextProvider>
          <LoadingSpinnerContext />
          <ScrollToTop />
          <Toaster position="top-center" />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about-us"
              element={
                <>
                  <Header />
                  <AboutUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <ContactUs />
                  <Footer />
                </>
              }
            />
            <Route path="/thank-you" element={<Thankyou />} />

            {/* Services */}
            <Route
              path="/services"
              element={
                <>
                  <Header /> <Services /> <Footer />
                </>
              }
            />
            <Route path="/services">
              <Route
                path=":name"
                element={
                  <>
                    <Header /> <ServiceDetails /> <Footer />
                  </>
                }
              />
            </Route>

            {/* Blogs */}
            <Route
              path="/blogs"
              element={
                <>
                  <Header /> <Blogs /> <Footer />
                </>
              }
            />
            <Route path="/blogs">
              <Route
                path=":title"
                element={
                  <>
                    <Header /> <BlogDetails /> <Footer />
                  </>
                }
              />
            </Route>

            {/* Landing pages */}
            <Route
              path="/web-development"
              element={
                <>
                  <LandingHeader />
                  <LandingPage page="web" />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/app-development"
              element={
                <>
                  <LandingHeader />
                  <LandingPage page="app" />
                  <LandingFooter />
                </>
              }
            />
          </Routes>
        </SpinnerContextProvider>
      </Suspense>
    </Router>
  );
}

export default App;
