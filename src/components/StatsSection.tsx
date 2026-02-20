import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* ================= COUNTER COMPONENT ================= */

interface CounterProps {
  from?: number;
  to: number;
  duration?: number; // in seconds
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
}) => {
  const [count, setCount] = useState<number>(from);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const startValue = from;
    const endValue = to;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = (currentTime - startTime) / (duration * 1000);
      const percentage = Math.min(progress, 1);

      const currentValue =
        startValue + (endValue - startValue) * percentage;

      if (Number.isInteger(to)) {
        setCount(Math.floor(currentValue));
      } else {
        setCount(Number(currentValue.toFixed(1)));
      }

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return (
    <motion.span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

/* ================= STATS SECTION ================= */

interface StatItem {
  value: number;
  suffix?: string;
  title: string;
  subtitle: string;
}

const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      value: 650,
      suffix: "+",
      title: "Partner Schools",
      subtitle: "Schools Onboarded",
    },
    {
      value: 500,
      suffix: "K+",
      title: "Student Profiles",
      subtitle: "Total Students Managed",
    },
    {
      value: 75000,
      suffix: "+",
      title: "Exams Generated",
      subtitle: "Question Papers Created",
    },
    {
      value: 99.9,
      suffix: "%",
      title: "Uptime",
      subtitle: "System Reliability",
    },
    {
      value: 5,
      suffix: "+",
      title: "Years Serving",
      subtitle: "5 Years Plus",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#8C6CFE] to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <div className="mb-16">
          <span className="inline-block px-6 py-2 bg-blue-800 rounded-full text-sm font-medium mb-6">
            Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Numbers That <span className="text-green-400">Speak</span>
          </h2>

          <p className="text-blue-100 text-lg">
            Trusted by schools across India to deliver excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-4xl font-bold text-blue-500 mb-3">
                <Counter
                  from={0}
                  to={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                />
              </h3>

              <p className="text-lg font-semibold">{stat.title}</p>
              <p className="text-gray-500 text-sm">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;