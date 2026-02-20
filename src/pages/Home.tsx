import { Link } from "react-router-dom";
import {
  Code,
  Smartphone,
  Palette,
  Search,
  Server,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import StatsSection from "../components/StatsSection";

export default function Home() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices.",
      color: "bg-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      color: "bg-green-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that enhance user experience.",
      color: "bg-pink-500",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Optimize your website for better search engine rankings.",
      color: "bg-orange-500",
    },
    {
      icon: Server,
      title: "Web Hosting",
      description: "99.9% uptime guarantee with 24/7 customer support.",
      color: "bg-teal-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Lightning-fast websites that deliver exceptional user experiences.",
      color: "bg-yellow-500",
    },
  ];

  const technologies = [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Vue.js",
    "Angular",
    "Flutter",
    "React Native",
    "Laravel",
    "Django",
    "MongoDB",
    "PostgreSQL",
  ];

  const process = [
    {
      title: "Analysis",
      description: "Understanding your requirements and goals",
    },
    { title: "Design", description: "Creating beautiful UI/UX designs" },
    {
      title: "Development",
      description: "Building your solution with best practices",
    },
    { title: "Testing", description: "Rigorous quality assurance" },
    { title: "Deployment", description: "Launching your product successfully" },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-100">
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Welcome to Mobrib
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 mb-8"
          >
            Web Design & Development Company
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto"
          >
            Building innovative websites and mobile apps that drive business
            growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <motion.section
        className="py-20 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to bring your digital vision to life
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 bg-gray-100 overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Development Process
            </h2>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {[
              { title: "Analysis", icon: "📊" },
              { title: "UI/UX Design", icon: "🎨" },
              { title: "Development", icon: "💻" },
              { title: "Testing", icon: "🧪" },
              { title: "Deployment", icon: "🚀" },
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Circle */}
                <motion.div
                  variants={fadeUp}
                  className="w-44 h-44 rounded-full bg-white shadow-xl border-4 border-blue-500 flex flex-col items-center justify-center text-center p-6 transition-all duration-500 hover:scale-105"
                >
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </motion.div>

                {/* Arrow (Desktop Only) */}
                {index !== 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-16 transform -translate-y-1/2 text-4xl text-blue-400">
                    ➜
                  </div>
                )}

                {/* Arrow (Mobile Only) */}
                {index !== 4 && (
                  <div className="md:hidden text-3xl text-blue-400 my-6">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <StatsSection />

      {/* TECHNOLOGIES */}
      <motion.section
  className="py-24 bg-gradient-to-br from-[#FFFF] via-[#FFFF] to-[#FFFF] text-black"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="container mx-auto px-4 text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Introducing <span className="text-blue-500">Mobrib App</span>
    </h2>

    <p className=" text-lg max-w-3xl mx-auto">
      A complete school management solution built to simplify operations,
      enhance communication, and improve academic performance.
    </p>
  </div>

  {/* Animated Feature List */}
  <motion.div
    variants={containerVariants}
    className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
  >
    {[
      "Student Management",
      "Exam & Result System",
      "Attendance Tracking",
      "Real-Time Notifications",
      "Parent Communication",
      "Analytics Dashboard",
      "Secure Cloud Storage",
      "99.9% Uptime",
      "Mobile & Web Access",
    ].map((feature, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        whileHover={{ scale: 1.08 }}
        className="bg-[#000]/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
      >
        {feature}
      </motion.div>
    ))}
  </motion.div>
</motion.section>

      {/* PROCESS */}
      {/* <motion.section
        className="py-20 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-4xl font-bold mb-4 opacity-50">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-blue-100 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* WHY CHOOSE US */}
      <motion.section
        className="py-20 bg-gray-50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Expert team of developers and designers",
              "Proven track record of successful projects",
              "Agile development methodology",
              "Competitive pricing and timely delivery",
              "24/7 support and maintenance",
              "Cutting-edge technology stack",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* DEVELOPMENT PROCESS */}
     
    </div>
  );
}
