import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Crown, Flower2, Sparkles, Star, Music, Gift, Camera, MessageCircle, Cake, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import CameraBackground from "@/components/CameraBackground";
import MouseParticles from "@/components/MouseParticles";

// Mom & Sister Data
const MOM_NAME = "Mom";
const SIS_NAME = "Sister";

// Images
const MOM_IMAGE = "/dress-code.jpg";
const SIS_IMAGE = "/my-birthday-photo.png";
const MOM_MEMORY_1 = "/mum_mem1.jpg";
const MOM_MEMORY_2 = "/mum_mem2.jpg";
const MOM_MEMORY_3 = "/mum_mem3.jpg";
const MOM_MEMORY_4 = "/mum_mem4.jpg";
const MOM_MEMORY_5 = "/mum_mem5.jpg";
const MOM_MEMORY_6 = "/mum_mem6.jpg";
const SIS_MEMORY_1 = "/sis_mem1.jpg";
const SIS_MEMORY_2 = "/sis_mem2.jpg";
const SIS_MEMORY_3 = "/sis_mem3.jpg";
const SIS_MEMORY_4 = "/sis_mem4.jpg";
const SIS_MEMORY_5 = "/sis_mem5.jpg";
const SIS_MEMORY_6 = "/sis_mem6.jpg";
const CELEBRATION_GIF = "/cat.gif";

// Videos & Links
const MOM_VIDEO = "https://cdn.discordapp.com/attachments/1320696785022353482/1505951744960626778/Hamster_Rat_Doing_Backflip_and_Hysterically_Laughing_Meme_Template_by_514MMemes_1.mp4?ex=6a0e789b&is=6a0d271b&hm=e2f2e6f608a9d74dd8689bb6dce228404cbee52693bc888090d929d163ab655e&";
const SIS_VIDEO = "https://cdn.discordapp.com/attachments/1320696785022353482/1505951744960626778/Hamster_Rat_Doing_Backflip_and_Hysterically_Laughing_Meme_Template_by_514MMemes_1.mp4?ex=6a0e789b&is=6a0d271b&hm=e2f2e6f608a9d74dd8689bb6dce228404cbee52693bc888090d929d163ab655e&";

const GreetingCard = ({ 
  name, 
  icon: Icon, 
  gradient, 
  bgColor, 
  message, 
  image,
  onClick 
}: any) => (
  <motion.div
    initial={{ opacity: 0, x: name === "Mom" ? -100 : 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    whileHover={{ scale: 1.03, rotateY: 5 }}
    onClick={onClick}
    className={`cursor-pointer relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm group`}
  >
    {/* Background gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />
    
    {/* Animated background shapes */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
    
    {/* Content */}
    <div className="relative z-10 h-full flex flex-col items-center justify-between p-8 text-white">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mt-4"
      >
        <Icon className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 drop-shadow-lg" />
      </motion.div>
      
      <div className="text-center flex-1 flex flex-col justify-center">
        <h2 className="font-display text-4xl sm:text-5xl font-black mb-3 drop-shadow-lg">
          {name}
        </h2>
        <p className="text-white/90 text-lg sm:text-xl font-light max-w-xs leading-relaxed drop-shadow-md">
          {message}
        </p>
      </div>
      
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/40 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-auto"
      >
        <span className="text-sm font-bold text-white/80 uppercase tracking-widest bg-white/20 px-4 py-2 rounded-full inline-block">
          Tap to reveal 💝
        </span>
      </motion.div>
    </div>
  </motion.div>
);

const MemoryCard = ({ image, title }: any) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 2 }}
    className="relative overflow-hidden rounded-2xl shadow-lg h-48 sm:h-64 group cursor-pointer"
  >
    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-end">
      <p className="text-white font-bold text-lg p-4">{title}</p>
    </div>
  </motion.div>
);

const MemoryCarousel = ({ activePerson }: any) => {
  const momMemories = [
    { image: MOM_MEMORY_1, title: "Memory 1", rotate: -3 },
    { image: MOM_MEMORY_2, title: "Memory 2", rotate: 2 },
    { image: MOM_MEMORY_3, title: "Memory 3", rotate: -2 },
    { image: MOM_MEMORY_4, title: "Memory 4", rotate: 3 },
    { image: MOM_MEMORY_5, title: "Memory 5", rotate: -1 },
    { image: MOM_MEMORY_6, title: "Memory 6", rotate: 2 },
  ];

  const sisMemories = [
    { image: SIS_MEMORY_1, title: "Memory 1", rotate: -3 },
    { image: SIS_MEMORY_2, title: "Memory 2", rotate: 2 },
    { image: SIS_MEMORY_3, title: "Memory 3", rotate: -2 },
    { image: SIS_MEMORY_4, title: "Memory 4", rotate: 3 },
    { image: SIS_MEMORY_5, title: "Memory 5", rotate: -1 },
    { image: SIS_MEMORY_6, title: "Memory 6", rotate: 2 },
  ];

  const memories = activePerson === "mom" ? momMemories : sisMemories;

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === "Escape") {
        setIsLightboxOpen(false);
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowLeft" && selectedPhotoIndex !== null) {
        setSelectedPhotoIndex((selectedPhotoIndex - 1 + memories.length) % memories.length);
      } else if (e.key === "ArrowRight" && selectedPhotoIndex !== null) {
        setSelectedPhotoIndex((selectedPhotoIndex + 1) % memories.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, selectedPhotoIndex, memories.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart === null) return;

    const distance = touchStart - e.changedTouches[0].clientX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedPhotoIndex(null);
  };

  const goToPrevious = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + memories.length) % memories.length);
    }
  };

  const goToNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % memories.length);
    }
  };

  return (
    <div className="relative w-full px-2">
      {/* Collage Grid Layout - Optimized spacing */}
      <div className="grid grid-cols-12 gap-3 w-full auto-rows-max">
        {/* Large landscape photo - top left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, rotate: memories[0].rotate }}
          transition={{ delay: 0 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => openLightbox(0)}
          className="col-span-6 rounded-xl overflow-hidden shadow-lg cursor-pointer group relative h-full"
        >
          <img
            src={memories[0].image}
            alt={memories[0].title}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        </motion.div>

        {/* Portrait photo - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, rotate: memories[1].rotate }}
          transition={{ delay: 0.1 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => openLightbox(1)}
          className="col-span-6 rounded-xl overflow-hidden shadow-lg cursor-pointer group relative h-full"
        >
          <img
            src={memories[1].image}
            alt={memories[1].title}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        </motion.div>

        {/* Small photo 1 - bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, rotate: memories[2].rotate }}
          transition={{ delay: 0.2 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => openLightbox(2)}
          className="col-span-3 rounded-xl overflow-hidden shadow-lg cursor-pointer group relative h-full"
        >
          <img
            src={memories[2].image}
            alt={memories[2].title}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        </motion.div>

        {/* Small photo 2 - bottom center-left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, rotate: memories[3].rotate }}
          transition={{ delay: 0.3 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => openLightbox(3)}
          className="col-span-3 rounded-xl overflow-hidden shadow-lg cursor-pointer group relative h-full"
        >
          <img
            src={memories[3].image}
            alt={memories[3].title}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        </motion.div>

        {/* Medium photo - bottom center-right to right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, rotate: memories[4].rotate }}
          transition={{ delay: 0.4 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => openLightbox(4)}
          className="col-span-6 rounded-xl overflow-hidden shadow-lg cursor-pointer group relative h-full"
        >
          <img
            src={memories[4].image}
            alt={memories[4].title}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        </motion.div>

        {/* Small photo 3 - bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, rotate: memories[5].rotate }}
          transition={{ delay: 0.5 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => openLightbox(5)}
          className="col-span-3 rounded-xl overflow-hidden shadow-lg cursor-pointer group relative h-full"
        >
          <img
            src={memories[5].image}
            alt={memories[5].title}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedPhotoIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/90 z-40"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <X size={28} className="text-white" />
                </motion.button>

                {/* Image Container */}
                <motion.div
                  key={selectedPhotoIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-4xl max-h-[90vh] flex items-center justify-center"
                >
                  <img
                    src={memories[selectedPhotoIndex].image}
                    alt={memories[selectedPhotoIndex].title}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  />
                </motion.div>

                {/* Previous Button */}
                <motion.button
                  whileHover={{ scale: 1.1, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToPrevious}
                  className="absolute left-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <ChevronLeft size={28} className="text-white" />
                </motion.button>

                {/* Next Button */}
                <motion.button
                  whileHover={{ scale: 1.1, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToNext}
                  className="absolute right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <ChevronRight size={28} className="text-white" />
                </motion.button>

                {/* Photo Counter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold"
                >
                  {selectedPhotoIndex + 1} of {memories.length}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const MessageBubble = ({ text, isLeft }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-4`}
  >
    <div className={`max-w-xs px-4 py-3 rounded-2xl ${isLeft ? "bg-primary/20 text-foreground" : "bg-secondary/20 text-foreground"} shadow-md`}>
      <p className="text-sm sm:text-base">{text}</p>
    </div>
  </motion.div>
);

const Index = () => {
  const [activePerson, setActivePerson] = useState<"mom" | "sis" | null>(null);
  const [activeTab, setActiveTab] = useState<"message" | "memory" | "surprise">("message");

  const momMessages = [
    "Dear Mom, you're the heart of our beautiful family. Happy Birthday! 🎂",
    "Your unconditional love and wisdom guide us every single day. We celebrate YOU! 👑",
    "Thank you for all the sacrifices, the laughs, and the endless support. 💖",
    "You deserve all the joy in the world. Here's to celebrating YOU today! 🎉"
  ];

  const sisMessages = [
    "sis you're officially 18 and that's absolutely unhinged in the best way 💅✨ let's cause some chaos today!",
    "no cap you're the main character energy we didn't know we needed fr fr 🫶🔥 happy birthday to the realest one",
    "you walked so other girls could run, periodt! thank you for being iconic since day one bestie 💋👑",
    "it's your 18th birthday and we're about to make it the sickest day ever!! let's go off!! 🎉🌶️"
  ];

  const closeModal = () => {
    setActivePerson(null);
    setActiveTab("message");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 overflow-hidden relative">
      <CameraBackground />
      <MouseParticles />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 text-center">
        {/* Animated background elements - Birthday Balloons & Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: [
                  "rgba(236, 72, 153, 0.3)",    // Pink
                  "rgba(168, 85, 247, 0.3)",    // Purple
                  "rgba(251, 146, 60, 0.3)",    // Golden/Amber
                  "rgba(236, 201, 75, 0.3)"     // Golden Yellow
                ][Math.floor(Math.random() * 4)]
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-8"
        >
          <Cake className="w-16 h-16 text-amber-400 mx-auto mb-6 animate-pulse" />
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 bg-clip-text text-transparent leading-tight mb-4">
            A Double Joy<br />
            Birthday Celebration 🎂✨
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Celebrating two extraordinary women on this special day
          </p>
        </motion.div>

        {/* Decorative Birthday Elements */}
        <div className="relative z-10 flex gap-8 justify-center mb-12 flex-wrap">
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}>
            <Sparkles className="w-10 h-10 text-pink-400" />
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}>
            <Sparkles className="w-10 h-10 text-purple-400" />
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}>
            <Cake className="w-10 h-10 text-amber-400" />
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.9 }}>
            <Flower2 className="w-10 h-10 text-pink-300" />
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}>
            <Sparkles className="w-10 h-10 text-amber-300" />
          </motion.div>
        </div>

        {/* Split Cards Section */}
        <div className="relative z-10 w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mb-20">
          {/* Mom Card */}
          <GreetingCard
            name={MOM_NAME}
            icon={Crown}
            gradient="from-pink-500 to-rose-600"
            bgColor="bg-pink-50"
            message="Queen of Hearts, Forever Our Guiding Star 👑🎂"
            image={MOM_IMAGE}
            onClick={() => setActivePerson("mom")}
          />

          {/* Sister Card */}
          <GreetingCard
            name={SIS_NAME}
            icon={Flower2}
            gradient="from-purple-500 to-indigo-600"
            bgColor="bg-purple-50"
            message="Sister, Best Friend, Birthday Twin - We Celebrate You! 🌸🎂"
            image={SIS_IMAGE}
            onClick={() => setActivePerson("sis")}
          />
        </div>
      </section>

      {/* Modal System */}
      <AnimatePresence>
        {activePerson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/50 backdrop-blur-lg"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white/98 backdrop-blur-xl w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white z-10 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header with Person Image */}
              <div className={`h-64 w-full bg-gradient-to-br ${activePerson === "mom" ? "from-pink-400 to-rose-500" : "from-purple-400 to-indigo-500"} overflow-hidden relative flex items-center justify-center`}>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute opacity-20"
                >
                  {activePerson === "mom" ? (
                    <Crown className="w-40 h-40" />
                  ) : (
                    <Flower2 className="w-40 h-40" />
                  )}
                </motion.div>
                <img 
                  src={activePerson === "mom" ? MOM_IMAGE : SIS_IMAGE} 
                  alt={activePerson} 
                  className="w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover relative z-10"
                />
              </div>

              {/* Tabs */}
              <div className="flex gap-2 p-6 border-b border-gray-200 sticky top-0 bg-white/50 backdrop-blur-md">
                {["message", "memory", "surprise"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-4 py-2 rounded-full font-bold transition-all text-sm sm:text-base ${
                      activeTab === tab
                        ? `${activePerson === "mom" ? "bg-pink-500 text-white" : "bg-purple-500 text-white"}`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab === "message" && "💌 Messages"}
                    {tab === "memory" && "📸 Memories"}
                    {tab === "surprise" && "🎁 Surprise"}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Messages Tab */}
                {activeTab === "message" && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                    <h2 className="font-display text-3xl font-bold mb-6 text-gray-800">
                      Happy Birthday, {activePerson === "mom" ? "Mom" : "Sister"}! 🎂
                    </h2>
                    <div className="space-y-4">
                      {(activePerson === "mom" ? momMessages : sisMessages).map((msg, idx) => (
                        <MessageBubble key={idx} text={msg} isLeft={idx % 2 === 0} />
                      ))}
                    </div>
                    <div className="mt-8 flex gap-4 justify-center">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                        >
                          <Heart className={`w-8 h-8 ${activePerson === "mom" ? "text-pink-500" : "text-purple-500"} fill-current`} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Memory Tab */}
                {activeTab === "memory" && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                    <h2 className="font-display text-3xl font-bold mb-6 text-gray-800">
                      Special Birthday Moments 📸
                    </h2>
                    <MemoryCarousel activePerson={activePerson} />
                    <p className="mt-6 text-center text-gray-600 italic">Every moment celebrating you is a beautiful memory ✨🎉</p>
                  </motion.div>
                )}

                {/* Surprise Tab */}
                {activeTab === "surprise" && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                    <h2 className="font-display text-3xl font-bold mb-6 text-gray-800">
                      Birthday Surprise Celebration 🎉
                    </h2>
                    
                    {/* Video */}
                    <div className="mb-6 rounded-2xl overflow-hidden shadow-lg h-64 sm:h-96 bg-black">
                      <video
                        autoPlay
                        playsInline
                        loop
                        className="w-full h-full object-cover"
                        src={activePerson === "mom" ? MOM_VIDEO : SIS_VIDEO}
                      />
                    </div>

                    {/* GIF */}
                    <div className="mt-8 text-center">
                      <div className="bg-white p-4 rounded-2xl inline-block shadow-lg border-4 border-gray-100">
                        <img src={CELEBRATION_GIF} alt="Celebration" className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-xl" />
                      </div>
                      <p className="mt-4 text-sm text-gray-600">
                        {activePerson === "mom" ? "You're the best, Mom! 👑💖" : "Chall chal chal...! 🎂✨"}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-pink-200/50 bg-white/50 backdrop-blur-md">
        <p className="text-gray-700 font-display text-lg mb-2">Made with 💖 and birthday magic 🎂✨</p>
        <p className="text-gray-500 text-sm">Celebrating two wonderful souls on their special days</p>
      </footer>
    </div>
  );
};

export default Index;
