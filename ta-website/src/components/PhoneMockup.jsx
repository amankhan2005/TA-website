import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Lock, Mail, Clock, Wifi, Navigation, Camera, CheckCircle, ChevronRight } from 'lucide-react';

/* ── Phone screen components ──────────────────────────────────── */
function ScreenLogin() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',padding:'0 20px',gap:12,background:'#0A2342'}}>
      <div style={{width:44,height:44,borderRadius:14,background:'#13C6B3',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:4,boxShadow:'0 8px 24px rgba(19,198,179,0.4)'}}>
        <MapPin size={20} color="white" strokeWidth={2}/>
      </div>
      <p style={{color:'#fff',fontWeight:700,fontSize:15,letterSpacing:'-0.02em'}}>TeacherAttendance</p>
      <p style={{color:'rgba(255,255,255,0.40)',fontSize:11}}>Sign in to your account</p>
      <div style={{width:'100%',display:'flex',flexDirection:'column',gap:8,marginTop:4}}>
        {[{icon:<Mail size={12} color="rgba(255,255,255,0.45)" strokeWidth={1.5}/>, text:'teacher@school.ac.ke'},{icon:<Lock size={12} color="rgba(255,255,255,0.45)" strokeWidth={1.5}/>, text:'••••••••••'}].map((f,i) => (
          <div key={i} style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.10)',borderRadius:10,padding:'10px 14px',color:'rgba(255,255,255,0.55)',fontSize:11,display:'flex',alignItems:'center',gap:8}}>
            {f.icon}{f.text}
          </div>
        ))}
      </div>
      <div style={{width:'100%',background:'#13C6B3',borderRadius:10,padding:'11px 0',textAlign:'center',color:'#fff',fontSize:12,fontWeight:700,boxShadow:'0 4px 16px rgba(19,198,179,0.35)'}}>Sign In</div>
      <p style={{color:'rgba(255,255,255,0.20)',fontSize:9,marginTop:4,letterSpacing:'0.08em'}}>EVERY CHECK-IN COUNTS</p>
    </div>
  );
}

function ScreenQR() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',padding:'0 20px',gap:12,background:'#0A2342'}}>
      <p style={{color:'rgba(255,255,255,0.5)',fontSize:9,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase'}}>Attendance</p>
      <p style={{color:'#fff',fontWeight:700,fontSize:14}}>Scan QR Code</p>
      <div style={{width:118,height:118,background:'#fff',borderRadius:14,padding:10,boxShadow:'0 8px 32px rgba(255,255,255,0.10)'}}>
        <svg viewBox="0 0 100 100" style={{width:'100%',height:'100%'}}>
          <rect x="5" y="5" width="28" height="28" rx="3" fill="none" stroke="#0A2342" strokeWidth="5"/>
          <rect x="12" y="12" width="14" height="14" fill="#0A2342"/>
          <rect x="67" y="5" width="28" height="28" rx="3" fill="none" stroke="#0A2342" strokeWidth="5"/>
          <rect x="74" y="12" width="14" height="14" fill="#0A2342"/>
          <rect x="5" y="67" width="28" height="28" rx="3" fill="none" stroke="#0A2342" strokeWidth="5"/>
          <rect x="12" y="74" width="14" height="14" fill="#0A2342"/>
          <rect x="45" y="5" width="7" height="7" fill="#13C6B3"/>
          <rect x="57" y="5" width="7" height="7" fill="#13C6B3"/>
          <rect x="45" y="17" width="7" height="7" fill="#13C6B3"/>
          <rect x="67" y="45" width="7" height="7" fill="#0A2342"/>
          <rect x="45" y="55" width="19" height="7" fill="#13C6B3"/>
          <rect x="45" y="67" width="7" height="7" fill="#0A2342"/>
          <rect x="57" y="67" width="19" height="7" fill="#0A2342"/>
          <rect x="45" y="79" width="7" height="17" fill="#13C6B3"/>
          <rect x="57" y="87" width="19" height="7" fill="#0A2342"/>
          <rect x="79" y="79" width="17" height="7" fill="#0A2342"/>
        </svg>
      </div>
      <motion.div animate={{opacity:[1,0.5,1]}} transition={{repeat:Infinity,duration:2}}
        style={{display:'flex',alignItems:'center',gap:6,background:'rgba(19,198,179,0.15)',border:'1px solid rgba(19,198,179,0.30)',borderRadius:8,padding:'6px 12px'}}>
        <Clock size={11} color="#13C6B3" strokeWidth={2}/>
        <span style={{color:'#13C6B3',fontSize:11,fontWeight:700}}>07:43 remaining</span>
      </motion.div>
      <div style={{display:'flex',gap:8}}>
        {[{icon:<Navigation size={9} color="#13C6B3" strokeWidth={2}/>,label:'GPS OK'},{icon:<Wifi size={9} color="#13C6B3" strokeWidth={2}/>,label:'WiFi OK'}].map(t => (
          <span key={t.label} style={{background:'rgba(19,198,179,0.10)',border:'1px solid rgba(19,198,179,0.20)',borderRadius:99,padding:'4px 10px',color:'#13C6B3',fontSize:9,fontWeight:700,display:'flex',alignItems:'center',gap:4}}>
            {t.icon}{t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScreenSuccess() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',padding:'0 20px',gap:14,background:'linear-gradient(to bottom, #0A2342, #0d3a2a)'}}>
      <motion.div
        animate={{boxShadow:['0 0 0 0 rgba(19,198,179,0.4)','0 0 0 18px rgba(19,198,179,0)']}}
        transition={{repeat:Infinity,duration:2}}
        style={{width:74,height:74,borderRadius:'50%',border:'2px solid #13C6B3',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:56,height:56,borderRadius:'50%',background:'#13C6B3',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 32px rgba(19,198,179,0.5)'}}>
          <CheckCircle size={26} color="white" strokeWidth={2}/>
        </div>
      </motion.div>
      <div style={{textAlign:'center'}}>
        <p style={{color:'#fff',fontWeight:700,fontSize:15}}>Attendance Marked!</p>
        <p style={{color:'rgba(255,255,255,0.45)',fontSize:10,marginTop:4}}>Wed, Jun 4 · 08:52 AM</p>
      </div>
      <div style={{width:'100%',display:'flex',flexDirection:'column',gap:6}}>
        {[
          {icon:<Navigation size={10} color="#13C6B3" strokeWidth={2}/>, text:'GPS Verified · 42m radius'},
          {icon:<Wifi size={10} color="#13C6B3" strokeWidth={2}/>, text:'WiFi · School_Main_5G'},
          {icon:<Camera size={10} color="#13C6B3" strokeWidth={2}/>, text:'Selfie Captured'},
        ].map(t => (
          <div key={t.text} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:6,background:'rgba(19,198,179,0.10)',border:'1px solid rgba(19,198,179,0.20)',borderRadius:10,padding:'7px 0'}}>
            {t.icon}<span style={{color:'#13C6B3',fontSize:10,fontWeight:600}}>{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenHistory() {
  const rows = [
    {d:'Mon',dt:'Jun 2',s:'present',t:'08:48'},
    {d:'Tue',dt:'Jun 3',s:'present',t:'09:02'},
    {d:'Wed',dt:'Jun 4',s:'present',t:'08:52'},
    {d:'Thu',dt:'Jun 5',s:'absent', t:'—'},
    {d:'Fri',dt:'Jun 6',s:'present',t:'08:55'},
  ];
  return (
    <div style={{height:'100%',background:'#0A2342',padding:'48px 14px 14px'}}>
      <p style={{color:'rgba(255,255,255,0.40)',fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:4}}>June 2025</p>
      <p style={{color:'#fff',fontWeight:700,fontSize:13,marginBottom:12}}>Attendance History</p>
      {rows.map(r => (
        <div key={r.d} style={{display:'flex',alignItems:'center',gap:8,paddingBlock:8,borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
          <div style={{width:24,height:24,borderRadius:'50%',background:r.s==='present'?'#13C6B3':'#f87171',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:9,fontWeight:700,flexShrink:0}}>{r.d[0]}</div>
          <span style={{color:'rgba(255,255,255,0.70)',fontSize:10,flex:1,fontWeight:500}}>{r.d} · {r.dt}</span>
          <span style={{fontSize:9,fontWeight:700,padding:'2px 8px',borderRadius:99,background:r.s==='present'?'rgba(19,198,179,0.15)':'rgba(248,113,113,0.15)',color:r.s==='present'?'#13C6B3':'#f87171'}}>{r.s==='present'?'Present':'Absent'}</span>
          <span style={{color:'rgba(255,255,255,0.25)',fontSize:9,width:24,textAlign:'right'}}>{r.t}</span>
        </div>
      ))}
      <div style={{marginTop:12,background:'rgba(19,198,179,0.08)',borderRadius:12,padding:10,display:'flex',justifyContent:'space-around',border:'1px solid rgba(19,198,179,0.15)'}}>
        {[['92%','Rate'],['22','Present'],['2','Absent']].map(([v,l]) => (
          <div key={l} style={{textAlign:'center'}}>
            <div style={{color:'#fff',fontWeight:700,fontSize:16}}>{v}</div>
            <div style={{color:'rgba(255,255,255,0.35)',fontSize:8,marginTop:2}}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SCREENS = [ScreenLogin, ScreenQR, ScreenSuccess, ScreenHistory];
const FLOAT_CARDS = [
  { text:'GPS Verified',   Icon: Navigation, x:'-128%', y:'12%',  rotate:'-2deg', delay:0   },
  { text:'QR Enabled',     Icon: CheckCircle,x:'100%',  y:'23%',  rotate:'2deg',  delay:0.4 },
  { text:'WiFi Protected', Icon: Wifi,       x:'96%',   y:'63%',  rotate:'-1deg', delay:0.8 },
  { text:'Fraud-Proof',    Icon: Lock,       x:'-138%', y:'73%',  rotate:'1.5deg',delay:1.2 },
];

export default function PhoneMockup() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % SCREENS.length), 3200);
    return () => clearInterval(id);
  }, []);

  const Screen = SCREENS[idx];

  return (
    <div style={{position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
      {/* Glow */}
      <div style={{position:'absolute',inset:0,borderRadius:'50%',background:'rgba(19,198,179,0.08)',filter:'blur(60px)',transform:'scale(0.7)',zIndex:0}}/>

      {/* Phone shell */}
      <motion.div animate={{y:[0,-14,0]}} transition={{repeat:Infinity,duration:5,ease:'easeInOut'}} style={{position:'relative',zIndex:10}}>
        <div style={{width:228,height:466,borderRadius:44,background:'#06121e',border:'7px solid #162535',boxShadow:'0 48px 100px rgba(10,35,66,0.38),0 0 0 1px rgba(255,255,255,0.04)',overflow:'hidden',position:'relative'}}>
          {/* Dynamic island */}
          <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:88,height:26,background:'#06121e',borderRadius:'0 0 18px 18px',zIndex:20}}/>
          <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
            <AnimatePresence mode="wait">
              <motion.div key={idx}
                initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}
                transition={{duration:0.42,ease:[0.22,1,0.36,1]}}
                style={{position:'absolute',inset:0}}>
                <Screen/>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      {FLOAT_CARDS.map((c, i) => {
        const Icon = c.Icon;
        return (
          <motion.div key={c.text}
            animate={{y:[0,-8,0]}}
            transition={{repeat:Infinity,duration:3.5+i*0.4,delay:c.delay,ease:'easeInOut'}}
            style={{position:'absolute',zIndex:20,background:'rgba(255,255,255,0.96)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.90)',borderRadius:14,padding:'8px 14px',display:'flex',alignItems:'center',gap:8,boxShadow:'0 8px 32px rgba(10,35,66,0.10)',whiteSpace:'nowrap',left:c.x,top:c.y,rotate:c.rotate}}>
            <Icon size={13} color="#13C6B3" strokeWidth={2.5}/>
            <span style={{color:'#0A2342',fontSize:12,fontWeight:700}}>{c.text}</span>
            <div style={{width:6,height:6,borderRadius:'50%',background:'#13C6B3'}}/>
          </motion.div>
        );
      })}

      {/* Dot indicators */}
      <div style={{position:'absolute',bottom:-44,left:'50%',transform:'translateX(-50%)',display:'flex',gap:6,zIndex:10}}>
        {SCREENS.map((_,i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Screen ${i+1}`}
            style={{height:6,borderRadius:3,transition:'all 0.3s ease',background:i===idx?'#13C6B3':'#CBD5E1',width:i===idx?20:6,border:'none',cursor:'pointer',padding:0}}/>
        ))}
      </div>
    </div>
  );
}
