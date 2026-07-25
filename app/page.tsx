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
  { value: "580M+", label: "Geographic features served" },
  { value: "99.98%", label: "API uptime, trailing 12 months" },
  { value: "7cm", label: "Positional accuracy at survey grade" },
  { value: "46ms", label: "Median tile response, p50" },
];

const features = [
  {
    title: "Authoritative basemaps",
    body: "Vector and raster tiles rebuilt from the national survey on a continuous change-only pipeline. No stale geometry, no reprojection guesswork.",
  },
  {
    title: "Terrain and elevation",
    body: "Query height, slope, and viewshed against a 1m digital surface model. Streamed as tiles or resolved server-side for analysis workloads.",
  },
  {
    title: "Place and address graph",
    body: "Every building, street, and boundary linked by a stable identifier. Resolve an address to a footprint and its neighbours in a single call.",
  },
  {
    title: "Deterministic delivery",
    body: "Edge-cached across regions with signed, versioned responses. What you tested in staging is byte-for-byte what ships to production.",
  },
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
              The mapped world, served as an API your team can build on.
            </h1>
            <p className="lead">
              Ordnance Survey Cloud puts authoritative tiles, terrain, and place
              data behind one resilient endpoint. Ship location features without
              standing up a survey division.
            </p>
            <div className="hero-actions">
              <Link href="/start" className="btn-primary">
                Get an API key
              </Link>
              <Link href="/docs" className="btn-secondary">
                Read the docs
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
          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.06,
                }}
              >
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__body">{feature.body}</p>
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
              We replaced three internal mapping services with one Ordnance
              Survey Cloud key. Our location stack went from a standing team to a
              line in the billing report.
            </blockquote>
            <figcaption className="quote__cite">
              <span className="quote__name">Priya Nandakumar</span>
              <span className="mono quote__role">
                Principal Engineer, Meridian Logistics
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
