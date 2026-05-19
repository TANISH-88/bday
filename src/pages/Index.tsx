import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Gift, PartyPopper, Music, Cake, Map as MapIcon, X, DollarSign, Heart, Shirt, CalendarDays, Utensils, Sparkles } from "lucide-react";
import Confetti from "@/components/Confetti";
import Countdown from "@/components/Countdown";
import CameraBackground from "@/components/CameraBackground";
import MouseParticles from "@/components/MouseParticles";


const BIRTHDAY_DATE = new Date("2026-05-20T19:00:00");
const YOUR_UPI_ID = "7880958890@ibl";
const YOUR_NAME = "Patty";
const GIFT_AMOUNT = "501"; 
const GIFT_NOTE = "Birthday Gift for Patty";
const MAP_URL = "https://maps.app.goo.gl/K3tSSPPtWsW1ohgE6";


const WHEN_IMAGE = "/my-birthday-photo.png";
const DRESS_CODE_IMAGE = "/dress-code.jpg";
const INVITATION_IMAGE = "/invitation.jpeg";
const GIFT_GIF = "/cat.gif";
const SURPRISE_VIDEO = "https://cdn.discordapp.com/attachments/1320696785022353482/1505951744960626778/Hamster_Rat_Doing_Backflip_and_Hysterically_Laughing_Meme_Template_by_514MMemes_1.mp4?ex=6a0d271b&is=6a0bd59b&hm=d291fe7bb8e126c07099d34e4d21159a328f9ec43c2ec0793cf793b8e7ebc6be&";

const getChromeIntentUrl = (url: string) => {
  // Just open the URL directly - Android will handle it properly
  // No need for complex intent schemes that can break with video URLs
  return url;
};

const EventDetail = ({ icon: Icon, title, text, onClick }: { icon: any; title: string; text: string; onClick?: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
    className={`flex flex-col items-center gap-4 bg-card rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-lg border border-primary/10 hover:shadow-2xl transition-all ${onClick ? 'cursor-pointer hover:border-primary/40' : ''}`}
  >
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
    </div>
    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">{title}</h3>
    <p className="text-muted-foreground text-center text-sm sm:text-base">{text}</p>
    {onClick && <span className="text-[10px] font-bold text-primary mt-2 uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">Tap for details</span>}
  </motion.div>
);

const Index = () => {
  const [activeModal, setActiveModal] = useState<"when" | "map" | "dress" | "gift" | null>(null);
  const [showQr, setShowQr] = useState(false);
  const [isPartyTime, setIsPartyTime] = useState(() => Date.now() >= BIRTHDAY_DATE.getTime());
  const [isMobile, setIsMobile] = useState(false);
  const [showChromePrompt, setShowChromePrompt] = useState(false);

  const PAYMENT_URL = `upi://pay?pa=${YOUR_UPI_ID}&pn=${encodeURIComponent(YOUR_NAME)}&am=${GIFT_AMOUNT}&tn=${encodeURIComponent(GIFT_NOTE)}&cu=INR`;
  const eventDateText = BIRTHDAY_DATE.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  const eventTimeText = BIRTHDAY_DATE.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
  const eventDateTimeText = `${eventDateText} • ${eventTimeText}`;
  const chromeVideoUrl = getChromeIntentUrl(SURPRISE_VIDEO);

  const closeModal = () => {
    setActiveModal(null);
    setShowQr(false);
  };

  useEffect(() => {
    if (isPartyTime) return;
    const id = window.setInterval(() => {
      if (Date.now() >= BIRTHDAY_DATE.getTime()) {
        setIsPartyTime(true);
      }
    }, 1000);
    return () => window.clearInterval(id);
  }, [isPartyTime]);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
      setShowChromePrompt(isMobileDevice);
    };
    checkMobile();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <CameraBackground />
      <MouseParticles />
      {isPartyTime && <Confetti />}

      
      <section className="relative min-h-[60svh] sm:min-h-[70dvh] flex flex-col items-center justify-center px-4 pt-16 pb-10 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-4 px-2">
             Birthday,<br />
            Party !!!!!!!
          </h1>
        </motion.div>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xs sm:max-w-md">
          You’re invited — bring the vibes, the laughs, and the party spirit!!!
        </p>
        <div className="mt-6 sm:mt-8 w-full">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Countdown to the party
          </p>
          <Countdown targetDate={BIRTHDAY_DATE} />
        </div>
      </section>

      {showChromePrompt && (
        <AnimatePresence>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowChromePrompt(false)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-card border border-primary/20 w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl z-50 p-8 text-center">
              <h2 className="font-display text-2xl font-bold mb-4">Watch the video! 🎬</h2>
              <p className="text-muted-foreground mb-8">Open in Chrome for best experience</p>
              <div className="flex flex-col gap-3">
                <a
                  href={chromeVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-lg"
                >
                  Open in Chrome
                </a>
                <button
                  onClick={() => setShowChromePrompt(false)}
                  className="w-full py-3 border-2 border-primary/30 text-primary rounded-full font-bold"
                >
                  Continue in this browser
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-8">SAFLTA's <span className="text-primary">Big Day..........</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <EventDetail icon={Clock} title="When" text={eventDateTimeText} onClick={() => setActiveModal("when")} />
            <EventDetail icon={MapPin} title="Where" text="Tap to open the location" onClick={() => setActiveModal("map")} />
            <EventDetail icon={Gift} title="Dress Code" text="Smart and stylish" onClick={() => setActiveModal("dress")} />
          </div>
        </div>
      </section>

      
      <section className="py-10 sm:py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12">Guest <span className="text-secondary">Checklist</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[{ icon: Clock, title: "Be On Time", desc: "Let’s start sharp." }, { icon: Heart, title: "Bring Your Smile", desc: "Best accessory ever." }, { icon: Gift, title: "No Gifts Needed", desc: "Your presence is the gift." }].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4"><item.icon className="text-primary w-8 h-8 sm:w-10 sm:h-10" /></div>
                <h3 className="font-bold text-base sm:text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-10 sm:py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <motion.div whileHover={{ scale: 1.02 }} onClick={() => setActiveModal("gift")} className="cursor-pointer bg-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border-2 border-dashed border-primary/30 shadow-2xl relative overflow-hidden group">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-6 animate-pulse" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Your surprise gift</h2>
            <p className="text-muted-foreground mb-8">Tap to open your surprise 🎁</p>
            <div className="py-3 px-6 sm:px-8 bg-primary text-primary-foreground rounded-full font-bold inline-block shadow-lg">Open Gift</div>
          </motion.div>
        </div>
      </section>

      
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-card border border-primary/20 w-full max-w-[92vw] sm:max-w-sm rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl z-50 max-h-[85svh] sm:max-h-[90vh] overflow-y-auto">
              <button onClick={closeModal} className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/20 text-white z-10"><X className="w-5 h-5" /></button>

              {activeModal === "when" && (
                <div className="flex flex-col"><img src={WHEN_IMAGE} className="h-56 sm:h-80 w-full object-contain" /><div className="p-6 text-center"><h2>Happyy..  bdayy... </h2><p>{eventDateTimeText}</p></div></div>
              )}
              {activeModal === "map" && (
                <div className="p-6 sm:p-8 text-center">
                  <Heart className="w-8 h-8 mx-auto text-pink-500 mb-2 fill-current" />
                  <h2>Download the invitation</h2>
                  <div className="bg-white p-3 rounded-2xl inline-block mb-4 shadow-lg border border-muted">
                    <img src={INVITATION_IMAGE} alt="Invitation" className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-xl" />
                  </div>
                  <a
                    href={INVITATION_IMAGE}
                    download
                    className="flex items-center justify-center gap-3 w-full py-3 sm:py-4 bg-primary text-white rounded-2xl font-bold mb-4"
                  >
                    Download Invitation
                  </a>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-3 sm:py-4 bg-primary text-white rounded-2xl font-bold"
                  >
                    Open Google Maps For Event Location
                  </a>
                </div>
              )}
              {activeModal === "dress" && (
                <div className="flex flex-col"><img src={DRESS_CODE_IMAGE} className="h-56 sm:h-80 w-full object-cover" /><div className="p-6 text-center"><h2>Dress code</h2><p>Smart and stylish</p></div></div>
              )}

              {activeModal === "gift" && (
                <div className="flex flex-col">
                  <div className="h-48 sm:h-64 w-full bg-black overflow-hidden relative">
                    <video 
                      id="surpriseVideo"
                      src={SURPRISE_VIDEO}
                      autoPlay 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                  <div className="p-6 sm:p-8 text-center">
                    <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-2">
                      <a
                        href={chromeVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg"
                      >
                        Open in Chrome
                      </a>
                      <a
                        href={SURPRISE_VIDEO}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-semibold"
                      >
                        Open in browser
                      </a>
                    </div>
                    {!showQr ? (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="font-display text-xl sm:text-2xl font-bold mb-4">A message for you 🔊</h2>
                        <p className="text-muted-foreground text-sm mb-8 italic">" continue!"</p>
                        <button 
                          onClick={() => {
                            const v = document.getElementById('surpriseVideo') as HTMLVideoElement;
                            if(v) v.pause();
                            setShowQr(true);
                          }}
                          className="w-full py-3 sm:py-4 bg-secondary text-secondary-foreground rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2"
                        >
                          <Gift className="w-5 h-5" /> Reveal gift
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                        <Heart className="w-8 h-8 mx-auto text-pink-500 mb-4 fill-current animate-bounce" />
                        <h2 className="font-display text-xl sm:text-2xl font-bold mb-2"> 😄😄😄😄</h2>
                        <div className="bg-white p-3 rounded-2xl inline-block mb-6 shadow-lg border-4 border-primary/10 mt-4">
                          <img src={GIFT_GIF} alt="Gift surprise" className="w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-xl" />
                        </div>
                        <button onClick={() => setShowQr(false)} className="mt-4 text-xs text-primary underline">Back to video</button>
                      </motion.div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-10 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">Made with 🎂 & ❤️ for Patty's big day</p>
      </footer>
    </div>
  );
};

export default Index;
