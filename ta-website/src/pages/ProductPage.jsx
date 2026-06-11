import { motion } from 'framer-motion';
import { stagger, fadeUp } from '../utils/motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PhoneMockup from '../components/PhoneMockup';
import Download from '../sections/Download';
import FinalCTA from '../sections/FinalCTA';
import { Smartphone, Monitor, ShieldCheck, Zap } from 'lucide-react';

const SCREENS = [
  { title: 'Login Screen',       desc: 'Clean, secure sign-in with device-ID registration on first login.',           color: '#6366F1' },
  { title: 'QR Scanner',         desc: 'Scan the school-generated QR, capture selfie, mark attendance.',              color: '#13C6B3' },
  { title: 'Success Confirmation',desc: 'Instant verified confirmation with GPS, WiFi, and selfie badge.',             color: '#22C55E' },
  { title: 'Attendance History',  desc: 'Full personal attendance history with stats, rates, and monthly summaries.', color: '#EC4899' },
];

const PRODUCTS = [
  {
    icon: Smartphone, title: 'Teacher Mobile App', color: '#6366F1',
    desc: 'React Native / Expo app for iOS and Android. Attendance in under 10 seconds.',
    features: ['WiFi + GPS auto-detection','QR scan + live selfie','Attendance history','In-app notifications'],
  },
  {
    icon: Monitor, title: 'School Admin Dashboard', color: '#13C6B3',
    desc: 'Web-based admin panel to manage teachers, generate QR sessions, and view reports.',
    features: ['Live check-in monitoring','QR session generator','Teacher management','CSV data export'],
  },
  {
    icon: ShieldCheck, title: 'Super Admin Panel', color: '#EC4899',
    desc: 'Central control panel for managing all schools, plans, and platform-wide settings.',
    features: ['Multi-school management','Subscription control','Platform analytics','Audit log oversight'],
  },
];

export default function ProductPage() {
  const { ref, isInView } = useScrollReveal();
  return (
    <>
      <section className="page-hero" aria-label="Product hero">
        <div className="page-hero__glow page-hero__glow--pink" aria-hidden="true"/>
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="page-hero__inner">
            <motion.p variants={fadeUp} custom={0} className="eyebrow" style={{justifyContent:'center'}}>Product</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="page-hero__h">
              Three products.<br/>
              <span style={{background:'linear-gradient(135deg,#EC4899,#F59E0B)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>One seamless platform.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="page-hero__sub">
              Mobile app for teachers, dashboard for admins, control panel for operators — all working together in real time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Phone demo */}
      <section className="section" style={{background:'var(--bg-2)'}}>
        <div className="container">
          <div className="product-demo-grid">
            <div>
              <p className="eyebrow">Mobile App</p>
              <h2 className="h2">See the app in action</h2>
              <p className="body-lg" style={{marginBottom:32}}>The teacher app cycles through all four major screens — login, QR scan, success, and history.</p>
              <div style={{display:'flex',flexDirection:'column',gap:14}}>
                {SCREENS.map((s,i) => (
                  <motion.div key={s.title}
                    initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}}
                    viewport={{once:true}} transition={{delay:i*0.1}}
                    className="screen-item">
                    <div className="screen-item__dot" style={{background:s.color}}/>
                    <div>
                      <p className="screen-item__title">{s.title}</p>
                      <p className="screen-item__desc">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.65}}>
              <PhoneMockup/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three products */}
      <section className="section" style={{background:'var(--bg)'}}>
        <div className="container">
          <div className="section-header" ref={ref}>
            <motion.p initial={{opacity:0,y:14}} animate={isInView?{opacity:1,y:0}:{}} className="eyebrow">Product Suite</motion.p>
            <motion.h2 initial={{opacity:0,y:20}} animate={isInView?{opacity:1,y:0}:{}} transition={{delay:0.09}} className="h2">All three products, included</motion.h2>
          </div>
          <div className="product-cards">
            {PRODUCTS.map((p,i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title}
                  initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
                  viewport={{once:true,margin:'-48px 0px'}} transition={{delay:i*0.12}}
                  whileHover={{y:-4}}
                  className="product-card" style={{'--pc':p.color}}>
                  <div className="product-card__icon" style={{background:`${p.color}18`,border:`1px solid ${p.color}33`}}>
                    <Icon size={22} color={p.color} strokeWidth={1.75}/>
                  </div>
                  <h3 className="product-card__title">{p.title}</h3>
                  <p className="product-card__desc">{p.desc}</p>
                  <ul className="product-card__features">
                    {p.features.map(f => <li key={f}><span style={{color:p.color}}>✓</span> {f}</li>)}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Download/>
      <FinalCTA/>
    </>
  );
}
