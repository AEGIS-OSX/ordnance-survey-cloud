"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectImage } from "@/app/components/ProjectImage";

export const metadata = {
  title: "Ordnance Survey Cloud — Geospatial infrastructure for the mapped world",
  description:
    "Serve authoritative location data at national scale. Ordnance Survey Cloud gives engineering teams tiles, terrain, and place data through one resilient API.",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const dataStrip = [
  { value: "99.9%", label: "Contractual uptime guarantees with penalty credits." },
  { value: "Sub-50ms", label: "Global edge delivery via distributed CDN nodes." },
  { value: "ISO 27001", label: "Institutional-grade security and data governance." },
];

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
              High-precision vector and raster tiles for logistics infrastructure. 99.9% uptime SLA.
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
            <ProjectImage
              src="/images/hero-map.jpg"
              alt="National basemap rendered as vector tiles across a coastal region"
            />
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
            {/* Feature 01: Infrastructure Reliability */}
            <motion.article
              className="feature-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0 }}
            >
              <div className="feature-row__text">
                <h3 className="feature-row__title">Built for logistics uptime.</h3>
                <p className="feature-row__body">Routing engines and driver applications require constant tile availability. Ordnance Survey Cloud provides a redundant infrastructure layer designed to eliminate single points of failure in the mapping stack.</p>
                <p className="feature-row__data mono">100% historical uptime across all production clusters in Q2 2026.</p>
              </div>
              <div className="feature-row__media">
                <ProjectImage id="feature-infrastructure" alt="Infrastructure Reliability" />
              </div>
            </motion.article>

            {/* Feature 02: Cartographic Precision — image LEFT, text RIGHT */}
            <motion.article
              className="feature-row feature-row--reverse"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            >
              <div className="feature-row__media">
                <ProjectImage id="feature-cartographic" alt="Cartographic Precision" />
              </div>
              <div className="feature-row__text">
                <h3 className="feature-row__title">Accuracy at every zoom level.</h3>
                <p className="feature-row__body">Derived from centuries of cartographic heritage, our tiles maintain geometric integrity from global overviews to street-level detail. Optimized for high-density urban routing and complex terrain navigation.</p>
                <p className="feature-row__data mono">Weekly global dataset refreshes.</p>
              </div>
            </motion.article>

            {/* Feature 03: Integration Readiness */}
            <motion.article
              className="feature-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            >
              <div className="feature-row__text">
                <h3 className="feature-row__title">Compatible with existing stacks.</h3>
                <p className="feature-row__body">Deploy via standard XYZ tile protocols. Native support for Leaflet, Mapbox GL, and OpenLayers ensures minimal migration overhead for established logistics platforms.</p>
                <p className="feature-row__data mono">RESTful API with comprehensive OpenAPI documentation.</p>
              </div>
              <div className="feature-row__media">
                <ProjectImage id="feature-integration" alt="Integration Readiness" />
              </div>
            </motion.article>
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
              Ordnance Survey Cloud provides the technical stability required for our fleet&apos;s routing operations. The latency benchmarks are consistent across all territories.
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
              Start with the mapped world already loaded.
            </h2>
            <p className="lead">
              Provision a key, call the tile endpoint, and see authoritative data
              in your app before the coffee cools. No sales call required.
            </p>
            <div className="hero-actions">
              <Link href="/start" className="btn-primary">
                Get an API key
              </Link>
              <Link href="/pricing" className="btn-secondary">
                See pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
