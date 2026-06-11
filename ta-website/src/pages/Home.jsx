import Hero        from '../sections/Hero';
import Stats       from '../sections/Stats';
import Features    from '../sections/Features';
import HowItWorks  from '../sections/HowItWorks';
import WhyChoose   from '../sections/WhyChoose';
import Download    from '../sections/Download';
import InquiryForm from '../sections/InquiryForm';
import FAQ         from '../sections/FAQ';
import FinalCTA    from '../sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero/>
      <Stats/>
      <Features/>
      <HowItWorks/>
      <WhyChoose/>
      <Download/>
      <InquiryForm/>
      <FAQ/>
      <FinalCTA/>
    </>
  );
}
