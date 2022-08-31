import Header from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="px-2 mx-auto max-w-7xl">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
