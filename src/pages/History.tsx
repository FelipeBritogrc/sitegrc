
import Navbar from "@/components/Navbar";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";

const History = () => (
  <div className="bg-gray-100 min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">
      <TimelineSection />
    </main>
    <Footer />
  </div>
);
export default History;
