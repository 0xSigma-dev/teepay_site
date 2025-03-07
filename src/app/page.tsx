
import Header from "./Header/header";
import First from "./Home/First/page";
import Footer from "./Footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      

      {/* Main Content */}
      <main className="flex-1 flex flex-col mt-20 ">
        <First />
      </main>

      <Footer />
      
    </div>
  );
}
