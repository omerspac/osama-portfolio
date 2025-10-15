import '@fortawesome/fontawesome-free/css/all.min.css'
import Portfolio from "@/components/portfolio";
import ScrollToTopButton from "@/components/ScrollToTop";
import NavBar from '@/components/navbar';

export default function Home() {
  
  return (
    <>
    <NavBar />
    <Portfolio />
    <ScrollToTopButton />
    </>
  );
}
