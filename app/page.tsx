"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectImage } from "@/app/components/ProjectImage";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const dataStrip = [
  { value: "99.9%", label: "Contractual uptime guarantees with penalty credits." },
  { value: "Sub-50ms", label: "Global edge delivery via distributed CDN nodes." },
  { value: "ISO 27001", label: "Institutional-grade security and data governance." },
];

const features = [
  {
    id: "feature_1",
    eyebrow: "Infrastructure Reliability",
    title: "Built for logistics uptime.",
    body: "Routing engines and driver applications require constant tile availability. Ordnance Survey Cloud provides a redundant infrastructure layer designed to eliminate single points of failure in the mapping stack.",
    dataPoint: "100% historical uptime across all production clusters in Q2 2026.",
    reverse: true,
  },
  {
    id: "feature_2",
    eyebrow: "Cartographic Precision",
    title: "Accuracy at every zoom level.",
    body: "Derived from centuries of cartographic heritage, our tiles maintain geometric integrity from global overviews to street-level detail. Optimized for high-density urban routing and complex terrain navigation.",
    dataPoint: "Weekly global dataset refreshes.",
    reverse: false,
  },
  {
    id: "feature_3",
    eyebrow: "Integration Readiness",
    title: "Compatible with existing stacks.",
    body: "Deploy via standard XYZ tile protocols. Native support for Leaflet, Mapbox GL, and OpenLayers ensures minimal migration overhead for established logistics platforms.",
    dataPoint: "RESTful API with comprehensive OpenAPI documentation.",
    reverse: true,
  },
] as const;

export default function Home() {
  return (
    <main id="top">
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label">Geospatial cloud infrastructure</p>
            <h1 className="display">
              Precision mapping at the speed of logistics
            </h1>
            <p className="lead">
              High-precision vector and raster tiles for logistics
              infrastructure. 99.9% uptime SLA.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Request API access
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View pricing
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="hero-media"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <ProjectImage id="hero" />
          </motion.div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Platform metrics">
        <div className="container">
          <dl className="data-strip">
            {dataStrip.map((item) => (
              <motion.div
                key={item.label}
                className="data-strip__item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <dt className="mono data-strip__value">{item.value}</dt>
                <dd className="data-strip__label">{item.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-label="Platform capabilities">
        <div className="container">
          <p className="label">What you get</p>
          <h2 className="display display--sm">
            One platform for every location question.
          </h2>
          <div className="feature-list">
            {features.map((feature, index) => (
              <motion.article
                key={feature.id}
                className={`feature-row flex flex-col md:flex-row ${
                  feature.reverse ? "md:flex-row-reverse" : ""
                } items-center gap-8`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.06,
                }}
              >
                <div className="feature-row__media w-full md:w-1/2">
                  <ProjectImage id={feature.id} />
                </div>
                <div className="feature-row__content w-full md:w-1/2">
                  <p className="label">{feature.eyebrow}</p>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__body">{feature.body}</p>
                  <p className="mono feature-row__data">{feature.dataPoint}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Customer perspective">
        <div className="container">
          <motion.figure
            className="quote"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="quote__text">
              Ordnance Survey Cloud provides the technical stability required
              for our fleet's routing operations. The latency benchmarks are
              consistent across all territories.
            </blockquote>
            <figcaption className="quote__cite">
              <span className="mono quote__role">
                Network Infrastructure Lead, Yodel
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="section section--cta" aria-label="Get started">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="display display--sm">
              Secure your mapping infrastructure.
            </h2>
            <p className="lead">
              Evaluate our global tile coverage and performance in a sandbox
              environment.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Request API access
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
